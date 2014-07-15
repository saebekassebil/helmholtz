var test = require('tape'),
  helmholtz = require('../');

test('parsing helmholtz notation', function(t) {
  t.deepEqual(helmholtz('a\''), [3, 3]);
  t.deepEqual(helmholtz(',,C'), [0, 0]);
  t.deepEqual(helmholtz('c#'), [-1, 7]);
  t.deepEqual(helmholtz('D'), [1, 2]);
  t.deepEqual(helmholtz('Ebb,,'), [6, -10]);
  t.deepEqual(helmholtz('gx\'\'\''), [-2, 15]);
  t.deepEqual(helmholtz('fb'), [8, -8]);
  t.end();
});
