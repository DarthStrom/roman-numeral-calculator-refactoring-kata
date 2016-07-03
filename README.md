# Roman Numeral Calculator Refactoring Kata
This kata currently includes working code and tests.  Your mission is to refactor the code with the Open/closed Principle in mind.  While the first thing on your mind should be OCP, don't be afraid to use other design principles to make this happen.

This kata is based on the roman calculator kata at [codingdojo.org](http://codingdojo.org/cgi-bin/index.pl?KataRomanCalculator).

## More info on the Open/closed Principle:
- [Wikipedia](https://en.wikipedia.org/wiki/Open%2Fclosed_principle)
- [8th Light Blog](https://blog.8thlight.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html)
- [SRP Clean Coders video](https://cleancoders.com/episode/clean-code-episode-10/show)

## Getting started
You should have [Node.js](https://nodejs.org), [npm](https://www.npmjs.com), and [jasmine-node](https://github.com/mhevery/jasmine-node).  You can install jasmine-node globally with `npm install -g jasmine-node`.  You will also need to install lodash with `npm install`.

Once you have jasmine-node and lodash, you can run the tests with `jasmine-node calculator-spec.js`.  They should pass the first time before you make any changes.  Any time you make a change, you'll want to run the tests again to make sure you didn't break anything.

## Here are some questions to ask as you refactor
- Is there a portion of this code that is unlikely to change that we can isolate?
- What kind of changes are likely? And can we organize the code in a way that makes future changes easy?
- Come up with an example change to work towards... refactor the code to make it easy and then make the change.
