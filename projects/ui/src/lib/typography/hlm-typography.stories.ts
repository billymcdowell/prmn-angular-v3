import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTypographyImports } from './index';

const meta: Meta<unknown> = {
  title: 'Components/Typography',
  parameters: {
    docs: {
      description: {
        component:
          'Text styles for headings, body, and inline elements. Use hlmH1–hlmH4, hlmP, hlmLead, hlmLarge, hlmSmall, hlmMuted, hlmBlockquote, hlmCode, hlmUl.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<unknown>;

const defaultImports = [HlmTypographyImports];

/**
 * All heading levels.
 */
export const Headings: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <h1 hlmH1>Heading 1</h1>
        <h2 hlmH2>Heading 2</h2>
        <h3 hlmH3>Heading 3</h3>
        <h4 hlmH4>Heading 4</h4>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Body and lead paragraph.
 */
export const Body: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <p hlmLead>A lead paragraph with larger, more prominent text for introductions.</p>
        <p hlmP>Regular body text. Use for main content with comfortable line height.</p>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Small and muted text for captions or secondary info.
 */
export const SmallAndMuted: Story = {
  render: () => ({
    template: `
      <div class="space-y-2">
        <p hlmSmall>Small text for labels or captions.</p>
        <p hlmMuted>Muted text for secondary or de-emphasized content.</p>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Large text (e.g. for hero or stats).
 */
export const Large: Story = {
  render: () => ({
    template: `<p hlmLarge>Large text for emphasis or numbers.</p>`,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Blockquote for quotes or callouts.
 */
export const Blockquote: Story = {
  render: () => ({
    template: `
      <blockquote hlmBlockquote>
        This is a blockquote. Use it for testimonials, quotes, or callouts.
      </blockquote>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Inline code and code block styling.
 */
export const Code: Story = {
  render: () => ({
    template: `
      <p hlmP>
        Use <code hlmCode>hlmCode</code> for inline code or variable names.
      </p>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Unordered list.
 */
export const List: Story = {
  render: () => ({
    template: `
      <ul hlmUl>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Article-style composition: title, lead, body, list, blockquote.
 */
export const Article: Story = {
  render: () => ({
    template: `
      <article class="max-w-2xl space-y-4">
        <h1 hlmH1>Article title</h1>
        <p hlmLead>A short introduction or summary of the article.</p>
        <p hlmP>Body paragraph with regular text. You can mix typography directives for consistent spacing and style.</p>
        <ul hlmUl>
          <li>Key point one</li>
          <li>Key point two</li>
        </ul>
        <blockquote hlmBlockquote>
          A notable quote or callout from the content.
        </blockquote>
        <p hlmP>Closing paragraph. Use <code hlmCode>hlmCode</code> for technical terms.</p>
      </article>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
