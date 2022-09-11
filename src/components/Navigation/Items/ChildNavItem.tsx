import Caret from "@components/Caret";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useState } from "react";
import { filterNavigation } from "src/utils";
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
  const router = useRouter();

  const session = useSession();
  const [isExpanded, setIsExpanded] = useState(false);

  // hook to monitor route changes
  useEffect(() => {
    const routeChange = () => {
      setIsExpanded(false);
    };
    router.events.on("routeChangeStart", routeChange);

    return () => {
      router.events.off("routeChangeComplete", routeChange);
    };
  }, [router]);

  // hook to auto close the menu after x seconds
  useEffect(() => {
    if (isExpanded) {
      const timeout = setTimeout(() => setIsExpanded(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isExpanded]);
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
            {filterNavigation(item?.children?.items, session).map(
              (child, index) => (
                <ChildMenuItem key={`${child.title}${index}`}>
                  <Link href={child.href} passHref>
                    <ChildMenuItemLink>{child.title}</ChildMenuItemLink>
                  </Link>
                </ChildMenuItem>
              )
            )}
          </ChildMenu>
        </ChildNavManu>
      )}
    </Fragment>
  );
};

export default ChildNavItem;
