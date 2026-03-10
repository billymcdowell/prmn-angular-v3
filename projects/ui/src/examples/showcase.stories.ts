import type { Meta, StoryObj } from '@storybook/angular';
import { HlmTypographyImports } from '../lib/typography';
import { HlmButtonImports } from '../lib/button';
import { HlmBadgeImports } from '../lib/badge';
import { HlmCardImports } from '../lib/card';
import { HlmInputImports } from '../lib/input';
import { HlmTextareaImports } from '../lib/textarea';
import { HlmSelectImports } from '../lib/select';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmCheckboxImports } from '../lib/checkbox';
import { HlmSwitchImports } from '../lib/switch';
import { HlmTabsImports } from '../lib/tabs';
import { HlmAlertImports } from '../lib/alert';
import { HlmTooltipImports } from '../lib/tooltip';
import { HlmAvatarImports } from '../lib/avatar';
import { HlmSeparatorImports } from '../lib/separator';
import { HlmTableImports } from '../lib/table';
import { HlmPaginationImports } from '../lib/pagination';
import { HlmBreadCrumbImports } from '../lib/breadcrumb';
import { HlmScrollAreaImports } from '../lib/scroll-area';
import { HlmRadioGroupImports } from '../lib/radio-group';
import { HlmToggleImports } from '../lib/toggle';
import { HlmDropdownMenuImports } from '../lib/dropdown-menu';
import { HlmToggleGroupImports } from '../lib/toggle-group';
import { HlmMenubarImports } from '../lib/menubar';
import { HlmKbdImports } from '../lib/kbd';
import { HlmProgressImports } from '../lib/progress';
import { HlmSpinnerImports } from '../lib/spinner';
import { HlmAutocompleteImports } from '../lib/autocomplete';
import { HlmInputGroupImports } from '../lib/input-group';
import { HlmNativeSelectImports } from '../lib/native-select';
import { HlmSkeletonImports } from '../lib/skeleton';
import { HlmAlertDialogImports } from '../lib/alert-dialog';
import { HlmCommandImports } from '../lib/command';
import { HlmResizableImports } from '../lib/resizable';
import { HlmSliderImports } from '../lib/slider';
import { HlmPopoverImports } from '../lib/popover';
import { HlmButtonGroupImports } from '../lib/button-group';
import { HlmInputOtpImports } from '../lib/input-otp';
import { HlmContextMenuImports } from '../lib/context-menu';
import { HlmFormFieldImports } from '../lib/form-field';
import { HlmComboboxImports } from '../lib/combobox';
import { HlmSidebarImports } from '../lib/sidebar';
import { HlmAspectRatioImports } from '../lib/aspect-ratio';
import { HlmIconImports } from '../lib/icon';
import { HlmItemImports } from '../lib/item';
import { HlmCalendarImports } from '../lib/calendar';
import { HlmEmptyImports } from '../lib/empty';
import { HlmFieldImports } from '../lib/field';
import { HlmToasterImports } from '../lib/sonner';
import { HlmDatePickerImports } from '../lib/date-picker';
import { HlmLabelImports } from '../lib/label';
import { HlmCarouselImports } from '../lib/carousel';
import { HlmSkeletonImports as HlmSkeletonPrimitivesImports } from '../lib/skeleton';
import { HlmAccordionImports } from '../lib/accordion';
import { HlmHoverCardImports } from '../lib/hover-card';
import { HlmNavigationMenuImports } from '../lib/navigation-menu/src';
import { DatePickerShowcaseDemo } from '../lib/date-picker/hlm-date-picker.stories';

const meta: Meta<unknown> = {
  title: 'Examples/Showcase',
  parameters: {
    docs: {
      description: {
        component:
          'Visual showcase of the most commonly used UI components in the library, grouped by category.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<unknown>;

const showcaseImports = [
  HlmTypographyImports,
  HlmButtonImports,
  HlmBadgeImports,
  HlmCardImports,
  HlmInputImports,
  HlmTextareaImports,
  HlmSelectImports,
  BrnSelectImports,
  HlmCheckboxImports,
  HlmSwitchImports,
  HlmTabsImports,
  HlmAlertImports,
  HlmTooltipImports,
  HlmAvatarImports,
  HlmSeparatorImports,
  HlmTableImports,
  HlmPaginationImports,
  HlmBreadCrumbImports,
  HlmScrollAreaImports,
  HlmRadioGroupImports,
  HlmToggleImports,
  HlmDropdownMenuImports,
  HlmToggleGroupImports,
  HlmMenubarImports,
  HlmKbdImports,
  HlmProgressImports,
  HlmSpinnerImports,
  HlmAutocompleteImports,
  HlmInputGroupImports,
  HlmNativeSelectImports,
  HlmSkeletonImports,
  HlmAlertDialogImports,
  HlmCommandImports,
  HlmResizableImports,
  HlmSliderImports,
  HlmPopoverImports,
  HlmButtonGroupImports,
  HlmInputOtpImports,
  HlmContextMenuImports,
  HlmFormFieldImports,
  HlmComboboxImports,
  HlmSidebarImports,
  HlmAspectRatioImports,
  HlmIconImports,
  HlmItemImports,
  HlmCalendarImports,
  HlmEmptyImports,
  HlmFieldImports,
  HlmToasterImports,
  HlmDatePickerImports,
  HlmLabelImports,
  HlmCarouselImports,
  HlmSkeletonPrimitivesImports,
  HlmAccordionImports,
  HlmHoverCardImports,
  HlmNavigationMenuImports,
] ;

export const Showcase: Story = {
  render: () => ({
    template: `
      <section class="flex flex-col gap-10 p-6">
        <!-- Page header -->
        <header class="space-y-2">
          <h1 hlmH1>UI Component Showcase</h1>
          <p hlmLead>Explore the core primitives and components available in this UI library.</p>
        </header>

        <hlm-separator></hlm-separator>

        <!-- Typography -->
        <section class="space-y-4">
          <h2 hlmH2>Typography</h2>
          <div class="space-y-2">
            <h1 hlmH1>Heading 1</h1>
            <h2 hlmH2>Heading 2</h2>
            <h3 hlmH3>Heading 3</h3>
            <h4 hlmH4>Heading 4</h4>
            <p hlmP>Body text using the <code hlmCode>hlmP</code> directive.</p>
            <p hlmMuted>Muted text for secondary information.</p>
            <p hlmSmall>Small helper text.</p>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Buttons & Badges -->
        <section class="space-y-4">
          <h2 hlmH2>Buttons & Badges</h2>
          <div class="flex flex-wrap items-center gap-3">
            <button hlmBtn>Primary</button>
            <button hlmBtn variant="outline">Outline</button>
            <button hlmBtn variant="ghost">Ghost</button>
            <button hlmBtn variant="destructive">Destructive</button>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span hlmBadge>Default</span>
            <span hlmBadge variant="secondary">Secondary</span>
            <span hlmBadge variant="outline">Outline</span>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Form controls -->
        <section class="space-y-4">
          <h2 hlmH2>Form controls</h2>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-2">
              <label hlmSmall for="input-example">Input</label>
              <input hlmInput id="input-example" placeholder="Type something..." />
            </div>
            <div class="space-y-2">
              <label hlmSmall for="textarea-example">Textarea</label>
              <textarea hlmTextarea id="textarea-example" rows="3" placeholder="Multi-line input"></textarea>
            </div>
            <div class="space-y-2">
              <label hlmSmall for="select-example">Select</label>
              <brn-select id="select-example" placeholder="Choose an option">
                <hlm-select-trigger>
                  <hlm-select-value />
                </hlm-select-trigger>
                <hlm-select-content>
                  <hlm-select-group>
                    <hlm-select-label>Options</hlm-select-label>
                    <hlm-option value="one">Option one</hlm-option>
                    <hlm-option value="two">Option two</hlm-option>
                  </hlm-select-group>
                </hlm-select-content>
              </brn-select>
            </div>
            <div class="space-y-3">
              <label class="flex cursor-pointer items-center gap-2">
                <hlm-checkbox aria-label="Example checkbox" />
                <span hlmSmall>Checkbox</span>
              </label>
              <div class="flex items-center gap-3">
                <span hlmSmall>Switch</span>
                <button hlmSwitch type="button">
                  <span hlmSwitchThumb></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Cards & Layout -->
        <section class="space-y-4">
          <h2 hlmH2>Cards & Layout</h2>
          <div class="grid gap-4 md:grid-cols-3">
            <hlm-card>
              <hlm-card-header>
                <h3 hlmH3>Simple card</h3>
                <p hlmMuted>Use cards to group related content.</p>
              </hlm-card-header>
              <div hlmCardContent>
                <p hlmP>Cards work great for dashboards, settings, and content blocks.</p>
              </div>
              <hlm-card-footer>
                <button hlmBtn size="sm">Action</button>
              </hlm-card-footer>
            </hlm-card>

            <hlm-card>
              <hlm-card-header>
                <h3 hlmH3>With badge</h3>
              </hlm-card-header>
              <div hlmCardContent class="flex items-center justify-between">
                <p hlmP>Status</p>
                <span hlmBadge variant="secondary">Active</span>
              </div>
            </hlm-card>

            <hlm-card>
              <hlm-card-header>
                <h3 hlmH3>With avatar</h3>
              </hlm-card-header>
              <div hlmCardContent class="flex items-center gap-3">
                <hlm-avatar>
                  <span hlmAvatarFallback>JD</span>
                </hlm-avatar>
                <div>
                  <p hlmP>Jane Doe</p>
                  <p hlmMuted>Product Designer</p>
                </div>
              </div>
            </hlm-card>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Navigation & Breadcrumbs -->
        <section class="space-y-4">
          <h2 hlmH2>Navigation</h2>
          <nav hlmBreadcrumb>
            <ol hlmBreadcrumbList>
              <li hlmBreadcrumbItem>
                <a hlmBreadcrumbLink href="#">Home</a>
              </li>
              <li hlmBreadcrumbSeparator>/</li>
              <li hlmBreadcrumbItem>
                <a hlmBreadcrumbLink href="#">Library</a>
              </li>
              <li hlmBreadcrumbSeparator>/</li>
              <li hlmBreadcrumbPage>Showcase</li>
            </ol>
          </nav>

          <div hlmTabs class="mt-4" tab="account">
            <hlm-tabs-list>
              <button hlmTabsTrigger="account">Account</button>
              <button hlmTabsTrigger="notifications">Notifications</button>
              <button hlmTabsTrigger="billing">Billing</button>
            </hlm-tabs-list>
            <div hlmTabsContent="account" class="mt-2">
              <p class="text-sm text-muted-foreground">Account settings and profile.</p>
            </div>
            <div hlmTabsContent="notifications" class="mt-2">
              <p class="text-sm text-muted-foreground">Notification preferences.</p>
            </div>
            <div hlmTabsContent="billing" class="mt-2">
              <p class="text-sm text-muted-foreground">Billing and subscription.</p>
            </div>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Data display -->
        <section class="space-y-4">
          <h2 hlmH2>Data display</h2>
          <hlm-card class="overflow-hidden">
            <hlm-card-header>
              <h3 hlmH3>Table</h3>
              <p hlmMuted>Compact table built from primitives.</p>
            </hlm-card-header>
            <div hlmCardContent class="overflow-x-auto">
              <hlm-table-container>
                <table hlmTable>
                  <thead hlmTHead>
                    <tr hlmTr>
                      <th hlmTh>Name</th>
                      <th hlmTh class="text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody hlmTBody>
                    <tr hlmTr>
                      <td hlmTd>Alpha</td>
                      <td hlmTd class="text-right">123</td>
                    </tr>
                    <tr hlmTr>
                      <td hlmTd>Beta</td>
                      <td hlmTd class="text-right">456</td>
                    </tr>
                  </tbody>
                </table>
              </hlm-table-container>
            </div>
            <hlm-card-footer class="flex items-center justify-between gap-3">
              <p hlmSmall class="text-muted-foreground">
                Showing <span hlmCode>1–2</span> of 2 rows
              </p>
              <hlm-pagination>
                <button hlmPaginationPrevious>Previous</button>
                <hlm-pagination-content>
                  <button hlmPaginationLink [isActive]="true">1</button>
                </hlm-pagination-content>
                <button hlmPaginationNext>Next</button>
              </hlm-pagination>
            </hlm-card-footer>
          </hlm-card>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Feedback & Overlays -->
        <section class="space-y-4">
          <h2 hlmH2>Feedback & Overlays</h2>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-4">
              <div hlmAlert>
                <hlm-alert-title>Heads up</hlm-alert-title>
                <p hlmAlertDescription>
                  This is an example of the alert component.
                </p>
              </div>

              <button hlmBtn variant="outline" hlmTooltip="Tooltip content">
                Hover for tooltip
              </button>

              <div hlmPopover>
                <button hlmBtn hlmPopoverTrigger type="button">
                  Open popover
                </button>
                <div *hlmPopoverPortal hlmPopoverContent class="max-w-xs">
                  <p hlmSmall>Popover content to provide additional context without leaving the page.</p>
                </div>
              </div>

              <hlm-accordion type="single" class="w-full">
                <hlm-accordion-item value="item-1">
                  <h3>
                    <button hlmAccordionTrigger>Accordion item</button>
                  </h3>
                  <div hlmAccordionContent>
                    <p hlmSmall>Use accordions to reveal more details on demand.</p>
                  </div>
                </hlm-accordion-item>
              </hlm-accordion>
            </div>

            <div class="space-y-4">
              <button hlmBtn variant="outline" hlmAlertDialogTrigger>
                Open alert dialog
              </button>
              <hlm-alert-dialog>
                <hlm-alert-dialog-content>
                  <hlm-alert-dialog-header>
                    <hlm-alert-dialog-title>Are you absolutely sure?</hlm-alert-dialog-title>
                    <hlm-alert-dialog-description>
                      This action cannot be undone. This will permanently delete this resource.
                    </hlm-alert-dialog-description>
                  </hlm-alert-dialog-header>
                  <hlm-alert-dialog-footer>
                    <button hlmAlertDialogCancel>Cancel</button>
                    <button hlmAlertDialogAction>Continue</button>
                  </hlm-alert-dialog-footer>
                </hlm-alert-dialog-content>
              </hlm-alert-dialog>

              <div class="flex items-center gap-3">
                <span hlmSmall>Progress</span>
                <div class="flex-1">
                  <div hlmProgress [value]="60"></div>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span hlmSmall>Loading</span>
                <hlm-spinner></hlm-spinner>
              </div>
            </div>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Advanced inputs -->
        <section class="space-y-4">
          <h2 hlmH2>Advanced inputs</h2>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-3">
              <label hlmSmall>Date picker</label>
              <date-picker-showcase-demo />

              <label hlmSmall class="mt-4">Autocomplete</label>
              <hlm-autocomplete>
                <hlm-autocomplete-input placeholder="Search..." />
                <hlm-autocomplete-content>
                  <hlm-autocomplete-list>
                    <hlm-autocomplete-item>First option</hlm-autocomplete-item>
                    <hlm-autocomplete-item>Second option</hlm-autocomplete-item>
                  </hlm-autocomplete-list>
                </hlm-autocomplete-content>
              </hlm-autocomplete>
            </div>

            <div class="space-y-3">
              <label hlmSmall>Combobox</label>
              <hlm-combobox>
                <hlm-combobox-trigger>
                  <hlm-combobox-value placeholder="Select option"></hlm-combobox-value>
                </hlm-combobox-trigger>
                <hlm-combobox-content>
                  <hlm-combobox-list>
                    <hlm-combobox-item value="apple">Apple</hlm-combobox-item>
                    <hlm-combobox-item value="orange">Orange</hlm-combobox-item>
                  </hlm-combobox-list>
                </hlm-combobox-content>
              </hlm-combobox>

              <label hlmSmall class="mt-4">Input OTP</label>
              <hlm-input-otp [length]="4"></hlm-input-otp>
            </div>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Navigation & Layout primitives -->
        <section class="space-y-4">
          <h2 hlmH2>Navigation & Layout primitives</h2>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-3">
              <nav hlmNavigationMenu>
                <ul hlmNavigationMenuList>
                  <li hlmNavigationMenuItem>
                    <button hlmNavigationMenuTrigger>Products</button>
                    <div *hlmNavigationMenuPortal hlmNavigationMenuContent>
                      <div class="grid gap-2 p-3">
                        <a hlmNavigationMenuLink href="#">Analytics</a>
                        <a hlmNavigationMenuLink href="#">Engagement</a>
                      </div>
                    </div>
                  </li>
                  <li hlmNavigationMenuItem>
                    <a hlmNavigationMenuLink href="#">Pricing</a>
                  </li>
                  <li hlmNavigationMenuItem>
                    <a hlmNavigationMenuLink href="#">Docs</a>
                  </li>
                </ul>
              </nav>

              <div class="flex items-center gap-2">
                <kbd hlmKbd>⌘</kbd>
                <kbd hlmKbd>K</kbd>
                <span hlmSmall>to open command menu</span>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex gap-2">
                <button hlmBtn hlmToggle pressed="true">Toggle</button>
                <div hlmToggleGroup [value]="['bold']" aria-label="Text formatting">
                  <button hlmToggleGroupItem value="bold">Bold</button>
                  <button hlmToggleGroupItem value="italic">Italic</button>
                  <button hlmToggleGroupItem value="underline">Underline</button>
                </div>
              </div>

              <hlm-scroll-area class="h-24 w-full border rounded-md p-3">
                <div class="space-y-2">
                  <p hlmSmall *ngFor="let item of [1,2,3,4,5,6,7,8]">Scrollable item {{ item }}</p>
                </div>
              </hlm-scroll-area>
            </div>
          </div>
        </section>

        <hlm-separator></hlm-separator>

        <!-- Sidebar & Shell -->
        <section class="space-y-4">
          <h2 hlmH2>Sidebar layout</h2>
          <div class="border rounded-md overflow-hidden">
            <hlm-sidebar-wrapper>
              <hlm-sidebar>
                <hlm-sidebar-header>
                  <span hlmSmall>Project</span>
                </hlm-sidebar-header>
                <hlm-sidebar-content>
                  <hlm-sidebar-menu>
                    <button hlmSidebarMenuButton>Overview</button>
                    <button hlmSidebarMenuButton>Analytics</button>
                    <button hlmSidebarMenuButton>Settings</button>
                  </hlm-sidebar-menu>
                </hlm-sidebar-content>
              </hlm-sidebar>
              <hlm-sidebar-inset>
                <div class="p-4 space-y-2">
                  <h3 hlmH3>Sidebar layout</h3>
                  <p hlmMuted>Use sidebar primitives to build app shells and dashboards.</p>
                </div>
              </hlm-sidebar-inset>
            </hlm-sidebar-wrapper>
          </div>
        </section>
      </section>
    `,
    moduleMetadata: {
      imports: [...showcaseImports, DatePickerShowcaseDemo],
    },
  }),
};

