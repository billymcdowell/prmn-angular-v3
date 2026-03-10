import type { Meta, StoryObj } from '@storybook/angular';
import { HlmRadioGroup } from './hlm-radio-group';
import { HlmRadioGroupImports } from './index';
import { HlmLabelImports } from '../label';
import { FormsModule } from '@angular/forms';

const meta: Meta<HlmRadioGroup> = {
  component: HlmRadioGroup,
  title: 'Components/Radio Group',
  parameters: {
    docs: {
      description: {
        component:
          'Single selection from a set of options. Use hlm-radio-group (or [hlmRadioGroup]) with name, optional value/disabled/required, and hlm-radio for each option. Each hlm-radio can have hlm-radio-indicator and a label.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmRadioGroup>;

const imports = [HlmRadioGroupImports, HlmLabelImports, FormsModule];

/**
 * Basic radio group: pick one option.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmRadioGroup name="size" [(ngModel)]="selected">
        <label class="flex items-center gap-2">
          <hlm-radio value="sm" />
          <span>Small</span>
        </label>
        <label class="flex items-center gap-2">
          <hlm-radio value="md" />
          <span>Medium</span>
        </label>
        <label class="flex items-center gap-2">
          <hlm-radio value="lg" />
          <span>Large</span>
        </label>
      </div>
    `,
    moduleMetadata: { imports },
    props: { selected: 'md' },
  }),
};

/**
 * With group label and optional required state.
 */
export const WithLabel: Story = {
  render: () => ({
    template: `
      <div class="space-y-3">
        <label hlmLabel>Choose a plan</label>
        <div hlmRadioGroup name="plan" [(ngModel)]="selected" required>
          <label class="flex items-center gap-2">
            <hlm-radio value="free" />
            <span>Free</span>
          </label>
          <label class="flex items-center gap-2">
            <hlm-radio value="pro" />
            <span>Pro</span>
          </label>
          <label class="flex items-center gap-2">
            <hlm-radio value="enterprise" />
            <span>Enterprise</span>
          </label>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
    props: { selected: 'pro' },
  }),
};

/**
 * Disabled group — all options non-interactive.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div hlmRadioGroup name="disabled-demo" [(ngModel)]="selected" disabled>
        <label class="flex items-center gap-2">
          <hlm-radio value="a" />
          <span>Option A</span>
        </label>
        <label class="flex items-center gap-2">
          <hlm-radio value="b" />
          <span>Option B</span>
        </label>
      </div>
    `,
    moduleMetadata: { imports },
    props: { selected: 'a' },
  }),
};

/**
 * Single option disabled — others still selectable.
 */
export const OneOptionDisabled: Story = {
  render: () => ({
    template: `
      <div hlmRadioGroup name="one-disabled" [(ngModel)]="selected">
        <label class="flex items-center gap-2">
          <hlm-radio value="available" />
          <span>Available</span>
        </label>
        <label class="flex items-center gap-2">
          <hlm-radio value="unavailable" [disabled]="true" />
          <span>Unavailable (disabled)</span>
        </label>
        <label class="flex items-center gap-2">
          <hlm-radio value="other" />
          <span>Other</span>
        </label>
      </div>
    `,
    moduleMetadata: { imports },
    props: { selected: 'available' },
  }),
};

/**
 * Value change event — log or react to selection.
 */
export const WithValueChange: Story = {
  render: () => ({
    template: `
      <div class="space-y-2">
        <div hlmRadioGroup name="notify" [(ngModel)]="selected" (valueChange)="onChange($event)">
          <label class="flex items-center gap-2">
            <hlm-radio value="email" />
            <span>Email</span>
          </label>
          <label class="flex items-center gap-2">
            <hlm-radio value="sms" />
            <span>SMS</span>
          </label>
          <label class="flex items-center gap-2">
            <hlm-radio value="push" />
            <span>Push</span>
          </label>
        </div>
        <p class="text-muted-foreground text-sm">Selected: {{ selected }}</p>
      </div>
    `,
    moduleMetadata: { imports },
    props: {
      selected: 'email',
      onChange: (v: string) => console.log('Selected:', v),
    },
  }),
};

/**
 * Many options — vertical list.
 */
export const ManyOptions: Story = {
  render: () => ({
    template: `
      <div hlmRadioGroup name="country" [(ngModel)]="selected" class="max-h-48 overflow-y-auto">
        @for (c of countries; track c) {
          <label class="flex items-center gap-2">
            <hlm-radio [value]="c" />
            <span>{{ c }}</span>
          </label>
        }
      </div>
    `,
    moduleMetadata: { imports },
    props: {
      selected: 'Germany',
      countries: ['United States', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Japan', 'Australia'],
    },
  }),
};

/**
 * Object values — use string keys or ensure value is comparable.
 */
export const Preselected: Story = {
  render: () => ({
    template: `
      <div hlmRadioGroup name="preselected" [(ngModel)]="selected">
        <label class="flex items-center gap-2">
          <hlm-radio value="red" />
          <span>Red</span>
        </label>
        <label class="flex items-center gap-2">
          <hlm-radio value="green" />
          <span>Green</span>
        </label>
        <label class="flex items-center gap-2">
          <hlm-radio value="blue" />
          <span>Blue</span>
        </label>
      </div>
    `,
    moduleMetadata: { imports },
    props: { selected: 'green' },
  }),
};
