import {
  NavigationElement,
  NavigationElementIcon,
  NavigationElementText,
  NavigationItemVariants,
  StyledNavigationItem,
} from "../NavigationItem/styles";

const ChildMenu = ({ item }) => {
  console.log(item);
  return (
    <StyledNavigationItem
      whileHover="hover"
      initial="hidden"
      animate="visible"
      variants={NavigationItemVariants}
      background={"var(--color-gold)"}
    >
      <NavigationElement>
        <NavigationElementIcon
          src={`/svg/${item.icon}.svg`}
          alt={`${item.title} Page Link`}
          loading="lazy"
          width="35px"
          height="35px"
        />
        <NavigationElementText>{item.title}</NavigationElementText>
      </NavigationElement>
    </StyledNavigationItem>
  );
};

export default ChildMenu;
