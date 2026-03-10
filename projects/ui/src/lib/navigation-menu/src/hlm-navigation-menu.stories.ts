import type { Meta, StoryObj } from '@storybook/angular';
import { HlmNavigationMenu } from './hlm-navigation-menu';
import { HlmNavigationMenuImports } from './index';
import { HlmIconImports } from '../../icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideLayoutDashboard, lucideSettings, lucideUser } from '@ng-icons/lucide';

const meta: Meta<HlmNavigationMenu> = {
  component: HlmNavigationMenu,
  title: 'Components/Navigation Menu',
  parameters: {
    docs: {
      description: {
        component:
          'Horizontal or vertical nav with optional dropdown panels. Use nav[hlmNavigationMenu], ul[hlmNavigationMenuList], li[hlmNavigationMenuItem], button[hlmNavigationMenuTrigger], *hlmNavigationMenuPortal with hlmNavigationMenuContent, and a[hlmNavigationMenuLink]. Supports value/delayDuration/skipDelayDuration/orientation.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmNavigationMenu>;

const menuImports = [HlmNavigationMenuImports, HlmIconImports, NgIcon];
const menuProviders = [provideIcons({ lucideChevronDown, lucideLayoutDashboard, lucideSettings, lucideUser })];

/**
 * Simple links only — no dropdowns.
 */
export const LinksOnly: Story = {
  render: () => ({
    template: `
      <nav hlmNavigationMenu class="w-full max-w-max">
        <ul hlmNavigationMenuList class="flex gap-1">
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Home</a>
          </li>
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">About</a>
          </li>
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#" [active]="true">Pricing</a>
          </li>
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Contact</a>
          </li>
        </ul>
      </nav>
    `,
    moduleMetadata: { imports: menuImports, providers: menuProviders },
  }),
};

/**
 * Mix of links and one dropdown panel.
 */
export const WithDropdown: Story = {
  render: () => ({
    template: `
      <nav hlmNavigationMenu class="w-full max-w-max">
        <ul hlmNavigationMenuList class="flex gap-1">
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Home</a>
          </li>
          <li hlmNavigationMenuItem>
            <button hlmNavigationMenuTrigger>
              Products
              <ng-icon name="lucideChevronDown" class="ml-1 size-4" />
            </button>
            <div *hlmNavigationMenuPortal hlmNavigationMenuContent class="w-[320px] p-4">
              <div class="grid gap-2">
                <a hlmNavigationMenuLink href="#" class="flex items-center gap-2 rounded-md px-3 py-2">
                  <ng-icon name="lucideLayoutDashboard" />
                  Dashboard
                </a>
                <a hlmNavigationMenuLink href="#" class="flex items-center gap-2 rounded-md px-3 py-2">
                  <ng-icon name="lucideSettings" />
                  Settings
                </a>
                <a hlmNavigationMenuLink href="#" class="flex items-center gap-2 rounded-md px-3 py-2">
                  <ng-icon name="lucideUser" />
                  Account
                </a>
              </div>
            </div>
          </li>
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Pricing</a>
          </li>
        </ul>
      </nav>
    `,
    moduleMetadata: { imports: menuImports, providers: menuProviders },
  }),
};

/**
 * Multiple dropdowns — Products and Company.
 */
export const MultipleDropdowns: Story = {
  render: () => ({
    template: `
      <nav hlmNavigationMenu class="w-full max-w-max">
        <ul hlmNavigationMenuList class="flex gap-1">
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Home</a>
          </li>
          <li hlmNavigationMenuItem>
            <button hlmNavigationMenuTrigger>Products</button>
            <div *hlmNavigationMenuPortal hlmNavigationMenuContent class="w-[240px] p-4">
              <ul class="grid gap-1">
                <li><a hlmNavigationMenuLink href="#">Features</a></li>
                <li><a hlmNavigationMenuLink href="#">Integrations</a></li>
                <li><a hlmNavigationMenuLink href="#">Changelog</a></li>
              </ul>
            </div>
          </li>
          <li hlmNavigationMenuItem>
            <button hlmNavigationMenuTrigger>Company</button>
            <div *hlmNavigationMenuPortal hlmNavigationMenuContent class="w-[240px] p-4">
              <ul class="grid gap-1">
                <li><a hlmNavigationMenuLink href="#">About</a></li>
                <li><a hlmNavigationMenuLink href="#">Blog</a></li>
                <li><a hlmNavigationMenuLink href="#">Careers</a></li>
              </ul>
            </div>
          </li>
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Contact</a>
          </li>
        </ul>
      </nav>
    `,
    moduleMetadata: { imports: menuImports, providers: menuProviders },
  }),
};

/**
 * Active link state — use [active]="true" on the current page link.
 */
export const ActiveLink: Story = {
  render: () => ({
    template: `
      <nav hlmNavigationMenu class="w-full max-w-max">
        <ul hlmNavigationMenuList class="flex gap-1">
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Home</a>
          </li>
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#" [active]="true">Dashboard</a>
          </li>
          <li hlmNavigationMenuItem>
            <a hlmNavigationMenuLink href="#">Settings</a>
          </li>
        </ul>
      </nav>
    `,
    moduleMetadata: { imports: menuImports, providers: menuProviders },
  }),
};

/**
 * Rich dropdown content — grid of links and description.
 */
export const RichDropdownContent: Story = {
  render: () => ({
    template: `
      <nav hlmNavigationMenu class="w-full max-w-max">
        <ul hlmNavigationMenuList class="flex gap-1">
          <li hlmNavigationMenuItem>
            <button hlmNavigationMenuTrigger>Resources</button>
            <div *hlmNavigationMenuPortal hlmNavigationMenuContent class="w-[400px] p-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-muted-foreground mb-2 text-xs font-medium uppercase">Documentation</p>
                  <a hlmNavigationMenuLink href="#" class="block rounded-md px-2 py-1.5">Getting started</a>
                  <a hlmNavigationMenuLink href="#" class="block rounded-md px-2 py-1.5">API reference</a>
                </div>
                <div>
                  <p class="text-muted-foreground mb-2 text-xs font-medium uppercase">Support</p>
                  <a hlmNavigationMenuLink href="#" class="block rounded-md px-2 py-1.5">Help center</a>
                  <a hlmNavigationMenuLink href="#" class="block rounded-md px-2 py-1.5">Contact</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    `,
    moduleMetadata: { imports: menuImports, providers: menuProviders },
  }),
};
