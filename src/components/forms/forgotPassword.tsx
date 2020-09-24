import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "src/components/inputs/Button";
import {
  StyledForm,
  Fieldset,
  Label,
  FormErrorMessage,
} from "src/components/inputs";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "src/lib/AuthProvider";
import { useRef, useState } from "react";

const ForgotFormValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Need the email address to reset password"),
});

const ForgotPasswordForm = () => {
  const { addToast } = useToasts();
  const [token, setToken] = useState(null);
  const auth = useAuth();
  const captchaRef = useRef(null);

  const onError = (err) => {
    console.log(`hCaptcha Error: ${err}`);
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const result = await auth.methods.forgotPassword(values.email);

        addToast(result.message, {
          appearance: result.status.toLowerCase(),
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
