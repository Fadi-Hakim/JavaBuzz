describe('Javabuzz', function() {

  var javabuzz

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe ('knows what a number is', function () {

    it('is divisible by 3', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('is divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('is divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Java" when a number is divisivle by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisivle by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz" when a number is divisivle by 15', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('returns number when not divisible by 3 and 5', function() {
      expect(javabuzz.says(7)).toEqual(7);
    });

  });

});

