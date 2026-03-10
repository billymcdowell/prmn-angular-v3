import type { Meta, StoryObj } from '@storybook/angular';
import { HlmAvatar } from './hlm-avatar';
import { HlmAvatarImports } from './index';
import { HlmIconImports } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideUser } from '@ng-icons/lucide';

const meta: Meta<HlmAvatar> = {
  component: HlmAvatar,
  title: 'Components/Avatar',
  parameters: {
    docs: {
      description: {
        component:
          'User avatar: image with fallback when the image fails or is loading. Use hlm-avatar, hlm-avatar-image (img), and hlm-avatar-fallback. Optional: hlm-avatar-badge, hlm-avatar-group, hlm-avatar-group-count. Sizes: default, sm, lg.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmAvatar>;

const defaultImports = [HlmAvatarImports];

/**
 * Image only. When the image loads, it is shown; otherwise the fallback is used.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <hlm-avatar>
        <img hlmAvatarImage src="https://placehold.co/80x80/6366f1/fff?text=JD" alt="User" />
        <span hlmAvatarFallback>JD</span>
      </hlm-avatar>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Fallback only (no image or broken URL). Use initials or an icon.
 */
export const Fallback: Story = {
  render: () => ({
    template: `
      <hlm-avatar>
        <img hlmAvatarImage src="https://broken.example.com/image.png" alt="User" />
        <span hlmAvatarFallback>AB</span>
      </hlm-avatar>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Sizes: sm (size-6), default (size-8), lg (size-10).
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-4">
        <hlm-avatar size="sm">
          <img hlmAvatarImage src="https://placehold.co/24x24/8b5cf6/fff" alt="Small" />
          <span hlmAvatarFallback>SM</span>
        </hlm-avatar>
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/32x32/6366f1/fff" alt="Default" />
          <span hlmAvatarFallback>MD</span>
        </hlm-avatar>
        <hlm-avatar size="lg">
          <img hlmAvatarImage src="https://placehold.co/40x40/a855f7/fff" alt="Large" />
          <span hlmAvatarFallback>LG</span>
        </hlm-avatar>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Fallback with icon when no image is available.
 */
export const FallbackWithIcon: Story = {
  render: () => ({
    template: `
      <hlm-avatar>
        <img hlmAvatarImage src="https://broken.example.com/image.png" alt="User" />
        <span hlmAvatarFallback>
          <ng-icon name="lucideUser" />
        </span>
      </hlm-avatar>
    `,
    moduleMetadata: {
      imports: [...defaultImports, HlmIconImports],
      providers: [provideIcons({ lucideUser })],
    },
  }),
};

/**
 * Status or role indicator with a small badge overlay.
 */
export const WithBadge: Story = {
  render: () => ({
    template: `
      <div class="flex items-center gap-4">
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/80x80/22c55e/fff" alt="Online" />
          <span hlmAvatarFallback>ON</span>
          <span hlmAvatarBadge class="bg-green-500" />
        </hlm-avatar>
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/80x80/94a3b8/fff" alt="Away" />
          <span hlmAvatarFallback>AW</span>
          <span hlmAvatarBadge class="bg-yellow-500" />
        </hlm-avatar>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Group of avatars overlapping. Use for "who's in this thread" or shared documents.
 */
export const Group: Story = {
  render: () => ({
    template: `
      <hlm-avatar-group>
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/80x80/6366f1/fff?text=1" alt="User 1" />
          <span hlmAvatarFallback>U1</span>
        </hlm-avatar>
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/80x80/8b5cf6/fff?text=2" alt="User 2" />
          <span hlmAvatarFallback>U2</span>
        </hlm-avatar>
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/80x80/a855f7/fff?text=3" alt="User 3" />
          <span hlmAvatarFallback>U3</span>
        </hlm-avatar>
      </hlm-avatar-group>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Group with a "+N" count when there are more users than shown.
 */
export const GroupWithCount: Story = {
  render: () => ({
    template: `
      <hlm-avatar-group>
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/80x80/6366f1/fff?text=1" alt="User 1" />
          <span hlmAvatarFallback>U1</span>
        </hlm-avatar>
        <hlm-avatar>
          <img hlmAvatarImage src="https://placehold.co/80x80/8b5cf6/fff?text=2" alt="User 2" />
          <span hlmAvatarFallback>U2</span>
        </hlm-avatar>
        <hlm-avatar-group-count>+3</hlm-avatar-group-count>
      </hlm-avatar-group>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Multiple fallbacks (e.g. different initials) to show styling variety.
 */
export const MultipleFallbacks: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-3">
        <hlm-avatar>
          <img hlmAvatarImage src="https://broken.example.com/1" alt="User" />
          <span hlmAvatarFallback>AB</span>
        </hlm-avatar>
        <hlm-avatar>
          <img hlmAvatarImage src="https://broken.example.com/2" alt="User" />
          <span hlmAvatarFallback>CD</span>
        </hlm-avatar>
        <hlm-avatar>
          <img hlmAvatarImage src="https://broken.example.com/3" alt="User" />
          <span hlmAvatarFallback>EF</span>
        </hlm-avatar>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
