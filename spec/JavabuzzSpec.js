describe('Javabuzz', function() {

  var javabuzz

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe ('knows what a number is', function () {

    it('is divisible by 3', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleBy(3, 3)).toBe(true);
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

});

