import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "src/components/inputs/Button";
import {
  StyledForm,
  Fieldset,
  Label,
  FormErrorMessage,
} from "src/components/inputs";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "src/lib/AuthProvider";

const FormValidation = Yup.object().shape({
  identifier: Yup.string().required("Please enter your username or email"),
  password: Yup.string().required("We need your password please"),
});

const LoginForm = () => {
  const { addToast } = useToasts();
  const auth = useAuth();

  return (
    <Formik
      initialValues={{ identifier: "", password: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const result = await auth.methods.login(
          values.identifier,
          values.password
        );

        addToast(result.message, {
          appearance: result.status.toLowerCase(),
        });

        setSubmitting(false);
      }}
      validationSchema={FormValidation}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <StyledForm>
            <Fieldset>
              <Label htmlFor="identifier">Username or Email:</Label>
              <Field type="text" name="identifier" />
              <FormErrorMessage>
                <ErrorMessage name="identifier" component="div" />
              </FormErrorMessage>
            </Fieldset>
            <Fieldset>
              <Label htmlFor="password">Password:</Label>
              <Field type="password" name="password" />
              <FormErrorMessage>
                <ErrorMessage name="password" component="div" />
              </FormErrorMessage>
            </Fieldset>
            <Button
              type="submit"
              isDisabled={!(isValid && dirty)}
              isSubmitting={isSubmitting}
            >
              Login
            </Button>
          </StyledForm>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
