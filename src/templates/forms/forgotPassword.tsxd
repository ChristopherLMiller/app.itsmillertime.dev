import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FunctionComponent, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import {
  Fieldset,
  FormErrorMessage,
  Label,
  StyledForm,
} from "src/components/inputs";
import Button from "src/components/inputs/Button";
import { useForgotPasswordMutation } from "src/graphql/schema/auth/forgotPassword.mutation.generated";
import { isDev } from "src/utils";
import * as Yup from "yup";

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
          const message = "unable to submit form successfully";
          console.error(`forgotPassword: ${message}`);
          addToast(message, { appearance: `error` });
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

            <Button
              isDisabled={!(isValid && dirty && (isDev() || token))}
              isSubmitting={isSubmitting}
              type="submit"
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
