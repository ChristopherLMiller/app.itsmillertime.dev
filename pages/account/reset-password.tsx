import { useAuth } from "src/lib/AuthProvider";
import PageLayout from "src/layout/PageLayout";
import { Formik, Form, ErrorMessage, yupToFormErrors, Field } from "formik";
import {
  Fieldset,
  Label,
  FormErrorMessage,
  Button,
  StyledForm,
} from "src/components/inputs";
import * as Yup from "yup";
import Card from "src/components/Card";
import { Grid } from "src/components/Grid";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

const FormValidation = Yup.object().shape({
  password: Yup.string().required("We need your password please"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("We need your new password again"),
});

const ResetPasswordPage = () => {
  const auth = useAuth();
  const router = useRouter();
  const { addToast } = useToasts();

  const code = router.query["code"] as string;

  return (
    <PageLayout
      meta={{
        title: "Reset Password",
        useSEO: true,
        description: "Recover your account password now",
      }}
    >
      <Card>
        <Grid columns={2} gap="30px">
          <Formik
            initialValues={{ password: "", passwordConfirm: "" }}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              const result = await auth.methods.resetPassword(
                values.password,
                code
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
                    type="submit"
                    isDisabled={isSubmitting}
                    isSubmitting={isSubmitting}
                  >
                    Reset
                  </Button>
                </StyledForm>
              </Form>
            )}
          </Formik>
          <div>
            <h4>Reset your password</h4>
            <p>
              While I have no requirements for password complexity or length
              it's on you if your account gets hacked.
            </p>
          </div>
        </Grid>
      </Card>
    </PageLayout>
  );
};

export default ResetPasswordPage;
