import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args: typeof Button) => ({
  component: Button,
  props: args,
});

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: "Disabled",
};
