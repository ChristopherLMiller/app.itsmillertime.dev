import { motion } from "framer-motion";
import { FC } from "react";
import useDynamicContent from "src/lib/context/dynamicContent";
import styled from "styled-components";

export interface tag {
  title: string;
  slug: string;
  id: number;
}
interface TagsListTypes {
  tags: [tag];
}

interface TagTypes {
  color: string;
  background: string;
}
const TagItem = styled(motion.li)<TagTypes>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

const TagsList: FC<TagsListTypes> = ({ tags }) => {
  const { tag, setTag } = useDynamicContent();

  return (
    <ul>
      {tags.map((tagItem) => (
        <TagItem
          key={tagItem.id}
          background={tag === tagItem.slug ? "var(--color-gold)" : "none"}
          color={tag === tagItem.slug ? "var(--color-white-80)" : "none"}
        >
          <a type="button" onClick={() => setTag(tagItem.slug)}>
            {tagItem.title}
          </a>
        </TagItem>
      ))}
    </ul>
  );
};

export { TagsList };
