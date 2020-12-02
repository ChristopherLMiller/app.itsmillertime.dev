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
import { useAuth } from 'src/lib/AuthProvider';

const ForgotFormValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Need the email address to reset password'),
});

const ForgotPasswordForm = () => {
  const { addToast } = useToasts();
  const auth = useAuth();

  return (
    <Formik
      initialValues={{ email: '' }}
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
              <Label htmlFor='email'>Email:</Label>
              <Field type='email' name='email' />
              <FormErrorMessage>
                <ErrorMessage name='email' component='div' />
              </FormErrorMessage>
            </Fieldset>
            <Button
              type='submit'
              isDisabled={!(isValid && dirty)}
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
