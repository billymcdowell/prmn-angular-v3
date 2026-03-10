import type { Meta, StoryObj } from '@storybook/angular';
import { NgFor } from '@angular/common';
import { HlmCarousel } from './hlm-carousel';
import { HlmCarouselImports } from './index';

const meta: Meta<HlmCarousel> = {
	component: HlmCarousel,
	title: 'Components/Carousel',
	parameters: {
		docs: {
			description: {
				component:
					'Carousel/slider built on Embla. Use hlm-carousel-content and hlm-carousel-item for slides. Optional: hlm-carousel-previous, hlm-carousel-next, hlm-carousel-slide-display. orientation: "horizontal" or "vertical".',
			},
		},
	},
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical'],
			description: 'Scroll direction.',
		},
	},
};
export default meta;

type Story = StoryObj<{
	orientation: 'horizontal' | 'vertical';
}>;

const defaultImports = [HlmCarouselImports, NgFor];

/**
 * Basic horizontal carousel with three slides.
 */
const slideNumbers = [1, 2, 3];

export const Default: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: { ...args, slideNumbers },
		template: `
			<hlm-carousel [orientation]="orientation" class="w-full max-w-md">
				<hlm-carousel-content>
					<hlm-carousel-item *ngFor="let i of slideNumbers">
						<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-8">
							<span class="text-4xl font-semibold">Slide {{ i }}</span>
						</div>
					</hlm-carousel-item>
				</hlm-carousel-content>
			</hlm-carousel>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Carousel with previous/next buttons and slide counter.
 */
export const WithControls: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: { ...args, slideNumbers: [1, 2, 3, 4] },
		template: `
			<div class="relative w-full max-w-md">
				<hlm-carousel [orientation]="orientation">
					<hlm-carousel-content>
						<hlm-carousel-item *ngFor="let i of slideNumbers">
							<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-8">
								<span class="text-4xl font-semibold">Slide {{ i }}</span>
							</div>
						</hlm-carousel-item>
					</hlm-carousel-content>
					<button hlm-carousel-previous aria-label="Previous slide"></button>
					<button hlm-carousel-next aria-label="Next slide"></button>
				</hlm-carousel>
				<div class="mt-4 flex justify-center">
					<hlm-carousel-slide-display />
				</div>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Vertical orientation: slides stack and scroll vertically.
 */
export const Vertical: Story = {
	args: { orientation: 'vertical' },
	render: (args) => ({
		props: { ...args, slideNumbers },
		template: `
			<div class="relative h-80 max-w-md">
				<hlm-carousel [orientation]="orientation" class="h-full">
					<hlm-carousel-content>
						<hlm-carousel-item *ngFor="let i of slideNumbers">
							<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-6">
								<span class="text-2xl font-semibold">Slide {{ i }}</span>
							</div>
						</hlm-carousel-item>
					</hlm-carousel-content>
					<button hlm-carousel-previous aria-label="Previous"></button>
					<button hlm-carousel-next aria-label="Next"></button>
				</hlm-carousel>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Custom slide display label for accessibility.
 */
export const CustomSlideDisplayLabel: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: { ...args, slideNumbers },
		template: `
			<div class="relative w-full max-w-md">
				<hlm-carousel [orientation]="orientation">
					<hlm-carousel-content>
						<hlm-carousel-item *ngFor="let i of slideNumbers">
							<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-8">
								<span class="text-4xl font-semibold">Slide {{ i }}</span>
							</div>
						</hlm-carousel-item>
					</hlm-carousel-content>
					<button hlm-carousel-previous></button>
					<button hlm-carousel-next></button>
				</hlm-carousel>
				<hlm-carousel-slide-display label="Image" class="mt-2 block text-center text-sm text-muted-foreground" />
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Single slide (no navigation needed).
 */
export const SingleSlide: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: args,
		template: `
			<hlm-carousel [orientation]="orientation" class="w-full max-w-md">
				<hlm-carousel-content>
					<hlm-carousel-item>
						<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-8">
							<span class="text-2xl">Only one slide</span>
						</div>
					</hlm-carousel-item>
				</hlm-carousel-content>
			</hlm-carousel>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Many slides to show scroll behavior.
 */
export const ManySlides: Story = {
	args: { orientation: 'horizontal' },
	render: (args) => ({
		props: { ...args, slides: Array.from({ length: 8 }, (_, i) => i + 1) },
		template: `
			<div class="relative w-full max-w-md">
				<hlm-carousel [orientation]="orientation">
					<hlm-carousel-content>
						<hlm-carousel-item *ngFor="let s of slides">
							<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-6">
								<span class="text-2xl font-semibold">Slide {{ s }}</span>
							</div>
						</hlm-carousel-item>
					</hlm-carousel-content>
					<button hlm-carousel-previous></button>
					<button hlm-carousel-next></button>
				</hlm-carousel>
				<hlm-carousel-slide-display class="mt-2 block text-center text-sm" />
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};

/**
 * Horizontal and vertical with controls in one view.
 */
export const AllVariants: Story = {
	render: () => ({
		props: { slides: [1, 2, 3] },
		template: `
			<div class="flex flex-col gap-12">
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">Horizontal with controls</p>
					<div class="relative w-full max-w-sm">
						<hlm-carousel orientation="horizontal">
							<hlm-carousel-content>
								<hlm-carousel-item *ngFor="let i of slides">
									<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-8">Slide {{ i }}</div>
								</hlm-carousel-item>
							</hlm-carousel-content>
							<button hlm-carousel-previous></button>
							<button hlm-carousel-next></button>
						</hlm-carousel>
						<hlm-carousel-slide-display class="mt-2 block text-center text-sm" />
					</div>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-muted-foreground">Vertical with controls</p>
					<div class="relative h-64 w-64">
						<hlm-carousel orientation="vertical" class="h-full">
							<hlm-carousel-content>
								<hlm-carousel-item *ngFor="let i of slides">
									<div class="flex size-full items-center justify-center rounded-md border bg-muted/50 p-4">Slide {{ i }}</div>
								</hlm-carousel-item>
							</hlm-carousel-content>
							<button hlm-carousel-previous></button>
							<button hlm-carousel-next></button>
						</hlm-carousel>
					</div>
				</div>
			</div>
		`,
		moduleMetadata: { imports: defaultImports },
	}),
};
