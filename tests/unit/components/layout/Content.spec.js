import { shallowMount } from '@vue/test-utils';
import Content from '../../../../src/components/layout/Content.vue';
import Animation from '../../../../src/helpers/Animation';
jest.mock('../../../../src/helpers/Animation');

describe('Content.vue', () => {
  const wrapper = shallowMount(
    Content,
    {
      propsData: {
        contents: [
          {
            title: 'title test',
            text: 'text test',
            images: ['shoe-01']
          },
          {
            title: 'title test 2',
            text: 'text test 2',
            images: ['shoe-02', 'shoe-03']
          }
        ]
      }
    },
  );

  it('should return content object based in default index property', () => {
    // THEN
    expect(wrapper.vm.content).toEqual({
      title: 'title test',
      text: 'text test',
      images: ['shoe-01']
    });
  });

  it('should return content object based in updated index property', () => {
    // GIVEN
    wrapper.setProps({index: 1});
    // THEN
    expect(wrapper.vm.content).toEqual({
      title: 'title test 2',
      text: 'text test 2',
      images: ['shoe-02', 'shoe-03']
    });
  });

  describe('getImageClass function', () => {
    it('should return single-child image class name when quantity is equal 1', () => {
      // GIVEN
      const quantity = 1;
      // THEN
      expect(wrapper.vm.getImageClass(quantity)).toEqual('single-child');
    });
  
    it('should return multi-child image class name when quantity is greater than 1', () => {
      // GIVEN
      const quantity = 2;
      // THEN
      expect(wrapper.vm.getImageClass(quantity)).toEqual('multi-child');
    });
  });

  describe('handleAnimations function', () => {
    it('should find and animate html elements', () => {
      // GIVEN
      const mockHTMLElement = { classList: { toggle: jest.fn() } };
      const spyFunc = jest.fn(() => [mockHTMLElement, mockHTMLElement]);
      Object.defineProperty(global.document, 'getElementsByClassName', { value: spyFunc });
      Animation.animate = jest.fn();
      // WHEN
      wrapper.vm.handleAnimations();
      // THEN
      expect(Animation.animate).toHaveBeenCalledTimes(3);
    });
  });
});