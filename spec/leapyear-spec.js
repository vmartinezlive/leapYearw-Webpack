import { Leapyear } from './../src/leapyear.js'

describe('Leapyear', function() {

  it('should take an input and return as leapyear', function() {
     expect(Leapyear(2016)).toEqual(['leapyear']);
  });

  it('should take an input and return as not a leapyear', function() {
  var NotLeapYear = Leapyear(2001);
  expect(NotLeapYear).toEqual(['not a leap year']);
  })
});
