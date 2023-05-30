import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

// import { Page } from './Page';
import { UserAccountNav as Page } from "@/components/user-account-nav"


const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {};


export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
      image: "https://avatars.githubusercontent.com/u/122881926?v=4",
      email: "johndoe@example.com",
    },

  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
