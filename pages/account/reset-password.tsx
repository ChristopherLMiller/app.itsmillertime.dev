import { useAuth } from 'src/lib/AuthProvider';
import PageLayout from 'src/layout/PageLayout';
import { Formik, Form, ErrorMessage, yupToFormErrors, Field } from 'formik';
import {
  Fieldset,
  Label,
  FormErrorMessage,
  Button,
  StyledForm,
} from 'src/components/inputs';
import {
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
} from 'config';
import * as Yup from 'yup';
import Card from 'src/components/Card';
import { Grid } from 'src/components/Grid';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';

const FormValidation = Yup.object().shape({
  password: Yup.string().required(`We need your password please`),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref(`password`), null], `Passwords must match`)
    .required(`We need your new password again`),
});

const title = `Reset Password`;
const description = `Recever your account, reset your password now`;

const ResetPasswordPage: NextPage = () => {
  const auth = useAuth();
  const router = useRouter();
  const { addToast } = useToasts();

  const code = router.query[`code`] as string;

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        nofollow={true}
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Default Site Image`,
              width: 800,
              height: 600,
              url: `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto/v1594740865/${SITE_DEFAULT_IMAGE_FILE}.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/reset-password`,
        }}
      />
      <Card>
        <Grid columns={2} gap="30px">
          <Formik
            initialValues={{ password: ``, passwordConfirm: `` }}
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
