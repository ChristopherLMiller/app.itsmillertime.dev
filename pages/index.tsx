import PageLayout from 'src/layout/PageLayout';
import Card from 'src/components/Card';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/client';

const title = `Home`;
const description = `Programmer.  Amateur Designer.  Model Enthsiast.`;

const IndexPage: NextPage = () => {
  const [session] = useSession();
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
              width: 800,
              height: 600,
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977750/clm-new/uploads/default_fb95099398.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        }}
      />
      <Card heading="Welcome" align="left">
        <p>Hello, {session?.user ? session?.user?.username : `Guest`}</p>
        <p>
          Please excuse the mess while I'm remodeling. Many great things are in
          progress and will appear here as they are built.
        </p>

        <p>
          If you want to enjoy what I have to offer so far though go ahead and
          have a look around as I've got many pieces in place, nothing compared
          to what I have to go yet though.
        </p>

        <p>
          If you find any errors or problems you can submit an issue on GitHub,
          or reach me at one of the other places in the sidebar on the left.
        </p>

        {!session?.user ? (
          <Link href="/account/login">
            <a>Login</a>
          </Link>
        ) : (
          <div>
            <a onClick={() => signOut()}>Sign Out</a>
            {` | `}
            <Link href="/account/my-account">My Account</Link>
          </div>
        )}
      </Card>
    </PageLayout>
  );
};

export default IndexPage;
