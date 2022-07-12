/* eslint-disable react/jsx-props-no-spreading */
import '@patternfly/react-core/dist/styles/base.css';
import { Td } from '@patternfly/react-table';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ListView from './ListView';

export default {
  title: 'ListView',
  component: ListView,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListView>;

const Template: ComponentStory<typeof ListView> = (args) => {
  return (
    <BrowserRouter>
      <div style={{ overflowY: 'auto' }}>
        <ListView {...args} />
      </div>
    </BrowserRouter>
  );
};

type RowProps<D> = {
  obj: D;
};

const Row: React.FunctionComponent<RowProps<Record<string, unknown>>> = ({ obj }) => {
  return (
    <>
      <Td dataLabel={obj.name as string}>{obj.name as string}</Td>
      <Td dataLabel={obj.kind as string}>{obj.kind as string}</Td>
      <Td dataLabel={obj.labels as string}>{obj.labels as string}</Td>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  loaded: true,
  data: [
    {
      name: 'foo',
      kind: 'bar',
      labels: 'label1',
    },
    {
      name: 'foo2',
      kind: 'bar2',
      labels: 'label2',
    },
  ],
  columns: [
    {
      title: 'Name',
      id: 'name',
      props: {
        className: '',
      },
    },
    {
      title: 'Kind',
      id: 'kind',
      props: {
        className: '',
      },
    },
    {
      title: 'Labels',
      id: 'labels',
      props: {
        className: '',
      },
    },
  ],
  Row,
  filters: [
    {
      id: 'name',
      label: 'Name',
    },
    {
      id: 'kind',
      label: 'Kind',
    },
    {
      id: 'labels',
      label: 'Labels',
    },
  ],
  onFilter: undefined,
  scrollNode: undefined,
};
