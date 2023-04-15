import {
  TFontSize,
  TFontWeight,
  TMargin,
  TRingColor,
  TTextColor,
} from './style.generated';

type LineClamp =
  | `line-clamp-1`
  | `line-clamp-2`
  | `line-clamp-3`
  | `line-clamp-4`
  | `line-clamp-5`
  | `line-clamp-6`
  | `line-clamp-none`
  | `md:line-clamp-1`
  | `md:line-clamp-2`
  | `md:line-clamp-3`
  | `md:line-clamp-4`
  | `md:line-clamp-5`
  | `md:line-clamp-6`
  | `md:line-clamp-none`
  | `lg:line-clamp-1`
  | `lg:line-clamp-2`
  | `lg:line-clamp-3`
  | `lg:line-clamp-4`
  | `lg:line-clamp-5`
  | `lg:line-clamp-6`
  | `lg:line-clamp-none`
  | `xl:line-clamp-1`
  | `xl:line-clamp-2`
  | `xl:line-clamp-3`
  | `xl:line-clamp-4`
  | `xl:line-clamp-5`
  | `xl:line-clamp-6`
  | `xl:line-clamp-none`;

type AspectRatio =
  | `${'' | 'md:' | 'lg:' | 'xl:'}aspect-${'h' | 'w'}-${
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16}`
  | 'aspect-video';

type CheckedModifierStyle = `checked:${TRingColor | TTextColor}`;
type MarkerModifierStyle = `${'marker:' | 'marker:lg:'}${
  | TTextColor
  | TFontSize
  | TFontWeight}`;

type ListType = 'list-lower-alpha';

export type BaseStyles =
  | LineClamp
  | AspectRatio
  | CheckedModifierStyle
  | MarkerModifierStyle
  | ListType;

// eslint-disable-next-line import/no-default-export
export default BaseStyles;
