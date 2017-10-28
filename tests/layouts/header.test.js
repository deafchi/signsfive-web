import React from 'react';

import Header from '../../src/layouts/header';
import Navigator from '../../src/components/navigator';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('renders element', () => {
    expect(wrapper.find('.header').length).toBe(1);
  });

  it('renders Navigator', () => {
    expect(wrapper.find(Navigator).length).toBe(1);
  });
});