import type { Meta, StoryObj } from '@storybook/angular';
import { HlmCollapsibleImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideInfo } from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Collapsible',
  parameters: {
    docs: {
      description: {
        component:
          'Collapsible panel that can be expanded or collapsed. Use with hlmCollapsible, button[hlmCollapsibleTrigger], and hlm-collapsible-content. Supports controlled expanded state and disabled.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const defaultImports = [HlmCollapsibleImports];
const iconProviders = [provideIcons({ lucideChevronDown, lucideInfo })];

/**
 * Default: click the trigger to expand or collapse the content.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmCollapsible class="w-[350px] rounded-lg border">
        <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium">
          What is a collapsible?
        </button>
        <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
          A collapsible shows or hides content when the trigger is toggled. Useful for FAQs, settings sections, or long content you want to keep on the page but out of the way.
        </hlm-collapsible-content>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Initially expanded via the expanded input.
 */
export const DefaultExpanded: Story = {
  render: () => ({
    template: `
      <div hlmCollapsible [expanded]="true" class="w-[350px] rounded-lg border">
        <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium">
          Open by default
        </button>
        <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
          This panel starts expanded. Toggle the trigger to collapse it.
        </hlm-collapsible-content>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Disabled collapsible: trigger does not toggle; content remains visible or hidden based on current state.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div hlmCollapsible [disabled]="true" [expanded]="false" class="w-[350px] rounded-lg border">
          <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium opacity-60">
            Disabled (collapsed)
          </button>
          <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
            Content is not reachable when disabled and collapsed.
          </hlm-collapsible-content>
        </div>
        <div hlmCollapsible [disabled]="true" [expanded]="true" class="w-[350px] rounded-lg border">
          <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium opacity-60">
            Disabled (expanded)
          </button>
          <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
            Content stays visible but the trigger cannot be used to collapse.
          </hlm-collapsible-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Trigger with a chevron icon that can be styled to rotate when open (via CSS or state).
 */
export const WithIcon: Story = {
  render: () => ({
    template: `
      <div hlmCollapsible class="w-[350px] rounded-lg border">
        <button hlmCollapsibleTrigger class="flex h-10 w-full items-center gap-2 px-4 text-sm font-medium">
          <ng-icon name="lucideChevronDown" class="size-4 transition-transform data-[state=open]:rotate-180" />
          Section with icon
        </button>
        <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
          The chevron can be rotated when expanded using data-state=open on the trigger (if exposed by the brain directive).
        </hlm-collapsible-content>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: iconProviders,
    },
  }),
};

/**
 * Multiple collapsibles in a list (e.g. FAQ or settings).
 */
export const MultipleSections: Story = {
  render: () => ({
    template: `
      <div class="w-[350px] space-y-2 rounded-lg border p-2">
        <div hlmCollapsible class="rounded-md border">
          <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium">
            Shipping & delivery
          </button>
          <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
            Standard 5–7 days. Express 2–3 days. Next day available in select areas.
          </hlm-collapsible-content>
        </div>
        <div hlmCollapsible class="rounded-md border">
          <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium">
            Returns & refunds
          </button>
          <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
            30-day returns for unused items. Refunds processed within 5 business days.
          </hlm-collapsible-content>
        </div>
        <div hlmCollapsible class="rounded-md border">
          <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium">
            Contact support
          </button>
          <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
            Email support&#64;example.com or use the in-app chat. We typically respond within 24 hours.
          </hlm-collapsible-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Rich content inside the collapsible: lists, paragraphs, links.
 */
export const RichContent: Story = {
  render: () => ({
    template: `
      <div hlmCollapsible class="w-[350px] rounded-lg border">
        <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-sm font-medium">
          Getting started
        </button>
        <hlm-collapsible-content class="border-t px-4 py-3">
          <div class="space-y-2 text-sm text-muted-foreground">
            <p>Follow these steps:</p>
            <ul class="list-inside list-disc space-y-1">
              <li>Create an account</li>
              <li>Verify your email</li>
              <li>Complete your profile</li>
              <li>Invite your team</li>
            </ul>
          </div>
        </hlm-collapsible-content>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * FAQ pattern: question as trigger, answer as content.
 */
export const FAQ: Story = {
  render: () => ({
    template: `
      <div class="max-w-xl space-y-2">
        <h3 class="text-lg font-semibold">Frequently asked questions</h3>
        <div hlmCollapsible class="rounded-lg border">
          <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-left text-sm font-medium">
            How do I reset my password?
          </button>
          <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
            Go to Sign in → Forgot password, enter your email, and we'll send a reset link. The link expires in 1 hour.
          </hlm-collapsible-content>
        </div>
        <div hlmCollapsible class="rounded-lg border">
          <button hlmCollapsibleTrigger class="flex h-10 w-full items-center justify-between px-4 text-left text-sm font-medium">
            Can I change my plan later?
          </button>
          <hlm-collapsible-content class="border-t px-4 py-3 text-sm text-muted-foreground">
            Yes. You can upgrade or downgrade from your account settings. Changes apply at the next billing cycle.
          </hlm-collapsible-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
