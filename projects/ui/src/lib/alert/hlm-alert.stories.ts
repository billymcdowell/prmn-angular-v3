import type { Meta, StoryObj } from '@storybook/angular';
import { HlmAlert } from './hlm-alert';
import type { AlertVariants } from './hlm-alert';
import { HlmAlertImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideInfo, lucideAlertCircle } from '@ng-icons/lucide';

const meta: Meta<HlmAlert> = {
	title: 'Components/Alert',
	component: HlmAlert,
	parameters: {
		docs: {
			description: {
				component:
					'Alert for important messages. Use variant "default" for neutral info and "destructive" for errors or warnings. Optional: hlmAlertTitle, hlmAlertDescription, hlmAlertIcon.',
			},
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'destructive'],
			description: 'Visual style of the alert.',
		},
	},
};
export default meta;

type Story = StoryObj<AlertVariants>;

const defaultImports = [HlmAlertImports];
const iconProviders = [provideIcons({ lucideInfo, lucideAlertCircle })];

/**
 * Default variant: neutral background, suitable for general information.
 */
export const Default: Story = {
	args: { variant: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmAlert [variant]="variant">
				<hlm-alert-title>Alert title</hlm-alert-title>
				<p hlmAlertDescription>This is the default alert with a title and description.</p>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Destructive variant: for errors, warnings, or critical messages.
 */
export const Destructive: Story = {
	args: { variant: 'destructive' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmAlert [variant]="variant">
				<hlm-alert-title>Error</hlm-alert-title>
				<p hlmAlertDescription>Your session has expired. Please sign in again.</p>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * With icon. Use hlmAlertIcon on ng-icon for consistent alignment.
 */
export const WithIcon: Story = {
	args: { variant: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmAlert [variant]="variant">
				<ng-icon hlmAlertIcon name="lucideInfo" />
				<hlm-alert-title>Heads up</hlm-alert-title>
				<p hlmAlertDescription>You can add an icon to draw attention to the alert.</p>
			</div>
		`,
		moduleMetadata: {
			imports: [...defaultImports, HlmIconImports],
			providers: iconProviders,
		},
	}),
};

/**
 * Destructive alert with icon for errors or warnings.
 */
export const DestructiveWithIcon: Story = {
	args: { variant: 'destructive' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmAlert [variant]="variant">
				<ng-icon hlmAlertIcon name="lucideAlertCircle" />
				<hlm-alert-title>Something went wrong</hlm-alert-title>
				<p hlmAlertDescription>We couldn't save your changes. Please try again or contact support.</p>
			</div>
		`,
		moduleMetadata: {
			imports: [...defaultImports, HlmIconImports],
			providers: iconProviders,
		},
	}),
};

/**
 * Title only, no description. Use for short notices.
 */
export const TitleOnly: Story = {
	args: { variant: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmAlert [variant]="variant">
				<hlm-alert-title>Maintenance scheduled for tonight at 10 PM</hlm-alert-title>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Description only (no title). Use hlmAlertDescription on the paragraph.
 */
export const DescriptionOnly: Story = {
	args: { variant: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmAlert [variant]="variant">
				<p hlmAlertDescription>This alert has no title—only a description. Good for brief inline messages.</p>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Long content: multiple paragraphs or detailed text.
 */
export const LongContent: Story = {
	args: { variant: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmAlert [variant]="variant">
				<ng-icon hlmAlertIcon name="lucideInfo" />
				<hlm-alert-title>Privacy policy update</hlm-alert-title>
				<div hlmAlertDescription>
					<p>We've updated our privacy policy effective next month. Key changes include how we handle analytics data and cookie consent.</p>
					<p>Please review the full policy and accept the new terms to continue using the service.</p>
				</div>
			</div>
		`,
		moduleMetadata: {
			imports: [...defaultImports, HlmIconImports],
			providers: iconProviders,
		},
	}),
};

/**
 * All variants side by side for comparison.
 */
export const AllVariants: Story = {
	render: () => ({
		template: `
			<div class="flex flex-col gap-4">
				<div hlmAlert variant="default">
					<ng-icon hlmAlertIcon name="lucideInfo" />
					<hlm-alert-title>Default</hlm-alert-title>
					<p hlmAlertDescription>Neutral informational message.</p>
				</div>
				<div hlmAlert variant="destructive">
					<ng-icon hlmAlertIcon name="lucideAlertCircle" />
					<hlm-alert-title>Destructive</hlm-alert-title>
					<p hlmAlertDescription>Error or warning message.</p>
				</div>
			</div>
		`,
		moduleMetadata: {
			imports: [...defaultImports, HlmIconImports],
			providers: iconProviders,
		},
	}),
};
