import type { Meta, StoryObj } from '@storybook/angular';
import { HlmSeparator } from './hlm-separator';
import { HlmSeparatorImports } from './index';

const meta: Meta<HlmSeparator> = {
  component: HlmSeparator,
  title: 'Components/Separator',
  parameters: {
    docs: {
      description: {
        component:
          'Visual divider between content. Use orientation="horizontal" (default) for a horizontal line, orientation="vertical" for a vertical line. Set decorative="true" when the separator is purely visual and not meaningful to screen readers.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmSeparator>;

const defaultImports = [HlmSeparatorImports];

/**
 * Default horizontal separator. Draws a full-width line between sections.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-medium">Section above</h4>
          <p class="text-muted-foreground text-sm">Content in the first section.</p>
        </div>
        <div hlmSeparator></div>
        <div>
          <h4 class="text-sm font-medium">Section below</h4>
          <p class="text-muted-foreground text-sm">Content in the second section.</p>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Explicit horizontal orientation. Same as default; use when passing orientation dynamically.
 */
export const Horizontal: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <p class="text-sm">First block</p>
        <div hlmSeparator orientation="horizontal"></div>
        <p class="text-sm">Second block</p>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Vertical separator for inline layouts (e.g. between buttons or breadcrumb items).
 */
export const Vertical: Story = {
  render: () => ({
    template: `
      <div class="flex h-5 items-center gap-2">
        <span class="text-sm">Item 1</span>
        <div hlmSeparator orientation="vertical" class="h-full"></div>
        <span class="text-sm">Item 2</span>
        <div hlmSeparator orientation="vertical" class="h-full"></div>
        <span class="text-sm">Item 3</span>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Decorative separators are not announced by screen readers. Use when the line is purely visual.
 */
export const Decorative: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <p class="text-sm">Content</p>
        <div hlmSeparator decorative="true"></div>
        <p class="text-sm">More content</p>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * In a card or list: separate header, body, and footer.
 */
export const InCard: Story = {
  render: () => ({
    template: `
      <div class="w-80 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
        <h3 class="font-semibold">Card title</h3>
        <div hlmSeparator class="my-3"></div>
        <p class="text-muted-foreground text-sm">Card body content goes here.</p>
        <div hlmSeparator class="my-3"></div>
        <p class="text-muted-foreground text-xs">Footer or metadata</p>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Between form sections or form groups.
 */
export const FormSections: Story = {
  render: () => ({
    template: `
      <div class="max-w-sm space-y-4">
        <div>
          <label class="text-sm font-medium">Name</label>
          <p class="text-muted-foreground text-xs">Your display name</p>
        </div>
        <div hlmSeparator></div>
        <div>
          <label class="text-sm font-medium">Email</label>
          <p class="text-muted-foreground text-xs">Used for notifications</p>
        </div>
        <div hlmSeparator></div>
        <div>
          <label class="text-sm font-medium">Preferences</label>
          <p class="text-muted-foreground text-xs">Privacy and notifications</p>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Breadcrumb-style navigation with vertical separators.
 */
export const BreadcrumbStyle: Story = {
  render: () => ({
    template: `
      <nav class="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
        <a href="#" class="text-muted-foreground hover:text-foreground">Home</a>
        <div hlmSeparator orientation="vertical" class="h-4"></div>
        <a href="#" class="text-muted-foreground hover:text-foreground">Settings</a>
        <div hlmSeparator orientation="vertical" class="h-4"></div>
        <span class="text-foreground font-medium">Profile</span>
      </nav>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
