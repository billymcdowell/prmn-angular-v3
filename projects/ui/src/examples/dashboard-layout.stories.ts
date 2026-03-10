import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTypographyImports } from '../lib/typography';
import { HlmButtonImports } from '../lib/button';
import { HlmCardImports } from '../lib/card';
import { HlmTableImports } from '../lib/table';
import { HlmBadgeImports } from '../lib/badge';
import { HlmAvatarImports } from '../lib/avatar';
import { HlmSeparatorImports } from '../lib/separator';
import { HlmTabsImports } from '../lib/tabs';
import { HlmInputImports } from '../lib/input';
import { HlmSelectImports } from '../lib/select';
import { HlmPaginationImports } from '../lib/pagination';
import { HlmBreadCrumbImports } from '../lib/breadcrumb';

const meta: Meta<unknown> = {
  title: 'Examples/Layouts/Dashboard',
  parameters: {
    docs: {
      description: {
        component:
          'Dashboard layout example showing a header, filters, stats cards, table, and pagination composed from multiple ui components.',
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
  HlmBadgeImports,
  HlmAvatarImports,
  HlmSeparatorImports,
  HlmTabsImports,
  HlmInputImports,
  HlmSelectImports,
  HlmPaginationImports,
  HlmBreadCrumbImports,
];

export const Dashboard: Story = {
  render: () => ({
    template: `
      <section class="flex flex-col gap-6 p-6">
        <!-- Header -->
        <header class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="space-y-1">
            <nav hlmBreadcrumb>
              <ol hlmBreadcrumbList>
                <li hlmBreadcrumbItem>
                  <a hlmBreadcrumbLink href="#">Home</a>
                </li>
                <li hlmBreadcrumbSeparator>/</li>
                <li hlmBreadcrumbItem>
                  <a hlmBreadcrumbLink href="#">Analytics</a>
                </li>
                <li hlmBreadcrumbSeparator>/</li>
                <li hlmBreadcrumbPage>Dashboard</li>
              </ol>
            </nav>
            <div>
              <h1 hlmH2 class="flex items-center gap-3">
                Team dashboard
                <span hlmBadge variant="secondary">Live</span>
              </h1>
              <p hlmMuted>Overview of key metrics, recent activity, and team performance.</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <div class="flex items-center gap-2">
              <label hlmLabel class="sr-only" for="search">Search</label>
              <input hlmInput id="search" placeholder="Search projects" class="w-48 md:w-64" />
            </div>
            <select hlmSelect class="w-36">
              <option value="q1">Last 7 days</option>
              <option value="q2">Last 30 days</option>
              <option value="q3">Quarter to date</option>
            </select>
            <button hlmBtn variant="outline">Export</button>
            <button hlmBtn>New project</button>
          </div>
        </header>

        <hlm-separator></hlm-separator>

        <!-- Stats cards -->
        <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <hlm-card>
            <hlm-card-header>
              <p hlmMuted>Total revenue</p>
              <h2 hlmH3>$128,430</h2>
            </hlm-card-header>
            <div hlmCardContent>
              <p hlmSmall><span class="text-emerald-500">+12.4%</span> vs last month</p>
            </div>
          </hlm-card>

          <hlm-card>
            <hlm-card-header>
              <p hlmMuted>Active users</p>
              <h2 hlmH3>8,214</h2>
            </hlm-card-header>
            <div hlmCardContent>
              <p hlmSmall><span class="text-emerald-500">+3.1%</span> vs last week</p>
            </div>
          </hlm-card>

          <hlm-card>
            <hlm-card-header>
              <p hlmMuted>Open tickets</p>
              <h2 hlmH3>27</h2>
            </hlm-card-header>
            <div hlmCardContent>
              <p hlmSmall><span class="text-amber-500">+5</span> since yesterday</p>
            </div>
          </hlm-card>

          <hlm-card>
            <hlm-card-header>
              <p hlmMuted>Churn rate</p>
              <h2 hlmH3>2.1%</h2>
            </hlm-card-header>
            <div hlmCardContent>
              <p hlmSmall><span class="text-emerald-500">-0.4%</span> vs last month</p>
            </div>
          </hlm-card>
        </section>

        <!-- Main content -->
        <section class="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <!-- Table card -->
          <hlm-card class="overflow-hidden">
            <hlm-card-header>
              <div class="flex items-center justify-between gap-2">
                <div>
                  <h2 hlmH3>Top projects</h2>
                  <p hlmMuted>Projects with the highest revenue this period.</p>
                </div>
                <hlm-tabs value="revenue">
                  <hlm-tab-list>
                    <button hlm-tab value="revenue">Revenue</button>
                    <button hlm-tab value="users">Users</button>
                  </hlm-tab-list>
                </hlm-tabs>
              </div>
            </hlm-card-header>
            <div hlmCardContent class="space-y-4">
              <div class="overflow-x-auto">
                <hlm-table-container>
                  <table hlmTable>
                    <thead hlmTHead>
                      <tr hlmTr>
                        <th hlmTh class="w-1/3">Project</th>
                        <th hlmTh>Owner</th>
                        <th hlmTh class="text-right">Revenue</th>
                        <th hlmTh class="text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody hlmTBody>
                      <tr hlmTr>
                        <td hlmTd>
                          <div class="flex items-center gap-3">
                            <div class="h-9 w-9 rounded-md bg-blue-500/10"></div>
                            <div class="space-y-0.5">
                              <p hlmP>Acme Analytics</p>
                              <p hlmSmall class="text-muted-foreground">Analytics platform</p>
                            </div>
                          </div>
                        </td>
                        <td hlmTd>
                          <div class="flex items-center gap-3">
                            <hlm-avatar class="h-8 w-8">
                              <span hlmAvatarFallback>JD</span>
                            </hlm-avatar>
                            <div class="space-y-0.5">
                              <p hlmP>Jane Doe</p>
                              <p hlmSmall class="text-muted-foreground">Product</p>
                            </div>
                          </div>
                        </td>
                        <td hlmTd class="text-right">$42,380</td>
                        <td hlmTd class="text-right">
                          <span hlmBadge variant="outline">On track</span>
                        </td>
                      </tr>
                      <tr hlmTr>
                        <td hlmTd>Marketing dashboard</td>
                        <td hlmTd>John Smith</td>
                        <td hlmTd class="text-right">$28,940</td>
                        <td hlmTd class="text-right">
                          <span hlmBadge variant="secondary">Review</span>
                        </td>
                      </tr>
                      <tr hlmTr>
                        <td hlmTd>Support center</td>
                        <td hlmTd>Alex Johnson</td>
                        <td hlmTd class="text-right">$17,230</td>
                        <td hlmTd class="text-right">
                          <span hlmBadge variant="outline">At risk</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </hlm-table-container>
              </div>

              <div class="flex items-center justify-between gap-3">
                <p hlmSmall class="text-muted-foreground">
                  Showing <span hlmCode>1–3</span> of 24 projects
                </p>
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

          <!-- Side column -->
          <div class="flex flex-col gap-4">
            <hlm-card>
              <hlm-card-header>
                <h2 hlmH3>Team activity</h2>
                <p hlmMuted>Latest updates from your team.</p>
              </hlm-card-header>
              <div hlmCardContent class="space-y-4">
                <div class="flex items-start gap-3">
                  <hlm-avatar class="h-8 w-8">
                    <span hlmAvatarFallback>JD</span>
                  </hlm-avatar>
                  <div class="space-y-1">
                    <p hlmSmall><span class="font-medium">Jane</span> created a new report.</p>
                    <p hlmMuted>2 hours ago</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <hlm-avatar class="h-8 w-8">
                    <span hlmAvatarFallback>AS</span>
                  </hlm-avatar>
                  <div class="space-y-1">
                    <p hlmSmall><span class="font-medium">Alex</span> closed 4 tickets.</p>
                    <p hlmMuted>5 hours ago</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <hlm-avatar class="h-8 w-8">
                    <span hlmAvatarFallback>MS</span>
                  </hlm-avatar>
                  <div class="space-y-1">
                    <p hlmSmall><span class="font-medium">Morgan</span> invited 3 new members.</p>
                    <p hlmMuted>Yesterday</p>
                  </div>
                </div>
              </div>
              <hlm-card-footer class="border-t">
                <button hlmBtn variant="outline" size="sm">View all</button>
              </hlm-card-footer>
            </hlm-card>

            <hlm-card>
              <hlm-card-header>
                <h2 hlmH3>Upgrade your plan</h2>
                <p hlmMuted>Unlock advanced analytics and reporting.</p>
              </hlm-card-header>
              <div hlmCardContent class="space-y-2">
                <p hlmP>Get custom dashboards, priority support, and usage-based pricing.</p>
                <p hlmSmall hlmMuted>No credit card required for the trial.</p>
              </div>
              <hlm-card-footer class="border-t flex justify-end gap-2">
                <button hlmBtn variant="outline" size="sm">Maybe later</button>
                <button hlmBtn size="sm">Upgrade now</button>
              </hlm-card-footer>
            </hlm-card>
          </div>
        </section>
      </section>
    `,
    moduleMetadata: { imports: defaultImports },
  }),
};

