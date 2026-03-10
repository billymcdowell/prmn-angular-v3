import type { Meta, StoryObj } from '@storybook/angular';
import { HlmAlertDialog } from './hlm-alert-dialog';
import { HlmAlertDialogImports } from './index';
import { HlmButtonImports } from '../button';

const meta: Meta<HlmAlertDialog> = {
  component: HlmAlertDialog,
  title: 'Components/Alert Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog that interrupts the user with important content and expects a response. Use for confirmations, warnings, or critical decisions. Built from trigger, portal content, header (title + description), and footer (cancel + action buttons).',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmAlertDialog>;

const defaultImports = [HlmAlertDialogImports, HlmButtonImports];

/**
 * Basic confirmation: one primary action and cancel.
 * Use for non-destructive confirmations (e.g. "Continue", "Confirm").
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-alert-dialog>
        <button hlmAlertDialogTrigger hlmBtn variant="outline">Open dialog</button>
        <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
          <hlm-alert-dialog-header>
            <h2 hlmAlertDialogTitle>Are you absolutely sure?</h2>
            <p hlmAlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </p>
          </hlm-alert-dialog-header>
          <hlm-alert-dialog-footer>
            <button hlmAlertDialogCancel (click)="ctx.close()">Cancel</button>
            <button hlmAlertDialogAction (click)="ctx.close()">Continue</button>
          </hlm-alert-dialog-footer>
        </hlm-alert-dialog-content>
      </hlm-alert-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Destructive action: use variant="destructive" on the primary button for
 * delete, remove, or irreversible actions. Cancel stays outline.
 */
export const Destructive: Story = {
  render: () => ({
    template: `
      <hlm-alert-dialog>
        <button hlmAlertDialogTrigger hlmBtn variant="destructive">Delete account</button>
        <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
          <hlm-alert-dialog-header>
            <h2 hlmAlertDialogTitle>Delete account</h2>
            <p hlmAlertDialogDescription>
              This will permanently delete your account and all associated data. You cannot undo this action.
            </p>
          </hlm-alert-dialog-header>
          <hlm-alert-dialog-footer>
            <button hlmAlertDialogCancel (click)="ctx.close()">Cancel</button>
            <button hlmAlertDialogAction variant="destructive" (click)="ctx.close()">Delete</button>
          </hlm-alert-dialog-footer>
        </hlm-alert-dialog-content>
      </hlm-alert-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Small and large button sizes in the footer.
 * Action and cancel both support size: 'sm' | 'default' | 'lg'.
 */
export const ButtonSizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-4">
        <hlm-alert-dialog>
          <button hlmAlertDialogTrigger hlmBtn variant="outline" size="sm">Small buttons</button>
          <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
            <hlm-alert-dialog-header>
              <h2 hlmAlertDialogTitle>Small footer buttons</h2>
              <p hlmAlertDialogDescription>Cancel and Continue use size="sm".</p>
            </hlm-alert-dialog-header>
            <hlm-alert-dialog-footer>
              <button hlmAlertDialogCancel size="sm" (click)="ctx.close()">Cancel</button>
              <button hlmAlertDialogAction size="sm" (click)="ctx.close()">Continue</button>
            </hlm-alert-dialog-footer>
          </hlm-alert-dialog-content>
        </hlm-alert-dialog>
        <hlm-alert-dialog>
          <button hlmAlertDialogTrigger hlmBtn variant="outline" size="lg">Large buttons</button>
          <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
            <hlm-alert-dialog-header>
              <h2 hlmAlertDialogTitle>Large footer buttons</h2>
              <p hlmAlertDialogDescription>Cancel and Continue use size="lg".</p>
            </hlm-alert-dialog-header>
            <hlm-alert-dialog-footer>
              <button hlmAlertDialogCancel size="lg" (click)="ctx.close()">Cancel</button>
              <button hlmAlertDialogAction size="lg" (click)="ctx.close()">Continue</button>
            </hlm-alert-dialog-footer>
          </hlm-alert-dialog-content>
        </hlm-alert-dialog>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Action button variants: default, destructive, secondary, outline, ghost, link.
 * Cancel is always outline by default but can be overridden.
 */
export const ActionVariants: Story = {
  render: () => ({
    template: `
      <hlm-alert-dialog>
        <button hlmAlertDialogTrigger hlmBtn variant="secondary">Action variants</button>
        <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
          <hlm-alert-dialog-header>
            <h2 hlmAlertDialogTitle>Choose an action style</h2>
            <p hlmAlertDialogDescription>
              Primary action can use any button variant: default, destructive, secondary, outline, ghost, or link.
            </p>
          </hlm-alert-dialog-header>
          <hlm-alert-dialog-footer>
            <button hlmAlertDialogCancel (click)="ctx.close()">Cancel</button>
            <button hlmAlertDialogAction variant="secondary" (click)="ctx.close()">Secondary</button>
          </hlm-alert-dialog-footer>
        </hlm-alert-dialog-content>
      </hlm-alert-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Minimal dialog: only title and description, no footer.
 * Use for informational alerts where closing is the only action (e.g. click overlay or Escape).
 */
export const MinimalNoFooter: Story = {
  render: () => ({
    template: `
      <hlm-alert-dialog>
        <button hlmAlertDialogTrigger hlmBtn variant="ghost">Info only</button>
        <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
          <hlm-alert-dialog-header>
            <h2 hlmAlertDialogTitle>Session expired</h2>
            <p hlmAlertDialogDescription>
              Your session has expired. Please refresh the page or log in again to continue.
            </p>
          </hlm-alert-dialog-header>
        </hlm-alert-dialog-content>
      </hlm-alert-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Three actions: e.g. Save, Don't save, Cancel.
 * Use multiple buttons in the footer for "unsaved changes" or similar flows.
 */
export const ThreeActions: Story = {
  render: () => ({
    template: `
      <hlm-alert-dialog>
        <button hlmAlertDialogTrigger hlmBtn variant="outline">Discard changes?</button>
        <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
          <hlm-alert-dialog-header>
            <h2 hlmAlertDialogTitle>Unsaved changes</h2>
            <p hlmAlertDialogDescription>
              You have unsaved changes. Do you want to save before leaving?
            </p>
          </hlm-alert-dialog-header>
          <hlm-alert-dialog-footer>
            <button hlmAlertDialogCancel (click)="ctx.close()">Cancel</button>
            <button hlmBtn variant="ghost" (click)="ctx.close()">Don't save</button>
            <button hlmAlertDialogAction (click)="ctx.close()">Save</button>
          </hlm-alert-dialog-footer>
        </hlm-alert-dialog-content>
      </hlm-alert-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Long content: description or body content that scrolls.
 * The content area will scroll when text exceeds max height; header and footer stay fixed.
 */
export const LongContent: Story = {
  render: () => ({
    template: `
      <hlm-alert-dialog>
        <button hlmAlertDialogTrigger hlmBtn variant="outline">Terms and conditions</button>
        <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx" class="max-h-[80vh] overflow-y-auto">
          <hlm-alert-dialog-header>
            <h2 hlmAlertDialogTitle>Terms and conditions</h2>
            <p hlmAlertDialogDescription>
              Please read the following terms carefully. By continuing, you agree to be bound by these terms.
            </p>
          </hlm-alert-dialog-header>
          <div class="text-muted-foreground text-sm space-y-3 py-2">
            <p>1. You agree to use this service only for lawful purposes and in accordance with these terms.</p>
            <p>2. You must not use the service in any way that could damage, disable, or overburden the service.</p>
            <p>3. We reserve the right to modify or discontinue the service at any time without notice.</p>
            <p>4. Your use of the service is at your sole risk. The service is provided "as is" without warranties.</p>
            <p>5. We may terminate or suspend your access immediately, without prior notice, for any reason.</p>
          </div>
          <hlm-alert-dialog-footer>
            <button hlmAlertDialogCancel (click)="ctx.close()">Cancel</button>
            <button hlmAlertDialogAction (click)="ctx.close()">I agree</button>
          </hlm-alert-dialog-footer>
        </hlm-alert-dialog-content>
      </hlm-alert-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Warning style: neutral title/description with a destructive primary action.
 * Good for "Are you sure you want to leave?" or similar warnings.
 */
export const Warning: Story = {
  render: () => ({
    template: `
      <hlm-alert-dialog>
        <button hlmAlertDialogTrigger hlmBtn variant="outline">Leave page</button>
        <hlm-alert-dialog-content *hlmAlertDialogPortal="let ctx">
          <hlm-alert-dialog-header>
            <h2 hlmAlertDialogTitle>Leave this page?</h2>
            <p hlmAlertDialogDescription>
              You have unsaved changes. If you leave now, your changes will be lost.
            </p>
          </hlm-alert-dialog-header>
          <hlm-alert-dialog-footer>
            <button hlmAlertDialogCancel (click)="ctx.close()">Cancel</button>
            <button hlmAlertDialogAction variant="destructive" (click)="ctx.close()">Leave without saving</button>
          </hlm-alert-dialog-footer>
        </hlm-alert-dialog-content>
      </hlm-alert-dialog>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
