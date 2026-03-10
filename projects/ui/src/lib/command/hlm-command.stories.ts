import type { Meta, StoryObj } from '@storybook/angular';
import { HlmCommandImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideCreditCard,
  lucideSearch,
  lucideSettings,
  lucideUser,
} from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Command',
  parameters: {
    docs: {
      description: {
        component:
          'Command palette: searchable list of actions. Use hlm-command with hlm-command-input, hlm-command-list, hlm-command-group, hlm-command-group-label, hlm-command-item. Optional: hlm-command-shortcut, hlm-command-separator, hlm-command-empty. Use hlm-command-dialog to show the palette in a modal.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const defaultImports = [HlmCommandImports];
const iconProviders = [
  provideIcons({ lucideCalendar, lucideCreditCard, lucideSearch, lucideSettings, lucideUser }),
];

/**
 * Inline command with search, groups, and items. Type to filter.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmCommand class="w-[320px] rounded-lg border shadow-md">
        <hlm-command-input placeholder="Type a command or search..." />
        <hlm-command-list>
          <hlm-command-empty>No results found.</hlm-command-empty>
          <hlm-command-group>
            <hlm-command-group-label>Suggestions</hlm-command-group-label>
            <button hlmCommandItem value="calendar">Calendar</button>
            <button hlmCommandItem value="search">Search</button>
            <button hlmCommandItem value="settings">Settings</button>
          </hlm-command-group>
          <hlm-command-separator />
          <hlm-command-group>
            <hlm-command-group-label>Account</hlm-command-group-label>
            <button hlmCommandItem value="profile">Profile</button>
            <button hlmCommandItem value="billing">Billing</button>
          </hlm-command-group>
        </hlm-command-list>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Items with keyboard shortcut hints.
 */
export const WithShortcuts: Story = {
  render: () => ({
    template: `
      <div hlmCommand class="w-[320px] rounded-lg border shadow-md">
        <hlm-command-input placeholder="Type a command..." />
        <hlm-command-list>
          <hlm-command-empty>No results found.</hlm-command-empty>
          <hlm-command-group>
            <hlm-command-group-label>Actions</hlm-command-group-label>
            <button hlmCommandItem value="new">
              New File
              <hlm-command-shortcut>⌘N</hlm-command-shortcut>
            </button>
            <button hlmCommandItem value="open">
              Open
              <hlm-command-shortcut>⌘O</hlm-command-shortcut>
            </button>
            <button hlmCommandItem value="save">
              Save
              <hlm-command-shortcut>⌘S</hlm-command-shortcut>
            </button>
          </hlm-command-group>
          <hlm-command-separator />
          <hlm-command-group>
            <hlm-command-group-label>View</hlm-command-group-label>
            <button hlmCommandItem value="toggle-sidebar">
              Toggle Sidebar
              <hlm-command-shortcut>⌘B</hlm-command-shortcut>
            </button>
          </hlm-command-group>
        </hlm-command-list>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Command palette with leading icons on items.
 */
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div hlmCommand class="w-[320px] rounded-lg border shadow-md">
        <hlm-command-input placeholder="Search..." />
        <hlm-command-list>
          <hlm-command-empty>No results found.</hlm-command-empty>
          <hlm-command-group>
            <hlm-command-group-label>Menu</hlm-command-group-label>
            <button hlmCommandItem value="calendar">
              <ng-icon name="lucideCalendar" />
              Calendar
            </button>
            <button hlmCommandItem value="user">
              <ng-icon name="lucideUser" />
              Profile
            </button>
            <button hlmCommandItem value="billing">
              <ng-icon name="lucideCreditCard" />
              Billing
            </button>
            <button hlmCommandItem value="settings">
              <ng-icon name="lucideSettings" />
              Settings
            </button>
          </hlm-command-group>
        </hlm-command-list>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: iconProviders,
    },
  }),
};

/**
 * Empty state when search has no matches.
 */
export const EmptyState: Story = {
  render: () => ({
    template: `
      <div hlmCommand class="w-[320px] rounded-lg border shadow-md">
        <hlm-command-input placeholder="Type 'xyz' to see empty state..." />
        <hlm-command-list>
          <hlm-command-empty>No results found. Try a different search.</hlm-command-empty>
          <hlm-command-group>
            <hlm-command-group-label>Suggestions</hlm-command-group-label>
            <button hlmCommandItem value="a">Option A</button>
            <button hlmCommandItem value="b">Option B</button>
          </hlm-command-group>
        </hlm-command-list>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Disabled command (e.g. entire palette disabled).
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div hlmCommand [disabled]="true" class="w-[320px] rounded-lg border shadow-md opacity-60">
        <hlm-command-input placeholder="Disabled..." />
        <hlm-command-list>
          <hlm-command-empty>No results.</hlm-command-empty>
          <hlm-command-group>
            <hlm-command-group-label>Actions</hlm-command-group-label>
            <button hlmCommandItem value="one">One</button>
            <button hlmCommandItem value="two">Two</button>
          </hlm-command-group>
        </hlm-command-list>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Single disabled item in the list.
 */
export const DisabledItem: Story = {
  render: () => ({
    template: `
      <div hlmCommand class="w-[320px] rounded-lg border shadow-md">
        <hlm-command-input placeholder="Search..." />
        <hlm-command-list>
          <hlm-command-empty>No results.</hlm-command-empty>
          <hlm-command-group>
            <hlm-command-group-label>Options</hlm-command-group-label>
            <button hlmCommandItem value="enabled">Enabled option</button>
            <button hlmCommandItem value="disabled" [disabled]="true">Disabled option</button>
            <button hlmCommandItem value="another">Another option</button>
          </hlm-command-group>
        </hlm-command-list>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Command inside a dialog (command palette modal). Open with keyboard shortcut in real usage.
 */
export const InDialog: Story = {
  render: () => ({
    template: `
      <hlm-command-dialog title="Command Palette" description="Search for a command to run.">
        <div hlmCommand class="[&_hlm-command-input]:border-0 [&_hlm-command-input]:shadow-none">
          <hlm-command-input placeholder="Type a command or search..." />
          <hlm-command-list>
            <hlm-command-empty>No results found.</hlm-command-empty>
            <hlm-command-group>
              <hlm-command-group-label>Suggestions</hlm-command-group-label>
              <button hlmCommandItem value="calendar">Calendar</button>
              <button hlmCommandItem value="search">Search</button>
              <button hlmCommandItem value="settings">Settings</button>
            </hlm-command-group>
            <hlm-command-separator />
            <hlm-command-group>
              <hlm-command-group-label>Account</hlm-command-group-label>
              <button hlmCommandItem value="profile">Profile</button>
              <button hlmCommandItem value="billing">Billing</button>
            </hlm-command-group>
          </hlm-command-list>
        </div>
      </hlm-command-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
