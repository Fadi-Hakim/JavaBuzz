describe('Javabuzz', function() {

  var javabuzz

  describe ('knows what a number is', function () {

    it('is divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

});

