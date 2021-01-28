import {
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
  SITE_DEFAULT_IMAGE_FILE,
} from 'config';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Card from 'src/components/Card';
import { ForgotPasswordForm } from 'src/templates/forms';
import { Grid } from 'src/components/Grid';
import PageLayout from 'src/layout/PageLayout';
import styled from 'styled-components';
import { NextPage } from 'next';

const title = `Forgot Password?`;
const description = `How could you forget your password?`;

const PanelLink = styled.a`
  cursor: pointer;
  color: var(--color-white-100) !important;
  text-decoration: underline;
`;

const TextPane = styled.div`
  align-items: center;
  background: var(--color-red-intermediate);
  padding: 3% 5%;

  p,
  h3,
  a {
    color: var(--color-white-100);
    font-weight: 100;
  }

  h3 {
    font-family: var(--font-block);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
  }
`;

const ResetPane = styled.div`
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ForgotPasswordPage: NextPage = () => (
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
            url: `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto,/v1594740865/${SITE_DEFAULT_IMAGE_FILE}.jpg`,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/forgot-password',`,
      }}
    />
    <Card padding={false}>
      <Grid columns={2}>
        <TextPane>
          <h3>Forgot your password?</h3>
          <p>
            No problem! Enter your email and an email will be sent to you with
            instructions to reset it.
          </p>
          <Link href="/account/login">
            <PanelLink>Login instead?</PanelLink>
          </Link>
        </TextPane>
        <ResetPane>
          <ForgotPasswordForm />
        </ResetPane>
      </Grid>
    </Card>
  </PageLayout>
);

export default ForgotPasswordPage;
