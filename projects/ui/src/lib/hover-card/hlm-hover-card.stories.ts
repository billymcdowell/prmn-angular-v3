import type { Meta, StoryObj } from '@storybook/angular';
import { HlmHoverCardImports } from './index';
import { HlmAvatarImports } from '../avatar';

const meta: Meta = {
  title: 'Components/Hover Card',
  parameters: {
    docs: {
      description: {
        component:
          'Hover card reveals content on hover (or focus). Use for previews, tooltips, or extra info. Trigger wraps the hover target; content is in a portal.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmHoverCardImports, HlmAvatarImports];

/**
 * Basic hover card: hover over the trigger to see the content panel.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmHoverCard>
        <span hlmHoverCardTrigger class="text-sm font-medium underline underline-offset-4 cursor-pointer">
          Hover me
        </span>
        <hlm-hover-card-portal>
          <hlm-hover-card-content>
            <div class="space-y-2">
              <h4 class="text-sm font-semibold">Preview card</h4>
              <p class="text-sm text-muted-foreground">
                This content appears when you hover over the trigger. It can contain any layout.
              </p>
            </div>
          </hlm-hover-card-content>
        </hlm-hover-card-portal>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * User preview: trigger is a name or avatar; content shows profile summary.
 */
export const UserPreview: Story = {
  render: () => ({
    template: `
      <div hlmHoverCard>
        <button hlmHoverCardTrigger class="flex items-center gap-2 rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring">
          <hlm-avatar size="sm">
            <span hlmAvatarFallback>JD</span>
          </hlm-avatar>
          <span class="text-sm font-medium">John Doe</span>
        </button>
        <hlm-hover-card-portal>
          <hlm-hover-card-content>
            <div class="flex gap-4">
              <hlm-avatar>
                <span hlmAvatarFallback>JD</span>
              </hlm-avatar>
              <div class="space-y-1">
                <h4 class="text-sm font-semibold">John Doe</h4>
                <p class="text-sm text-muted-foreground">john&#64;example.com</p>
                <p class="text-xs text-muted-foreground">Joined December 2024</p>
              </div>
            </div>
          </hlm-hover-card-content>
        </hlm-hover-card-portal>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Link preview: hover over a link to see a short description or image.
 */
export const LinkPreview: Story = {
  render: () => ({
    template: `
      <div hlmHoverCard>
        <a hlmHoverCardTrigger href="#" class="text-primary underline underline-offset-4" (click)="$event.preventDefault()">
          Documentation
        </a>
        <hlm-hover-card-portal>
          <hlm-hover-card-content>
            <div class="space-y-2">
              <h4 class="text-sm font-semibold">Documentation</h4>
              <p class="text-sm text-muted-foreground">
                Get started with our guides and API reference. Covers installation, theming, and components.
              </p>
            </div>
          </hlm-hover-card-content>
        </hlm-hover-card-portal>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Trigger accepts showDelay, hideDelay, sideOffset, align via BrnHoverCardTrigger inputs.
 * This example uses default timing; customize in your app as needed.
 */
export const WithRichContent: Story = {
  render: () => ({
    template: `
      <div hlmHoverCard>
        <span hlmHoverCardTrigger class="cursor-pointer text-sm font-medium text-primary">
          View details
        </span>
        <hlm-hover-card-portal>
          <hlm-hover-card-content>
            <div class="grid gap-2">
              <h4 class="text-sm font-semibold">Feature summary</h4>
              <ul class="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Supports custom delay and alignment</li>
                <li>Portal renders outside DOM hierarchy</li>
                <li>Accessible and keyboard-friendly</li>
              </ul>
            </div>
          </hlm-hover-card-content>
        </hlm-hover-card-portal>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};
