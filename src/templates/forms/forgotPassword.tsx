import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'src/components/inputs/Button';
import {
  StyledForm,
  Fieldset,
  Label,
  FormErrorMessage,
} from 'src/components/inputs';
import * as Yup from 'yup';
import { AppearanceTypes, useToasts } from 'react-toast-notifications';
import { useAuth } from 'src/lib/AuthProvider';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { FunctionComponent, useRef, useState } from 'react';

const ForgotFormValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`Need the email address to reset password`),
});

const ForgotPasswordForm: FunctionComponent = () => {
  const { addToast } = useToasts();
  const [token, setToken] = useState(null);
  const captchaRef = useRef<HCaptcha>();
  const auth = useAuth();

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
        captchaRef?.current?.resetCaptcha();

        const result = await auth.methods.forgotPassword(values.email);

        addToast(result.message, {
          appearance: result.status as AppearanceTypes,
        });

        setSubmitting(false);
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
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
              onError={onError}
              onVerify={setToken}
              onExpire={onExpire}
              ref={captchaRef}
            />
            <Button
              type="submit"
              isDisabled={!(isValid && dirty && token)}
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
