import { useToasts } from "react-toast-notifications";
import PageLayout from "src/layout/PageLayout";
import { NextSeo } from "next-seo";
import * as Yup from "yup";
import Panel from "src/components/Panel";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import {
  StyledForm,
  Fieldset,
  Label,
  FormErrorMessage,
} from "src/components/inputs";
import Button from "src/components/inputs/Button";
import styled from "styled-components";

const title = `Contact Me`;
const description = `Reach me with any needs`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: auto;

  @media (max-width: 1100px) {
    & > div:first-child {
      border-bottom: 1px solid var(--color-red-intermediate);
    }
  }
  @media (min-width: 1100px) {
    & > div:first-child {
      border-right: 1px solid var(--color-red-intermediate);
    }
    & > div:last-child {
      padding-left: 5%;
    }
  }
  @media (min-width: 1100px) {
    grid-template-columns: auto 700px;
  }
`;

const ContactColumn = styled.div`
  padding: 3% 5%;

  a {
    color: var(--color-red-dark);
    text-decoration: underline;

    :hover {
      color: var(--color-red-intermediate);
    }
  }

  h4,
  h5,
  h6 {
    font-family: var(--font-alt);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

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
  }
`;

const StyledContactFormFullWidth = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 3;
  border: none;
  padding: 0;
`;

const ContactFormEmailList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  a {
    color: var(--main-color);
  }
`;

const ContactValidation = Yup.object().shape({
  email: Yup.string()
    .email(`I need a valid email to reach you at`)
    .required(`Best Contact Email?`),
  name: Yup.string().required(`What is your name?`),
  message: Yup.string().required(`What do you need help with?`),
});

const ContactPage = () => {
  const { addToast } = useToasts();

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Default Site Image`,
              width: 4912,
              height: 3264,
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977871/clm-new/uploads/privacy_4f8775a22c.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact-me`,
        }}
      />
      <Panel padding={false}>
      >
        <ContactGrid>
          <ContactColumn>
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
              {({ isSubmitting, isValid, dirty }) => (
                <Form>
                  <StyledForm>
                    <StyledContactForm>
                      <Fieldset>
                        <Label htmlFor="name">Name:{` `}</Label>
                        <Field type="text" name="name" />
                        <FormErrorMessage>
                          <ErrorMessage name="name" component="span" />
                        </FormErrorMessage>
                      </Fieldset>
                      <Fieldset>
                        <Label htmlFor="email">Email:{` `}</Label>
                        <Field type="text" name="email" />
                        <FormErrorMessage>
                          <ErrorMessage name="email" component="span" />
                        </FormErrorMessage>
                      </Fieldset>

                      <StyledContactFormFullWidth>
                        <Label htmlFor="message">Message:</Label>
                        <Field component="textarea" name="message" rows="5" />
                        <FormErrorMessage>
                          <ErrorMessage name="message" component="span" />
                        </FormErrorMessage>
                      </StyledContactFormFullWidth>
                    </StyledContactForm>
                    <Button
                      type="submit"
                      isDisabled={!(isValid && dirty)}
                      aria-disabled={isSubmitting}
                    >
                      Send It!
                    </Button>
                  </StyledForm>
                </Form>
              )}
            </Formik>
          </ContactColumn>
          <ContactColumn>
            <h4>Send me a message</h4>
            <p>
              Got a question? Looking for some work to be done? I'd love to hear
              from you. Send me a message and I'll reply as soon as possible.
            </p>
            <h4>Alternate Emails</h4>
            <ContactFormEmailList>
              <li>
                <a
                  href="mailto:info@christopherleemiller.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@christopherleemiller.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:social@christopherleemiller.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Social Media
                </a>
              </li>
            </ContactFormEmailList>
            <h4>Phone</h4>
            <p>
              <a
                href="tel:+15743291494"
                target="_blank"
                rel="noopener noreferrer"
              >
                +1 (574) 329-1494
              </a>
            </p>
          </ContactColumn>
        </ContactGrid>
      </Panel>
    </PageLayout>
  );
};

export default ContactPage;
