import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import SubmitButton from '../../lib/SubmitButton';

describe('SubmitButton', () => {
  it('should render a disabled button', () => {
    const wrapper = mount(<SubmitButton disabled={true} />);
    expect(wrapper.props().disabled).to.be.equal(true);
  });

  it('should render a invalid button', () => {
    const wrapper = mount(<SubmitButton invalid={true} />);
    expect(wrapper.props().invalid).to.be.equal(true);
  });
});
