import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSwitch } from './hlm-switch';
import { HlmSwitchImports } from './index';

const meta: Meta<HlmSwitch> = {
  component: HlmSwitch,
  title: 'Components/Switch',
  parameters: {
    docs: {
      description: {
        component:
          'Toggle switch for boolean state. Supports checked (model), disabled, and accessibility attributes (id, aria-label, aria-labelledby, aria-describedby). Works with reactive forms.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSwitch>;

const defaultImports = [HlmSwitchImports];

/**
 * Default unchecked switch.
 */
export const Default: Story = {
  render: () => ({
    template: `<hlm-switch aria-label="Toggle"></hlm-switch>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Checked (on) state.
 */
export const Checked: Story = {
  render: () => ({
    template: `<hlm-switch [checked]="true" aria-label="Toggle"></hlm-switch>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Disabled state. Not interactive, visually muted.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="flex gap-6">
        <hlm-switch [disabled]="true" aria-label="Disabled off"></hlm-switch>
        <hlm-switch [checked]="true" [disabled]="true" aria-label="Disabled on"></hlm-switch>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * With label. Use aria-label or associate with visible label for accessibility.
 */
export const WithLabel: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-2">
        <hlm-switch id="airplane" aria-label="Enable airplane mode"></hlm-switch>
        <label for="airplane" class="text-sm font-medium">Airplane mode</label>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Settings row: label, description, and switch.
 */
export const SettingsRow: Story = {
  render: () => ({
    template: `
      <div class="flex items-center justify-between gap-4 rounded-lg border p-4">
        <div>
          <p class="font-medium">Notifications</p>
          <p class="text-muted-foreground text-sm">Receive email when someone mentions you.</p>
        </div>
        <hlm-switch aria-label="Toggle notifications"></hlm-switch>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Multiple switches in a form (e.g. preferences).
 */
export const FormGroup: Story = {
  render: () => ({
    template: `
      <div class="w-80 space-y-4 rounded-lg border p-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Email alerts</span>
          <hlm-switch aria-label="Email alerts"></hlm-switch>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Push notifications</span>
          <hlm-switch [checked]="true" aria-label="Push notifications"></hlm-switch>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">SMS</span>
          <hlm-switch [disabled]="true" aria-label="SMS"></hlm-switch>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
