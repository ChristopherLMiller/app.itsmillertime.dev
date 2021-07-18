import {
  FacebookShareButton,
  RedditShareButton,
  FacebookIcon,
  RedditIcon,
  PinterestIcon,
  PinterestShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShareButtonWrapper = styled(motion.div)`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 50%;
    transform: translate3D(0, -50%, 0);
  }
`;

const ShareButtonVariants = {
  hidden: {
    opacity: 0,
    translateX: `-60px`,
  },
  visible: {
    opacity: 1,
    translateX: `0px`,
    transition: {
      delay: 2,
    },
  },
};

const ShareButtons = ({ url, media, title }) => (
  <ShareButtonWrapper
    variants={ShareButtonVariants}
    initial="hidden"
    animate="visible"
  >
    <FacebookShareButton url={url} title={title}>
      <FacebookIcon size={50} round={false} />
    </FacebookShareButton>
    <PinterestShareButton url={url} title={title} media={media}>
      <PinterestIcon size={50} round={false} />
    </PinterestShareButton>
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={50} round={false} />
    </TwitterShareButton>
    <RedditShareButton url={url} title={title}>
      <RedditIcon size={50} round={false} />
    </RedditShareButton>
  </ShareButtonWrapper>
);

export default ShareButtons;
