import { HlmTabs } from './hlm-tabs';
import { HlmTabsContent } from './hlm-tabs-content';
import { HlmTabsContentLazy } from './hlm-tabs-content-lazy';
import { HlmTabsList } from './hlm-tabs-list';
import { HlmTabsPaginatedList } from './hlm-tabs-paginated-list';
import { HlmTabsTrigger } from './hlm-tabs-trigger';

export * from './hlm-tabs';
export * from './hlm-tabs-content';
export * from './hlm-tabs-content-lazy';
export * from './hlm-tabs-list';
export * from './hlm-tabs-paginated-list';
export * from './hlm-tabs-trigger';

export const HlmTabsImports = [
	HlmTabs,
	HlmTabsList,
	HlmTabsTrigger,
	HlmTabsContent,
	HlmTabsContentLazy,
	HlmTabsPaginatedList,
] as const;
