import type { Meta, StoryObj } from '@storybook/angular';
import { HlmEmptyImports } from './index';
import { HlmButtonImports } from '../button';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideInbox, lucideSearch, lucideFileX } from '@ng-icons/lucide';

const meta: Meta = {
  title: 'Components/Empty',
  parameters: {
    docs: {
      description: {
        component:
          'Empty state component for no-data views. Use hlmEmpty as container; hlm-empty-header, hlm-empty-media, hlm-empty-title, hlm-empty-description, and hlm-empty-content for structure.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const imports = [HlmEmptyImports, HlmButtonImports, HlmIconImports];
const icons = { lucideInbox, lucideSearch, lucideFileX };

/**
 * Basic empty state: media (icon), title, description, and optional action in content.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmEmpty class="max-w-md">
        <hlm-empty-header>
          <div hlmEmptyMedia variant="icon">
            <ng-icon name="lucideInbox" />
          </div>
          <h3 hlmEmptyTitle>No messages yet</h3>
          <p hlmEmptyDescription>
            When you get a message, it will show up here.
          </p>
        </hlm-empty-header>
        <hlm-empty-content>
          <button hlmBtn size="sm">Compose</button>
        </hlm-empty-content>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Empty media variant="icon" (default for media) shows icon in a rounded box.
 * Omit variant for transparent background.
 */
export const MediaVariants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-8">
        <div hlmEmpty class="max-w-xs">
          <hlm-empty-header>
            <div hlmEmptyMedia>
              <ng-icon name="lucideInbox" class="text-muted-foreground" />
            </div>
            <h3 hlmEmptyTitle>No icon box</h3>
            <p hlmEmptyDescription>Media with default (transparent) variant.</p>
          </hlm-empty-header>
        </div>
        <div hlmEmpty class="max-w-xs">
          <hlm-empty-header>
            <div hlmEmptyMedia variant="icon">
              <ng-icon name="lucideInbox" />
            </div>
            <h3 hlmEmptyTitle>With icon box</h3>
            <p hlmEmptyDescription>Media with variant="icon" for a muted box.</p>
          </hlm-empty-header>
        </div>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Search empty state: title and description only, with primary action.
 */
export const SearchEmpty: Story = {
  render: () => ({
    template: `
      <div hlmEmpty class="max-w-sm">
        <hlm-empty-header>
          <div hlmEmptyMedia variant="icon">
            <ng-icon name="lucideSearch" />
          </div>
          <h3 hlmEmptyTitle>No results found</h3>
          <p hlmEmptyDescription>
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </hlm-empty-header>
        <hlm-empty-content>
          <button hlmBtn variant="outline" size="sm">Clear filters</button>
        </hlm-empty-content>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Error / destructive empty state with link or button in description.
 */
export const ErrorEmpty: Story = {
  render: () => ({
    template: `
      <div hlmEmpty class="max-w-sm">
        <hlm-empty-header>
          <div hlmEmptyMedia variant="icon">
            <ng-icon name="lucideFileX" class="text-destructive" />
          </div>
          <h3 hlmEmptyTitle>Something went wrong</h3>
          <p hlmEmptyDescription>
            We couldn't load this page. <a href="#">Try again</a> or contact support.
          </p>
        </hlm-empty-header>
        <hlm-empty-content>
          <button hlmBtn variant="outline" size="sm">Retry</button>
        </hlm-empty-content>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};

/**
 * Title and description only, no media or actions.
 */
export const Minimal: Story = {
  render: () => ({
    template: `
      <div hlmEmpty class="max-w-sm">
        <hlm-empty-header>
          <h3 hlmEmptyTitle>No items</h3>
          <p hlmEmptyDescription>There is nothing to display in this list yet.</p>
        </hlm-empty-header>
      </div>
    `,
    moduleMetadata: { imports },
  }),
};

/**
 * Multiple actions in empty content.
 */
export const WithMultipleActions: Story = {
  render: () => ({
    template: `
      <div hlmEmpty class="max-w-md">
        <hlm-empty-header>
          <div hlmEmptyMedia variant="icon">
            <ng-icon name="lucideInbox" />
          </div>
          <h3 hlmEmptyTitle>No projects</h3>
          <p hlmEmptyDescription>
            Create a new project or import an existing one.
          </p>
        </hlm-empty-header>
        <hlm-empty-content>
          <div class="flex gap-2">
            <button hlmBtn size="sm">New project</button>
            <button hlmBtn variant="outline" size="sm">Import</button>
          </div>
        </hlm-empty-content>
      </div>
    `,
    moduleMetadata: { imports, providers: [provideIcons(icons)] },
  }),
};
