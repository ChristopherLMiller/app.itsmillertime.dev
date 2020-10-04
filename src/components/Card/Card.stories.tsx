import Card from ".";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  heading: "Test Card",
  subHeading: "Subheading",
  children: "<p>Test</p>",
};
