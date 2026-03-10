import type { Meta, StoryObj } from '@storybook/angular';
import { NgFor } from '@angular/common';
import { HlmCheckbox } from './hlm-checkbox';

const meta: Meta<HlmCheckbox> = {
	component: HlmCheckbox,
	title: 'Components/Checkbox',
	parameters: {
		docs: {
			description: {
				component:
					'Checkbox with checked, unchecked, and indeterminate states. Supports disabled, required, and works with ngModel/forms. Use aria-label or aria-labelledby for accessibility.',
			},
		},
	},
	argTypes: {
		checked: {
			control: 'boolean',
			description: 'Checked state.',
		},
		indeterminate: {
			control: 'boolean',
			description: 'Indeterminate state (e.g. "select all" when some items selected).',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the checkbox.',
		},
		required: {
			control: 'boolean',
			description: 'Required for form validation.',
		},
	},
};
export default meta;

type Story = StoryObj<{
	checked?: boolean;
	indeterminate?: boolean;
	disabled?: boolean;
	required?: boolean;
}>;

const defaultImports = [HlmCheckbox, NgFor];

/**
 * Unchecked (default) state.
 */
export const Default: Story = {
	args: { checked: false },
	render: (args) => ({
		props: args,
		template: `
			<label class="flex cursor-pointer items-center gap-2">
				<hlm-checkbox [checked]="checked" (checkedChange)="checked = $event" aria-label="Accept terms" />
				<span>Accept terms and conditions</span>
			</label>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Checked state.
 */
export const Checked: Story = {
	args: { checked: true },
	render: (args) => ({
		props: args,
		template: `
			<label class="flex cursor-pointer items-center gap-2">
				<hlm-checkbox [checked]="checked" (checkedChange)="checked = $event" aria-label="Subscribe" />
				<span>Subscribe to newsletter</span>
			</label>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Indeterminate state (e.g. "select all" when only some rows are selected).
 */
export const Indeterminate: Story = {
	args: { checked: false, indeterminate: true },
	render: (args) => ({
		props: args,
		template: `
			<label class="flex cursor-pointer items-center gap-2">
				<hlm-checkbox [checked]="checked" [indeterminate]="indeterminate" (checkedChange)="checked = $event; indeterminate = false" aria-label="Select all" />
				<span>Select all</span>
			</label>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Disabled state: not interactive, muted appearance.
 */
export const Disabled: Story = {
	args: { checked: false, disabled: true },
	render: (args) => ({
		props: args,
		template: `
			<div class="flex flex-col gap-4">
				<label class="flex cursor-not-allowed items-center gap-2 opacity-70">
					<hlm-checkbox [checked]="false" [disabled]="disabled" aria-label="Disabled unchecked" />
					<span>Disabled unchecked</span>
				</label>
				<label class="flex cursor-not-allowed items-center gap-2 opacity-70">
					<hlm-checkbox [checked]="true" [disabled]="disabled" aria-label="Disabled checked" />
					<span>Disabled checked</span>
				</label>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Required checkbox (e.g. for consent in forms).
 */
export const Required: Story = {
	args: { checked: false, required: true },
	render: (args) => ({
		props: args,
		template: `
			<label class="flex cursor-pointer items-center gap-2">
				<hlm-checkbox [checked]="checked" [required]="required" (checkedChange)="checked = $event" aria-label="Required consent" />
				<span>I agree to the terms <span class="text-destructive">*</span></span>
			</label>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * With aria-label for screen readers (no visible label).
 */
export const WithAriaLabel: Story = {
	args: { checked: false },
	render: (args) => ({
		props: { ...args, ariaLabel: 'Enable notifications' },
		template: `
			<hlm-checkbox [checked]="checked" (checkedChange)="checked = $event" [aria-label]="ariaLabel" />
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * With visible label using aria-labelledby (associate label by id).
 */
export const WithLabelledBy: Story = {
	args: { checked: false },
	render: (args) => ({
		props: args,
		template: `
			<div class="flex items-center gap-2">
				<hlm-checkbox id="cb-1" [checked]="checked" (checkedChange)="checked = $event" aria-labelledby="label-1" />
				<span id="label-1">Remember me</span>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Checkbox in a simple form list (multiple options).
 */
export const FormList: Story = {
	render: () => ({
		props: {
			items: [
				{ id: 'a', label: 'Option A', checked: false },
				{ id: 'b', label: 'Option B', checked: true },
				{ id: 'c', label: 'Option C', checked: false },
			],
		},
		template: `
			<fieldset class="flex flex-col gap-3">
				<legend class="text-sm font-medium">Select options</legend>
				<label *ngFor="let item of items" class="flex cursor-pointer items-center gap-2">
					<hlm-checkbox [checked]="item.checked" (checkedChange)="item.checked = $event" [aria-label]="item.label" />
					<span>{{ item.label }}</span>
				</label>
			</fieldset>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};
