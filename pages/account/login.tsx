import { useAuth } from "src/lib/AuthProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { Grid } from "src/components/Grid";
import * as Yup from "yup";
import Button from "src/components/inputs/Button";
import {
  StyledForm,
  Fieldset,
  Label,
  FormErrorMessage,
} from "src/components/inputs";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";
import { motion } from "framer-motion";

const LoginPane = styled(motion.div)`
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Resetpane = styled(motion.div)`
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const loginPaneVariants = {
  login: {
    opacity: 1,
  },
  reset: {
    opacity: 9,
  },
};

const FormValidation = Yup.object().shape({
  identifier: Yup.string().required("Please enter your username or email"),
  password: Yup.string().required("We need your password please"),
});

const ForgotFormValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Need the email address to reset password"),
});

const TextPane = styled(motion.div)`
  display: flex;
  align-items: center;
  position: absolute;
  width: 50%;
  left: 0;
  top: 0;
  background: var(--color-red-intermediate);
  height: 100%;
  padding: 3% 5%;

  p,
  h3,
  a {
    color: var(--color-white);
    font-weight: 100;
  }

  h3 {
    font-family: var(--font-block);
    font-size: var(--h2-responsive);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
  }
`;

const PanelLink = styled.a`
  cursor: pointer;
  color: var(--color-white) !important;
  text-decoration: underline;
`;

const TextPaneVariants = {
  login: {
    transform: "translateX(100%)",
    transition: {
      duration: "0.25",
    },
  },
  reset: {
    transform: "translateX(0%)",
    transition: {
      duration: ".25",
    },
  },
};

const LoginPage = () => {
  const [paneState, setPaneState] = useState("login");
  const auth = useAuth();
  const { addToast } = useToasts();

  return (
    <PageLayout
      meta={{
        title: "Login",
        description: "Access your account",
        useSEO: true,
      }}
    >
      <Card padding={false}>
        <TextPane
          initial="login"
          animate={paneState}
          variants={TextPaneVariants}
        >
          {paneState === "login" && (
            <div>
              <h3>Login</h3>
              <p>Please enter your login details to gain access to the site</p>
              <p>
                <PanelLink
                  onClick={(event) => {
                    event.preventDefault();
                    setPaneState("reset");
                  }}
                >
                  Forgot your password?
                </PanelLink>
              </p>
            </div>
          )}
          {paneState === "reset" && (
            <div>
              <h3>Forgot your password?</h3>
              <p>
                No problem! Enter your email below and a password reset email
                will be sent to you.
              </p>
              <PanelLink
                onClick={(event) => {
                  event.preventDefault();
                  setPaneState("login");
                }}
              >
                Login instead?
              </PanelLink>
            </div>
          )}
        </TextPane>
        <Grid columns={3}>
          <LoginPane
            initial="login"
            variants={loginPaneVariants}
            animate={paneState}
          >
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
          </LoginPane>
          <Resetpane>
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
              {({ isSubmitting, isValid, dirty }) => (
                <Form>
                  <StyledForm>
                    <Fieldset>
                      <Label htmlFor="email">Email:</Label>
                      <Field type="email" name="email" />
                      <FormErrorMessage>
                        <ErrorMessage name="email" component="div" />
                      </FormErrorMessage>
                    </Fieldset>
                    <Button
                      type="submit"
                      isDisabled={!(isValid && dirty)}
                      isSubmitting={isSubmitting}
                    >
                      Reset Password
                    </Button>
                  </StyledForm>
                </Form>
              )}
            </Formik>
          </Resetpane>
        </Grid>
      </Card>
    </PageLayout>
  );
};

export default LoginPage;
