import { useAuth } from "src/lib/AuthProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PageLayout from "src/layout/PageLayout";

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
      <Formik
        initialValues={{ identifier: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          const result = auth.methods.login(values.identifier, values.password);
          alert(result.message);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="identifier" />
            <ErrorMessage name="identifier" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </PageLayout>
  );
};

export default LoginPage;
