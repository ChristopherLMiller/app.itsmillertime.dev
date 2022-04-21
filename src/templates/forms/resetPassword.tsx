import { ErrorMessage, Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";
import {
  Button,
  Fieldset,
  FormErrorMessage,
  Label,
  StyledForm,
} from "src/components/inputs";
import * as Yup from "yup";

const FormValidation = Yup.object().shape({
  password: Yup.string().required(`We need your password please`),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref(`password`), null], `Passwords must match`)
    .required(`We need your new password again`),
});
const ResetPasswordForm: FunctionComponent = () => {
  return (
    <Formik
      initialValues={{ password: ``, passwordConfirm: `` }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        setSubmitting(false);
      }}
      validationSchema={FormValidation}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <StyledForm>
            <Fieldset>
              <Label htmlFor="password">Password:</Label>
              <Field type="password" name="password" />
              <FormErrorMessage>
                <ErrorMessage name="password" component="div" />
              </FormErrorMessage>
            </Fieldset>
            <Fieldset>
              <Label htmlFor="passwordConfirm">Password Again:</Label>
              <Field type="password" name="passwordConfirm" />
              <FormErrorMessage>
                <ErrorMessage name="passwordConfirm" component="div" />
              </FormErrorMessage>
            </Fieldset>
            <Button
              isDisabled={!(isValid && dirty)}
              isSubmitting={isSubmitting}
            >
              Reset
            </Button>
          </StyledForm>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
