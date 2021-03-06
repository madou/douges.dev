/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box, { PaddingProps, Background } from 'design-system/box';
import { SafeInlineStyles } from 'types/types';

const styles = css({
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const gapStyles = css({
  '-small': {
    '> *': { marginInlineEnd: -4 },
  },
  '-regular': {
    '> *': { marginInlineEnd: -8 },
  },
  '-medium': {
    '> *': { marginInlineEnd: -12 },
  },
  '-large': {
    '> *': { marginInlineEnd: -16 },
  },
  '-xlarge': {
    '> *': { marginInlineEnd: -24 },
  },
  small: {
    gap: 4,
  },
  regular: {
    gap: 8,
  },
  medium: {
    gap: 12,
  },
  large: {
    gap: 16,
  },
  xlarge: {
    gap: 24,
  },
});

const inlineAlignStyles = css({
  end: {
    justifyContent: 'flex-end',
  },
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  stretch: {
    justifyContent: 'stretch',
  },
});

const blockAlignStyles = css({
  bottom: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  stretch: {
    alignItems: 'stretch',
  },
});

const widthStyles = css({
  full: {
    inlineSize: '100%',
  },
});

const wrapStyles = css({
  wrap: {
    flexWrap: 'wrap',
  },
  nowrap: {
    flexWrap: 'nowrap',
  },
});

interface InlineProps extends PaddingProps {
  children: React.ReactNode;
  gap?: keyof typeof gapStyles;
  inlineAlign?: keyof typeof inlineAlignStyles;
  blockAlign?: keyof typeof blockAlignStyles;
  width?: keyof typeof widthStyles;
  wrap?: keyof typeof wrapStyles;
  background?: Background;
  style?: SafeInlineStyles;
}

function Inline({
  children,
  gap,
  width = 'full',
  inlineAlign = 'start',
  blockAlign = 'top',
  wrap,
  ...props
}: InlineProps) {
  const gapStyle = gapStyles[gap!];
  const alignStyle = inlineAlignStyles[inlineAlign];
  const justifyStyle = blockAlignStyles[blockAlign];
  const widthStyle = widthStyles[width!];
  const wrapStyle = wrapStyles[wrap!];

  return (
    <Box
      {...props}
      css={[styles.inline, alignStyle, justifyStyle, gapStyle, widthStyle, wrapStyle]}>
      {children}
    </Box>
  );
}

export default Inline;
