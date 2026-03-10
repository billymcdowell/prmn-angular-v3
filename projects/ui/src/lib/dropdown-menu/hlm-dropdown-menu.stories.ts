import type { Meta, StoryObj } from '@storybook/angular';
import { HlmDropdownMenuImports } from './index';
import { HlmButtonImports } from '../button';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import {
  lucideChevronDown,
  lucideLogOut,
  lucideSettings,
  lucideUser,
  lucideCopy,
  lucideCheck,
  lucideSun,
  lucideMoon,
  lucideMonitor,
} from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Dropdown Menu',
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown menu with items, labels, shortcuts, separators, checkboxes, radio groups, and submenus. Trigger opens a positioned menu.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmDropdownMenuImports, HlmButtonImports, HlmIconImports];
const icons = {
  lucideChevronDown,
  lucideLogOut,
  lucideSettings,
  lucideUser,
  lucideCopy,
  lucideCheck,
  lucideSun,
  lucideMoon,
  lucideMonitor,
};

/**
 * Basic dropdown with a few items. Click trigger to open; click item or outside to close.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">
        Open menu
        <ng-icon name="lucideChevronDown" class="ml-2 size-4" />
      </button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-48">
          <button hlmDropdownMenuItem>Profile</button>
          <button hlmDropdownMenuItem>Settings</button>
          <button hlmDropdownMenuItem>Log out</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Items with variant="destructive" for dangerous actions (e.g. delete).
 */
export const ItemVariants: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">Actions</button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-48">
          <button hlmDropdownMenuItem>Normal item</button>
          <button hlmDropdownMenuItem variant="destructive">Delete</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Disabled items are not clickable and appear muted.
 */
export const DisabledItems: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">Options</button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-48">
          <button hlmDropdownMenuItem>Enabled</button>
          <button hlmDropdownMenuItem [disabled]="true">Disabled</button>
          <button hlmDropdownMenuItem [disabled]="true" variant="destructive">Disabled destructive</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Labels group items. Use inset for alignment with checkable items.
 */
export const WithLabels: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">Menu with labels</button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-56">
          <div hlmDropdownMenuLabel>Account</div>
          <button hlmDropdownMenuItem>Profile</button>
          <button hlmDropdownMenuItem>Settings</button>
          <hlm-dropdown-menu-separator />
          <div hlmDropdownMenuLabel [inset]="true">Danger zone</div>
          <button hlmDropdownMenuItem variant="destructive">Log out</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Keyboard shortcuts displayed on the right with hlmDropdownMenuShortcut.
 */
export const WithShortcuts: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">Edit</button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-56">
          <button hlmDropdownMenuItem>
            Copy
            <hlm-dropdown-menu-shortcut>⌘C</hlm-dropdown-menu-shortcut>
          </button>
          <button hlmDropdownMenuItem>
            Paste
            <hlm-dropdown-menu-shortcut>⌘V</hlm-dropdown-menu-shortcut>
          </button>
          <button hlmDropdownMenuItem>
            Cut
            <hlm-dropdown-menu-shortcut>⌘X</hlm-dropdown-menu-shortcut>
          </button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Separators divide sections. Use hlm-dropdown-menu-separator.
 */
export const WithSeparators: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">File</button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-48">
          <button hlmDropdownMenuItem>New</button>
          <button hlmDropdownMenuItem>Open</button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem>Save</button>
          <button hlmDropdownMenuItem>Save as...</button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem>Exit</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Submenu: nest hlmDropdownMenuSub and trigger with [hlmDropdownMenuTrigger] pointing to the sub template.
 */
export const WithSubmenu: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="main">More</button>
      <ng-template #main>
        <div hlmDropdownMenu class="w-48">
          <button hlmDropdownMenuItem [hlmDropdownMenuTrigger]="sub1">
            Theme
            <hlm-dropdown-menu-item-sub-indicator />
          </button>
          <button hlmDropdownMenuItem [hlmDropdownMenuTrigger]="sub2">
            View
            <hlm-dropdown-menu-item-sub-indicator />
          </button>
        </div>
      </ng-template>
      <ng-template #sub1>
        <div hlmDropdownMenuSub class="w-40">
          <button hlmDropdownMenuItem>Light</button>
          <button hlmDropdownMenuItem>Dark</button>
          <button hlmDropdownMenuItem>System</button>
        </div>
      </ng-template>
      <ng-template #sub2>
        <div hlmDropdownMenuSub class="w-40">
          <button hlmDropdownMenuItem>List</button>
          <button hlmDropdownMenuItem>Grid</button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Checkbox items for multi-select options. Use hlmDropdownMenuCheckbox and hlm-dropdown-menu-checkbox-indicator.
 */
export const WithCheckboxItems: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">Checkboxes</button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-52">
          <button hlmDropdownMenuCheckbox [checked]="true">
            <hlm-dropdown-menu-checkbox-indicator />
            Show sidebar
          </button>
          <button hlmDropdownMenuCheckbox>
            <hlm-dropdown-menu-checkbox-indicator />
            Compact view
          </button>
          <button hlmDropdownMenuCheckbox [checked]="true">
            <hlm-dropdown-menu-checkbox-indicator />
            Notifications
          </button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Radio items for single-select. Use hlmDropdownMenuRadio and hlm-dropdown-menu-radio-indicator.
 */
export const WithRadioItems: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">Sort by</button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-48">
          <button hlmDropdownMenuRadio [checked]="true">
            <hlm-dropdown-menu-radio-indicator />
            Name
          </button>
          <button hlmDropdownMenuRadio>
            <hlm-dropdown-menu-radio-indicator />
            Date
          </button>
          <button hlmDropdownMenuRadio>
            <hlm-dropdown-menu-radio-indicator />
            Size
          </button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Full example: labels, separators, shortcuts, icons, and destructive item.
 */
export const FullExample: Story = {
  render: () => ({
    template: `
      <button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">
        <ng-icon name="lucideUser" class="mr-2 size-4" />
        Account
        <ng-icon name="lucideChevronDown" class="ml-2 size-4" />
      </button>
      <ng-template #menu>
        <div hlmDropdownMenu class="w-56">
          <div hlmDropdownMenuLabel>My account</div>
          <button hlmDropdownMenuItem>
            <ng-icon name="lucideUser" class="mr-2 size-4" />
            Profile
          </button>
          <button hlmDropdownMenuItem>
            <ng-icon name="lucideSettings" class="mr-2 size-4" />
            Settings
          </button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem>
            Copy link
            <hlm-dropdown-menu-shortcut>⌘C</hlm-dropdown-menu-shortcut>
          </button>
          <hlm-dropdown-menu-separator />
          <button hlmDropdownMenuItem variant="destructive">
            <ng-icon name="lucideLogOut" class="mr-2 size-4" />
            Log out
          </button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};
