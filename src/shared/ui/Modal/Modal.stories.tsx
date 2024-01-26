import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Libero cumque nisi saepe, quis eveniet veritatis nemo. Sint omnis vitae qui, praesentium iste aperiam alias ducimus fugit quis molestiae quas dolorem.",
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Libero cumque nisi saepe, quis eveniet veritatis nemo. Sint omnis vitae qui, praesentium iste aperiam alias ducimus fugit quis molestiae quas dolorem.",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
