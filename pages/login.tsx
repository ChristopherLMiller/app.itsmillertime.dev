import { useAuth } from "src/lib/AuthProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { Grid } from "src/components/Grid";
import * as Yup from "yup";
import { Button } from "src/components/inputs/Button";
import {
  StyledForm,
  Fieldset,
  Label,
  FormErrorMessage,
} from "src/components/inputs";
import { STATUS } from "config";

const FormValidation = Yup.object().shape({
  identifier: Yup.string().required("Please enter your username or email"),
  password: Yup.string().required("We need your password please"),
});

const LoginPage = () => {
  const auth = useAuth();

  return (
    <PageLayout
      meta={{
        title: "Login",
        description: "Access your account",
        useSEO: false,
      }}
    >
      <Card>
        <Grid columns={2} gap="30px">
          <Formik
            initialValues={{ identifier: "", password: "" }}
            onSubmit={async (values, { setSubmitting }) => {
              const result = await auth.methods.login(
                values.identifier,
                values.password
              );

              console.log(result);
              if (result.status === STATUS.FAIL) {
                // todo: REACT TOAST
                alert(result.message);
              }
              setSubmitting(false);
            }}
            validationSchema={FormValidation}
          >
            {({ isSubmitting }) => (
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
                  <Button type="submit" disabled={isSubmitting}>
                    Login
                  </Button>
                </StyledForm>
              </Form>
            )}
          </Formik>
          <div>
            <h4>Forgot your password?</h4>
            <p>
              No problem! Enter your email below and a password reset email will
              be sent to you.
            </p>
          </div>
        </Grid>
      </Card>
    </PageLayout>
  );
};

export default LoginPage;
