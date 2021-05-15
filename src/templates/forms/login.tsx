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
import { FunctionComponent } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

const FormValidation = Yup.object().shape({
  username: Yup.string().required(`Please enter your username or email`),
  password: Yup.string().required(`We need your password please`),
});

const LoginForm: FunctionComponent = () => {
  const { addToast } = useToasts();
  const router = useRouter();

  return (
    <Formik
      initialValues={{ username: ``, password: `` }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await signIn(`credentials`, {
          redirect: false,
          ...values,
        });
        if (response.error) {
          addToast(response.error, {
            appearance: `error`,
          });
        } else if (response.ok) {
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
              <Field type="text" name="username" />
              <FormErrorMessage>
                <ErrorMessage name="username" component="div" />
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
