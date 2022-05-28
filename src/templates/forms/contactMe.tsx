import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useToasts } from "react-toast-notifications";
import { Fieldset, FormErrorMessage, StyledForm } from "src/components/inputs";
import Button from "src/components/inputs/Button";
import styled from "styled-components";
import * as Yup from "yup";

const ContactValidation = Yup.object().shape({
  email: Yup.string()
    .email(`I need a valid email to reach you at`)
    .required(`Best Contact Email?`),
  name: Yup.string().required(`What is your name?`),
  message: Yup.string().required(`What do you need help with?`),
});

const StyledContactForm = styled.div`
  display: grid;
  grid-template-columns: repeat(50%, 2);
  input,
  textarea {
    width: 100%;
    padding: 5px;
    display: block;
    font-family: var(--font-main);
    font-weight: 300;
    line-height: initial;
    border: 2px solid var(--color-red);
  }
`;

const StyledContactFormFullWidth = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 3;
  border: none;
  padding: 0;
`;

const ContactMeForm = () => {
  const { addToast } = useToasts();
  // TODO: verify this is sending
  return (
    <Formik
      initialValues={{ email: ``, name: ``, message: `` }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await fetch(`/api/send-email`, {
          body: JSON.stringify(values),
          method: `POST`,
        });
        const data = await response.json();
        if (response.status !== 200) {
          addToast(`Unable to send email`, { appearance: `error` });
          console.log(await response);
          setSubmitting(false);
        }

        console.log(data);
      }}
      validationSchema={ContactValidation}
    >
      {({ isSubmitting }) => (
        <Form>
          <StyledForm>
            <StyledContactForm>
              <Fieldset>
                <Field type="text" name="name" placeholder="Name" />
                <FormErrorMessage>
                  <ErrorMessage name="name" component="span" />
                </FormErrorMessage>
              </Fieldset>
              <Fieldset>
                <Field type="text" name="email" placeholder="Email" />
                <FormErrorMessage>
                  <ErrorMessage name="email" component="span" />
                </FormErrorMessage>
              </Fieldset>

              <StyledContactFormFullWidth>
                <Field
                  component="textarea"
                  name="message"
                  rows="5"
                  placeholder="Message"
                />
                <FormErrorMessage>
                  <ErrorMessage name="message" component="span" />
                </FormErrorMessage>
              </StyledContactFormFullWidth>
            </StyledContactForm>
            <Button type="submit" aria-disabled={isSubmitting}>
              Send It!
            </Button>
          </StyledForm>
        </Form>
      )}
    </Formik>
  );
};

export default ContactMeForm;
