import type { Meta, StoryObj } from '@storybook/angular';
import { HlmButton } from './hlm-button';
import { HlmButtonImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus, lucideMail, lucideTrash2 } from '@ng-icons/lucide';

const meta: Meta<HlmButton> = {
  component: HlmButton,
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component:
          'Button or link styled as a button. Supports variants (default, destructive, outline, secondary, ghost, link) and sizes (xs, sm, default, lg, icon, icon-xs, icon-sm, icon-lg). Use hlmBtn on button or a elements.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmButton>;

const defaultImports = [HlmButtonImports];

/**
 * Primary action style. Use for the main CTA on a page or in a dialog.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <button hlmBtn>Button</button>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * All variants: default, destructive, outline, secondary, ghost, link.
 */
export const Variants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-3">
        <button hlmBtn variant="default">Default</button>
        <button hlmBtn variant="destructive">Destructive</button>
        <button hlmBtn variant="outline">Outline</button>
        <button hlmBtn variant="secondary">Secondary</button>
        <button hlmBtn variant="ghost">Ghost</button>
        <button hlmBtn variant="link">Link</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Size scale: xs, sm, default, lg.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <button hlmBtn size="xs">Extra small</button>
        <button hlmBtn size="sm">Small</button>
        <button hlmBtn>Default</button>
        <button hlmBtn size="lg">Large</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Icon-only buttons: icon, icon-xs, icon-sm, icon-lg.
 */
export const IconOnly: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <button hlmBtn variant="outline" size="icon-xs" aria-label="Add"><ng-icon name="lucidePlus" /></button>
        <button hlmBtn variant="outline" size="icon-sm" aria-label="Add"><ng-icon name="lucidePlus" /></button>
        <button hlmBtn variant="outline" size="icon" aria-label="Add"><ng-icon name="lucidePlus" /></button>
        <button hlmBtn variant="outline" size="icon-lg" aria-label="Add"><ng-icon name="lucidePlus" /></button>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: [provideIcons({ lucidePlus })],
    },
  }),
};

/**
 * Button with leading icon. Use for actions like "Send email", "Add item".
 */
export const WithLeadingIcon: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-3">
        <button hlmBtn variant="default">
          <ng-icon name="lucideMail" />
          Send email
        </button>
        <button hlmBtn variant="outline">
          <ng-icon name="lucidePlus" />
          Add item
        </button>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: [provideIcons({ lucidePlus, lucideMail })],
    },
  }),
};

/**
 * Button with trailing icon (e.g. external link or dropdown arrow).
 */
export const WithTrailingIcon: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline">
        Delete
        <ng-icon name="lucideTrash2" />
      </button>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: [provideIcons({ lucideTrash2 })],
    },
  }),
};

/**
 * Disabled state. Buttons with disabled are not interactive and appear muted.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-3">
        <button hlmBtn variant="default" disabled>Default disabled</button>
        <button hlmBtn variant="destructive" disabled>Destructive disabled</button>
        <button hlmBtn variant="outline" disabled>Outline disabled</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Link styled as a button. Use hlmBtn on an anchor for navigation that looks like a button.
 */
export const AsLink: Story = {
  render: () => ({
    template: `
      <a hlmBtn variant="default" href="#" (click)="$event.preventDefault()">Link as button</a>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Destructive actions: delete, remove, or irreversible operations.
 */
export const Destructive: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-3">
        <button hlmBtn variant="destructive">Delete</button>
        <button hlmBtn variant="destructive" size="sm">Remove</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
