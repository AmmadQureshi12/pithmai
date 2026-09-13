const test = require('node:test');
const assert = require('node:assert/strict');
const { evaluatePracticeResponse } = require('./practice-evaluator.js');

test('correct answer gets +1 and helpful suggestion', () => {
  const result = evaluatePracticeResponse(
    'Thank you for your message. I would be happy to assist you with your room request and ensure a quick solution for you.',
    ['Warm greeting', 'Clear next step']
  );

  assert.equal(result.points, 1);
  assert.equal(result.isCorrect, true);
  assert.ok(result.suggestion.length > 0);
});

test('weak or incorrect answer gets -1 and improvement note', () => {
  const result = evaluatePracticeResponse('Room bad', ['Warm greeting', 'Clear next step']);

  assert.equal(result.points, -1);
  assert.equal(result.isCorrect, false);
  assert.ok(result.suggestion.length > 0);
});
