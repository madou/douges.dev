/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const inputStyles = css({
  border: `2px solid ${token('color.border.neutral')}`,
  fontSize: 26,
  borderRadius: 3,
  padding: 8,
  width: '100%',
  maxWidth: 500,
  '::placeholder': {
    color: token('color.text.mediumEmphasis'),
  },
  ':focus': {
    outline: 'none',
    backgroundColor: 'transparent',
    borderColor: token('color.border.focus'),
  },
});

const interactiveStyles = css({
  color: token('color.text.highEmphasis'),
  background: token('color.background.subtleNeutral.resting'),
  ':hover': {
    background: 'transparent',
  },
});

const disabledStyles = css({
  color: token('color.text.disabled'),
  background: token('color.background.disabled'),
  cursor: 'not-allowed',
});

interface TextfieldProps {
  id?: string;
  type?: 'email' | 'text';
  isRequired?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  name?: string;
}

function Textfield({
  id,
  placeholder,
  name,
  type = 'text',
  isRequired,
  isDisabled,
}: TextfieldProps) {
  return (
    <input
      name={name}
      type={type}
      required={isRequired}
      id={id}
      disabled={isDisabled}
      css={[inputStyles, isDisabled ? disabledStyles : interactiveStyles]}
      placeholder={placeholder}
    />
  );
}

export default Textfield;