import type { Meta, StoryObj } from '@storybook/angular';
import { HlmInputImports } from './index';

const meta: Meta = {
  title: 'Components/Input',
  parameters: {
    docs: {
      description: {
        component:
          'Text input directive with error variant (auto from control validity, or force true). Use hlmInput on input elements. Works with hlm-form-field for label, hint, and error.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmInputImports];

/**
 * Basic text input. Use with form controls or standalone.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <input hlmInput type="text" placeholder="Enter text..." class="max-w-sm" />
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Input types: text, email, password, number.
 */
export const InputTypes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 max-w-sm">
        <input hlmInput type="text" placeholder="Text" />
        <input hlmInput type="email" placeholder="Email" />
        <input hlmInput type="password" placeholder="Password" />
        <input hlmInput type="number" placeholder="Number" />
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Disabled and readonly states.
 */
export const States: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 max-w-sm">
        <input hlmInput placeholder="Disabled" disabled />
        <input hlmInput placeholder="Read only" readonly value="Cannot edit" />
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Error variant: force error styling with [error]="true". Use when not using form validation.
 */
export const ErrorVariant: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 max-w-sm">
        <input hlmInput placeholder="With error" [error]="true" />
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Placeholder and value. Error is usually driven by form control (error="auto").
 */
export const WithValue: Story = {
  render: () => ({
    template: `
      <input hlmInput placeholder="Placeholder" value="Pre-filled value" class="max-w-sm" />
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Multiple inputs in a layout.
 */
export const FormLayout: Story = {
  render: () => ({
    template: `
      <div class="space-y-4 max-w-sm">
        <div>
          <label class="mb-1.5 block text-sm font-medium">Name</label>
          <input hlmInput placeholder="Your name" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium">Email</label>
          <input hlmInput type="email" placeholder="you@example.com" />
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};
