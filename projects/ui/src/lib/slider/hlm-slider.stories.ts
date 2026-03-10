import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSlider } from './hlm-slider';
import { HlmSliderImports } from './index';

const meta: Meta<HlmSlider> = {
  component: HlmSlider,
  title: 'Components/Slider',
  parameters: {
    docs: {
      description: {
        component:
          'Range input as a track with one or more thumbs. Supports min, max, step, single value or range, vertical orientation, ticks, and disabled state. Use with forms or reactive value binding.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSlider>;

const defaultImports = [HlmSliderImports];

/**
 * Default single-thumb slider. Value 50, range 0–100.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div class="w-64 space-y-2">
        <label class="text-sm font-medium">Volume</label>
        <hlm-slider [value]="50" [min]="0" [max]="100" [step]="1" aria-label="Volume"></hlm-slider>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Slider with a default value and step. Useful for percentages or opacity.
 */
export const WithStep: Story = {
  render: () => ({
    template: `
      <div class="w-64 space-y-2">
        <label class="text-sm font-medium">Opacity</label>
        <hlm-slider [value]="80" [min]="0" [max]="100" [step]="10" aria-label="Opacity"></hlm-slider>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Range slider: two thumbs for min/max selection (e.g. price range).
 */
export const Range: Story = {
  render: () => ({
    template: `
      <div class="w-64 space-y-2">
        <label class="text-sm font-medium">Price range</label>
        <hlm-slider [value]="[20, 80]" [min]="0" [max]="100" [step]="1" [draggableRange]="true" aria-label="Price range"></hlm-slider>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Vertical orientation. Use for volume or height controls.
 */
export const Vertical: Story = {
  render: () => ({
    template: `
      <div class="flex h-48 items-center gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Vertical</label>
          <hlm-slider [value]="60" [min]="0" [max]="100" orientation="vertical" aria-label="Value" class="h-40"></hlm-slider>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * With tick marks and labels. Good for discrete steps (e.g. 1–5).
 */
export const WithTicks: Story = {
  render: () => ({
    template: `
      <div class="w-64 space-y-2">
        <label class="text-sm font-medium">Rating</label>
        <hlm-slider [value]="3" [min]="1" [max]="5" [step]="1" [showTicks]="true" [maxTicks]="5" aria-label="Rating"></hlm-slider>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Disabled state. Not interactive, visually muted.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="w-64 space-y-2">
        <label class="text-sm font-medium text-muted-foreground">Disabled</label>
        <hlm-slider [value]="40" [min]="0" [max]="100" [disabled]="true" aria-label="Disabled"></hlm-slider>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Inverted slider (right-to-left or bottom-to-top).
 */
export const Inverted: Story = {
  render: () => ({
    template: `
      <div class="w-64 space-y-2">
        <label class="text-sm font-medium">Inverted</label>
        <hlm-slider [value]="30" [min]="0" [max]="100" [inverted]="true" aria-label="Inverted"></hlm-slider>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Multiple sliders in a form (e.g. settings panel).
 */
export const FormGroup: Story = {
  render: () => ({
    template: `
      <div class="w-80 space-y-6 rounded-lg border p-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Brightness</label>
          <hlm-slider [value]="70" [min]="0" [max]="100" aria-label="Brightness"></hlm-slider>
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Contrast</label>
          <hlm-slider [value]="50" [min]="0" [max]="100" aria-label="Contrast"></hlm-slider>
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Saturation</label>
          <hlm-slider [value]="80" [min]="0" [max]="100" aria-label="Saturation"></hlm-slider>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
