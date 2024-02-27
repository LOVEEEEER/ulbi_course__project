import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({ loginForm: { username: "123", password: "123" } })];
Primary.args = {};

export const withError = Template.bind({});
withError.decorators = [StoreDecorator({
    loginForm: { username: "123", password: "123", error: "ERROR" },
})];
withError.args = {};

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
