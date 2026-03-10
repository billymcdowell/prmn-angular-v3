import type { Meta, StoryObj } from '@storybook/angular';
import { HlmIconImports } from './index';
import { provideIcons } from '@ng-icons/core';
import {
  lucideHeart,
  lucideStar,
  lucideCheck,
  lucideAlertCircle,
  lucideSettings,
  lucideUser,
} from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Icon',
  parameters: {
    docs: {
      description: {
        component:
          'Icon directive for ng-icon. Use hlm or hlmIcon on ng-icon and set size: xs | sm | base | lg | xl | none, or a custom CSS length.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmIconImports];
const icons = {
  lucideHeart,
  lucideStar,
  lucideCheck,
  lucideAlertCircle,
  lucideSettings,
  lucideUser,
};

/**
 * Default size (base = 24px). Use hlm or hlmIcon on ng-icon.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <ng-icon name="lucideHeart" hlm />
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * All size variants: xs (12px), sm (16px), base (24px), lg (32px), xl (48px).
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap items-end gap-6">
        <div class="flex flex-col items-center gap-2">
          <ng-icon name="lucideStar" hlm size="xs" />
          <span class="text-xs text-muted-foreground">xs (12px)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ng-icon name="lucideStar" hlm size="sm" />
          <span class="text-xs text-muted-foreground">sm (16px)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ng-icon name="lucideStar" hlm size="base" />
          <span class="text-xs text-muted-foreground">base (24px)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ng-icon name="lucideStar" hlm size="lg" />
          <span class="text-xs text-muted-foreground">lg (32px)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ng-icon name="lucideStar" hlm size="xl" />
          <span class="text-xs text-muted-foreground">xl (48px)</span>
        </div>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Icons in buttons or next to text. Use size="sm" or size="xs" for inline.
 */
export const WithText: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4">
        <p class="flex items-center gap-2 text-sm">
          <ng-icon name="lucideCheck" hlm size="sm" class="text-green-600" />
          Success message
        </p>
        <p class="flex items-center gap-2 text-sm">
          <ng-icon name="lucideAlertCircle" hlm size="sm" class="text-amber-600" />
          Warning message
        </p>
        <p class="flex items-center gap-2">
          <ng-icon name="lucideUser" hlm size="base" />
          Profile
        </p>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Multiple icons in a row. Size can be overridden per icon.
 */
export const IconSet: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-4">
        <ng-icon name="lucideHeart" hlm size="sm" class="text-muted-foreground" />
        <ng-icon name="lucideStar" hlm size="sm" class="text-muted-foreground" />
        <ng-icon name="lucideSettings" hlm size="sm" class="text-muted-foreground" />
        <ng-icon name="lucideUser" hlm size="sm" class="text-muted-foreground" />
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * hlmIcon is an alias for hlm; both apply the same size behavior.
 */
export const AliasHlmIcon: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4">
        <ng-icon name="lucideCheck" hlm size="lg" />
        <ng-icon name="lucideCheck" hlmIcon size="lg" />
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};
