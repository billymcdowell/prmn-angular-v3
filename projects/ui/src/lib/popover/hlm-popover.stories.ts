import type { Meta, StoryObj } from '@storybook/angular';
import { HlmPopover } from './hlm-popover';
import { HlmPopoverImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta<HlmPopover> = {
  component: HlmPopover,
  title: 'Components/Popover',
  parameters: {
    docs: {
      description: {
        component:
          'Floating panel opened by a trigger. Use [hlmPopover] on a container, button[hlmPopoverTrigger] to open, and *hlmPopoverPortal with [hlmPopoverContent] for the panel. Supports align, sideOffset, closeOnOutsidePointerEvents, state, etc.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmPopover>;

const imports = [HlmPopoverImports, ...HlmButtonImports];

/**
 * Basic popover: click trigger to open/close.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmPopover>
        <button hlmBtn variant="outline" hlmPopoverTrigger>Open popover</button>
        <div *hlmPopoverPortal hlmPopoverContent>
          <h4 class="font-medium text-sm mb-2">Popover title</h4>
          <p class="text-muted-foreground text-sm">This is the popover content. It can contain any markup.</p>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Popover with form content — e.g. settings or filters.
 */
export const WithForm: Story = {
  render: () => ({
    template: `
      <div hlmPopover>
        <button hlmBtn variant="outline" hlmPopoverTrigger>Filter</button>
        <div *hlmPopoverPortal hlmPopoverContent class="w-64">
          <p class="font-medium text-sm mb-3">Filter by</p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="h-4 w-4 rounded border-input" />
              Option A
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="h-4 w-4 rounded border-input" />
              Option B
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="h-4 w-4 rounded border-input" />
              Option C
            </label>
          </div>
          <div class="mt-4 flex justify-end gap-2">
            <button hlmBtn variant="ghost" size="sm">Reset</button>
            <button hlmBtn size="sm">Apply</button>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Popover with list of actions (e.g. menu).
 */
export const WithActions: Story = {
  render: () => ({
    template: `
      <div hlmPopover>
        <button hlmBtn variant="outline" hlmPopoverTrigger>Actions</button>
        <div *hlmPopoverPortal hlmPopoverContent class="w-48 p-1">
          <button class="hover:bg-accent hover:text-accent-foreground w-full rounded-sm px-2 py-1.5 text-left text-sm">Edit</button>
          <button class="hover:bg-accent hover:text-accent-foreground w-full rounded-sm px-2 py-1.5 text-left text-sm">Duplicate</button>
          <button class="hover:bg-accent hover:text-accent-foreground w-full rounded-sm px-2 py-1.5 text-left text-sm">Share</button>
          <hr class="my-1 border-border" />
          <button class="hover:bg-accent hover:text-accent-foreground w-full rounded-sm px-2 py-1.5 text-left text-sm text-destructive">Delete</button>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Rich content: image, title, description, and CTA.
 */
export const RichContent: Story = {
  render: () => ({
    template: `
      <div hlmPopover>
        <button hlmBtn variant="outline" hlmPopoverTrigger>View offer</button>
        <div *hlmPopoverPortal hlmPopoverContent class="w-80 p-0 overflow-hidden">
          <div class="bg-muted h-24 w-full" />
          <div class="p-4">
            <h4 class="font-semibold text-sm">Special offer</h4>
            <p class="text-muted-foreground mt-1 text-xs">Get 20% off your next order. Use code POP20 at checkout.</p>
            <button hlmBtn size="sm" class="mt-3 w-full">Claim offer</button>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Multiple popovers on the same page.
 */
export const MultiplePopovers: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <div hlmPopover>
          <button hlmBtn variant="outline" hlmPopoverTrigger>Popover 1</button>
          <div *hlmPopoverPortal hlmPopoverContent>
            <p class="text-sm">Content for first popover.</p>
          </div>
        </div>
        <div hlmPopover>
          <button hlmBtn variant="outline" hlmPopoverTrigger>Popover 2</button>
          <div *hlmPopoverPortal hlmPopoverContent>
            <p class="text-sm">Content for second popover.</p>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};
