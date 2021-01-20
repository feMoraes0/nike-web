import Animation from '../../../src/helpers/Animation';

const setTimeout = jest.fn();

describe('Animation helper', () => {
  const mockHTMLElement = { classList: { toggle: jest.fn() } };

  it('should trigger toggle class to html element', () => {
    // WHEN
    Animation.animate(mockHTMLElement, 'test');
    // THEN
    expect(mockHTMLElement.classList.toggle).toBeCalledWith('test');
  });

  it('should toggle function be called twice', async () => {
    // WHEN
    Animation.animate(mockHTMLElement, 'test');
    // THEN
    await setTimeout(() => {
      expect(mockHTMLElement.classList.toggle).toBeCalled('test');
    }, 1000);
    expect(mockHTMLElement.classList.toggle).toHaveBeenCalledTimes(2);
  });

  it('should return botom up enum string', () => {
    // WHEN
    const elementClass = Animation.BOTTOM_UP;
    // THEN
    expect(elementClass).toEqual('animate-bottom-up');
  });

  it('should return top down enum string', () => {
    // WHEN
    const elementClass = Animation.TOP_DOWN;
    // THEN
    expect(elementClass).toEqual('animate-top-down');
  });
});