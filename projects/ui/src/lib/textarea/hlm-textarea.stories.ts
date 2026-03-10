import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTextarea } from './hlm-textarea';
import { HlmTextareaImports } from './index';

const meta: Meta<HlmTextarea> = {
  component: HlmTextarea,
  title: 'Components/Textarea',
  parameters: {
    docs: {
      description: {
        component:
          'Multi-line text input. Supports error variant (auto from form state, or true for always error). Use with forms; integrates with form field and error state.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmTextarea>;

const defaultImports = [HlmTextareaImports];

/**
 * Default textarea with placeholder.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <textarea
        hlmTextarea
        placeholder="Type your message here."
        rows="4"
      ></textarea>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * With visible label and hint.
 */
export const WithLabel: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-sm gap-2">
        <label class="text-sm font-medium">Description</label>
        <textarea
          hlmTextarea
          placeholder="Add a short description..."
          rows="3"
        ></textarea>
        <p class="text-muted-foreground text-xs">This will be shown on your profile.</p>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Error state (always show error styling). Use error="auto" with forms for touch/dirty validation.
 */
export const Error: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-sm gap-2">
        <label class="text-sm font-medium">Comment</label>
        <textarea
          hlmTextarea
          error="true"
          placeholder="Your comment"
          rows="3"
        ></textarea>
        <p class="text-destructive text-xs">This field is required.</p>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <textarea
        hlmTextarea
        disabled
        placeholder="Disabled"
        rows="3"
      >Pre-filled content</textarea>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Minimum height via rows; field-sizing:content allows growth.
 */
export const AutoResize: Story = {
  render: () => ({
    template: `
      <textarea
        hlmTextarea
        placeholder="Grows with content (min 4 lines)"
        rows="4"
      ></textarea>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * In a card or form section.
 */
export const InForm: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md space-y-4 rounded-lg border p-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Feedback</label>
          <textarea
            hlmTextarea
            placeholder="Tell us what you think..."
            rows="4"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button class="border-input inline-flex h-9 items-center rounded-md border px-4 text-sm font-medium">Submit</button>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
