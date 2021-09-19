/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import { ForwardedRef } from 'react';
import { forwardRef } from 'lib/react';

const backgroundStyles = css({
  none: {},
  accentBlueSubtle: {
    backgroundColor: token('color.accent.subtleBlue'),
  },
  accentRedSubtle: {
    backgroundColor: token('color.accent.subtleRed'),
  },
  accentGreenSubtle: {
    backgroundColor: token('color.accent.subtleGreen'),
  },
  accentMagentaSubtle: {
    backgroundColor: token('color.accent.subtleMagenta'),
  },
  accentOrangeSubtle: {
    backgroundColor: token('color.accent.subtleOrange'),
  },
  accentPurpleSubtle: {
    backgroundColor: token('color.accent.subtlePurple'),
  },
  accentTealSubtle: {
    backgroundColor: token('color.accent.subtleTeal'),
  },
  accentBlueBold: {
    backgroundColor: token('color.accent.boldBlue'),
  },
  accentRedBold: {
    backgroundColor: token('color.accent.boldRed'),
  },
  accentGreenBold: {
    backgroundColor: token('color.accent.boldGreen'),
  },
  accentOrangeBold: {
    backgroundColor: token('color.accent.boldOrange'),
  },
  accentPurpleBold: {
    backgroundColor: token('color.accent.boldPurple'),
  },
  accentTealBold: {
    backgroundColor: token('color.accent.boldTeal'),
  },
  blanket: {
    backgroundColor: token('color.background.blanket'),
  },
  body: {
    backgroundColor: token('color.background.default'),
  },
  sunken: {
    backgroundColor: token('color.background.sunken'),
  },
  card: {
    backgroundColor: token('color.background.card'),
  },
  overlay: {
    backgroundColor: token('color.background.overlay'),
  },
  transparent: {
    color: token('color.text.highEmphasis'),
    backgroundColor: 'transparent',
  },
  disabled: {
    color: token('color.text.disabled'),
    backgroundColor: token('color.background.disabled'),
    cursor: 'not-allowed',
  },
  selected: {
    color: token('color.text.selected'),
    backgroundColor: token('color.background.selected.resting'),
  },
  neutralBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldNeutral.resting'),
  },
  brandBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldBrand.resting'),
  },
  dangerBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldDanger.resting'),
  },
  successBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldSuccess.resting'),
  },
  discoveryBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldDiscovery.resting'),
  },
  warningBold: {
    color: token('color.text.onBoldWarning'),
    backgroundColor: token('color.background.boldWarning.resting'),
  },
  neutralSubtle: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.subtleNeutral.resting'),
  },
  brandSubtle: {
    color: token('color.text.brand'),
    backgroundColor: token('color.background.subtleBrand.resting'),
  },
  dangerSubtle: {
    color: token('color.text.danger'),
    backgroundColor: token('color.background.subtleDanger.resting'),
  },
  successSubtle: {
    color: token('color.text.success'),
    backgroundColor: token('color.background.subtleSuccess.resting'),
  },
  discoverySubtle: {
    color: token('color.text.discovery'),
    backgroundColor: token('color.background.subtleDiscovery.resting'),
  },
  warningSubtle: {
    color: token('color.text.warning'),
    backgroundColor: token('color.background.subtleWarning.resting'),
  },
});

const shadowStyles = css({
  none: {},
  card: {
    boxShadow: token('shadow.card'),
  },
  overlay: {
    boxShadow: token('shadow.overlay'),
  },
});

const borderTopStyles = css({
  none: {},
  default: {
    borderBlockStart: `2px solid ${token('color.background.default')}`,
  },
  neutral: {
    borderBlockStart: `2px solid ${token('color.border.neutral')}`,
  },
  focus: {
    borderBlockStart: `2px solid ${token('color.border.focus')}`,
  },
  brand: {
    borderBlockStart: `2px solid ${token('color.iconBorder.brand')}`,
  },
  danger: {
    borderBlockStart: `2px solid ${token('color.iconBorder.danger')}`,
  },
  success: {
    borderBlockStart: `2px solid ${token('color.iconBorder.success')}`,
  },
  discovery: {
    borderBlockStart: `2px solid ${token('color.iconBorder.discovery')}`,
  },
  warning: {
    borderBlockStart: `2px solid ${token('color.iconBorder.warning')}`,
  },
});

const borderRightStyles = css({
  none: {},
  default: {
    borderInlineEnd: `2px solid ${token('color.background.default')}`,
  },
  neutral: {
    borderInlineEnd: `2px solid ${token('color.border.neutral')}`,
  },
  focus: {
    borderInlineEnd: `2px solid ${token('color.border.focus')}`,
  },
  brand: {
    borderInlineEnd: `2px solid ${token('color.iconBorder.brand')}`,
  },
  danger: {
    borderInlineEnd: `2px solid ${token('color.iconBorder.danger')}`,
  },
  success: {
    borderInlineEnd: `2px solid ${token('color.iconBorder.success')}`,
  },
  discovery: {
    borderInlineEnd: `2px solid ${token('color.iconBorder.discovery')}`,
  },
  warning: {
    borderInlineEnd: `2px solid ${token('color.iconBorder.warning')}`,
  },
});

const borderBottomStyles = css({
  none: {},
  default: {
    borderBlockEnd: `2px solid ${token('color.background.default')}`,
  },
  neutral: {
    borderBlockEnd: `2px solid ${token('color.border.neutral')}`,
  },
  focus: {
    borderBlockEnd: `2px solid ${token('color.border.focus')}`,
  },
  brand: {
    borderBlockEnd: `2px solid ${token('color.iconBorder.brand')}`,
  },
  danger: {
    borderBlockEnd: `2px solid ${token('color.iconBorder.danger')}`,
  },
  success: {
    borderBlockEnd: `2px solid ${token('color.iconBorder.success')}`,
  },
  discovery: {
    borderBlockEnd: `2px solid ${token('color.iconBorder.discovery')}`,
  },
  warning: {
    borderBlockEnd: `2px solid ${token('color.iconBorder.warning')}`,
  },
});

const borderLeftStyles = css({
  none: {},
  default: {
    borderInlineStart: `2px solid ${token('color.background.default')}`,
  },
  neutral: {
    borderInlineStart: `2px solid ${token('color.border.neutral')}`,
  },
  focus: {
    borderInlineStart: `2px solid ${token('color.border.focus')}`,
  },
  brand: {
    borderInlineStart: `2px solid ${token('color.iconBorder.brand')}`,
  },
  danger: {
    borderInlineStart: `2px solid ${token('color.iconBorder.danger')}`,
  },
  success: {
    borderInlineStart: `2px solid ${token('color.iconBorder.success')}`,
  },
  discovery: {
    borderInlineStart: `2px solid ${token('color.iconBorder.discovery')}`,
  },
  warning: {
    borderInlineStart: `2px solid ${token('color.iconBorder.warning')}`,
  },
});

const widthStyles = css({
  auto: {},
  xsmall: {
    inlineSize: 16,
  },
  small: {
    inlineSize: 24,
  },
  medium: {
    inlineSize: 32,
  },
  large: {
    inlineSize: 40,
  },
  xlarge: {
    inlineSize: 48,
  },
});

const heightStyles = css({
  auto: {},
  xsmall: {
    blockSize: 16,
  },
  small: {
    blockSize: 24,
  },
  medium: {
    blockSize: 32,
  },
  large: {
    blockSize: 40,
  },
  xlarge: {
    blockSize: 48,
  },
});

const paddingTopStyles = css({
  none: {},
  small: {
    paddingBlockStart: 4,
  },
  regular: {
    paddingBlockStart: 8,
  },
  medium: {
    paddingBlockStart: 12,
  },
  large: {
    paddingBlockStart: 16,
  },
  xlarge: {
    paddingBlockStart: 24,
  },
});

const paddingBottomStyles = css({
  none: {},
  small: {
    paddingBlockEnd: 4,
  },
  regular: {
    paddingBlockEnd: 8,
  },
  medium: {
    paddingBlockEnd: 12,
  },
  large: {
    paddingBlockEnd: 16,
  },
  xlarge: {
    paddingBlockEnd: 24,
  },
});

const paddingLeftStyles = css({
  none: {},
  small: {
    paddingInlineStart: 4,
  },
  regular: {
    paddingInlineStart: 8,
  },
  medium: {
    paddingInlineStart: 12,
  },
  large: {
    paddingInlineStart: 16,
  },
  xlarge: {
    paddingInlineStart: 24,
  },
});

const paddingRightStyles = css({
  none: {},
  small: {
    paddingInlineEnd: 4,
  },
  regular: {
    paddingInlineEnd: 8,
  },
  medium: {
    paddingInlineEnd: 12,
  },
  large: {
    paddingInlineEnd: 16,
  },
  xlarge: {
    paddingInlineEnd: 24,
  },
});

const borderRadiusStyles = css({
  none: {},
  default: {
    borderRadius: 3,
    '::before,::after': {
      borderRadius: 3,
    },
  },
  rounded: {
    borderRadius: 12,
    '::before,::after': {
      borderRadius: 12,
    },
  },
  circle: {
    borderRadius: '50%',
    '::before,::after': {
      borderRadius: '50%',
    },
  },
});

const displayStyles = css({
  'block flow': {
    display: 'block',
  },
  'block flex': {
    display: 'flex',
    flexDirection: 'column',
  },
  'inline flex': {
    display: 'inline-flex',
  },
  'block grid': {
    display: 'grid',
  },
  'inline grid': {
    display: 'inline-grid',
  },
});

const localResetStyles = css({
  base: {
    boxSizing: 'border-box',
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
    WebkitTapHighlightColor: 'transparent',
  },
  div: {},
  button: {
    lineHeight: 1,
  },
  a: {
    ':hover,:active': {
      color: 'initial',
      textDecoration: 'none',
    },
  },
});

export interface PaddingProps {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
}

export interface BorderProps {
  border?: Border;
  borderTop?: Border;
  borderRight?: Border;
  borderBottom?: Border;
  borderLeft?: Border;
  borderX?: Border;
  borderY?: Border;
}

export interface SizeProps {
  size?: Size;
  width?: Size;
  height?: Size;
}

export type Spacing = keyof typeof paddingTopStyles;
export type Background = keyof typeof backgroundStyles;
export type Shadow = keyof typeof shadowStyles;
export type Border = keyof typeof borderRightStyles;
export type BorderRadius = keyof typeof borderRadiusStyles;
export type Size = keyof typeof widthStyles;
export type Display = keyof typeof displayStyles;

export type SemanticNames = {
  default: 'neutralSubtle';
  success: 'successSubtle';
  removed: 'dangerSubtle';
  inprogress: 'brandSubtle';
  new: 'discoverySubtle';
  moved: 'warningSubtle';
  defaultBold: 'neutralBold';
  successBold: 'successBold';
  removedBold: 'dangerBold';
  inprogressBold: 'brandBold';
  newBold: 'discoveryBold';
  movedBold: 'warningBold';
};

export type BoxHTMLElement = keyof JSX.IntrinsicElements;

export interface BoxProps<TElement extends BoxHTMLElement>
  extends PaddingProps,
    BorderProps,
    SizeProps {
  children?: React.ReactNode;
  background?: Background;
  borderRadius?: BorderRadius;
  shadow?: Shadow;
  display?: Display;
  className?: string;
  as?: TElement;
}

type BoxHTMLProps<TElement extends BoxHTMLElement> = Omit<
  JSX.IntrinsicElements[TElement],
  'className' | 'width' | 'height' | 'size' | 'marginWidth' | 'marginHeight' | 'cellPadding' | 'as'
>;

function Box<TElement extends BoxHTMLElement = 'div'>(
  {
    children,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingX,
    paddingY,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    borderX,
    borderY,
    display,
    className,
    as: AsProp,
    width,
    height,
    border = 'none',
    background = 'none',
    borderRadius = 'none',
    padding = 'none',
    shadow = 'none',
    size = 'auto',
    ...props
  }: BoxProps<TElement> & BoxHTMLProps<TElement>,
  ref: ForwardedRef<HTMLElement>
) {
  const Component: 'div' = (AsProp || 'div') as any;
  const backgroundStyle = backgroundStyles[background];
  const shadowStyle = shadowStyles[shadow];
  const paddingTopStyle = paddingTopStyles[paddingTop || paddingY || padding];
  const paddingRightStyle = paddingRightStyles[paddingRight || paddingX || padding];
  const paddingBottomStyle = paddingBottomStyles[paddingBottom || paddingY || padding];
  const paddingLeftStyle = paddingLeftStyles[paddingLeft || paddingX || padding];
  const borderRadiusStyle = borderRadiusStyles[borderRadius];
  const borderTopStyle = borderTopStyles[borderTop || borderY || border];
  const borderRightStyle = borderRightStyles[borderRight || borderX || border];
  const borderBottomStyle = borderBottomStyles[borderBottom || borderY || border];
  const borderLeftStyle = borderLeftStyles[borderLeft || borderX || border];
  const displayStyle = display && displayStyles[display];
  const resetStyle = localResetStyles[Component];
  const widthStyle = widthStyles[width || size];
  const heightStyle = heightStyles[height || size];

  return (
    <Component
      ref={ref as ForwardedRef<HTMLDivElement>}
      css={[
        localResetStyles.base,
        resetStyle,
        displayStyle,
        backgroundStyle,
        paddingTopStyle,
        paddingRightStyle,
        paddingBottomStyle,
        paddingLeftStyle,
        borderRadiusStyle,
        shadowStyle,
        borderTopStyle,
        borderRightStyle,
        borderBottomStyle,
        borderLeftStyle,
        widthStyle,
        heightStyle,
      ]}
      className={className}
      {...(props as unknown)}>
      {children}
    </Component>
  );
}

export default forwardRef(Box);
