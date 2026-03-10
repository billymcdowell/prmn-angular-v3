import type { Meta, StoryObj } from '@storybook/angular';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { BrnInputOtp } from '@spartan-ng/brain/input-otp';
import { HlmInputOtpImports } from './index';

const meta: Meta = {
  title: 'Components/Input OTP',
  parameters: {
    docs: {
      description: {
        component:
          'One-time password input built with brn-input-otp and Hlm slots. Use hlmInputOtp on brn-input-otp; add hlmInputOtpGroup and hlm-input-otp-slot for each digit. Optional hlm-input-otp-separator between groups.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [BrnInputOtp, ReactiveFormsModule, ...HlmInputOtpImports];

/**
 * Basic 6-digit OTP. Each slot is one character; focus and type to fill.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <brn-input-otp hlmInputOtp maxLength="6">
        <div hlmInputOtpGroup>
          <hlm-input-otp-slot [index]="0" />
          <hlm-input-otp-slot [index]="1" />
          <hlm-input-otp-slot [index]="2" />
          <hlm-input-otp-slot [index]="3" />
          <hlm-input-otp-slot [index]="4" />
          <hlm-input-otp-slot [index]="5" />
        </div>
      </brn-input-otp>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * OTP with separator between two groups of three (e.g. XXX-XXX).
 */
export const WithSeparator: Story = {
  render: () => ({
    template: `
      <brn-input-otp hlmInputOtp maxLength="6">
        <div hlmInputOtpGroup>
          <hlm-input-otp-slot [index]="0" />
          <hlm-input-otp-slot [index]="1" />
          <hlm-input-otp-slot [index]="2" />
        </div>
        <hlm-input-otp-separator />
        <div hlmInputOtpGroup>
          <hlm-input-otp-slot [index]="3" />
          <hlm-input-otp-slot [index]="4" />
          <hlm-input-otp-slot [index]="5" />
        </div>
      </brn-input-otp>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * 4-digit PIN style (e.g. for verification codes).
 */
export const FourDigits: Story = {
  render: () => ({
    template: `
      <brn-input-otp hlmInputOtp maxLength="4">
        <div hlmInputOtpGroup>
          <hlm-input-otp-slot [index]="0" />
          <hlm-input-otp-slot [index]="1" />
          <hlm-input-otp-slot [index]="2" />
          <hlm-input-otp-slot [index]="3" />
        </div>
      </brn-input-otp>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * 8-digit code with two groups of four and separators.
 */
export const EightDigits: Story = {
  render: () => ({
    template: `
      <brn-input-otp hlmInputOtp maxLength="8">
        <div hlmInputOtpGroup>
          <hlm-input-otp-slot [index]="0" />
          <hlm-input-otp-slot [index]="1" />
          <hlm-input-otp-slot [index]="2" />
          <hlm-input-otp-slot [index]="3" />
        </div>
        <hlm-input-otp-separator />
        <div hlmInputOtpGroup>
          <hlm-input-otp-slot [index]="4" />
          <hlm-input-otp-slot [index]="5" />
          <hlm-input-otp-slot [index]="6" />
          <hlm-input-otp-slot [index]="7" />
        </div>
      </brn-input-otp>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Bound to a reactive form control. Use formControlName on brn-input-otp.
 */
export const WithFormControl: Story = {
  render: () => ({
    template: `
      <div class="space-y-2">
        <brn-input-otp hlmInputOtp maxLength="6" [formControl]="otpControl" />
        <p class="text-sm text-muted-foreground">Value: {{ otpControl.value ?? '(empty)' }}</p>
      </div>
    `,
    moduleMetadata: { imports },
    props: {
      otpControl: new FormControl(''),
    },
  }),
};

/**
 * Disabled state. Set disabled on brn-input-otp.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <brn-input-otp hlmInputOtp maxLength="6" [disabled]="true">
        <div hlmInputOtpGroup>
          <hlm-input-otp-slot [index]="0" />
          <hlm-input-otp-slot [index]="1" />
          <hlm-input-otp-slot [index]="2" />
          <hlm-input-otp-slot [index]="3" />
          <hlm-input-otp-slot [index]="4" />
          <hlm-input-otp-slot [index]="5" />
        </div>
      </brn-input-otp>
    `,
    moduleMetadata: { imports },
  }),
};
