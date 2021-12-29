import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { ShareButtonVariants, ShareButtonWrapper } from "./styles";

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
