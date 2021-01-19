import { mount } from '@vue/test-utils';
import SlideSelector from '../../../../src/components/layout/SlideSelector.vue';

describe('SlideSelector.vue', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(SlideSelector, {
      propsData: {
        total: 2
      }
    });
  });

  it('should verify default index equal 0', () => {
    expect(wrapper.vm.index).toEqual(0);
  });

  it('should verify index value received via property', () => {
    // GIVEN
    wrapper.setProps({ index: 1 });
    // THEN
    expect(wrapper.vm.index).toEqual(1);
  });

  it('should verify total value received via property', () => {
    // THEN
    expect(wrapper.vm.total).toEqual(2);
  });

  describe('Validade isActive method', () => {
    it('should receive active string due (receivedValue - 1) be equal index property', () => {
      // GIVEN
      const receivedValue = 1;
      // THEN
      expect(wrapper.vm.index).toEqual(receivedValue - 1);
      expect(wrapper.vm.isActive(receivedValue)).toEqual('active');
    });
  
    it('should return empty string due (receivedValue - 1) be different from index property', () => {
      // GIVEN
      const receivedValue = 0;
      // THEN
      expect(wrapper.vm.index).not.toEqual(receivedValue - 1);
      expect(wrapper.vm.isActive(receivedValue)).toEqual('');
    });
  
    it('should return empty string due received value be greater than total property', () => {
      // GIVEN
      const receivedValue = 3;
      // THEN
      expect(wrapper.vm.isActive(receivedValue)).toEqual('');
    });
  
    it('should return empty string due received value be equal zero', () => {
      // GIVEN
      const receivedValue = 0;
      // THEN
      expect(wrapper.vm.isActive(receivedValue)).toEqual('');
    });

    it('should return empty string due received value be lower than zero', () => {
      // GIVEN
      const receivedValue = -1;
      // THEN
      expect(wrapper.vm.isActive(receivedValue)).toEqual('');
    });
  });

  describe('Validate changeSlide method', () => {
    it('should return nothing due received value be greater total property', () => {
      // GIVEN
      const receivedValue = 2;
      // THEN
      expect(wrapper.vm.changeSlide(receivedValue)).toEqual();
    });

    it('should return nothing due received value be equal zero', () => {
      // GIVEN
      const receivedValue = 0;

      expect(wrapper.vm.changeSlide(receivedValue)).toEqual();
    });

    it('should return nothing due received value be lower than zero', () => {
      // GIVEN
      const receivedValue = -1;
      // THEN
      expect(wrapper.vm.changeSlide(receivedValue)).toEqual();
    });
  });

});