import type { Meta, StoryObj } from '@storybook/angular';
import { HlmCard } from './hlm-card';
import { HlmCardImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta = {
	title: 'Components/Card',
	parameters: {
		docs: {
			description: {
				component:
					'Card container with optional header, content, footer, and action. Use size "default" or "sm". Sub-components: hlm-card-header, hlm-card-title, hlm-card-description, hlm-card-content, hlm-card-footer, hlm-card-action.',
			},
		},
	},
	argTypes: {
		size: {
			control: 'radio',
			options: ['default', 'sm'],
			description: 'Card padding and typography scale.',
		},
	},
};
export default meta;

type Story = StoryObj<{
	size: 'default' | 'sm';
}>;

const defaultImports = [HlmCardImports, HlmButtonImports];

/**
 * Minimal card with title and content.
 */
export const Default: Story = {
	args: { size: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<hlm-card-header>
					<hlm-card-title>Card title</hlm-card-title>
					<p hlmCardDescription>Short description or subtitle for the card.</p>
				</hlm-card-header>
				<div hlmCardContent>
					<p>Main content goes here. You can put any content in the card body.</p>
				</div>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Small size: reduced padding and smaller title.
 */
export const Small: Story = {
	args: { size: 'sm' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<hlm-card-header>
					<hlm-card-title>Compact card</hlm-card-title>
					<p hlmCardDescription>Use size="sm" for dense layouts.</p>
				</hlm-card-header>
				<div hlmCardContent>
					<p>Content area with less padding.</p>
				</div>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Card with header, content, and footer (e.g. actions).
 */
export const WithFooter: Story = {
	args: { size: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<hlm-card-header>
					<hlm-card-title>Project alpha</hlm-card-title>
					<p hlmCardDescription>Last updated 2 hours ago.</p>
				</hlm-card-header>
				<div hlmCardContent>
					<p>Summary or main body content. Footer can hold buttons or links.</p>
				</div>
				<hlm-card-footer class="border-t">
					<button hlmBtn variant="outline" size="sm">Cancel</button>
					<button hlmBtn size="sm">Save</button>
				</hlm-card-footer>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Header with an action (e.g. menu or link) using hlm-card-action.
 */
export const WithHeaderAction: Story = {
	args: { size: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<hlm-card-header>
					<hlm-card-title>Settings</hlm-card-title>
					<p hlmCardDescription>Manage your preferences.</p>
					<button hlmCardAction hlmBtn variant="ghost" size="icon" aria-label="More options">⋯</button>
				</hlm-card-header>
				<div hlmCardContent>
					<p>Card content with an action in the header (e.g. kebab menu).</p>
				</div>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Card with image on top. First child image gets no top padding and rounded top corners.
 */
export const WithImage: Story = {
	args: { size: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<img src="https://picsum.photos/400/200" alt="Card" class="w-full object-cover" />
				<hlm-card-header>
					<hlm-card-title>Card with image</hlm-card-title>
					<p hlmCardDescription>Image as first child; content below.</p>
				</hlm-card-header>
				<div hlmCardContent>
					<p>Body content below the image.</p>
				</div>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Title only (no description).
 */
export const TitleOnly: Story = {
	args: { size: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<hlm-card-header>
					<hlm-card-title>Simple title</hlm-card-title>
				</hlm-card-header>
				<div hlmCardContent>
					<p>Content without a description in the header.</p>
				</div>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Content only (no header). Use for simple content blocks.
 */
export const ContentOnly: Story = {
	args: { size: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<div hlmCardContent>
					<p>Card with only content—no header or footer. Good for quotes or simple blocks.</p>
				</div>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Full composition: image, header with action, content, footer.
 */
export const FullComposition: Story = {
	args: { size: 'default' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-card [size]="size">
				<img src="https://picsum.photos/400/180" alt="Cover" class="h-40 w-full object-cover" />
				<hlm-card-header>
					<hlm-card-title>Full card example</hlm-card-title>
					<p hlmCardDescription>Header with action, content, and footer.</p>
					<button hlmCardAction hlmBtn variant="ghost" size="sm">Edit</button>
				</hlm-card-header>
				<div hlmCardContent>
					<p>This card uses image, header (with title, description, action), content, and footer with primary and secondary actions.</p>
				</div>
				<hlm-card-footer class="border-t">
					<button hlmBtn variant="outline">Secondary</button>
					<button hlmBtn>Primary</button>
				</hlm-card-footer>
			</hlm-card>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Default and small sizes side by side.
 */
export const AllSizes: Story = {
	render: () => ({
		template: `
			<div class="flex flex-wrap gap-6">
				<hlm-card size="default" class="w-80">
					<hlm-card-header>
						<hlm-card-title>Default size</hlm-card-title>
						<p hlmCardDescription>Larger padding and text.</p>
					</hlm-card-header>
					<div hlmCardContent>
						<p>Content for default card.</p>
					</div>
				</hlm-card>
				<hlm-card size="sm" class="w-80">
					<hlm-card-header>
						<hlm-card-title>Small size</hlm-card-title>
						<p hlmCardDescription>Compact padding and text.</p>
					</hlm-card-header>
					<div hlmCardContent>
						<p>Content for small card.</p>
					</div>
				</hlm-card>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};
