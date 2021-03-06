import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Video from '../../../adapters/alipay/components/Video';

describe('Video', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Video src="https://www.alipay.com" />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
