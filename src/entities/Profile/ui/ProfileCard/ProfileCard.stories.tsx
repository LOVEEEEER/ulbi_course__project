import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";
import avatar from "shared/assets/tests/storybook.jpg";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: "admin",
    age: 18,
    country: Country.Russia,
    city: "Khabarovsk",
    currency: Currency.RUB,
    first: "Nikita",
    lastName: "Demyanenko",
    avatar,
  }
};

export const withError = Template.bind({})
withError.args = {
  error: "123",
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}