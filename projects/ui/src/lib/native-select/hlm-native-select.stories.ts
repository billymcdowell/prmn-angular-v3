import type { Meta, StoryObj } from '@storybook/angular';
import { HlmNativeSelect } from './hlm-native-select';
import { HlmNativeSelectImports } from './index';
import { HlmLabelImports } from '../label';
import { FormsModule } from '@angular/forms';

const meta: Meta<HlmNativeSelect> = {
  component: HlmNativeSelect,
  title: 'Components/Native Select',
  parameters: {
    docs: {
      description: {
        component:
          'Native HTML select with Hlm styling. Supports size (default, sm), disabled, invalid state, and optgroups. Use with hlmNativeSelectOption on options and hlmNativeSelectOptGroup on optgroup.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmNativeSelect>;

const imports = [HlmNativeSelectImports, HlmLabelImports, FormsModule];

/**
 * Basic native select with a few options.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="fruit">Fruit</label>
        <hlm-native-select id="fruit" [(value)]="value">
          <option hlmNativeSelectOption value="">Select a fruit</option>
          <option hlmNativeSelectOption value="apple">Apple</option>
          <option hlmNativeSelectOption value="banana">Banana</option>
          <option hlmNativeSelectOption value="orange">Orange</option>
        </hlm-native-select>
      </div>
    `,
    moduleMetadata: { imports },
    props: { value: '' },
  }),
};

/**
 * Small size variant — compact height.
 */
export const SizeSmall: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="size-sm">Size: sm</label>
        <hlm-native-select id="size-sm" size="sm" [(value)]="value">
          <option hlmNativeSelectOption value="a">Option A</option>
          <option hlmNativeSelectOption value="b">Option B</option>
        </hlm-native-select>
      </div>
    `,
    moduleMetadata: { imports: [HlmNativeSelectImports, HlmLabelImports, FormsModule] },
    props: { value: 'a' },
  }),
};

/**
 * Default size (explicit).
 */
export const SizeDefault: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="size-default">Size: default</label>
        <hlm-native-select id="size-default" size="default" [(value)]="value">
          <option hlmNativeSelectOption value="one">One</option>
          <option hlmNativeSelectOption value="two">Two</option>
        </hlm-native-select>
      </div>
    `,
    moduleMetadata: { imports: [HlmNativeSelectImports, HlmLabelImports, FormsModule] },
    props: { value: 'one' },
  }),
};

/**
 * Disabled state — not interactive, visually muted.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="disabled-select">Disabled</label>
        <hlm-native-select id="disabled-select" disabled [(value)]="value">
          <option hlmNativeSelectOption value="x">Option X</option>
          <option hlmNativeSelectOption value="y">Option Y</option>
        </hlm-native-select>
      </div>
    `,
    moduleMetadata: { imports: [HlmNativeSelectImports, HlmLabelImports, FormsModule] },
    props: { value: 'x' },
  }),
};

/**
 * Invalid/error state — use for form validation (aria-invalid).
 */
export const Invalid: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="invalid-select">Country (required)</label>
        <hlm-native-select id="invalid-select" [attr.aria-invalid]="true" [(value)]="value">
          <option hlmNativeSelectOption value="">Select country</option>
          <option hlmNativeSelectOption value="us">United States</option>
          <option hlmNativeSelectOption value="uk">United Kingdom</option>
        </hlm-native-select>
        <p class="text-destructive text-xs">Please select a country.</p>
      </div>
    `,
    moduleMetadata: { imports: [HlmNativeSelectImports, HlmLabelImports, FormsModule] },
    props: { value: '' },
  }),
};

/**
 * Options grouped with optgroup using hlmNativeSelectOptGroup.
 */
export const WithOptGroups: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="timezone">Timezone</label>
        <hlm-native-select id="timezone" [(value)]="value">
          <optgroup hlmNativeSelectOptGroup label="Americas">
            <option hlmNativeSelectOption value="est">Eastern (EST)</option>
            <option hlmNativeSelectOption value="cst">Central (CST)</option>
            <option hlmNativeSelectOption value="pst">Pacific (PST)</option>
          </optgroup>
          <optgroup hlmNativeSelectOptGroup label="Europe">
            <option hlmNativeSelectOption value="gmt">GMT</option>
            <option hlmNativeSelectOption value="cet">CET</option>
          </optgroup>
          <optgroup hlmNativeSelectOptGroup label="Asia">
            <option hlmNativeSelectOption value="jst">JST</option>
            <option hlmNativeSelectOption value="ist">IST</option>
          </optgroup>
        </hlm-native-select>
      </div>
    `,
    moduleMetadata: { imports: [HlmNativeSelectImports, HlmLabelImports, FormsModule] },
    props: { value: 'est' },
  }),
};

/**
 * Many options — scrollable dropdown behavior.
 */
export const LongList: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="long">Choose one</label>
        <hlm-native-select id="long" [(value)]="value">
          @for (i of items; track i) {
            <option hlmNativeSelectOption [value]="i">Option {{ i }}</option>
          }
        </hlm-native-select>
      </div>
    `,
    moduleMetadata: { imports: [HlmNativeSelectImports, HlmLabelImports, FormsModule] },
    props: {
      value: '5',
      items: Array.from({ length: 20 }, (_, i) => String(i + 1)),
    },
  }),
};

/**
 * Two-way binding with value and valueChange — reactive display.
 */
export const WithValueBinding: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-xs gap-2">
        <label hlmLabel for="bound">Selection</label>
        <hlm-native-select id="bound" [(value)]="value">
          <option hlmNativeSelectOption value="red">Red</option>
          <option hlmNativeSelectOption value="green">Green</option>
          <option hlmNativeSelectOption value="blue">Blue</option>
        </hlm-native-select>
        <p class="text-muted-foreground text-sm">Selected: <strong>{{ value || '(none)' }}</strong></p>
      </div>
    `,
    moduleMetadata: { imports: [HlmNativeSelectImports, HlmLabelImports, FormsModule] },
    props: { value: 'green' },
  }),
};
