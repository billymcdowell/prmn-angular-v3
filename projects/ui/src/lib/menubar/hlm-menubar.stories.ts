import type { Meta, StoryObj } from '@storybook/angular';
import { CdkMenuModule } from '@angular/cdk/menu';
import { HlmMenubarImports } from './index';

const meta: Meta = {
  title: 'Components/Menubar',
  parameters: {
    docs: {
      description: {
        component:
          'Top-level application navigation built on the Angular CDK menu primitives. Combine `hlm-menubar` with `button[hlmMenubarTrigger]` and `cdkMenu` panels for accessible, keyboard-friendly menus.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmMenubarImports, CdkMenuModule];

/**
 * Basic menubar with a single "File" menu.
 */
export const Basic: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4">
        <nav hlm-menubar>
          <button hlmMenubarTrigger [hlmMenubarTrigger]="fileMenu">
            File
          </button>
        </nav>

        <ng-template #fileMenu="cdkMenu">
          <div cdkMenu class="min-w-40 rounded-md border bg-popover p-1 text-sm shadow-md">
            <button cdkMenuItem class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
              New Tab
              <span class="text-xs text-muted-foreground">⌘ T</span>
            </button>
            <button cdkMenuItem class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
              New Window
              <span class="text-xs text-muted-foreground">⌘ N</span>
            </button>
            <button cdkMenuItem disabled class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left opacity-50">
              Open Workspace…
            </button>
          </div>
        </ng-template>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Menubar with multiple menus, similar to a desktop application.
 */
export const ApplicationMenubar: Story = {
  render: () => ({
    template: `
      <nav hlm-menubar class="max-w-xl">
        <button hlmMenubarTrigger [hlmMenubarTrigger]="fileMenu">
          File
        </button>
        <button hlmMenubarTrigger [hlmMenubarTrigger]="editMenu">
          Edit
        </button>
        <button hlmMenubarTrigger [hlmMenubarTrigger]="viewMenu">
          View
        </button>
      </nav>

      <ng-template #fileMenu="cdkMenu">
        <div cdkMenu class="min-w-40 rounded-md border bg-popover p-1 text-sm shadow-md">
          <button cdkMenuItem class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            New File
            <span class="text-xs text-muted-foreground">⌘ N</span>
          </button>
          <button cdkMenuItem class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Save
            <span class="text-xs text-muted-foreground">⌘ S</span>
          </button>
          <button cdkMenuItem class="flex w-full items-center rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Exit
          </button>
        </div>
      </ng-template>

      <ng-template #editMenu="cdkMenu">
        <div cdkMenu class="min-w-40 rounded-md border bg-popover p-1 text-sm shadow-md">
          <button cdkMenuItem class="w-full rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Undo
          </button>
          <button cdkMenuItem class="w-full rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Redo
          </button>
          <button cdkMenuItem class="w-full rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Cut
          </button>
          <button cdkMenuItem class="w-full rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Copy
          </button>
          <button cdkMenuItem class="w-full rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Paste
          </button>
        </div>
      </ng-template>

      <ng-template #viewMenu="cdkMenu">
        <div cdkMenu class="min-w-40 rounded-md border bg-popover p-1 text-sm shadow-md">
          <button cdkMenuItem class="w-full rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Toggle Sidebar
          </button>
          <button cdkMenuItem class="w-full rounded-sm px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground">
            Toggle Status Bar
          </button>
        </div>
      </ng-template>
    `,
    moduleMetadata: { imports },
  }),
};
