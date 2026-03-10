import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSidebar } from './hlm-sidebar';
import { HlmSidebarImports } from './index';
import { HlmIconImports } from '../icon';
import { HlmSkeletonImports } from '../skeleton';
import { provideIcons } from '@ng-icons/core';
import { lucideHome, lucideSettings, lucideUser, lucideFileText } from '@ng-icons/lucide';

const meta: Meta<HlmSidebar> = {
  component: HlmSidebar,
  title: 'Components/Sidebar',
  parameters: {
    docs: {
      description: {
        component:
          'App sidebar with header, menu groups, menu items, footer, and optional trigger. Supports collapsible (offcanvas, icon, none), variant (sidebar, floating, inset), and side (left, right). On mobile, renders as a sheet.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSidebar>;

const defaultImports = [HlmSidebarImports, HlmIconImports];
const iconProviders = [provideIcons({ lucideHome, lucideSettings, lucideUser, lucideFileText })];

/**
 * Default sidebar with header, menu group, items, and footer. Use sidebar trigger to toggle (desktop: collapse, mobile: open sheet).
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmSidebarWrapper>
        <hlm-sidebar>
          <hlm-sidebar-header>
            <span class="font-semibold">App</span>
          </hlm-sidebar-header>
          <hlm-sidebar-content>
            <hlm-sidebar-menu>
              <hlm-sidebar-group>
                <hlm-sidebar-group-label>Main</hlm-sidebar-group-label>
                <hlm-sidebar-group-content>
                  <hlm-sidebar-menu-item>
                    <button hlmSidebarMenuButton>
                      <ng-icon name="lucideHome" />
                      <span>Home</span>
                    </button>
                  </hlm-sidebar-menu-item>
                  <hlm-sidebar-menu-item>
                    <button hlmSidebarMenuButton>
                      <ng-icon name="lucideFileText" />
                      <span>Documents</span>
                    </button>
                  </hlm-sidebar-menu-item>
                </hlm-sidebar-group-content>
              </hlm-sidebar-group>
            </hlm-sidebar-menu>
          </hlm-sidebar-content>
          <hlm-sidebar-footer>
            <button hlmSidebarMenuButton>
              <ng-icon name="lucideSettings" />
              <span>Settings</span>
            </button>
          </hlm-sidebar-footer>
        </hlm-sidebar>
        <hlm-sidebar-inset>
          <header class="flex h-14 items-center gap-2 border-b px-4">
            <button hlmSidebarTrigger aria-label="Toggle sidebar"></button>
            <span class="text-sm font-medium">Main content</span>
          </header>
          <main class="flex-1 p-4">
            <p class="text-muted-foreground text-sm">Page content goes here. Sidebar can be toggled with the trigger.</p>
          </main>
        </hlm-sidebar-inset>
      </div>
    `,
    moduleMetadata: { imports: defaultImports, providers: iconProviders },
  }),
};

/**
 * Multiple groups with labels. Use for grouping navigation (e.g. Main, Account, Billing).
 */
export const WithGroups: Story = {
  render: () => ({
    template: `
      <div hlmSidebarWrapper>
        <hlm-sidebar>
          <hlm-sidebar-header>
            <span class="font-semibold">Dashboard</span>
          </hlm-sidebar-header>
          <hlm-sidebar-content>
            <hlm-sidebar-menu>
              <hlm-sidebar-group>
                <hlm-sidebar-group-label>Overview</hlm-sidebar-group-label>
                <hlm-sidebar-group-content>
                  <hlm-sidebar-menu-item>
                    <button hlmSidebarMenuButton>Home</button>
                  </hlm-sidebar-menu-item>
                  <hlm-sidebar-menu-item>
                    <button hlmSidebarMenuButton>Analytics</button>
                  </hlm-sidebar-menu-item>
                </hlm-sidebar-group-content>
              </hlm-sidebar-group>
              <hlm-sidebar-separator />
              <hlm-sidebar-group>
                <hlm-sidebar-group-label>Account</hlm-sidebar-group-label>
                <hlm-sidebar-group-content>
                  <hlm-sidebar-menu-item>
                    <button hlmSidebarMenuButton>
                      <ng-icon name="lucideUser" />
                      <span>Profile</span>
                    </button>
                  </hlm-sidebar-menu-item>
                  <hlm-sidebar-menu-item>
                    <button hlmSidebarMenuButton>
                      <ng-icon name="lucideSettings" />
                      <span>Settings</span>
                    </button>
                  </hlm-sidebar-menu-item>
                </hlm-sidebar-group-content>
              </hlm-sidebar-group>
            </hlm-sidebar-menu>
          </hlm-sidebar-content>
          <hlm-sidebar-footer>
            <span class="text-muted-foreground px-2 text-xs">v1.0</span>
          </hlm-sidebar-footer>
        </hlm-sidebar>
        <hlm-sidebar-inset>
          <header class="flex h-14 items-center gap-2 border-b px-4">
            <button hlmSidebarTrigger aria-label="Toggle sidebar"></button>
          </header>
          <main class="p-4">Content</main>
        </hlm-sidebar-inset>
      </div>
    `,
    moduleMetadata: { imports: defaultImports, providers: iconProviders },
  }),
};

/**
 * Loading state: use menu skeleton placeholders instead of real items.
 */
export const WithSkeleton: Story = {
  render: () => ({
    template: `
      <div hlmSidebarWrapper>
        <hlm-sidebar>
          <hlm-sidebar-header>
            <hlm-skeleton class="h-5 w-24"></hlm-skeleton>
          </hlm-sidebar-header>
          <hlm-sidebar-content>
            <hlm-sidebar-menu>
              <hlm-sidebar-menu-skeleton [showIcon]="true" />
              <hlm-sidebar-menu-skeleton [showIcon]="true" />
              <hlm-sidebar-menu-skeleton [showIcon]="true" />
              <hlm-sidebar-menu-skeleton />
              <hlm-sidebar-menu-skeleton />
            </hlm-sidebar-menu>
          </hlm-sidebar-content>
          <hlm-sidebar-footer>
            <hlm-sidebar-menu-skeleton [showIcon]="true" />
          </hlm-sidebar-footer>
        </hlm-sidebar>
        <hlm-sidebar-inset>
          <header class="flex h-14 items-center border-b px-4">
            <button hlmSidebarTrigger aria-label="Toggle"></button>
          </header>
          <main class="p-4">Loading...</main>
        </hlm-sidebar-inset>
      </div>
    `,
    moduleMetadata: { imports: [...defaultImports, HlmSkeletonImports] },
  }),
};

/**
 * Sidebar on the right side.
 */
export const SideRight: Story = {
  render: () => ({
    template: `
      <div hlmSidebarWrapper>
        <hlm-sidebar-inset>
          <header class="flex h-14 items-center justify-end border-b px-4">
            <button hlmSidebarTrigger aria-label="Toggle sidebar"></button>
          </header>
          <main class="p-4">Main content on the left.</main>
        </hlm-sidebar-inset>
        <hlm-sidebar [side]="'right'">
          <hlm-sidebar-header>
            <span class="font-semibold">Right sidebar</span>
          </hlm-sidebar-header>
          <hlm-sidebar-content>
            <hlm-sidebar-menu>
              <hlm-sidebar-menu-item>
                <button hlmSidebarMenuButton>Item 1</button>
              </hlm-sidebar-menu-item>
              <hlm-sidebar-menu-item>
                <button hlmSidebarMenuButton>Item 2</button>
              </hlm-sidebar-menu-item>
            </hlm-sidebar-menu>
          </hlm-sidebar-content>
        </hlm-sidebar>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Non-collapsible sidebar (always visible, no icon/offcanvas mode). Useful for simple layouts.
 */
export const NonCollapsible: Story = {
  render: () => ({
    template: `
      <div hlmSidebarWrapper>
        <hlm-sidebar collapsible="none">
          <hlm-sidebar-header>
            <span class="font-semibold">Static</span>
          </hlm-sidebar-header>
          <hlm-sidebar-content>
            <hlm-sidebar-menu>
              <hlm-sidebar-menu-item>
                <button hlmSidebarMenuButton>Home</button>
              </hlm-sidebar-menu-item>
              <hlm-sidebar-menu-item>
                <button hlmSidebarMenuButton>About</button>
              </hlm-sidebar-menu-item>
            </hlm-sidebar-menu>
          </hlm-sidebar-content>
        </hlm-sidebar>
        <hlm-sidebar-inset>
          <main class="p-4">No trigger; sidebar is always visible.</main>
        </hlm-sidebar-inset>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
