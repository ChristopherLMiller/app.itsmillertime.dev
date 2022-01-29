import Caret from "@components/Caret";
import Link from "next/link";
import { FC, Fragment, useState } from "react";
import { iNavItem } from ".";
import {
  ChildMenu,
  ChildMenuItem,
  ChildMenuItemLink,
  ChildNavManu,
  ChildNavMenuVariants,
  NavigationElement,
  NavigationElementIcon,
  NavigationElementText,
  NavigationElementVariants,
} from "./styles";

const ChildNavItem: FC<iNavItem> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Fragment>
      <NavigationElement
        variants={NavigationElementVariants}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {false && (
          <NavigationElementIcon
            src={`/svg/${item.icon}.svg`}
            alt={`${item.title} Page Link`}
            loading="lazy"
            width="35px"
            height="35px"
          />
        )}
        <NavigationElementText>{item.title}</NavigationElementText>
        <Caret initialDirection="up" direction={isExpanded ? "up" : "down"} />
      </NavigationElement>
      {isExpanded && (
        <ChildNavManu
          variants={ChildNavMenuVariants}
          initial="hidden"
          animate={isExpanded ? "visible" : "hidden"}
        >
          <ChildMenu>
            {item.children.items.map((child) => (
              <ChildMenuItem key={child.title}>
                <Link href={child.href}>
                  <ChildMenuItemLink>{child.title}</ChildMenuItemLink>
                </Link>
              </ChildMenuItem>
            ))}
          </ChildMenu>
        </ChildNavManu>
      )}
    </Fragment>
  );
};

export default ChildNavItem;
