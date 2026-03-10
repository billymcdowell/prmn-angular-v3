import type { Meta, StoryObj } from '@storybook/angular';
import { HlmInputGroupImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideSearch, lucideAtSign, lucideDollarSign } from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Input Group',
  parameters: {
    docs: {
      description: {
        component:
          'Input with addons: text, icons, or buttons before/after. Use hlm-input-group; add hlm-input-group-addon (with align), hlm-input-group-input, hlm-input-group-text, or hlm-input-group-button.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmInputGroupImports, HlmIconImports];
const icons = { lucideSearch, lucideAtSign, lucideDollarSign };

/**
 * Text addon at inline-start (e.g. prefix label).
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-input-group class="max-w-sm">
        <hlm-input-group-addon align="inline-start">
          <span hlmInputGroupText>https://</span>
        </hlm-input-group-addon>
        <input hlmInputGroupInput placeholder="example.com" />
      </hlm-input-group>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Icon at start. Use ng-icon inside addon.
 */
export const WithLeadingIcon: Story = {
  render: () => ({
    template: `
      <hlm-input-group class="max-w-sm">
        <hlm-input-group-addon align="inline-start">
          <ng-icon name="lucideSearch" hlm size="sm" />
        </hlm-input-group-addon>
        <input hlmInputGroupInput placeholder="Search..." />
      </hlm-input-group>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Icon at end (inline-end).
 */
export const WithTrailingIcon: Story = {
  render: () => ({
    template: `
      <hlm-input-group class="max-w-sm">
        <input hlmInputGroupInput placeholder="Email" type="email" />
        <hlm-input-group-addon align="inline-end">
          <ng-icon name="lucideAtSign" hlm size="sm" />
        </hlm-input-group-addon>
      </hlm-input-group>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Button inside addon (e.g. submit or clear). Use hlmInputGroupButton.
 */
export const WithButton: Story = {
  render: () => ({
    template: `
      <hlm-input-group class="max-w-sm">
        <input hlmInputGroupInput placeholder="Search" />
        <hlm-input-group-addon align="inline-end">
          <button hlmInputGroupButton type="submit" aria-label="Search">
            <ng-icon name="lucideSearch" hlm size="sm" />
          </button>
        </hlm-input-group-addon>
      </hlm-input-group>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Text at both sides (e.g. currency).
 */
export const WithPrefixAndSuffix: Story = {
  render: () => ({
    template: `
      <hlm-input-group class="max-w-xs">
        <hlm-input-group-addon align="inline-start">
          <ng-icon name="lucideDollarSign" hlm size="sm" />
        </hlm-input-group-addon>
        <input hlmInputGroupInput type="number" placeholder="0.00" />
        <hlm-input-group-addon align="inline-end">
          <span hlmInputGroupText>USD</span>
        </hlm-input-group-addon>
      </hlm-input-group>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Textarea instead of input. Use hlmInputGroupTextarea.
 */
export const WithTextarea: Story = {
  render: () => ({
    template: `
      <hlm-input-group class="max-w-md">
        <hlm-input-group-addon align="block-start">
          <span hlmInputGroupText>Description</span>
        </hlm-input-group-addon>
        <textarea hlmInputGroupTextarea placeholder="Enter description..." rows="3"></textarea>
      </hlm-input-group>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Addon align: block-start places label above the input.
 */
export const BlockStartAddon: Story = {
  render: () => ({
    template: `
      <hlm-input-group class="max-w-sm">
        <hlm-input-group-addon align="block-start">
          <span hlmInputGroupText>Label above</span>
        </hlm-input-group-addon>
        <input hlmInputGroupInput placeholder="Input" />
      </hlm-input-group>
    `,
    moduleMetadata: { imports },
  }),
};
