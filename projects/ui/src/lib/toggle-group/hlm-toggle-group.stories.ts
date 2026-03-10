import type { Meta, StoryObj } from '@storybook/angular';
import { Component, signal } from '@angular/core';
import { HlmToggleGroup } from './hlm-toggle-group';
import { HlmToggleGroupImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideAlignLeft, lucideAlignCenter, lucideAlignRight, lucideBold, lucideItalic } from '@ng-icons/lucide';

@Component({
  selector: 'story-toggle-group-demo',
  standalone: true,
  imports: [HlmToggleGroupImports, HlmIconImports],
  template: `
    <div hlmToggleGroup type="single" [value]="value()" (valueChange)="value.set($event)">
      <button hlmToggleGroupItem value="left" aria-label="Align left">
        <ng-icon name="lucideAlignLeft" />
      </button>
      <button hlmToggleGroupItem value="center" aria-label="Align center">
        <ng-icon name="lucideAlignCenter" />
      </button>
      <button hlmToggleGroupItem value="right" aria-label="Align right">
        <ng-icon name="lucideAlignRight" />
      </button>
    </div>
  `,
})
class StoryToggleGroupDemo {
  value = signal('center');
}

const meta: Meta<HlmToggleGroup> = {
  component: HlmToggleGroup,
  title: 'Components/Toggle Group',
  parameters: {
    docs: {
      description: {
        component:
          'Group of toggle buttons with single or multiple selection. Use type="single" (one value) or type="multiple" (array). Variants and sizes match toggle (default, outline; default, sm, lg). Use spacing to add gap between items.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmToggleGroup>;

const defaultImports = [HlmToggleGroupImports];
const iconProviders = [provideIcons({ lucideAlignLeft, lucideAlignCenter, lucideAlignRight, lucideBold, lucideItalic })];

/**
 * Single selection: one item active at a time (e.g. alignment).
 */
export const Single: Story = {
  render: () => ({
    template: `<story-toggle-group-demo />`,
    moduleMetadata: { imports: [StoryToggleGroupDemo] },
  }),
};

/**
 * Outline variant, single selection.
 */
export const SingleOutline: Story = {
  render: () => ({
    template: `
      <div hlmToggleGroup type="single" value="center" variant="outline">
        <button hlmToggleGroupItem value="left">Left</button>
        <button hlmToggleGroupItem value="center">Center</button>
        <button hlmToggleGroupItem value="right">Right</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Multiple selection: several items can be on (e.g. bold + italic).
 */
export const Multiple: Story = {
  render: () => ({
    template: `
      <div hlmToggleGroup type="multiple" [value]="[]">
        <button hlmToggleGroupItem value="bold" aria-label="Bold">
          <ng-icon name="lucideBold" />
        </button>
        <button hlmToggleGroupItem value="italic" aria-label="Italic">
          <ng-icon name="lucideItalic" />
        </button>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: iconProviders,
    },
  }),
};

/**
 * Sizes: sm and lg.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4">
        <div hlmToggleGroup type="single" value="a" size="sm">
          <button hlmToggleGroupItem value="a">A</button>
          <button hlmToggleGroupItem value="b">B</button>
        </div>
        <div hlmToggleGroup type="single" value="a" size="lg">
          <button hlmToggleGroupItem value="a">A</button>
          <button hlmToggleGroupItem value="b">B</button>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * With spacing between items (e.g. spacing="2" for gap).
 */
export const WithSpacing: Story = {
  render: () => ({
    template: `
      <div hlmToggleGroup type="single" value="m" [spacing]="2" variant="outline">
        <button hlmToggleGroupItem value="s">S</button>
        <button hlmToggleGroupItem value="m">M</button>
        <button hlmToggleGroupItem value="l">L</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Disabled group.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div hlmToggleGroup type="single" value="one" [disabled]="true">
        <button hlmToggleGroupItem value="one">One</button>
        <button hlmToggleGroupItem value="two">Two</button>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
