import type { Meta, StoryObj } from '@storybook/angular';
import { HlmDialogImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta = {
  title: 'Components/Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'Modal dialog built with overlay, portal, header, title, description, footer, trigger, and close. Use for confirmations, forms, or focused content.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const dialogImports = [HlmDialogImports, HlmButtonImports];

/**
 * Basic dialog with trigger button. Click to open; use the close button or click outside to close.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-dialog>
        <button hlmBtn variant="outline" hlmDialogTrigger>Open dialog</button>
        <hlm-dialog-portal>
          <hlm-dialog-content>
            <hlm-dialog-header>
              <h2 hlmDialogTitle>Dialog title</h2>
              <p hlmDialogDescription>
                This is the dialog description. It can contain additional context or instructions.
              </p>
            </hlm-dialog-header>
            <p class="text-sm text-muted-foreground">
              Dialog body content goes here. You can put forms, lists, or any other content.
            </p>
            <hlm-dialog-footer>
              <button hlmBtn variant="outline" hlmDialogClose>Cancel</button>
              <button hlmBtn>Confirm</button>
            </hlm-dialog-footer>
          </hlm-dialog-content>
        </hlm-dialog-portal>
      </hlm-dialog>
    `,
    moduleMetadata: { imports: dialogImports },
  }),
};

/**
 * Dialog without the default close (X) button in the corner.
 * Set [showCloseButton]="false" on hlm-dialog-content.
 */
export const WithoutCloseButton: Story = {
  render: () => ({
    template: `
      <hlm-dialog>
        <button hlmBtn variant="outline" hlmDialogTrigger>Open (no X button)</button>
        <hlm-dialog-portal>
          <hlm-dialog-content [showCloseButton]="false">
            <hlm-dialog-header>
              <h2 hlmDialogTitle>No close button</h2>
              <p hlmDialogDescription>User must use Cancel or Confirm to close.</p>
            </hlm-dialog-header>
            <hlm-dialog-footer>
              <button hlmBtn variant="outline" hlmDialogClose>Cancel</button>
              <button hlmBtn hlmDialogClose>OK</button>
            </hlm-dialog-footer>
          </hlm-dialog-content>
        </hlm-dialog-portal>
      </hlm-dialog>
    `,
    moduleMetadata: { imports: dialogImports },
  }),
};

/**
 * Minimal dialog: title and description only, with a single action.
 */
export const Minimal: Story = {
  render: () => ({
    template: `
      <hlm-dialog>
        <button hlmBtn variant="ghost" size="sm" hlmDialogTrigger>Info</button>
        <hlm-dialog-portal>
          <hlm-dialog-content>
            <hlm-dialog-header>
              <h2 hlmDialogTitle>Quick message</h2>
              <p hlmDialogDescription>This dialog has no footer—just close via the X or outside click.</p>
            </hlm-dialog-header>
          </hlm-dialog-content>
        </hlm-dialog-portal>
      </hlm-dialog>
    `,
    moduleMetadata: { imports: dialogImports },
  }),
};

/**
 * Dialog with destructive action. Use for delete/remove confirmations.
 */
export const DestructiveAction: Story = {
  render: () => ({
    template: `
      <hlm-dialog>
        <button hlmBtn variant="destructive" hlmDialogTrigger>Delete item</button>
        <hlm-dialog-portal>
          <hlm-dialog-content>
            <hlm-dialog-header>
              <h2 hlmDialogTitle>Delete item?</h2>
              <p hlmDialogDescription>
                This action cannot be undone. This will permanently delete the item.
              </p>
            </hlm-dialog-header>
            <hlm-dialog-footer>
              <button hlmBtn variant="outline" hlmDialogClose>Cancel</button>
              <button hlmBtn variant="destructive" hlmDialogClose>Delete</button>
            </hlm-dialog-footer>
          </hlm-dialog-content>
        </hlm-dialog-portal>
      </hlm-dialog>
    `,
    moduleMetadata: { imports: dialogImports },
  }),
};

/**
 * Centered header (default on small screens). Header uses flex and gap; content is centered in narrow view.
 */
export const WithLongContent: Story = {
  render: () => ({
    template: `
      <hlm-dialog>
        <button hlmBtn variant="outline" hlmDialogTrigger>Open long content</button>
        <hlm-dialog-portal>
          <hlm-dialog-content>
            <hlm-dialog-header>
              <h2 hlmDialogTitle>Terms and conditions</h2>
              <p hlmDialogDescription>Please read the following before continuing.</p>
            </hlm-dialog-header>
            <div class="max-h-48 overflow-y-auto text-sm text-muted-foreground space-y-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <hlm-dialog-footer>
              <button hlmBtn variant="outline" hlmDialogClose>Decline</button>
              <button hlmBtn hlmDialogClose>Accept</button>
            </hlm-dialog-footer>
          </hlm-dialog-content>
        </hlm-dialog-portal>
      </hlm-dialog>
    `,
    moduleMetadata: { imports: dialogImports },
  }),
};
