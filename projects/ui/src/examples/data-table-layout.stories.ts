import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTypographyImports } from '../lib/typography';
import { HlmButtonImports } from '../lib/button';
import { HlmCardImports } from '../lib/card';
import { HlmTableImports } from '../lib/table';
import { HlmInputImports } from '../lib/input';
import { HlmSelectImports } from '../lib/select';
import { HlmBadgeImports } from '../lib/badge';
import { HlmPaginationImports } from '../lib/pagination';
import { HlmSeparatorImports } from '../lib/separator';
import { HlmCheckboxImports } from '../lib/checkbox';

const meta: Meta<unknown> = {
  title: 'Examples/Layouts/DataTable',
  parameters: {
    docs: {
      description: {
        component:
          'Data table layout with toolbar, filters, bulk actions, and pagination that combines table, form controls, and badges.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<unknown>;

const defaultImports = [
  HlmTypographyImports,
  HlmButtonImports,
  HlmCardImports,
  HlmTableImports,
  HlmInputImports,
  HlmSelectImports,
  HlmBadgeImports,
  HlmPaginationImports,
  HlmSeparatorImports,
  HlmCheckboxImports,
];

export const DataTable: Story = {
  render: () => ({
    template: `
      <section class="flex flex-col gap-6 p-6">
        <header class="space-y-1">
          <h1 hlmH2>Customers</h1>
          <p hlmMuted>Filter, search, and manage your customer list.</p>
        </header>

        <hlm-card class="overflow-hidden">
          <hlm-card-header>
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div class="flex flex-wrap items-center gap-3">
                <input hlmInput placeholder="Search customers..." class="w-48 md:w-64" />
                <select hlmSelect class="w-36">
                  <option value="all">All statuses</option>
                  <option value="active">Active</option>
                  <option value="trial">Trial</option>
                  <option value="churned">Churned</option>
                </select>
                <select hlmSelect class="w-32">
                  <option value="all">All plans</option>
                  <option value="free">Free</option>
                  <option value="pro">Pro</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button hlmBtn variant="outline" size="sm">Export</button>
                <button hlmBtn size="sm">Add customer</button>
              </div>
            </div>
          </hlm-card-header>

          <div hlmCardContent class="space-y-4">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <label class="flex items-center gap-2">
                  <hlm-checkbox aria-label="Select all rows" />
                  <span hlmSmall>Select all</span>
                </label>
                <hlm-separator orientation="vertical" class="h-5" />
                <button hlmBtn variant="outline" size="xs">Archive</button>
                <button hlmBtn variant="outline" size="xs">Tag</button>
              </div>
              <p hlmSmall class="text-muted-foreground">
                Showing <span hlmCode>1–10</span> of 128 customers
              </p>
            </div>

            <div class="overflow-x-auto">
              <hlm-table-container>
                <table hlmTable>
                  <thead hlmTHead>
                    <tr hlmTr>
                      <th hlmTh class="w-[40px]">
                        <hlm-checkbox aria-label="Select all customers" />
                      </th>
                      <th hlmTh>Name</th>
                      <th hlmTh>Email</th>
                      <th hlmTh>Plan</th>
                      <th hlmTh>Status</th>
                      <th hlmTh class="text-right">MRR</th>
                    </tr>
                  </thead>
                  <tbody hlmTBody>
                    <tr hlmTr>
                      <td hlmTd>
                        <hlm-checkbox aria-label="Select Acme Inc." />
                      </td>
                      <td hlmTd>
                        <p hlmP>Acme Inc.</p>
                        <p hlmSmall class="text-muted-foreground">Enterprise</p>
                      </td>
                      <td hlmTd>billing@acmeinc.com</td>
                      <td hlmTd>
                        <span hlmBadge>Enterprise</span>
                      </td>
                      <td hlmTd>
                        <span hlmBadge variant="secondary">Active</span>
                      </td>
                      <td hlmTd class="text-right">$3,200</td>
                    </tr>
                    <tr hlmTr>
                      <td hlmTd>
                        <hlm-checkbox aria-label="Select Orbit Labs" />
                      </td>
                      <td hlmTd>
                        <p hlmP>Orbit Labs</p>
                        <p hlmSmall class="text-muted-foreground">Pro</p>
                      </td>
                      <td hlmTd>ops@orbitlabs.io</td>
                      <td hlmTd>
                        <span hlmBadge variant="outline">Pro</span>
                      </td>
                      <td hlmTd>
                        <span hlmBadge variant="secondary">Trial</span>
                      </td>
                      <td hlmTd class="text-right">$280</td>
                    </tr>
                    <tr hlmTr>
                      <td hlmTd>
                        <hlm-checkbox aria-label="Select Lumina Studio" />
                      </td>
                      <td hlmTd>
                        <p hlmP>Lumina Studio</p>
                        <p hlmSmall class="text-muted-foreground">Free</p>
                      </td>
                      <td hlmTd>hello@lumina.studio</td>
                      <td hlmTd>
                        <span hlmBadge variant="outline">Free</span>
                      </td>
                      <td hlmTd>
                        <span hlmBadge variant="secondary">Churned</span>
                      </td>
                      <td hlmTd class="text-right">$0</td>
                    </tr>
                  </tbody>
                </table>
              </hlm-table-container>
            </div>

            <div class="flex flex-col gap-3 border-t pt-3 md:flex-row md:items-center md:justify-between">
              <div class="flex items-center gap-2">
                <p hlmSmall class="text-muted-foreground">Rows per page</p>
                <select hlmSelect class="w-20">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <hlm-pagination>
                <button hlmPaginationPrevious>Previous</button>
                <hlm-pagination-content>
                  <button hlmPaginationLink [isActive]="true">1</button>
                  <button hlmPaginationLink>2</button>
                  <button hlmPaginationLink>3</button>
                </hlm-pagination-content>
                <button hlmPaginationNext>Next</button>
              </hlm-pagination>
            </div>
          </div>
        </hlm-card>
      </section>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

