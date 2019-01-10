import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('should return all pets if term doesnt match any animal type', () => {
    const pipe = new FilterPipe();
    const result = pipe.transform( this.pets , 'rabbit');
    expect(result).toBe("rabbit");
  });
});
