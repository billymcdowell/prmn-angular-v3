import type { Meta, StoryObj } from '@storybook/angular';
import { HlmKbdImports } from './index';

const meta: Meta = {
  title: 'Components/Kbd',
  parameters: {
    docs: {
      description: {
        component:
          'Keyboard key primitives for showing shortcuts in UI. Use `kbd[hlmKbd]` for individual keys and `kbd[hlmKbdGroup]` to group multiple keys into a single chord.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmKbdImports];

/**
 * Single key, useful for inline documentation or small hints.
 */
export const SingleKey: Story = {
  render: () => ({
    template: `
      <div class="space-x-2 text-sm">
        Press
        <kbd hlmKbd>Esc</kbd>
        to close the dialog.
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Key chord using `hlmKbdGroup` to visually group multiple keys.
 */
export const KeyChord: Story = {
  render: () => ({
    template: `
      <div class="space-y-2 text-sm">
        <p>Common shortcuts:</p>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between gap-4">
            <span>Open command palette</span>
            <kbd hlmKbdGroup>
              <kbd hlmKbd>⌘</kbd>
              <kbd hlmKbd>K</kbd>
            </kbd>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span>Save changes</span>
            <kbd hlmKbdGroup>
              <kbd hlmKbd>⌘</kbd>
              <kbd hlmKbd>S</kbd>
            </kbd>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Inline usage inside descriptive text, demonstrating responsive wrapping.
 */
export const InlineInParagraph: Story = {
  render: () => ({
    template: `
      <p class="max-w-md text-sm text-muted-foreground">
        Use
        <kbd hlmKbd>Tab</kbd>
        to move focus forward and
        <kbd hlmKbd>Shift</kbd>
        +
        <kbd hlmKbd>Tab</kbd>
        to move it backwards. Press
        <kbd hlmKbd>Enter</kbd>
        to activate the focused element.
      </p>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * List of keyboard shortcuts as you might show in a "Keyboard shortcuts" help dialog.
 */
export const ShortcutList: Story = {
  render: () => ({
    template: `
      <div class="max-w-md divide-y border rounded-md bg-card">
        <div class="px-4 py-3">
          <h2 class="text-sm font-medium">Keyboard shortcuts</h2>
          <p class="text-xs text-muted-foreground">
            Improve your workflow by using these shortcuts.
          </p>
        </div>
        <div class="px-4 py-3 space-y-2 text-sm">
          <div class="flex items-center justify-between gap-4">
            <span>Search</span>
            <kbd hlmKbdGroup>
              <kbd hlmKbd>⌘</kbd>
              <kbd hlmKbd>F</kbd>
            </kbd>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span>Toggle sidebar</span>
            <kbd hlmKbdGroup>
              <kbd hlmKbd>⌘</kbd>
              <kbd hlmKbd>B</kbd>
            </kbd>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span>Open help</span>
            <kbd hlmKbdGroup>
              <kbd hlmKbd>?</kbd>
            </kbd>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};
