import type { Meta } from '@storybook/react';
import { UiComponentButton } from './ui-component-button';

const Story: Meta<typeof UiComponentButton> = {
  component: UiComponentButton,
  title: 'UiComponentButton',
};
export default Story;

export const Primary = {
  args: {},
};
