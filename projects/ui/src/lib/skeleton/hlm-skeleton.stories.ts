import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSkeleton } from './hlm-skeleton';
import { HlmSkeletonImports } from './index';

const meta: Meta<HlmSkeleton> = {
  component: HlmSkeleton,
  title: 'Components/Skeleton',
  parameters: {
    docs: {
      description: {
        component:
          'Placeholder that shows a pulsing animation while content is loading. Use for cards, avatars, text lines, or custom shapes. Respects prefers-reduced-motion (motion-safe:animate-pulse).',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSkeleton>;

const defaultImports = [HlmSkeletonImports];

/**
 * Basic skeleton block. Use with fixed or percentage width/height as needed.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmSkeleton class="h-12 w-full rounded-md"></div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Common use: mimic a few lines of text.
 */
export const TextLines: Story = {
  render: () => ({
    template: `
      <div class="space-y-2">
        <div hlmSkeleton class="h-4 w-full"></div>
        <div hlmSkeleton class="h-4 w-[90%]"></div>
        <div hlmSkeleton class="h-4 w-[75%]"></div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Circle skeleton for avatars or icons.
 */
export const Avatar: Story = {
  render: () => ({
    template: `
      <div hlmSkeleton class="size-12 rounded-full"></div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Card layout: image placeholder, title, and paragraph lines.
 */
export const Card: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col space-y-3 rounded-lg border p-4">
        <div hlmSkeleton class="h-32 w-full rounded-md"></div>
        <div class="space-y-2">
          <div hlmSkeleton class="h-4 w-3/4"></div>
          <div hlmSkeleton class="h-3 w-full"></div>
          <div hlmSkeleton class="h-3 w-5/6"></div>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * List item: avatar + lines.
 */
export const ListItem: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-4">
        <div hlmSkeleton class="size-10 rounded-full"></div>
        <div class="flex-1 space-y-2">
          <div hlmSkeleton class="h-4 w-1/3"></div>
          <div hlmSkeleton class="h-3 w-1/2"></div>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Profile or settings form: label + input placeholders.
 */
export const Form: Story = {
  render: () => ({
    template: `
      <div class="space-y-6">
        <div class="space-y-2">
          <div hlmSkeleton class="h-4 w-20"></div>
          <div hlmSkeleton class="h-9 w-full"></div>
        </div>
        <div class="space-y-2">
          <div hlmSkeleton class="h-4 w-24"></div>
          <div hlmSkeleton class="h-9 w-full"></div>
        </div>
        <div hlmSkeleton class="h-9 w-24"></div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Table row skeleton.
 */
export const TableRow: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4 border-b py-3">
        <div hlmSkeleton class="h-4 w-12 rounded"></div>
        <div hlmSkeleton class="h-4 flex-1"></div>
        <div hlmSkeleton class="h-4 w-24"></div>
        <div hlmSkeleton class="h-4 w-16"></div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Custom dimensions: button and badge shapes.
 */
export const CustomShapes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <div hlmSkeleton class="h-9 w-24 rounded-md"></div>
        <div hlmSkeleton class="h-6 w-16 rounded-full"></div>
        <div hlmSkeleton class="h-8 w-8 rounded"></div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
