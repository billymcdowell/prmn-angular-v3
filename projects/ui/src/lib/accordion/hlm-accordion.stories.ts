import type { Meta, StoryObj } from '@storybook/angular';
import { HlmAccordion } from './hlm-accordion';
import { HlmAccordionImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideHelpCircle, lucideFileText } from '@ng-icons/lucide';

const meta: Meta<HlmAccordion> = {
  component: HlmAccordion,
  title: 'Components/Accordion',
  parameters: {
    docs: {
      description: {
        component:
          'Accordion container. Use with hlm-accordion-item, hlm-accordion-trigger, and hlm-accordion-content. Set type="single" for one open at a time, type="multiple" for several open. Optionally add ng-icon with hlmAccordionIcon for a rotating chevron.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmAccordion>;

const defaultImports = [HlmAccordionImports];
const iconProviders = [provideIcons({ lucideChevronDown, lucideHelpCircle, lucideFileText })];

/**
 * Default: vertical accordion, single open at a time.
 * Only one panel is expanded; opening another closes the previous.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmAccordion type="single">
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>Is it accessible?</button>
          <hlm-accordion-content>Yes. It uses the correct ARIA attributes and keyboard behavior.</hlm-accordion-content>
        </div>
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>How does it look?</button>
          <hlm-accordion-content>Styled with Tailwind and theme tokens (background, border, etc.).</hlm-accordion-content>
        </div>
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>Can I use multiple items?</button>
          <hlm-accordion-content>With type="single", only one item is open at a time. Use type="multiple" to allow several.</hlm-accordion-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Multiple panels can be open at once.
 * Use for FAQs or sections where users may want to compare or read several at a time.
 */
export const MultipleOpen: Story = {
  render: () => ({
    template: `
      <div hlmAccordion type="multiple">
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>Shipping options</button>
          <hlm-accordion-content>Standard 5–7 days, Express 2–3 days, Next day available for select areas.</hlm-accordion-content>
        </div>
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>Returns policy</button>
          <hlm-accordion-content>30-day returns for unused items in original packaging. Refunds processed within 5 business days.</hlm-accordion-content>
        </div>
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>International orders</button>
          <hlm-accordion-content>We ship to over 50 countries. Customs and import duties may apply depending on your location.</hlm-accordion-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Rotating chevron icon on each trigger.
 * Add ng-icon with hlmAccordionIcon; it rotates 180° when the item is open.
 */
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div hlmAccordion type="single">
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>
            Section with icon
            <ng-icon hlmAccordionIcon name="lucideChevronDown" />
          </button>
          <hlm-accordion-content>Content for the first section.</hlm-accordion-content>
        </div>
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>
            Another section
            <ng-icon hlmAccordionIcon name="lucideChevronDown" />
          </button>
          <hlm-accordion-content>Content for the second section.</hlm-accordion-content>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: iconProviders,
    },
  }),
};

/**
 * Only one item in the accordion.
 * Still useful for consistent styling and expand/collapse behavior.
 */
export const SingleItem: Story = {
  render: () => ({
    template: `
      <div hlmAccordion>
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>Single item</button>
          <hlm-accordion-content>Only one panel in this accordion. You can still open and close it.</hlm-accordion-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * FAQ pattern: question as trigger, answer as content.
 * Often used with type="single" so one answer is visible at a time, or type="multiple" for comparing answers.
 */
export const FAQ: Story = {
  render: () => ({
    template: `
      <div class="max-w-2xl space-y-2">
        <h3 class="text-lg font-semibold">Frequently asked questions</h3>
        <div hlmAccordion type="single">
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>How do I reset my password?</button>
            <hlm-accordion-content>
              Go to Sign in → Forgot password, enter your email, and we'll send a reset link. The link expires in 1 hour.
            </hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Can I change my plan later?</button>
            <hlm-accordion-content>
              Yes. You can upgrade or downgrade from your account settings. Changes apply at the next billing cycle.
            </hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Do you offer refunds?</button>
            <hlm-accordion-content>
              We offer a 14-day money-back guarantee for first-time subscribers. Contact support to request a refund.
            </hlm-accordion-content>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * FAQ with icons: help or document icon next to each question.
 */
export const FAQWithIcons: Story = {
  render: () => ({
    template: `
      <div class="max-w-2xl space-y-2">
        <h3 class="text-lg font-semibold">Help &amp; support</h3>
        <div hlmAccordion type="single">
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>
              <ng-icon name="lucideHelpCircle" class="mr-2 size-4" />
              How do I contact support?
              <ng-icon hlmAccordionIcon name="lucideChevronDown" />
            </button>
            <hlm-accordion-content>Use the chat widget or email support&#64;example.com. We typically respond within 24 hours.</hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>
              <ng-icon name="lucideFileText" class="mr-2 size-4" />
              Where can I find documentation?
              <ng-icon hlmAccordionIcon name="lucideChevronDown" />
            </button>
            <hlm-accordion-content>Visit docs.example.com for guides, API reference, and examples.</hlm-accordion-content>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: iconProviders,
    },
  }),
};

/**
 * Many items: accordion with 6+ sections.
 * Demonstrates scrolling and dense content; single type keeps one open at a time.
 */
export const ManyItems: Story = {
  render: () => ({
    template: `
      <div class="max-h-96 overflow-y-auto rounded-md border p-2">
        <div hlmAccordion type="single">
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Section 1</button>
            <hlm-accordion-content>Content for section 1.</hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Section 2</button>
            <hlm-accordion-content>Content for section 2.</hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Section 3</button>
            <hlm-accordion-content>Content for section 3.</hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Section 4</button>
            <hlm-accordion-content>Content for section 4.</hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Section 5</button>
            <hlm-accordion-content>Content for section 5.</hlm-accordion-content>
          </div>
          <div hlmAccordionItem role="heading" aria-level="2">
            <button hlmAccordionTrigger>Section 6</button>
            <hlm-accordion-content>Content for section 6.</hlm-accordion-content>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Rich content inside panels: lists, paragraphs, or custom markup.
 */
export const RichContent: Story = {
  render: () => ({
    template: `
      <div hlmAccordion type="single">
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>Getting started</button>
          <hlm-accordion-content>
            <div class="space-y-2 text-sm">
              <p>Follow these steps to get up and running:</p>
              <ul class="list-inside list-disc space-y-1">
                <li>Create an account</li>
                <li>Verify your email</li>
                <li>Complete your profile</li>
                <li>Invite your team</li>
              </ul>
            </div>
          </hlm-accordion-content>
        </div>
        <div hlmAccordionItem role="heading" aria-level="2">
          <button hlmAccordionTrigger>Pricing tiers</button>
          <hlm-accordion-content>
            <div class="space-y-2 text-sm">
              <p><strong>Free:</strong> 1 project, 3 members.</p>
              <p><strong>Pro:</strong> Unlimited projects, 10 members, priority support.</p>
              <p><strong>Enterprise:</strong> Custom limits, SSO, dedicated success manager.</p>
            </div>
          </hlm-accordion-content>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

