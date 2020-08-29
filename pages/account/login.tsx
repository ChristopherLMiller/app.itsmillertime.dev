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
import { useToasts } from "react-toast-notifications";

const FormValidation = Yup.object().shape({
  identifier: Yup.string().required("Please enter your username or email"),
  password: Yup.string().required("We need your password please"),
});

const ForgotFormValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Need the email address to reset password"),
});

const LoginPage = () => {
  const auth = useAuth();
  const { addToast } = useToasts();

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
              {({ isSubmitting }) => (
                <Form>
                  <StyledForm>
                    <Fieldset>
                      <Label htmlFor="email">Email:</Label>
                      <Field type="email" name="email" />
                      <FormErrorMessage>
                        <ErrorMessage name="email" component="div" />
                      </FormErrorMessage>
                    </Fieldset>
                    <Button type="submit" disabled={isSubmitting}>
                      Reset Password
                    </Button>
                  </StyledForm>
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
      </Card>
    </PageLayout>
  );
};

export default LoginPage;
