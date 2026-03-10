import type { Meta, StoryObj } from '@storybook/angular';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HlmFormFieldImports } from './index';
import { HlmInputImports } from '../input';
import { HlmLabelImports } from '../label';
import { HlmTextareaImports } from '../textarea';

const meta: Meta = {
  title: 'Components/Form Field',
  parameters: {
    docs: {
      description: {
        component:
          'Form field wrapper that shows label, control, and either hlm-hint or hlm-error based on control validity. Requires a BrnFormFieldControl (e.g. hlmInput, hlmTextarea) inside.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [
  HlmFormFieldImports,
  HlmInputImports,
  HlmLabelImports,
  HlmTextareaImports,
  ReactiveFormsModule,
];

/**
 * Basic form field with label, input, and hint. Hint shows when control is valid.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-form-field class="block w-full max-w-sm">
        <label hlmLabel>Email</label>
        <input hlmInput type="email" placeholder="you@example.com" />
        <hlm-hint>We'll never share your email.</hlm-hint>
      </hlm-form-field>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * With reactive form and validation. When invalid and touched/dirty, hlm-error is shown instead of hlm-hint.
 */
export const WithValidation: Story = {
  render: () => ({
    template: `
      <form [formGroup]="form" class="space-y-4 max-w-sm">
        <hlm-form-field>
          <label hlmLabel>Username</label>
          <input hlmInput formControlName="username" placeholder="johndoe" />
          <hlm-hint>Choose a unique username.</hlm-hint>
          <hlm-error>Username is required and must be at least 3 characters.</hlm-error>
        </hlm-form-field>
        <hlm-form-field>
          <label hlmLabel>Password</label>
          <input hlmInput type="password" formControlName="password" placeholder="••••••••" />
          <hlm-hint>At least 8 characters.</hlm-hint>
          <hlm-error>Password must be at least 8 characters.</hlm-error>
        </hlm-form-field>
      </form>
    `,
    moduleMetadata: {
      imports,
      providers: [FormBuilder],
    },
    props: {
      form: new FormBuilder().group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      }),
    },
  }),
};

/**
 * Error state: invalid + touched shows hlm-error content.
 */
export const ErrorState: Story = {
  render: () => ({
    template: `
      <hlm-form-field class="block w-full max-w-sm">
        <label hlmLabel>Email</label>
        <input hlmInput type="email" value="invalid" class="ng-invalid ng-touched" />
        <hlm-hint>Enter a valid email.</hlm-hint>
        <hlm-error>Please enter a valid email address.</hlm-error>
      </hlm-form-field>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Hint only (no error). Use for optional or informational helper text.
 */
export const HintOnly: Story = {
  render: () => ({
    template: `
      <hlm-form-field class="block w-full max-w-sm">
        <label hlmLabel>Optional field</label>
        <input hlmInput placeholder="Optional" />
        <hlm-hint>This field is optional. Leave blank if not needed.</hlm-hint>
      </hlm-form-field>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Multiple form fields in a form layout.
 */
export const MultipleFields: Story = {
  render: () => ({
    template: `
      <form class="space-y-4 max-w-sm">
        <hlm-form-field>
          <label hlmLabel>First name</label>
          <input hlmInput placeholder="Jane" />
          <hlm-hint>Your given name.</hlm-hint>
        </hlm-form-field>
        <hlm-form-field>
          <label hlmLabel>Last name</label>
          <input hlmInput placeholder="Doe" />
          <hlm-hint>Your family name.</hlm-hint>
        </hlm-form-field>
        <hlm-form-field>
          <label hlmLabel>Bio</label>
          <textarea hlmTextarea placeholder="A short bio..." rows="3"></textarea>
          <hlm-hint>Max 160 characters.</hlm-hint>
        </hlm-form-field>
      </form>
    `,
    moduleMetadata: { imports },
  }),
};
