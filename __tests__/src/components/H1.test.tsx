import React from 'react';
import {render} from '@testing-library/react-native';
import {H1} from '../../../src/components/H1';

test('H1 component should render OK', () => {
  const {getByText} = render(<H1>Title</H1>);
  const title = getByText('Title');
  expect(title).toBeDefined();
});
