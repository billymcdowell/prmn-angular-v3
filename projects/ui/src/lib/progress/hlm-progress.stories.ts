import type { Meta, StoryObj } from '@storybook/angular';
import { HlmProgress } from './hlm-progress';
import { HlmProgressImports } from './index';

const meta: Meta<HlmProgress> = {
  component: HlmProgress,
  title: 'Components/Progress',
  parameters: {
    docs: {
      description: {
        component:
          'Progress bar showing completion. Use hlm-progress (or [hlmProgress]) with [value] and optional [max]. Wrap the fill with [hlmProgressIndicator] or hlm-progress-indicator. Omit value for indeterminate (animated) state.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmProgress>;

const imports = [HlmProgressImports];

/**
 * Default: 60% progress with max 100.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md">
        <hlm-progress [value]="60" [max]="100">
          <div hlmProgressIndicator />
        </hlm-progress>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Zero progress.
 */
export const Zero: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md">
        <hlm-progress [value]="0" [max]="100">
          <div hlmProgressIndicator />
        </hlm-progress>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Full (100%) progress.
 */
export const Complete: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md">
        <hlm-progress [value]="100" [max]="100">
          <div hlmProgressIndicator />
        </hlm-progress>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Custom max (e.g. 50) — value 25 = 50%.
 */
export const CustomMax: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md">
        <hlm-progress [value]="25" [max]="50">
          <div hlmProgressIndicator />
        </hlm-progress>
        <p class="text-muted-foreground mt-1 text-xs">25 / 50</p>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Indeterminate: no value (or null) — animated loading bar.
 */
export const Indeterminate: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md">
        <hlm-progress>
          <div hlmProgressIndicator />
        </hlm-progress>
        <p class="text-muted-foreground mt-1 text-xs">Loading…</p>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Multiple progress bars — e.g. storage or skills.
 */
export const Multiple: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md space-y-4">
        <div>
          <div class="mb-1 flex justify-between text-sm">
            <span>Storage used</span>
            <span>7.2 GB / 10 GB</span>
          </div>
          <hlm-progress [value]="72" [max]="100">
            <div hlmProgressIndicator />
          </hlm-progress>
        </div>
        <div>
          <div class="mb-1 flex justify-between text-sm">
            <span>Upload</span>
            <span>45%</span>
          </div>
          <hlm-progress [value]="45" [max]="100">
            <div hlmProgressIndicator />
          </hlm-progress>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * With custom getValueLabel for accessibility (announced to screen readers).
 */
export const WithValueLabel: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md">
        <hlm-progress [value]="33" [max]="100" [getValueLabel]="getValueLabel">
          <div hlmProgressIndicator />
        </hlm-progress>
      </div>
    `,
    moduleMetadata: { imports },
    props: {
      getValueLabel: (value: number, max: number) => `${value} of ${max} steps completed`,
    },
  }),
};
