import { useState } from 'react';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Avatar from './avatar';
import Inline from 'design-system/inline';
import TimeoutButton from 'design-system/timeout-button';
import Stack from 'design-system/stack';

const url = (index: number) => `https://i.pravatar.cc/150?u=${index + 1}`;

const generateConstrainedStyle = () => {
  return `.css-141d2k2 {
    border: 2px solid currentColor;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    background-color: currentColor;
    overflow: hidden,
    background-size: contain;
  }`;
};

const classNames = ['1udhswa', '1cpwmbr', 'am987o', 'fh3pzc', 'gjefnh', '1xc7c06', '1evb93a'];
const generateStyle = (index: number) => {
  return `.css-${classNames[index]} {
    border: 2px solid currentColor;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    background-color: currentColor;
    overflow: hidden,
    background-size: contain;
    background-style: url(https://i.pravatar.cc/150?u=${index});
  }`;
};

function AvatarExample() {
  const [count, setCount] = useState(1);
  const [constrainStyles, setConstrainStyles] = useState(false);
  const arr = Array(count).fill(undefined);
  const styleButtonText = constrainStyles ? 'Styles constrained' : 'Constrain styles';

  return (
    <Stack gap="regular" inlineAlign="stretch">
      <Inline gap="regular">
        <Button isDisabled={count === 1} onClick={() => setCount((prev) => prev - 1)}>
          Remove avatar
        </Button>
        <TimeoutButton isDisabled={count >= 7} onClick={() => setCount((prev) => prev + 1)}>
          Add avatar
        </TimeoutButton>
        <Inline width="full" inlineAlign="end">
          <Button isSelected={constrainStyles} onClick={() => setConstrainStyles((prev) => !prev)}>
            {styleButtonText}
          </Button>
        </Inline>
      </Inline>

      <Inline gap="-regular">
        {arr.map((_, index) => (
          <Avatar isConstrained={constrainStyles} url={url(index)} key={index} />
        ))}
      </Inline>

      <CodeBlock>
        {arr
          .map(
            (_, index) =>
              `<div ${
                constrainStyles
                  ? `class="css-yh5789" style="background-image:${url(index)}"`
                  : `class="css-${classNames[index]}"`
              }></div>`
          )
          .join('\n')}
      </CodeBlock>

      <CodeBlock>{`<style>
  ${
    constrainStyles
      ? generateConstrainedStyle()
      : arr.map((_, index) => generateStyle(index)).join('\n\n  ')
  }
</style>`}</CodeBlock>
    </Stack>
  );
}

export default AvatarExample;
