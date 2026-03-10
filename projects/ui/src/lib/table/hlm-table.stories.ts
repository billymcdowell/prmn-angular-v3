import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTable } from './hlm-table';
import { HlmTableImports } from './index';

const meta: Meta<HlmTable> = {
  component: HlmTable,
  title: 'Components/Table',
  parameters: {
    docs: {
      description: {
        component:
          'Styled table using semantic HTML. Use hlmTableContainer, hlmTable, hlmTHead, hlmTBody, hlmTFoot, hlmTr, hlmTh, hlmTd, hlmCaption. Supports custom variant via provideHlmTableConfig or per-table input.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmTable>;

const defaultImports = [HlmTableImports];

/**
 * Basic table with header and body.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <div hlmTableContainer>
        <table hlmTable>
          <thead hlmTHead>
            <tr hlmTr>
              <th hlmTh>Name</th>
              <th hlmTh>Email</th>
              <th hlmTh>Role</th>
            </tr>
          </thead>
          <tbody hlmTBody>
            <tr hlmTr>
              <td hlmTd>Alice</td>
              <td hlmTd>alice&#64;example.com</td>
              <td hlmTd>Admin</td>
            </tr>
            <tr hlmTr>
              <td hlmTd>Bob</td>
              <td hlmTd>bob&#64;example.com</td>
              <td hlmTd>User</td>
            </tr>
            <tr hlmTr>
              <td hlmTd>Carol</td>
              <td hlmTd>carol&#64;example.com</td>
              <td hlmTd>User</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Table with caption and footer (e.g. totals).
 */
export const WithCaptionAndFooter: Story = {
  render: () => ({
    template: `
      <div hlmTableContainer>
        <table hlmTable>
          <caption hlmCaption>Monthly revenue (in thousands)</caption>
          <thead hlmTHead>
            <tr hlmTr>
              <th hlmTh>Month</th>
              <th hlmTh>Revenue</th>
            </tr>
          </thead>
          <tbody hlmTBody>
            <tr hlmTr>
              <td hlmTd>January</td>
              <td hlmTd>42</td>
            </tr>
            <tr hlmTr>
              <td hlmTd>February</td>
              <td hlmTd>38</td>
            </tr>
          </tbody>
          <tfoot hlmTFoot>
            <tr hlmTr>
              <th hlmTh>Total</th>
              <td hlmTd>80</td>
            </tr>
          </tfoot>
        </table>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Narrow table in a card.
 */
export const InCard: Story = {
  render: () => ({
    template: `
      <div class="w-full max-w-md rounded-lg border p-4">
        <h3 class="mb-3 font-semibold">Recent users</h3>
        <div hlmTableContainer>
          <table hlmTable>
            <thead hlmTHead>
              <tr hlmTr>
                <th hlmTh>User</th>
                <th hlmTh>Status</th>
              </tr>
            </thead>
            <tbody hlmTBody>
              <tr hlmTr>
                <td hlmTd>Alice</td>
                <td hlmTd>Active</td>
              </tr>
              <tr hlmTr>
                <td hlmTd>Bob</td>
                <td hlmTd>Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Many columns: container allows horizontal scroll.
 */
export const Scrollable: Story = {
  render: () => ({
    template: `
      <div hlmTableContainer class="max-w-md">
        <table hlmTable>
          <thead hlmTHead>
            <tr hlmTr>
              <th hlmTh>ID</th>
              <th hlmTh>Name</th>
              <th hlmTh>Email</th>
              <th hlmTh>Role</th>
              <th hlmTh>Status</th>
              <th hlmTh>Joined</th>
            </tr>
          </thead>
          <tbody hlmTBody>
            <tr hlmTr>
              <td hlmTd>1</td>
              <td hlmTd>Alice</td>
              <td hlmTd>alice&#64;example.com</td>
              <td hlmTd>Admin</td>
              <td hlmTd>Active</td>
              <td hlmTd>2024-01-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

/**
 * Single row (e.g. key-value list).
 */
export const KeyValue: Story = {
  render: () => ({
    template: `
      <div hlmTableContainer class="max-w-sm">
        <table hlmTable>
          <tbody hlmTBody>
            <tr hlmTr>
              <th hlmTh class="w-1/3">Name</th>
              <td hlmTd>My Project</td>
            </tr>
            <tr hlmTr>
              <th hlmTh>Version</th>
              <td hlmTd>1.0.0</td>
            </tr>
            <tr hlmTr>
              <th hlmTh>License</th>
              <td hlmTd>MIT</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};
