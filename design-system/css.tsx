import { css, CSSObject, SerializedStyles } from '@emotion/react';

export default function cssMap<TCSSInput extends string | number>(
  cssInput: Record<TCSSInput, CSSObject>
): { [K in TCSSInput]: SerializedStyles } {
  const styles: Record<TCSSInput, SerializedStyles> = {} as Record<TCSSInput, SerializedStyles>;

  for (let key in cssInput) {
    styles[key] = css(cssInput[key]);
  }

  return styles;
}
