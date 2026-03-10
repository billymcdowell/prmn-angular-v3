import type { Meta, StoryObj } from '@storybook/angular';
import { HlmToggle } from './hlm-toggle';
import { HlmToggleImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';

const meta: Meta<HlmToggle> = {
  component: HlmToggle,
  title: 'Components/Toggle',
  parameters: {
    docs: {
      description: {
        component:
          'Button that toggles on/off state. Use for toolbar actions (e.g. bold, italic). Variants: default (transparent), outline. Sizes: default, sm, lg.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmToggle>;

const defaultImports = [HlmToggleImports];
const iconProviders = [provideIcons({ lucideBold, lucideItalic, lucideUnderline })];

/**
 * Default toggle (transparent background, accent when on).
 */
export const Default: Story = {
  render: () => ({
    template: `<button hlmToggle>Toggle</button>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * All variants: default and outline.
 */
export const Variants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-2">
        <button hlmToggle variant="default">Default</button>
        <button hlmToggle variant="outline">Outline</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Sizes: sm, default, lg.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <button hlmToggle size="sm">Small</button>
        <button hlmToggle>Default</button>
        <button hlmToggle size="lg">Large</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Icon-only toggles (e.g. rich text toolbar).
 */
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div class="flex gap-1 rounded-md border p-1">
        <button hlmToggle size="sm" aria-label="Bold">
          <ng-icon name="lucideBold" />
        </button>
        <button hlmToggle size="sm" aria-label="Italic">
          <ng-icon name="lucideItalic" />
        </button>
        <button hlmToggle size="sm" aria-label="Underline">
          <ng-icon name="lucideUnderline" />
        </button>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: iconProviders,
    },
  }),
};

/**
 * Outline variant with icon + text.
 */
export const OutlineWithText: Story = {
  render: () => ({
    template: `
      <button hlmToggle variant="outline">
        <ng-icon name="lucideBold" />
        Bold
      </button>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: iconProviders,
    },
  }),
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <button hlmToggle disabled>Disabled</button>
        <button hlmToggle variant="outline" disabled>Disabled outline</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
