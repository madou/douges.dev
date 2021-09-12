/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import Box from 'design-system/box';

const styles = css({
  input: {
    fontSize: 26,
    width: '100%',
    maxWidth: 500,
    '::placeholder': {
      color: token('color.text.lowEmphasis'),
    },
    ':focus': {
      outline: 'none',
      borderColor: token('color.border.focus'),
    },
  },
});

interface TextfieldProps {
  id?: string;
  type?: 'email' | 'text';
  isRequired?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function Textfield({
  id,
  placeholder,
  name,
  type = 'text',
  isRequired,
  isDisabled,
  value,
  onChange,
}: TextfieldProps) {
  return (
    <Box
      shouldForwardProps
      isHoverable
      hasBorder
      hasBorderRadius
      padding="medium"
      appearance="subtle-bordered-neutral">
      <input
        name={name}
        type={type}
        required={isRequired}
        id={id}
        disabled={isDisabled}
        css={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Box>
  );
}

export default Textfield;
