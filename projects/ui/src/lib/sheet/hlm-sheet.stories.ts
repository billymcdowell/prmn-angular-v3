import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSheet } from './hlm-sheet';
import { HlmSheetImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta<HlmSheet> = {
  component: HlmSheet,
  title: 'Components/Sheet',
  parameters: {
    docs: {
      description: {
        component:
          'Slide-out panel from the edge of the screen. Use for filters, settings, or secondary content. Supports side: top, bottom, left, right. Composed with trigger, portal, content, header, title, description, footer, and close.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSheet>;

const defaultImports = [HlmSheetImports, HlmButtonImports];

/**
 * Default: sheet opens from the right. Trigger button opens the panel with header, description, and footer.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-sheet>
        <button hlmBtn variant="outline" hlmSheetTrigger>Open sheet</button>
        <hlm-sheet-content *hlmSheetPortal side="right">
          <hlm-sheet-header>
            <h2 hlmSheetTitle>Edit profile</h2>
            <p hlmSheetDescription>Update your details and preferences here.</p>
          </hlm-sheet-header>
          <div class="py-6 text-sm text-muted-foreground">
            Sheet content area. Add forms, lists, or any content.
          </div>
          <hlm-sheet-footer>
            <button hlmBtn>Save</button>
          </hlm-sheet-footer>
        </hlm-sheet-content>
      </hlm-sheet>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Sheet from the left side. Common for navigation or filters.
 */
export const SideLeft: Story = {
  render: () => ({
    template: `
      <hlm-sheet>
        <button hlmBtn variant="outline" hlmSheetTrigger [side]="'left'">Open left</button>
        <hlm-sheet-content *hlmSheetPortal side="left">
          <hlm-sheet-header>
            <h2 hlmSheetTitle>Filters</h2>
            <p hlmSheetDescription>Narrow down your results.</p>
          </hlm-sheet-header>
          <div class="py-6 text-sm text-muted-foreground">
            Filter options go here.
          </div>
          <hlm-sheet-footer>
            <button hlmBtn variant="secondary">Reset</button>
            <button hlmBtn>Apply</button>
          </hlm-sheet-footer>
        </hlm-sheet-content>
      </hlm-sheet>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Sheet from the top. Useful for notifications or compact forms.
 */
export const SideTop: Story = {
  render: () => ({
    template: `
      <hlm-sheet>
        <button hlmBtn variant="outline" hlmSheetTrigger [side]="'top'">Open top</button>
        <hlm-sheet-content *hlmSheetPortal side="top">
          <hlm-sheet-header>
            <h2 hlmSheetTitle>Quick actions</h2>
            <p hlmSheetDescription>Choose an action below.</p>
          </hlm-sheet-header>
          <div class="py-4 text-sm text-muted-foreground">
            Top sheet content.
          </div>
        </hlm-sheet-content>
      </hlm-sheet>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Sheet from the bottom. Good for mobile-style action sheets.
 */
export const SideBottom: Story = {
  render: () => ({
    template: `
      <hlm-sheet>
        <button hlmBtn variant="outline" hlmSheetTrigger [side]="'bottom'">Open bottom</button>
        <hlm-sheet-content *hlmSheetPortal side="bottom">
          <hlm-sheet-header>
            <h2 hlmSheetTitle>Options</h2>
            <p hlmSheetDescription>Select an option.</p>
          </hlm-sheet-header>
          <div class="py-6 text-sm text-muted-foreground">
            Bottom sheet content.
          </div>
        </hlm-sheet-content>
      </hlm-sheet>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Without the close button in the corner. Use when you only want footer/header actions.
 */
export const WithoutCloseButton: Story = {
  render: () => ({
    template: `
      <hlm-sheet>
        <button hlmBtn variant="outline" hlmSheetTrigger>Open (no X)</button>
        <hlm-sheet-content *hlmSheetPortal [showCloseButton]="false">
          <hlm-sheet-header>
            <h2 hlmSheetTitle>No close button</h2>
            <p hlmSheetDescription>Use footer buttons to close.</p>
          </hlm-sheet-header>
          <div class="py-6 text-sm">Close via overlay or footer.</div>
          <hlm-sheet-footer>
            <button hlmBtn variant="outline">Cancel</button>
            <button hlmBtn>Confirm</button>
          </hlm-sheet-footer>
        </hlm-sheet-content>
      </hlm-sheet>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Minimal sheet: content only, no header or footer.
 */
export const ContentOnly: Story = {
  render: () => ({
    template: `
      <hlm-sheet>
        <button hlmBtn variant="outline" hlmSheetTrigger>Open minimal</button>
        <hlm-sheet-content *hlmSheetPortal>
          <div class="py-6 text-sm">
            Just content. Header and footer are optional.
          </div>
        </hlm-sheet-content>
      </hlm-sheet>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Form use case: multiple fields and actions in footer.
 */
export const WithForm: Story = {
  render: () => ({
    template: `
      <hlm-sheet>
        <button hlmBtn variant="outline" hlmSheetTrigger>Edit settings</button>
        <hlm-sheet-content *hlmSheetPortal>
          <hlm-sheet-header>
            <h2 hlmSheetTitle>Settings</h2>
            <p hlmSheetDescription>Update your preferences.</p>
          </hlm-sheet-header>
          <div class="grid gap-4 py-6">
            <div class="grid gap-2">
              <label class="text-sm font-medium">Name</label>
              <input class="border-input flex h-9 w-full rounded-md border px-3 py-1 text-sm" placeholder="Your name" />
            </div>
            <div class="grid gap-2">
              <label class="text-sm font-medium">Email</label>
              <input class="border-input flex h-9 w-full rounded-md border px-3 py-1 text-sm" type="email" placeholder="you@example.com" />
            </div>
          </div>
          <hlm-sheet-footer>
            <button hlmBtn variant="outline">Cancel</button>
            <button hlmBtn>Save changes</button>
          </hlm-sheet-footer>
        </hlm-sheet-content>
      </hlm-sheet>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
