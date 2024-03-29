import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useToasts } from "react-toast-notifications";
import { z } from "zod";

const FormValidation = z.object({
  username: z.string(),
  password: z.string(),
});

const LoginForm: FunctionComponent = () => {
  const { addToast } = useToasts();
  const router = useRouter();

  return null;
  /*<Formik
      initialValues={{ username: ``, password: `` }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await signIn("credentials", {
          redirect: false,
          username: values.username,
          password: values.password,
        });
        console.log(response);
        if (response?.error) {
          addToast(`Unable to login: ${response.error}`, {
            appearance: `error`,
            placement: `bottom-right`,
          });
        } else if (response?.ok) {
          addToast(`Welcome back!  You've been logged in successfully`, {
            appearance: `success`,
          });
          router.push(`/`);
        }

        setSubmitting(false);
      }}
      validationSchema={FormValidation}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <StyledForm>
            <Fieldset>
              <Label htmlFor="username">Username or Email:</Label>
              <Field type="text" name="username" autoComplete="username" />
              <FormErrorMessage>
                <ErrorMessage name="username" component="div" />
              </FormErrorMessage>
            </Fieldset>
            <Fieldset>
              <Label htmlFor="password">Password:</Label>
              <Field type="password" name="password" autoComplete="password" />
              <FormErrorMessage>
                <ErrorMessage name="password" component="div" />
              </FormErrorMessage>
            </Fieldset>
            <Button
              isDisabled={!(isValid && dirty)}
              isSubmitting={isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </StyledForm>
        </Form>
      )}
    </Formik>
  );*/
};

export default LoginForm;
