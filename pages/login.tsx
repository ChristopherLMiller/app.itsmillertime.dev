import { useAuth } from "src/lib/AuthProvider";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginPage = () => {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Formik
      initialValues={{ identifier: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        const result = auth.methods.login(values.identifier, values.password);
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
  );
};

export default LoginPage;
