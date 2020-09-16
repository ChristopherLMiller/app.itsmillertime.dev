import { GlobalStyles } from "../../../styles/default";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => (
  <>
    <Button {...args} />
    <GlobalStyles />
  </>
);

export const Normal = Template.bind({});

Normal.args = {
  children: "Button",
  isDisabled: false,
  isSubmitting: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  isDisabled: true,
  isSubmitting: false,
  children: "Disabled",
};

export const Submitting = Template.bind({});

Submitting.args = {
  isSubmitting: true,
  isDisabled: false,
  children: "Submitting",
};
