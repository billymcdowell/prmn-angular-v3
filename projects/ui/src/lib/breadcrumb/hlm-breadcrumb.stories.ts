import type { Meta, StoryObj } from '@storybook/angular';
import { HlmBreadcrumb } from './hlm-breadcrumb';
import { HlmBreadCrumbImports } from './index';

// Use plain <a href> in stories to avoid Router/ActivatedRoute in Storybook.
// In your app, use <a hlmBreadcrumbLink [link]="['/path']"> for real routing.

const meta: Meta<HlmBreadcrumb> = {
  component: HlmBreadcrumb,
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      description: {
        component:
          'Navigation breadcrumb: list of links showing the path to the current page. Use hlm-breadcrumb, hlm-breadcrumb-list, hlm-breadcrumb-item, hlm-breadcrumb-link or hlm-breadcrumb-page, and hlm-breadcrumb-separator. Optional: hlm-breadcrumb-ellipsis for collapsed items.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmBreadcrumb>;

const defaultImports = [HlmBreadCrumbImports];

/**
 * Minimal: one item (current page only). Use when there is no parent path to show.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <nav hlmBreadcrumb>
        <ol hlmBreadcrumbList>
          <li hlmBreadcrumbItem>
            <span hlmBreadcrumbPage>Home</span>
          </li>
        </ol>
      </nav>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Simple path: Home → Section → Current page. Use hlm-breadcrumb-link for navigable items and hlm-breadcrumb-page for the current page.
 */
export const SimplePath: Story = {
  render: () => ({
    template: `
      <nav hlmBreadcrumb aria-label="Breadcrumb">
        <ol hlmBreadcrumbList>
          <li hlmBreadcrumbItem>
            <a href="/" class="hover:text-foreground transition-colors">Home</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <a href="/docs" class="hover:text-foreground transition-colors">Docs</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <span hlmBreadcrumbPage>Components</span>
          </li>
        </ol>
      </nav>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Long path with multiple levels. Demonstrates a typical app hierarchy.
 */
export const LongPath: Story = {
  render: () => ({
    template: `
      <nav hlmBreadcrumb aria-label="Breadcrumb">
        <ol hlmBreadcrumbList>
          <li hlmBreadcrumbItem>
            <a href="/" class="hover:text-foreground transition-colors">Home</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <a href="/products" class="hover:text-foreground transition-colors">Products</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <a href="/products/electronics" class="hover:text-foreground transition-colors">Electronics</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <span hlmBreadcrumbPage>Smartphones</span>
          </li>
        </ol>
      </nav>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Current page only (no links). Use when the breadcrumb is for context only and the current page is not a link.
 */
export const CurrentPageOnly: Story = {
  render: () => ({
    template: `
      <nav hlmBreadcrumb>
        <ol hlmBreadcrumbList>
          <li hlmBreadcrumbItem>
            <span hlmBreadcrumbPage>Settings</span>
          </li>
        </ol>
      </nav>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * With custom aria-label for accessibility.
 */
export const CustomAriaLabel: Story = {
  render: () => ({
    template: `
      <nav hlmBreadcrumb ariaLabel="Page navigation">
        <ol hlmBreadcrumbList>
          <li hlmBreadcrumbItem>
            <a href="/" class="hover:text-foreground transition-colors">Home</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <span hlmBreadcrumbPage>About</span>
          </li>
        </ol>
      </nav>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * With ellipsis for collapsed middle items. Use when the path is long and you want to show only first, last, and "…".
 */
export const WithEllipsis: Story = {
  render: () => ({
    template: `
      <nav hlmBreadcrumb aria-label="Breadcrumb">
        <ol hlmBreadcrumbList>
          <li hlmBreadcrumbItem>
            <a href="/" class="hover:text-foreground transition-colors">Home</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <hlm-breadcrumb-ellipsis srOnlyText="More pages" />
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <span hlmBreadcrumbPage>Current page</span>
          </li>
        </ol>
      </nav>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
