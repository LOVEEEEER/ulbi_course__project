import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title lorem ipsum",
    text: "Description Description Description Description",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    title: "Title lorem ipsum",
    text: "Description Description Description Description",
};

export const Error = Template.bind({});
Error.args = {
    title: "Title lorem ipsum",
    text: "Description Description Description Description",
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: "Title lorem ipsum",
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
onlyTitleDark.args = {
    title: "Title lorem ipsum",
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: "Description Description Description Description",
};

export const onlyTextDark = Template.bind({});
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
onlyTextDark.args = {
    text: "Description Description Description Description",
};
