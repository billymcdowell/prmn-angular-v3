import type { Meta, StoryObj } from '@storybook/angular';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HlmFieldImports } from './index';
import { HlmInputImports } from '../input';
import { HlmCheckboxImports } from '../checkbox';

const meta: Meta = {
  title: 'Components/Field',
  parameters: {
    docs: {
      description: {
        component:
          'Low-level field layout primitives used to build accessible form fields and groups with labels, descriptions and error messages. Combine `hlm-field`, `hlm-field-content`, `hlm-field-description`, `hlm-field-error`, `hlm-field-set`, and `hlm-field-group` for more complex layouts.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [
  HlmFieldImports,
  HlmInputImports,
  HlmCheckboxImports,
  ReactiveFormsModule,
];

/**
 * Basic vertical text field with label, description and input.
 */
export const VerticalTextField: Story = {
  render: () => ({
    template: `
      <div class="max-w-sm space-y-4">
        <div hlmField>
          <hlm-field-title>Email address</hlm-field-title>
          <hlm-field-content>
            <input hlmInput type="email" placeholder="you@example.com" />
            <p hlm-field-description>
              We'll never share your email. Use a valid address you have access to.
            </p>
          </hlm-field-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Horizontal layout, useful when you want the label and control on a single row.
 */
export const HorizontalField: Story = {
  render: () => ({
    template: `
      <div class="max-w-xl space-y-4">
        <div hlmField orientation="horizontal">
          <hlm-field-title>Display name</hlm-field-title>
          <hlm-field-content>
            <input hlmInput class="w-64" placeholder="Jane Doe" />
            <p hlm-field-description>
              This name will be visible to other users.
            </p>
          </hlm-field-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Responsive layout switches from vertical on mobile to horizontal on larger screens.
 */
export const ResponsiveField: Story = {
  render: () => ({
    template: `
      <div class="max-w-xl space-y-4">
        <div hlmField orientation="responsive">
          <hlm-field-title>Job title</hlm-field-title>
          <hlm-field-content>
            <input hlmInput class="w-full md:w-80" placeholder="Senior Product Designer" />
            <p hlm-field-description>
              Helps teammates understand your role when collaborating.
            </p>
          </hlm-field-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Field set with legend and multiple checkbox options, typical for preference groups.
 */
export const CheckboxGroupFieldSet: Story = {
  render: () => ({
    template: `
      <fieldset hlmFieldSet class="max-w-md">
        <legend hlmFieldLegend variant="legend">Email notifications</legend>
        <p hlm-field-description>
          Choose which updates you would like to receive.
        </p>

        <div hlm-field-group data-slot="checkbox-group">
          <label hlmFieldLabel>
            <hlm-field>
              <hlm-field-content>
                <div class="flex items-start gap-3">
                  <input type="checkbox" hlmCheckbox />
                  <div class="space-y-1">
                    <hlm-field-title>Product updates</hlm-field-title>
                    <p hlm-field-description>
                      Be the first to know about new features and improvements.
                    </p>
                  </div>
                </div>
              </hlm-field-content>
            </hlm-field>
          </label>

          <label hlmFieldLabel>
            <hlm-field>
              <hlm-field-content>
                <div class="flex items-start gap-3">
                  <input type="checkbox" hlmCheckbox />
                  <div class="space-y-1">
                    <hlm-field-title>Security alerts</hlm-field-title>
                    <p hlm-field-description>
                      Important notifications about unusual activity or account changes.
                    </p>
                  </div>
                </div>
              </hlm-field-content>
            </hlm-field>
          </label>
        </div>
      </fieldset>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Reactive form example showing multiple error messages with `hlm-field-error`.
 */
export const WithErrorsReactive: Story = {
  render: () => ({
    template: `
      <form [formGroup]="form" class="space-y-6 max-w-sm">
        <div hlmField>
          <hlm-field-title>Password</hlm-field-title>
          <hlm-field-content>
            <input
              hlmInput
              type="password"
              formControlName="password"
              placeholder="••••••••"
            />
            <p hlm-field-description>
              Must be at least 8 characters and contain a number.
            </p>
            <hlm-field-error
              [error]="passwordErrors"
            ></hlm-field-error>
          </hlm-field-content>
        </div>
      </form>
    `,
    moduleMetadata: {
      imports,
      providers: [FormBuilder],
    },
    props: {
      form: new FormBuilder().group({
        password: ['', [Validators.required, Validators.minLength(8)]],
      }),
      get passwordErrors() {
        const control = (this as any).form.get('password');
        if (!control || !control.touched && !control.dirty) {
          return [];
        }
        const errors = control.errors ?? {};
        const results: Array<{ message: string }> = [];

        if (errors['required']) {
          results.push({ message: 'Password is required.' });
        }
        if (errors['minlength']) {
          results.push({ message: 'Password must be at least 8 characters.' });
        }

        return results;
      },
    },
  }),
};
