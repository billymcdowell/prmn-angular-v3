import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSelect } from './hlm-select';
import { HlmSelectImports } from './index';
import { HlmLabelImports } from '../label';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { FormsModule } from '@angular/forms';

const meta: Meta<HlmSelect> = {
  component: HlmSelect,
  title: 'Components/Select',
  parameters: {
    docs: {
      description: {
        component:
          'Custom select dropdown (non-native). Use brn-select with hlm-select-trigger, hlm-select-value, hlm-select-content, and hlm-option. Optional: hlm-select-label, hlm-select-group, hlm-select-separator. Trigger supports size (default, sm) and error state.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSelect>;

const selectImports = [BrnSelectImports, HlmSelectImports, HlmLabelImports, FormsModule];

/**
 * Basic select with a few options.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="fruit-select">Fruit</label>
        <brn-select [(ngModel)]="value" placeholder="Select a fruit">
          <hlm-select-trigger id="fruit-select">
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content>
            <hlm-option value="apple">Apple</hlm-option>
            <hlm-option value="banana">Banana</hlm-option>
            <hlm-option value="orange">Orange</hlm-option>
            <hlm-option value="grape">Grape</hlm-option>
          </hlm-select-content>
        </brn-select>
      </div>
    `,
    moduleMetadata: { imports: selectImports },
    props: { value: '' },
  }),
};

/**
 * Small trigger size.
 */
export const SizeSmall: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel>Size: sm</label>
        <brn-select [(ngModel)]="value" placeholder="Choose one">
          <hlm-select-trigger size="sm">
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content>
            <hlm-option value="a">Option A</hlm-option>
            <hlm-option value="b">Option B</hlm-option>
          </hlm-select-content>
        </brn-select>
      </div>
    `,
    moduleMetadata: { imports: selectImports },
    props: { value: 'a' },
  }),
};

/**
 * With groups and labels inside the dropdown.
 */
export const WithGroupsAndLabels: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel>Timezone</label>
        <brn-select [(ngModel)]="value" placeholder="Select timezone">
          <hlm-select-trigger>
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content>
            <hlm-select-group>
              <hlm-select-label>Americas</hlm-select-label>
              <hlm-option value="est">Eastern (EST)</hlm-option>
              <hlm-option value="cst">Central (CST)</hlm-option>
              <hlm-option value="pst">Pacific (PST)</hlm-option>
            </hlm-select-group>
            <hlm-select-group>
              <hlm-select-label>Europe</hlm-select-label>
              <hlm-option value="gmt">GMT</hlm-option>
              <hlm-option value="cet">CET</hlm-option>
            </hlm-select-group>
          </hlm-select-content>
        </brn-select>
      </div>
    `,
    moduleMetadata: { imports: selectImports },
    props: { value: 'est' },
  }),
};

/**
 * With separator between groups.
 */
export const WithSeparator: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel>Category</label>
        <brn-select [(ngModel)]="value" placeholder="Select category">
          <hlm-select-trigger>
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content>
            <hlm-option value="fruit">Fruit</hlm-option>
            <hlm-option value="veg">Vegetable</hlm-option>
            <hlm-select-separator />
            <hlm-option value="dairy">Dairy</hlm-option>
            <hlm-option value="bread">Bread</hlm-option>
          </hlm-select-content>
        </brn-select>
      </div>
    `,
    moduleMetadata: { imports: selectImports },
    props: { value: 'fruit' },
  }),
};

/**
 * Disabled option(s) — one option not selectable.
 */
export const WithDisabledOption: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel>Status</label>
        <brn-select [(ngModel)]="value" placeholder="Select status">
          <hlm-select-trigger>
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content>
            <hlm-option value="active">Active</hlm-option>
            <hlm-option value="inactive" [disabled]="true">Inactive (disabled)</hlm-option>
            <hlm-option value="pending">Pending</hlm-option>
          </hlm-select-content>
        </brn-select>
      </div>
    `,
    moduleMetadata: { imports: selectImports },
    props: { value: 'active' },
  }),
};

/**
 * Long list — scrollable content.
 */
export const LongList: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel>Choose one</label>
        <brn-select [(ngModel)]="value" placeholder="Select option">
          <hlm-select-trigger>
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content class="max-h-48">
            @for (i of items; track i) {
              <hlm-option [value]="i">Option {{ i }}</hlm-option>
            }
          </hlm-select-content>
        </brn-select>
      </div>
    `,
    moduleMetadata: { imports: selectImports },
    props: {
      value: '5',
      items: Array.from({ length: 20 }, (_, i) => String(i + 1)),
    },
  }),
};

/**
 * Preselected value.
 */
export const Preselected: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel>Color</label>
        <brn-select [(ngModel)]="value" placeholder="Select color">
          <hlm-select-trigger>
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content>
            <hlm-option value="red">Red</hlm-option>
            <hlm-option value="green">Green</hlm-option>
            <hlm-option value="blue">Blue</hlm-option>
          </hlm-select-content>
        </brn-select>
        <p class="text-muted-foreground text-sm">Selected: {{ value || '(none)' }}</p>
      </div>
    `,
    moduleMetadata: { imports: selectImports },
    props: { value: 'green' },
  }),
};
