import React from 'react';
import {render} from '@testing-library/react-native';

import {Card} from '../../../src/components/Card';

test('Card component should render OK', () => {
  const Props = {
    title: 'Title',
    topic: 'Topic',
    src: 'SRC',
  };

  const {getByTestId} = render(<Card {...Props} />);

  expect(getByTestId('card-component')).toBeDefined();
});
