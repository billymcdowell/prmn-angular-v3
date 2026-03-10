import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSpinner } from './hlm-spinner';
import { HlmSpinnerImports } from './index';

const meta: Meta<HlmSpinner> = {
  component: HlmSpinner,
  title: 'Components/Spinner',
  parameters: {
    docs: {
      description: {
        component:
          'Loading indicator. Use icon (default: lucideLoader), aria-label for accessibility, and size via CSS (e.g. class). Respects prefers-reduced-motion.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSpinner>;

const defaultImports = [HlmSpinnerImports];

/**
 * Default spinner with default icon and "Loading" aria-label.
 */
export const Default: Story = {
  render: () => ({
    template: `<hlm-spinner></hlm-spinner>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Small spinner for buttons or inline use.
 */
export const Small: Story = {
  render: () => ({
    template: `<hlm-spinner class="text-sm"></hlm-spinner>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Large spinner for page or section loading.
 */
export const Large: Story = {
  render: () => ({
    template: `<hlm-spinner class="text-3xl"></hlm-spinner>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Custom aria-label for screen readers.
 */
export const CustomAriaLabel: Story = {
  render: () => ({
    template: `<hlm-spinner ariaLabel="Saving your changes"></hlm-spinner>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Inline with text (e.g. "Saving...").
 */
export const InlineWithText: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-2">
        <hlm-spinner class="text-base"></hlm-spinner>
        <span class="text-sm">Loading...</span>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Inside a button (submit / loading state).
 */
export const InButton: Story = {
  render: () => ({
    template: `
      <button class="border-input inline-flex h-9 items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs" disabled>
        <hlm-spinner class="text-sm"></hlm-spinner>
        Saving
      </button>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Centered in a block (e.g. table or card loading).
 */
export const CenteredBlock: Story = {
  render: () => ({
    template: `
      <div class="flex h-32 w-full items-center justify-center rounded-md border border-dashed">
        <hlm-spinner class="text-2xl"></hlm-spinner>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Multiple sizes for comparison.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap items-center gap-6">
        <hlm-spinner class="text-xs"></hlm-spinner>
        <hlm-spinner class="text-sm"></hlm-spinner>
        <hlm-spinner class="text-base"></hlm-spinner>
        <hlm-spinner class="text-xl"></hlm-spinner>
        <hlm-spinner class="text-3xl"></hlm-spinner>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
