import type { Meta, StoryObj } from '@storybook/angular';
import { HlmBadge } from './hlm-badge';
import { HlmBadgeImports } from './index';

const meta: Meta<HlmBadge> = {
  component: HlmBadge,
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component:
          'Small label or count. Use for status, categories, counts, or tags. Supports variants: default, secondary, destructive, outline, ghost, link.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmBadge>;

const defaultImports = [HlmBadgeImports];

/**
 * Default primary style. Use for the main tag or status.
 */
export const Default: Story = {
  render: () => ({
    template: `<span hlmBadge>Badge</span>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * All variants: default, secondary, destructive, outline, ghost, link.
 */
export const Variants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-2">
        <span hlmBadge variant="default">Default</span>
        <span hlmBadge variant="secondary">Secondary</span>
        <span hlmBadge variant="destructive">Destructive</span>
        <span hlmBadge variant="outline">Outline</span>
        <span hlmBadge variant="ghost">Ghost</span>
        <span hlmBadge variant="link">Link</span>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Status labels: success, warning, error, info style using variants.
 */
export const Status: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-2">
        <span hlmBadge variant="default">Active</span>
        <span hlmBadge variant="secondary">Draft</span>
        <span hlmBadge variant="destructive">Failed</span>
        <span hlmBadge variant="outline">Pending</span>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Counts and numbers in badges.
 */
export const Count: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-2">
        <span hlmBadge>3</span>
        <span hlmBadge variant="secondary">12</span>
        <span hlmBadge variant="destructive">99+</span>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Category or tag chips.
 */
export const Tags: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-2">
        <span hlmBadge variant="outline">Angular</span>
        <span hlmBadge variant="outline">TypeScript</span>
        <span hlmBadge variant="outline">UI</span>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Badge as a link (e.g. filter or category link).
 */
export const AsLink: Story = {
  render: () => ({
    template: `
      <a href="#" hlmBadge variant="link" (click)="$event.preventDefault()">View all</a>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
