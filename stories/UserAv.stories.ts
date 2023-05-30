// import React from "react";
// // import { UserAccountNav } from "./UserAccountNav";


// export default {
//   title: "Components/UserAccountNav",
//   component: UserAccountNav,
// };

// const sampleUser = {
//   name: "John Doe",
//   image: "https://example.com/avatar.jpg",
//   email: "johndoe@example.com",
// };

// export const Default = () => <UserAccountNav user={sampleUser} />


import type { Meta, StoryObj } from '@storybook/react';
// import { Header } from './Header';
import { UserAccountNav } from "@/components/user-account-nav"


const meta: Meta<typeof UserAccountNav> = {
  title: "Components/UserAccountNav",
  component: UserAccountNav,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof UserAccountNav>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
      image: "https://example.com/avatar.jpg",
      email: "johndoe@example.com",
    },

  },
};

// export const LoggedOut: Story = {};
