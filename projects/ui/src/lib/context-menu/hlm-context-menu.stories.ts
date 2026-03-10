import type { Meta, StoryObj } from '@storybook/angular';
import { HlmContextMenuImports } from './index';
import { HlmDropdownMenuImports } from '../dropdown-menu';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideClipboard, lucideCopy, lucidePencil, lucideTrash2 } from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Context Menu',
  parameters: {
    docs: {
      description: {
        component:
          'Right-click menu. Put [hlmContextMenuTrigger]="templateRef" on an element and pass a template ref to a menu (e.g. div with hlmDropdownMenu). Use CDK menu items (e.g. hlmDropdownMenuItem) inside the template. Supports align, side, and disabled.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const menuImports = [
  HlmContextMenuImports,
  HlmDropdownMenuImports,
  HlmIconImports,
];
const iconProviders = [provideIcons({ lucideClipboard, lucideCopy, lucidePencil, lucideTrash2 })];

/**
 * Right-click the card to open the context menu with Copy, Paste, and Delete.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div
        [hlmContextMenuTrigger]="ctxMenu"
        class="flex h-[180px] w-[300px] items-center justify-center rounded-lg border border-dashed bg-muted/50 text-sm text-muted-foreground"
      >
        Right-click here
      </div>
      <ng-template #ctxMenu>
        <div hlmDropdownMenu>
          <button hlmDropdownMenuItem>Copy</button>
          <button hlmDropdownMenuItem>Paste</button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem variant="destructive">Delete</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports: menuImports },
  }),
};

/**
 * Context menu with icons and separators.
 */
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div
        [hlmContextMenuTrigger]="ctxMenu"
        class="flex h-[180px] w-[300px] items-center justify-center rounded-lg border border-dashed bg-muted/50 text-sm text-muted-foreground"
      >
        Right-click for menu with icons
      </div>
      <ng-template #ctxMenu>
        <div hlmDropdownMenu>
          <button hlmDropdownMenuItem>
            <ng-icon name="lucideCopy" />
            Copy
          </button>
          <button hlmDropdownMenuItem>
            <ng-icon name="lucideClipboard" />
            Paste
          </button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem>
            <ng-icon name="lucidePencil" />
            Edit
          </button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem variant="destructive">
            <ng-icon name="lucideTrash2" />
            Delete
          </button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports: menuImports, providers: iconProviders },
  }),
};

/**
 * Disabled trigger: right-click does not open the menu.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div
        [hlmContextMenuTrigger]="ctxMenu"
        [disabled]="true"
        class="flex h-[180px] w-[300px] items-center justify-center rounded-lg border border-dashed bg-muted/30 text-sm text-muted-foreground opacity-60"
      >
        Disabled (right-click does nothing)
      </div>
      <ng-template #ctxMenu>
        <div hlmDropdownMenu>
          <button hlmDropdownMenuItem>Copy</button>
          <button hlmDropdownMenuItem>Paste</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports: menuImports },
  }),
};

/**
 * Multiple trigger areas: each has its own context menu.
 */
export const MultipleAreas: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4">
        <div
          [hlmContextMenuTrigger]="menuA"
          class="flex h-24 w-40 items-center justify-center rounded-lg border bg-muted/50 text-xs"
        >
          Area A
        </div>
        <div
          [hlmContextMenuTrigger]="menuB"
          class="flex h-24 w-40 items-center justify-center rounded-lg border bg-muted/50 text-xs"
        >
          Area B
        </div>
      </div>
      <ng-template #menuA>
        <div hlmDropdownMenu>
          <button hlmDropdownMenuItem>Action A1</button>
          <button hlmDropdownMenuItem>Action A2</button>
        </div>
      </ng-template>
      <ng-template #menuB>
        <div hlmDropdownMenu>
          <button hlmDropdownMenuItem>Action B1</button>
          <button hlmDropdownMenuItem>Action B2</button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem variant="destructive">Remove</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports: menuImports },
  }),
};

/**
 * Destructive item for delete/remove actions.
 */
export const DestructiveItem: Story = {
  render: () => ({
    template: `
      <div
        [hlmContextMenuTrigger]="ctxMenu"
        class="flex h-[180px] w-[300px] items-center justify-center rounded-lg border border-dashed bg-muted/50 text-sm text-muted-foreground"
      >
        Right-click → try "Delete"
      </div>
      <ng-template #ctxMenu>
        <div hlmDropdownMenu>
          <button hlmDropdownMenuItem>Edit</button>
          <button hlmDropdownMenuItem>Duplicate</button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem variant="destructive">Delete</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports: menuImports },
  }),
};
