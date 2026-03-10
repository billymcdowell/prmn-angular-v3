import type { Meta, StoryObj } from '@storybook/angular';
import { HlmAspectRatio } from './helm-aspect-ratio';
import { HlmAspectRatioImports } from './index';

const meta: Meta<HlmAspectRatio> = {
  component: HlmAspectRatio,
  title: 'Components/Aspect Ratio',
  parameters: {
    docs: {
      description: {
        component:
          'Maintains a consistent width/height ratio for its first child. Use for videos, images, or any content that should keep a fixed aspect ratio (e.g. 16/9, 4/3, 1/1). Pass a ratio as a number or string like "16/9".',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmAspectRatio>;

const defaultImports = [HlmAspectRatioImports];

/**
 * Default 16:9 — common for video and widescreen content.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div class="max-w-2xl">
        <div hlmAspectRatio="16/9">
          <img src="https://placehold.co/600x400/1a1a2e/eee" alt="16:9 placeholder" />
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Common ratios: 16/9, 4/3, 1/1, 21/9, 3/2.
 * Ratio can be a string "width/height" or a number (width/height).
 */
export const CommonRatios: Story = {
  render: () => ({
    template: `
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p class="mb-1 text-sm font-medium text-muted-foreground">16:9 (video)</p>
          <div hlmAspectRatio="16/9" class="overflow-hidden rounded-md border">
            <img src="https://placehold.co/400x225/16213e/eee" alt="16:9" />
          </div>
        </div>
        <div>
          <p class="mb-1 text-sm font-medium text-muted-foreground">4:3 (classic)</p>
          <div hlmAspectRatio="4/3" class="overflow-hidden rounded-md border">
            <img src="https://placehold.co/400x300/0f3460/eee" alt="4:3" />
          </div>
        </div>
        <div>
          <p class="mb-1 text-sm font-medium text-muted-foreground">1:1 (square)</p>
          <div hlmAspectRatio="1/1" class="overflow-hidden rounded-md border">
            <img src="https://placehold.co/400x400/e94560/eee" alt="1:1" />
          </div>
        </div>
        <div>
          <p class="mb-1 text-sm font-medium text-muted-foreground">21:9 (ultrawide)</p>
          <div hlmAspectRatio="21/9" class="overflow-hidden rounded-md border">
            <img src="https://placehold.co/420x180/1a1a2e/eee" alt="21:9" />
          </div>
        </div>
        <div>
          <p class="mb-1 text-sm font-medium text-muted-foreground">3:2 (photo)</p>
          <div hlmAspectRatio="3/2" class="overflow-hidden rounded-md border">
            <img src="https://placehold.co/400x267/16213e/eee" alt="3:2" />
          </div>
        </div>
        <div>
          <p class="mb-1 text-sm font-medium text-muted-foreground">2:1 (banner)</p>
          <div hlmAspectRatio="2/1" class="overflow-hidden rounded-md border">
            <img src="https://placehold.co/400x200/0f3460/eee" alt="2:1" />
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Video embed: 16:9 iframe (e.g. YouTube) keeps correct proportions in a responsive container.
 */
export const VideoEmbed: Story = {
  render: () => ({
    template: `
      <div class="max-w-2xl">
        <div hlmAspectRatio="16/9" class="overflow-hidden rounded-lg border bg-muted">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="h-full w-full border-0"
          ></iframe>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Image cards: use aspect ratio so all cards share the same proportion regardless of image size.
 */
export const ImageCards: Story = {
  render: () => ({
    template: `
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article class="overflow-hidden rounded-lg border bg-card">
          <div hlmAspectRatio="4/3">
            <img src="https://placehold.co/400x300/1a1a2e/94a3b8" alt="Card 1" />
          </div>
          <div class="p-3">
            <h4 class="font-medium">Card title</h4>
            <p class="text-sm text-muted-foreground">Short description.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-lg border bg-card">
          <div hlmAspectRatio="4/3">
            <img src="https://placehold.co/400x300/16213e/94a3b8" alt="Card 2" />
          </div>
          <div class="p-3">
            <h4 class="font-medium">Another card</h4>
            <p class="text-sm text-muted-foreground">Same 4:3 ratio.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-lg border bg-card">
          <div hlmAspectRatio="4/3">
            <img src="https://placehold.co/400x300/0f3460/94a3b8" alt="Card 3" />
          </div>
          <div class="p-3">
            <h4 class="font-medium">Third card</h4>
            <p class="text-sm text-muted-foreground">Consistent layout.</p>
          </div>
        </article>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Square thumbnails (1:1): avatars, icons, or gallery grids.
 */
export const SquareThumbnails: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-4">
        <div class="w-24" hlmAspectRatio="1/1">
          <img src="https://placehold.co/96x96/6366f1/fff" alt="Square 1" class="rounded-full" />
        </div>
        <div class="w-32" hlmAspectRatio="1/1">
          <img src="https://placehold.co/128x128/8b5cf6/fff" alt="Square 2" class="rounded-lg" />
        </div>
        <div class="w-40" hlmAspectRatio="1/1">
          <img src="https://placehold.co/160x160/a855f7/fff" alt="Square 3" class="rounded-md" />
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Hero banner: wide ratio (21:9 or 2:1) for hero sections.
 */
export const HeroBanner: Story = {
  render: () => ({
    template: `
      <div class="max-w-4xl">
        <div hlmAspectRatio="21/9" class="overflow-hidden rounded-lg border">
          <img src="https://placehold.co/840x360/1e293b/64748b" alt="Hero banner 21:9" />
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Numeric ratio: pass a number (e.g. 1.5 for 3/2) instead of a string.
 */
export const NumericRatio: Story = {
  render: () => ({
    template: `
      <div class="max-w-md space-y-4">
        <div>
          <p class="mb-1 text-sm text-muted-foreground">ratio = 1 (square)</p>
          <div hlmAspectRatio="1" class="overflow-hidden rounded border">
            <img src="https://placehold.co/300x300/475569/94a3b8" alt="1:1" />
          </div>
        </div>
        <div>
          <p class="mb-1 text-sm text-muted-foreground">ratio = 1.777... (16/9)</p>
          <div [hlmAspectRatio]="16/9" class="overflow-hidden rounded border">
            <img src="https://placehold.co/300x169/475569/94a3b8" alt="16:9" />
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Content other than img: any first child is sized to fill the ratio box (object-cover).
 * Here we use a div with background for a placeholder or custom content.
 */
export const CustomContent: Story = {
  render: () => ({
    template: `
      <div class="max-w-md">
        <div hlmAspectRatio="16/9" class="overflow-hidden rounded-lg border">
          <div class="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
            Custom content (e.g. chart, SVG, or component)
          </div>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
