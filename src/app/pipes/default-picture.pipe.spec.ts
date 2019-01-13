import { DefaultPicturePipe } from './default-picture.pipe';

describe('DefaultPicturePipe', () => {
  // This pipe is a pure, stateless function so there is no need for beforeEach function
  let pipe = new DefaultPicturePipe();
 
  it('should not transform the valid original value', () => {
    expect(pipe.transform('test', '')).toBe('test');
  });
 
  it('should use the fallback value when original value is invalid', () => {
    expect(pipe.transform('', 'this is a fallback value')).toBe('this is a fallback value');
});
})
