import type { Meta, StoryObj } from '@storybook/angular';
import { HlmButtonGroup } from './hlm-button-group';
import { HlmButtonGroupImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta = {
	title: 'Components/ButtonGroup',
	parameters: {
		docs: {
			description: {
				component:
					'Groups buttons (or other controls) with shared borders. Use orientation "horizontal" or "vertical". Optional: hlm-button-group-separator, hlm-button-group-text.',
			},
		},
	},
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
			description: 'Layout direction of the group.',
		},
	},
};
export default meta;

type Story = StoryObj<{
	orientation: 'horizontal' | 'vertical';
}>;

const defaultImports = [HlmButtonGroupImports, HlmButtonImports];

/**
 * Default horizontal group: buttons share borders and rounded corners.
 */
export const Default: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmButtonGroup [orientation]="orientation">
				<button hlmBtn variant="outline">One</button>
				<button hlmBtn variant="outline">Two</button>
				<button hlmBtn variant="outline">Three</button>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Vertical orientation: stacked buttons, borders on sides.
 */
export const Vertical: Story = {
	args: { orientation: 'vertical' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmButtonGroup [orientation]="orientation">
				<button hlmBtn variant="outline">First</button>
				<button hlmBtn variant="outline">Second</button>
				<button hlmBtn variant="outline">Third</button>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * With separator: use hlm-button-group-separator between segments.
 */
export const WithSeparator: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmButtonGroup [orientation]="orientation">
				<button hlmBtn variant="outline">Save</button>
				<button hlmBtn variant="outline">Save as</button>
				<hlm-button-group-separator />
				<button hlmBtn variant="outline">Export</button>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * With text label: use hlm-button-group-text for a non-clickable label segment.
 */
export const WithText: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmButtonGroup [orientation]="orientation">
				<div hlmButtonGroupText>Sort:</div>
				<button hlmBtn variant="outline">A–Z</button>
				<button hlmBtn variant="outline">Z–A</button>
				<button hlmBtn variant="outline">Newest</button>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Vertical group with separator.
 */
export const VerticalWithSeparator: Story = {
	args: { orientation: 'vertical' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmButtonGroup [orientation]="orientation">
				<button hlmBtn variant="outline">Edit</button>
				<button hlmBtn variant="outline">Duplicate</button>
				<hlm-button-group-separator />
				<button hlmBtn variant="outline" class="text-destructive">Delete</button>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Two buttons only (minimal group).
 */
export const TwoButtons: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmButtonGroup [orientation]="orientation">
				<button hlmBtn variant="outline">Cancel</button>
				<button hlmBtn>Confirm</button>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Primary action on the right (common for toolbars).
 */
export const PrimaryOnRight: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: args,
		template: `
			<div hlmButtonGroup [orientation]="orientation">
				<button hlmBtn variant="outline">Back</button>
				<button hlmBtn variant="outline">Reset</button>
				<button hlmBtn>Submit</button>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * All orientations and compositions in one view.
 */
export const AllVariants: Story = {
	render: () => ({
		template: `
			<div class="flex flex-col gap-8">
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">Horizontal</p>
					<div hlmButtonGroup orientation="horizontal">
						<button hlmBtn variant="outline">One</button>
						<button hlmBtn variant="outline">Two</button>
						<button hlmBtn variant="outline">Three</button>
					</div>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">Vertical</p>
					<div hlmButtonGroup orientation="vertical">
						<button hlmBtn variant="outline">First</button>
						<button hlmBtn variant="outline">Second</button>
						<button hlmBtn variant="outline">Third</button>
					</div>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">With separator</p>
					<div hlmButtonGroup orientation="horizontal">
						<button hlmBtn variant="outline">Save</button>
						<button hlmBtn variant="outline">Save as</button>
						<hlm-button-group-separator />
						<button hlmBtn variant="outline">Export</button>
					</div>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">With text label</p>
					<div hlmButtonGroup orientation="horizontal">
						<div hlmButtonGroupText>View:</div>
						<button hlmBtn variant="outline">List</button>
						<button hlmBtn variant="outline">Grid</button>
					</div>
				</div>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};
