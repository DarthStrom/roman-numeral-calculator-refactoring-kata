var calculator = require('./calculator');

describe('calculator', function () {

  describe('romanToNumber', function () {

    it('can convert the base glyphs', function () {
      expect(calculator.romanToNumber("I")).toBe(1);
      expect(calculator.romanToNumber("V")).toBe(5);
      expect(calculator.romanToNumber("X")).toBe(10);
      expect(calculator.romanToNumber("L")).toBe(50);
      expect(calculator.romanToNumber("C")).toBe(100);
      expect(calculator.romanToNumber("D")).toBe(500);
      expect(calculator.romanToNumber("M")).toBe(1000);
    });

    it('can convert II', function () {
      expect(calculator.romanToNumber("II")).toBe(2);
    });

    it('can convert combined numbers', function () {
      expect(calculator.romanToNumber("XVI")).toBe(16);
      expect(calculator.romanToNumber("LX")).toBe(60);
    });

    it('can handle subtractive notation', function () {
      expect(calculator.romanToNumber("IV")).toBe(4);
      expect(calculator.romanToNumber("IX")).toBe(9);
      expect(calculator.romanToNumber("XL")).toBe(40);
      expect(calculator.romanToNumber("XC")).toBe(90);
      expect(calculator.romanToNumber("CD")).toBe(400);
      expect(calculator.romanToNumber("CM")).toBe(900);
    });

    it('can convert combined numbers with subtractive notation', function () {
      expect(calculator.romanToNumber("XIV")).toBe(14);
      expect(calculator.romanToNumber("LXXIV")).toBe(74);
      expect(calculator.romanToNumber("MCMLIV")).toBe(1954);
      expect(calculator.romanToNumber("MCMXC")).toBe(1990);
      expect(calculator.romanToNumber("MMXIV")).toBe(2014);
    });

    it('can handle weird numbers', function () {
      expect(calculator.romanToNumber("IIII")).toBe(4);
      expect(calculator.romanToNumber("CCCCXXXX")).toBe(440);
      expect(calculator.romanToNumber("IIIIII")).toBe(6);
      expect(calculator.romanToNumber("XXXXXX")).toBe(60);
      expect(calculator.romanToNumber("MDCCCCX")).toBe(1910);
      expect(calculator.romanToNumber("DD")).toBe(1000);
    });
  });

  describe('numberToRoman', function () {

    it('can produce the base glyphs', function () {
      expect(calculator.numberToRoman(1)).toBe("I");
      expect(calculator.numberToRoman(5)).toBe("V");
      expect(calculator.numberToRoman(10)).toBe("X");
      expect(calculator.numberToRoman(50)).toBe("L");
      expect(calculator.numberToRoman(100)).toBe("C");
      expect(calculator.numberToRoman(500)).toBe("D");
      expect(calculator.numberToRoman(1000)).toBe("M");
    });

    it('can convert to multiple glyphs', function () {
      expect(calculator.numberToRoman(2)).toBe("II");
    });

    it('can convert to mixed glyphs', function () {
      expect(calculator.numberToRoman(16)).toBe("XVI");
    });

    it('can convert to subtractive notation', function () {
      expect(calculator.numberToRoman(4)).toBe("IV");
      expect(calculator.numberToRoman(9)).toBe("IX");
      expect(calculator.numberToRoman(40)).toBe("XL");
      expect(calculator.numberToRoman(90)).toBe("XC");
      expect(calculator.numberToRoman(400)).toBe("CD");
      expect(calculator.numberToRoman(900)).toBe("CM");
    });

    it('can convert more complex numbers', function () {
      expect(calculator.numberToRoman(14)).toBe("XIV");
      expect(calculator.numberToRoman(74)).toBe("LXXIV");
      expect(calculator.numberToRoman(1954)).toBe("MCMLIV");
      expect(calculator.numberToRoman(1990)).toBe("MCMXC");
      expect(calculator.numberToRoman(2014)).toBe("MMXIV");
    });

    it('can represent negatives', function () {
      expect(calculator.numberToRoman(-13)).toBe("-XIII");
    });
  });

  describe('addition', function () {

    it('treats empty strings as 0', function () {
      expect(calculator.add("", "")).toBe("");
      expect(calculator.add("I", "")).toBe("I");
      expect(calculator.add("", "II")).toBe("II");
    });

    it('adds 1s', function () {
      expect(calculator.add("I", "I")).toBe("II");
    });

    it('adds 1 and 2', function () {
      expect(calculator.add("I", "II")).toBe("III");
    });

    it('adds 2 and 2', function () {
      expect(calculator.add("II", "II")).toBe("IV");
    });

    it('can add larger numbers by concatenation', function () {
      expect(calculator.add("XX", "II")).toBe("XXII");
    });

    it('concatenates in the right order', function () {
      expect(calculator.add("XIV", "LX")).toBe("LXXIV");
    });

    it('upgrades the glyph instead of repeating', function () {
      expect(calculator.add("D", "D")).toBe("M");
    });
  });

  describe('subtraction', function () {

    it('subtracts', function () {
      expect(calculator.subtract("", "")).toBe("");
      expect(calculator.subtract("I", "")).toBe("I");
      expect(calculator.subtract("II", "")).toBe("II");
      expect(calculator.subtract("I", "I")).toBe("");
      expect(calculator.subtract("II", "I")).toBe("I");
      expect(calculator.subtract("II", "II")).toBe("");
      expect(calculator.subtract("XX", "II")).toBe("XVIII");
      expect(calculator.subtract("LX", "XIV")).toBe("XLVI");
      expect(calculator.subtract("M", "D")).toBe("D");
    });

    it('can represent negatives', function () {
      expect(calculator.subtract("", "I")).toBe("-I");
      expect(calculator.subtract("II", "XX")).toBe("-XVIII");
    });
  });
});
