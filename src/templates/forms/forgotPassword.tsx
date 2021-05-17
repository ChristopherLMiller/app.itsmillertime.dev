import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'src/components/inputs/Button';
import {
  StyledForm,
  Fieldset,
  Label,
  FormErrorMessage,
} from 'src/components/inputs';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { FunctionComponent, useRef, useState } from 'react';
import { isDev } from 'src/utils/functions/isDev';
import { useForgotPasswordMutation } from 'src/utils/graphql/react-query/mutations/forgotPassword';
import { useRouter } from 'next/router';

const ForgotFormValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`Need the email address to reset password`),
});

const ForgotPasswordForm: FunctionComponent = () => {
  const router = useRouter();
  const mutation = useForgotPasswordMutation();
  const { addToast } = useToasts();
  const [token, setToken] = useState(null);
  const captchaRef = useRef<HCaptcha>();

  const onError = (err) => {
    console.error(`ForgotPasswordForm hCaptcha Error: ${err}`);
  };

  const onExpire = () => {
    console.log(`ForgotPasswordForm hCaptcha Token Expired`);
  };

  return (
    <Formik
      initialValues={{ email: `` }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        mutation.mutate({ email: values.email });

        if (mutation.isIdle) {
          addToast(`There is a bug, please submit the form again. Sorry`, {
            appearance: `info`,
          });
        }

        console.log(`executed mutation`);

        // if there is an error with this let the user know
        if (mutation.isError) {
          const message =
            mutation.error[`response`]?.errors[0]?.extensions?.exception?.data
              ?.message[0]?.messages[0];
          console.error(`forgotPassword: ${message.id}`);
          addToast(message.message, { appearance: `error` });
          setSubmitting(false);
        }

        // If it succeeds
        if (mutation.isSuccess) {
          addToast(
            `An email has been sent to your email with further instructions to reset your password`,
            { appearance: `success` }
          );
          setSubmitting(false);
          router.push(`/`);
        }

        // reset the hcaptcha field
        if (!isDev()) {
          captchaRef?.current?.resetCaptcha();
        }
      }}
      validationSchema={ForgotFormValidation}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <StyledForm>
            <Fieldset>
              <Label htmlFor="email">Email:</Label>
              <Field type="email" name="email" />
              <FormErrorMessage>
                <ErrorMessage name="email" component="div" />
              </FormErrorMessage>
            </Fieldset>
            {!isDev() && (
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
                onError={onError}
                onVerify={setToken}
                onExpire={onExpire}
                ref={captchaRef}
              />
            )}
            <Button
              type="submit"
              isDisabled={!(isValid && dirty && (isDev() || token))}
              isSubmitting={isSubmitting}
            >
              Reset Password
            </Button>
          </StyledForm>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
