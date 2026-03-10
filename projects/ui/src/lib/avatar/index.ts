import { HlmAvatar } from './hlm-avatar';
import { HlmAvatarBadge } from './hlm-avatar-badge';
import { HlmAvatarFallback } from './hlm-avatar-fallback';
import { HlmAvatarGroup } from './hlm-avatar-group';
import { HlmAvatarGroupCount } from './hlm-avatar-group-count';
import { HlmAvatarImage } from './hlm-avatar-image';

export * from './hlm-avatar';
export * from './hlm-avatar-badge';
export * from './hlm-avatar-fallback';
export * from './hlm-avatar-group';
export * from './hlm-avatar-group-count';
export * from './hlm-avatar-image';

export const HlmAvatarImports = [
	HlmAvatar,
	HlmAvatarBadge,
	HlmAvatarFallback,
	HlmAvatarGroup,
	HlmAvatarGroupCount,
	HlmAvatarImage,
] as const;
