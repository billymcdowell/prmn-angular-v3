import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTooltip } from './hlm-tooltip';
import { HlmTooltipImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta<HlmTooltip> = {
  component: HlmTooltip,
  title: 'Components/Tooltip',
  parameters: {
    docs: {
      description: {
        component:
          'Hover (or focus) trigger shows a small popover with text. Use hlmTooltip="Your text" on the trigger. Supports position (top, bottom, left, right), showDelay, hideDelay, and tooltipDisabled.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmTooltip>;

const defaultImports = [HlmTooltipImports, HlmButtonImports];

/**
 * Default tooltip on a button. Hover to show.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" hlmTooltip="Save your changes">
        Save
      </button>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Position: top. Tooltip appears above the trigger.
 */
export const PositionTop: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" hlmTooltip="Tooltip on top" position="top">
        Hover me
      </button>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Position: bottom (default in many implementations).
 */
export const PositionBottom: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" hlmTooltip="Tooltip below" position="bottom">
        Hover me
      </button>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Position: left and right.
 */
export const PositionLeftRight: Story = {
  render: () => ({
    template: `
      <div class="flex gap-8">
        <button hlmBtn variant="outline" hlmTooltip="Tooltip on left" position="left">Left</button>
        <button hlmBtn variant="outline" hlmTooltip="Tooltip on right" position="right">Right</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * On a link or icon. Use for icon-only buttons to clarify meaning.
 */
export const OnIconButton: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="ghost" size="icon" hlmTooltip="Edit item" aria-label="Edit">
        Edit
      </button>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * On disabled element: wrap in span so tooltip can still show (tooltip on disabled buttons often doesn't fire).
 */
export const OnDisabled: Story = {
  render: () => ({
    template: `
      <span hlmTooltip="This action is disabled">
        <button hlmBtn variant="outline" disabled>Disabled</button>
      </span>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Long tooltip text. Content wraps; keep concise when possible.
 */
export const LongContent: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" hlmTooltip="This is a longer tooltip that might wrap onto two or three lines depending on width.">
        Long tooltip
      </button>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
