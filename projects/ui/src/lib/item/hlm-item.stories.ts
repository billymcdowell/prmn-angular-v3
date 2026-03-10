import type { Meta, StoryObj } from '@storybook/angular';
import { HlmItemImports } from './index';
import { HlmIconImports } from '../icon';
import { HlmButtonImports } from '../button';
import { provideIcons } from '@ng-icons/core';
import { lucideFileText, lucideMoreVertical, lucideImage } from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Item',
  parameters: {
    docs: {
      description: {
        component:
          'List item / card row with optional media, title, description, footer, and actions. Variants: default, outline, muted. Sizes: default, sm.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmItemImports, HlmIconImports, HlmButtonImports];
const icons = { lucideFileText, lucideMoreVertical, lucideImage };

/**
 * Basic item: title only. Use as div or anchor with hlmItem.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmItem class="max-w-md">
        <span hlmItemTitle>Item title</span>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * All variants: default (transparent), outline (border), muted (muted background).
 */
export const Variants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-2 max-w-md">
        <div hlmItem variant="default">
          <span hlmItemTitle>Default (transparent)</span>
        </div>
        <div hlmItem variant="outline">
          <span hlmItemTitle>Outline (border)</span>
        </div>
        <div hlmItem variant="muted">
          <span hlmItemTitle>Muted (background)</span>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Sizes: default (gap-4 p-4), sm (gap-2.5 px-4 py-3).
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-2 max-w-md">
        <div hlmItem size="default">
          <span hlmItemTitle>Default size</span>
        </div>
        <div hlmItem size="sm">
          <span hlmItemTitle>Small size</span>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * With media (icon variant): icon in a rounded box.
 */
export const WithIconMedia: Story = {
  render: () => ({
    template: `
      <div hlmItem class="max-w-md">
        <div hlmItemMedia variant="icon">
          <ng-icon name="lucideFileText" />
        </div>
        <hlm-item-content>
          <span hlmItemTitle>Document.pdf</span>
          <p hlmItemDescription>Updated 2 hours ago</p>
        </hlm-item-content>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * With image media: variant="image" and an img inside.
 */
export const WithImageMedia: Story = {
  render: () => ({
    template: `
      <div hlmItem class="max-w-md">
        <div hlmItemMedia variant="image">
          <img src="https://picsum.photos/80/80" alt="" />
        </div>
        <hlm-item-content>
          <span hlmItemTitle>Photo</span>
          <p hlmItemDescription>Image thumbnail</p>
        </hlm-item-content>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * With actions (e.g. menu or buttons) in the item.
 */
export const WithActions: Story = {
  render: () => ({
    template: `
      <div hlmItem class="max-w-md">
        <div hlmItemMedia variant="icon">
          <ng-icon name="lucideFileText" />
        </div>
        <hlm-item-content>
          <span hlmItemTitle>Report Q4</span>
          <p hlmItemDescription>Last edited yesterday</p>
        </hlm-item-content>
        <hlm-item-actions>
          <button hlmBtn variant="ghost" size="icon-sm" aria-label="More">
            <ng-icon name="lucideMoreVertical" />
          </button>
        </hlm-item-actions>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * With footer for metadata or secondary actions.
 */
export const WithFooter: Story = {
  render: () => ({
    template: `
      <div hlmItem class="max-w-md">
        <hlm-item-header>
          <span hlmItemTitle>Project Alpha</span>
        </hlm-item-header>
        <p hlmItemDescription>Main project for the Q1 release. Contains docs and design assets.</p>
        <hlm-item-footer>
          <span class="text-xs text-muted-foreground">3 items · Updated today</span>
        </hlm-item-footer>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Link item: use anchor with hlmItem for navigation.
 */
export const AsLink: Story = {
  render: () => ({
    template: `
      <a hlmItem href="#" class="max-w-md block" (click)="$event.preventDefault()">
        <div hlmItemMedia variant="icon">
          <ng-icon name="lucideFileText" />
        </div>
        <hlm-item-content>
          <span hlmItemTitle>Open document</span>
          <p hlmItemDescription>Click to open</p>
        </hlm-item-content>
      </a>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Item group: multiple items in a list with optional separators.
 */
export const ItemGroup: Story = {
  render: () => ({
    template: `
      <hlm-item-group class="flex flex-col gap-0 max-w-md rounded-md border">
        <div hlmItem variant="default">
          <span hlmItemTitle>First item</span>
        </div>
        <hlm-item-separator />
        <div hlmItem variant="default">
          <span hlmItemTitle>Second item</span>
        </div>
        <hlm-item-separator />
        <div hlmItem variant="default">
          <span hlmItemTitle>Third item</span>
        </div>
      </hlm-item-group>
    `,
    moduleMetadata: { imports },
  }),
};
