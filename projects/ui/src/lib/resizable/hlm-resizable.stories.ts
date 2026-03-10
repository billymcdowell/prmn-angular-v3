import type { Meta, StoryObj } from '@storybook/angular';
import { HlmResizableImports } from './index';

const meta: Meta = {
  title: 'Components/Resizable',
  parameters: {
    docs: {
      description: {
        component:
          'Resizable panel group built on `@spartan-ng/brain/resizable`. Use `hlm-resizable-group` with `hlm-resizable-panel` and `hlm-resizable-handle` to create split views.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmResizableImports];

/**
 * Horizontal split view with two resizable panels.
 */
export const HorizontalSplit: Story = {
  render: () => ({
    template: `
      <div class="h-64 w-full max-w-3xl border rounded-md overflow-hidden">
        <hlm-resizable-group direction="horizontal">
          <hlm-resizable-panel [defaultSize]="40" class="flex flex-col gap-2 p-4">
            <h3 class="text-sm font-medium">Sidebar</h3>
            <p class="text-xs text-muted-foreground">
              Drag the handle to resize the sidebar width.
            </p>
          </hlm-resizable-panel>

          <hlm-resizable-handle [withHandle]="true"></hlm-resizable-handle>

          <hlm-resizable-panel [defaultSize]="60" class="p-4">
            <h3 class="text-sm font-medium">Main content</h3>
            <p class="text-xs text-muted-foreground">
              This area grows or shrinks as the sidebar is resized.
            </p>
          </hlm-resizable-panel>
        </hlm-resizable-group>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Vertical split view, ideal for code editor / preview layouts.
 */
export const VerticalSplit: Story = {
  render: () => ({
    template: `
      <div class="h-80 w-full max-w-3xl border rounded-md overflow-hidden">
        <hlm-resizable-group direction="vertical">
          <hlm-resizable-panel [defaultSize]="55" class="border-b p-4">
            <h3 class="text-sm font-medium">Editor</h3>
            <p class="text-xs text-muted-foreground">
              Top panel where the user edits content.
            </p>
          </hlm-resizable-panel>

          <hlm-resizable-handle [withHandle]="true"></hlm-resizable-handle>

          <hlm-resizable-panel [defaultSize]="45" class="p-4">
            <h3 class="text-sm font-medium">Preview</h3>
            <p class="text-xs text-muted-foreground">
              Bottom panel previews the rendered output.
            </p>
          </hlm-resizable-panel>
        </hlm-resizable-group>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Three-panel layout with middle panel collapsible.
 */
export const ThreePanelLayout: Story = {
  render: () => ({
    template: `
      <div class="h-72 w-full max-w-4xl border rounded-md overflow-hidden">
        <hlm-resizable-group direction="horizontal">
          <hlm-resizable-panel id="nav" [defaultSize]="20" class="border-r p-4">
            <h3 class="text-sm font-medium">Navigation</h3>
          </hlm-resizable-panel>

          <hlm-resizable-handle [withHandle]="true"></hlm-resizable-handle>

          <hlm-resizable-panel
            id="content"
            [defaultSize]="55"
            [minSize]="30"
            [maxSize]="70"
            [collapsible]="true"
            class="border-r p-4"
          >
            <h3 class="text-sm font-medium">Content</h3>
            <p class="text-xs text-muted-foreground">
              Middle panel can be collapsed when more space is needed for details.
            </p>
          </hlm-resizable-panel>

          <hlm-resizable-handle [withHandle]="true"></hlm-resizable-handle>

          <hlm-resizable-panel id="details" [defaultSize]="25" class="p-4">
            <h3 class="text-sm font-medium">Details</h3>
          </hlm-resizable-panel>
        </hlm-resizable-group>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};
