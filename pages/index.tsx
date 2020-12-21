import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import {
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
} from "config";
import styled from "styled-components";

const title = "Home";
const description = "Programmer.  Amateur Designer.  Model Enthsiast.";

const ChristmasHeading = styled.h3`
  margin: 0;
  .red {
    color: red;
    font-size: 1.5em;
  }

  .green {
    color: green;
    font-size: 1.5em;
  }
`;

const IndexPage = () => {
  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: "website",
          images: [
            {
              alt: "Default Site Image",
              width: 800,
              height: 600,
              url: `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto/v1594740865/${SITE_DEFAULT_IMAGE_FILE}.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        }}
      />
      {false && (
        <Card heading="Welcome" align="left">
          <p>
            Please excuse the mess while I'm remodeling. Many great things are
            in progress and will appear here as they are built.
          </p>

          <p>
            If you want to enjoy what I have to offer so far though go ahead and
            have a look around as I've got many pieces in place, nothing
            compared to what I have to go yet though.
          </p>

          <p>
            If you find any errors or problems you can submit an issue on
            GitHub, or reach me at one of the other places in the sidebar on the
            left.
          </p>
          {process.env.NEXT_PUBLIC_SITE_URL === "http://localhost:6006" && (
            <div>
              <Link href="/account/login">
                <a>Login</a>
              </Link>
              <Link href="/account/logout">
                <a>Logout</a>
              </Link>
            </div>
          )}
        </Card>
      )}
      <Card padding={false}>
        <Image
          src="/christmas.jpg"
          layout="responsive"
          width="4000"
          height="2069"
        />
        <ChristmasHeading>
          <span className="red">M</span>
          <span className="green">e</span>
          <span className="red">r</span>
          <span className="green">r</span>
          <span className="red">y</span> <span className="green">C</span>
          <span className="red">h</span>
          <span className="green">r</span>
          <span className="red">i</span>
          <span className="green">s</span>
          <span className="red">t</span>
          <span className="green">m</span>
          <span className="red">a</span>
          <span className="green">s</span> <span className="red">A</span>
          <span className="green">l</span>
          <span className="red">l</span>
          <span className="green">!</span>
        </ChristmasHeading>
        <p>
          I hope everyone the most joyous of holiday seasons amidst all the
          craziness that is the year 2020.
        </p>
      </Card>
    </PageLayout>
  );
};

export default IndexPage;
