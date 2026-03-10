import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { HlmPagination } from './hlm-pagination';
import {
  HlmPaginationImports,
  HlmNumberedPagination,
} from './index';
import { FormsModule } from '@angular/forms';

/** Wrapper for two-way binding in stories */
@Component({
  selector: 'pagination-demo',
  standalone: true,
  imports: [HlmNumberedPagination, FormsModule],
  template: `
    <hlm-numbered-pagination
      [totalItems]="totalItems"
      [(currentPage)]="currentPage"
      [(itemsPerPage)]="itemsPerPage"
      [maxSize]="maxSize"
      [showEdges]="showEdges"
      [pageSizes]="pageSizes"
    />
  `,
})
class PaginationDemoComponent {
  totalItems = 100;
  currentPage = 1;
  itemsPerPage = 10;
  maxSize = 7;
  showEdges = true;
  pageSizes: number[] = [10, 20, 50, 100];
}

const meta: Meta<HlmPagination> = {
  component: HlmPagination,
  title: 'Components/Pagination',
  parameters: {
    docs: {
      description: {
        component:
          'Pagination nav with previous/next, page links, and ellipsis. Use hlmPagination, hlmPaginationContent, hlmPaginationItem, hlmPaginationLink, hlm-pagination-previous, hlm-pagination-next, hlm-pagination-ellipsis. For full numbered pagination with page size, use hlm-numbered-pagination.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<HlmPagination>;

const paginationImports = [
  HlmPaginationImports,
  FormsModule,
];

/**
 * Minimal: previous, page numbers, next using directives only.
 */
export const Default: Story = {
  render: () => ({
    template: `
      <nav hlmPagination [attr.aria-label]="'Example pagination'">
        <ul hlmPaginationContent>
          <li hlmPaginationItem>
            <hlm-pagination-previous [attr.aria-label]="'Previous page'" />
          </li>
          <li hlmPaginationItem>
            <a hlmPaginationLink [isActive]="true">1</a>
          </li>
          <li hlmPaginationItem>
            <a hlmPaginationLink>2</a>
          </li>
          <li hlmPaginationItem>
            <a hlmPaginationLink>3</a>
          </li>
          <li hlmPaginationItem>
            <hlm-pagination-next [attr.aria-label]="'Next page'" />
          </li>
        </ul>
      </nav>
    `,
    moduleMetadata: { imports: paginationImports },
  }),
};

/**
 * Full numbered pagination component with total items, page size, and current page.
 */
export const NumberedPagination: Story = {
  render: () => ({
    template: `<pagination-demo />`,
    moduleMetadata: { imports: [PaginationDemoComponent] },
  }),
};

/**
 * Numbered pagination with many pages — ellipsis appears.
 */
export const NumberedPaginationManyPages: Story = {
  render: () => ({
    template: `<pagination-demo-many />`,
    moduleMetadata: { imports: [PaginationDemoManyComponent] },
  }),
};

@Component({
  selector: 'pagination-demo-many',
  standalone: true,
  imports: [HlmNumberedPagination, FormsModule],
  template: `
    <hlm-numbered-pagination
      [totalItems]="250"
      [(currentPage)]="currentPage"
      [(itemsPerPage)]="itemsPerPage"
      [maxSize]="7"
    />
  `,
})
class PaginationDemoManyComponent {
  currentPage = 5;
  itemsPerPage = 10;
}

/**
 * Custom page sizes (e.g. 5, 15, 25).
 */
export const CustomPageSizes: Story = {
  render: () => ({
    template: `<pagination-demo-custom-sizes />`,
    moduleMetadata: { imports: [PaginationDemoCustomSizesComponent] },
  }),
};

@Component({
  selector: 'pagination-demo-custom-sizes',
  standalone: true,
  imports: [HlmNumberedPagination, FormsModule],
  template: `
    <hlm-numbered-pagination
      [totalItems]="80"
      [(currentPage)]="currentPage"
      [(itemsPerPage)]="itemsPerPage"
      [pageSizes]="[5, 15, 25, 50]"
    />
  `,
})
class PaginationDemoCustomSizesComponent {
  currentPage = 1;
  itemsPerPage = 15;
}

/**
 * Hide first/last (previous/next) buttons via showEdges="false".
 */
export const NoEdgeButtons: Story = {
  render: () => ({
    template: `<pagination-demo-no-edges />`,
    moduleMetadata: { imports: [PaginationDemoNoEdgesComponent] },
  }),
};

@Component({
  selector: 'pagination-demo-no-edges',
  standalone: true,
  imports: [HlmNumberedPagination, FormsModule],
  template: `
    <hlm-numbered-pagination
      [totalItems]="50"
      [(currentPage)]="currentPage"
      [(itemsPerPage)]="itemsPerPage"
      [showEdges]="false"
    />
  `,
})
class PaginationDemoNoEdgesComponent {
  currentPage = 2;
  itemsPerPage = 10;
}

/**
 * Few items — single page.
 */
export const SinglePage: Story = {
  render: () => ({
    template: `<pagination-demo-single />`,
    moduleMetadata: { imports: [PaginationDemoSingleComponent] },
  }),
};

@Component({
  selector: 'pagination-demo-single',
  standalone: true,
  imports: [HlmNumberedPagination, FormsModule],
  template: `
    <hlm-numbered-pagination
      [totalItems]="5"
      [(currentPage)]="currentPage"
      [(itemsPerPage)]="itemsPerPage"
    />
  `,
})
class PaginationDemoSingleComponent {
  currentPage = 1;
  itemsPerPage = 10;
}

/**
 * Manual layout: previous, ellipsis, a few pages, next.
 */
export const WithEllipsis: Story = {
  render: () => ({
    template: `
      <nav hlmPagination aria-label="Pagination with ellipsis">
        <ul hlmPaginationContent>
          <li hlmPaginationItem>
            <hlm-pagination-previous />
          </li>
          <li hlmPaginationItem>
            <a hlmPaginationLink [isActive]="true">1</a>
          </li>
          <li hlmPaginationItem>
            <hlm-pagination-ellipsis [srOnlyText]="'More pages'" />
          </li>
          <li hlmPaginationItem>
            <a hlmPaginationLink>5</a>
          </li>
          <li hlmPaginationItem>
            <hlm-pagination-ellipsis />
          </li>
          <li hlmPaginationItem>
            <a hlmPaginationLink>10</a>
          </li>
          <li hlmPaginationItem>
            <hlm-pagination-next />
          </li>
        </ul>
      </nav>
    `,
    moduleMetadata: { imports: paginationImports },
  }),
};
