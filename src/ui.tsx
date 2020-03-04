import * as React from 'react';
import { Box, Color, Text } from 'ink';
import SelectInput from 'ink-select-input';
import BigText from 'ink-big-text';
import open from 'open';

const openURL = (url: string) => open(url, { wait: false });

const items = [
  {
    label: 'HP',
    value: 'https://uzimaru.com',
  },
  {
    label: 'Twitter',
    value: 'https://twitter.com/uzimaru0000',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/uzimaru0000',
  },
  {
    label: 'Qiita',
    value: 'https://qiita.com/uzimaru0000',
  },
  {
    label: 'Blog',
    value: 'https://blog.uzimaru.com',
  },
  {
    label: 'Quit',
    value: 'quit',
  },
];

const actions = (key: string) => {
  switch (key) {
    case 'HP':
      openURL('https://uzimaru.com');
      break;
    case 'Twitter':
      openURL('https://twitter.com/uzimaru0000');
      break;
    case 'GitHub':
      openURL('https://github.com/uzimaru0000');
      break;
    case 'Qiita':
      openURL('https://qiita.com/uzimaru0000');
      break;
    case 'Blog':
      openURL('https://blog.uzimaru.com');
      break;
  }
  process.exit();
};

const ItemView = ({ label, isSelected }) => (
  <Color rgb={isSelected ? [0, 128, 255] : [255, 255, 255]}>
    <Text bold={isSelected}>{label}</Text>
  </Color>
);

export default () => (
  <Box flexDirection="column" padding={1}>
    <Box>
      <Color hex="#199861">
        <BigText text="I'm|a Web FrontEnd|Engineer." />
      </Color>
    </Box>
    <Box>
      <SelectInput
        items={items}
        onSelect={item => actions(item.label)}
        itemComponent={ItemView}
      />
    </Box>
  </Box>
);
