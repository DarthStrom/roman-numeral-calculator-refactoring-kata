var _ = require('lodash');

var baseValues = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1,
};

var abbreviations = {
  "DCCCC": "CM",
  "CCCC":  "CD",
  "LXXXX": "XC",
  "XXXX":  "XL",
  "VIIII": "IX",
  "IIII":  "IV"
};

exports.add = function(x, y) {
  var sum = exports.romanToNumber(x) + exports.romanToNumber(y);
  return exports.numberToRoman(sum);
};

exports.subtract = function(x, y) {
  var difference = exports.romanToNumber(x) - exports.romanToNumber(y);
  return exports.numberToRoman(difference);
};

exports.numberToRoman = function(number) {
  var prefix = getPrefix(number);
  return prefix + abbreviate(encode(Math.abs(number)));
}

exports.romanToNumber = function(roman) {
  return tally(expandAbbreviations(roman));
}

function getPrefix(number) {
  return number < 0 ? "-" : "";
}

function abbreviate(expanded) {
  return _.reduce(abbreviations, function (roman, short, long) {
    return _.replace(roman, long, short);
  }, expanded);
}

function expandAbbreviations(roman) {
  return _.reduce(abbreviations, function (expanded, short, long) {
    return _.replace(expanded, short, long);
  }, roman);
}

function encode(number) {
  var result = "";

  _.each(baseValues, function (baseValue, glyph) {
    while (baseValue <= number) {
      number -= baseValue;
      result += glyph;
    }
  });

  return result;
}

function tally(roman) {
  return _.reduce(roman, function (soFar, glyph) {
    return soFar += baseValues[glyph];
  }, 0);
}
