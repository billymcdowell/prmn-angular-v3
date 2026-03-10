import type { Meta, StoryObj } from '@storybook/angular';
import { HlmLabel } from './hlm-label';
import { HlmLabelImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta<HlmLabel> = {
  component: HlmLabel,
  title: 'Components/Label',
  parameters: {
    docs: {
      description: {
        component:
          'Accessible label for form controls. Use with [hlmLabel] and optionally set [for] to associate with an input by id. Respects peer-disabled and group-data-[disabled] for disabled state styling.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmLabel>;

const labelImports = [HlmLabelImports];

/**
 * Basic label wrapping or associated with a form control.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <label hlmLabel for="email-demo">Email address</label>
      <input id="email-demo" type="email" placeholder="you@example.com" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors" />
    `,
    moduleMetadata: { imports: labelImports },
  }),
};

/**
 * Label with an input — recommended pattern: wrap in a container so spacing is consistent.
 */
export const WithInput: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-sm gap-2">
        <label hlmLabel for="username">Username</label>
        <input id="username" type="text" placeholder="johndoe" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors" />
      </div>
    `,
    moduleMetadata: { imports: labelImports },
  }),
};

/**
 * Multiple labeled fields in a form layout.
 */
export const FormLayout: Story = {
  render: () => ({
    template: `
      <form class="grid w-full max-w-sm gap-4">
        <div class="grid gap-2">
          <label hlmLabel for="first-name">First name</label>
          <input id="first-name" type="text" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors" />
        </div>
        <div class="grid gap-2">
          <label hlmLabel for="last-name">Last name</label>
          <input id="last-name" type="text" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors" />
        </div>
        <div class="grid gap-2">
          <label hlmLabel for="bio">Bio</label>
          <textarea id="bio" rows="3" class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors" placeholder="Tell us about yourself"></textarea>
        </div>
      </form>
    `,
    moduleMetadata: { imports: labelImports },
  }),
};

/**
 * Label used with a checkbox/switch — wrap both in a label element so clicking the text toggles the control.
 */
export const WithCheckbox: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-2">
        <input id="terms" type="checkbox" class="h-4 w-4 rounded border border-input" />
        <label hlmLabel for="terms">Accept terms and conditions</label>
      </div>
    `,
    moduleMetadata: { imports: labelImports },
  }),
};

/**
 * Label with required indicator (visual only; use aria-required on the control for accessibility).
 */
export const Required: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-sm gap-2">
        <label hlmLabel for="required-field">
          Email <span class="text-destructive">*</span>
        </label>
        <input id="required-field" type="email" required aria-required="true" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors" />
      </div>
    `,
    moduleMetadata: { imports: labelImports },
  }),
};

/**
 * Label with helper text — combine with a description for complex fields.
 */
export const WithHelperText: Story = {
  render: () => ({
    template: `
      <div class="grid w-full max-w-sm gap-2">
        <label hlmLabel for="helper-demo">Password</label>
        <p class="text-muted-foreground text-xs">Must be at least 8 characters with a number and symbol.</p>
        <input id="helper-demo" type="password" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors" />
      </div>
    `,
    moduleMetadata: { imports: labelImports },
  }),
};

/**
 * Label used with Hlm button — shows that the directive works with any labeled control.
 */
export const WithButton: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <label hlmLabel for="submit-btn">Submit the form</label>
        <button id="submit-btn" hlmBtn>Submit</button>
      </div>
    `,
    moduleMetadata: { imports: [...labelImports, ...HlmButtonImports] },
  }),
};
