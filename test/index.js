import test from 'tape';
import {curry, curryAll} from '../src/curry';

const f = (a, b, c) => a + b + c;
const g = (a, b) => a * b;
const h = () => 1;

test('Curry', t => {
  t.test('Function Accepts No Args', t => {
    const fn = curry(h);
    t.equal(typeof fn, 'function', 'Should return a function');
    t.equal(fn(), 1, 'Should return the result of executing the function');
    t.end();
  });
  t.test('Provide No Args', t => {
    const fn = curry(f);
    t.equal(typeof fn, 'function', 'Should return a function');
    t.end();
  });
  t.test('Provide Some Args', t => {
    const result = curry(f)(1);
    t.equal(typeof result, 'function', 'Should return a function');
    t.end();
  });
  t.test('Provide All Args', t => {
    const result = curry(f)(1)(1)(1);
    t.equal(result, 3, 'Should return the result of executing the function');
    t.end();
  });
});

test('Curry All', t => {
  t.test('No Args', t => {
    const [x, y] = curryAll(f, g);
    t.equal(typeof x, 'function', 'Should return a function');
    t.equal(typeof y, 'function', 'Should return a function');
    t.end();
  });
  t.test('Some Args', t => {
    const [x, y] = curryAll(f, g);
    let result = x(1);
    t.equal(typeof result, 'function', 'Should return a function');
    result = y(2);
    t.equal(typeof result, 'function', 'Should return a function');
    t.end();
  });
  t.test('All Args', t => {
    const [x, y] = curryAll(f, g);
    let result = x(1)(1)(1);
    t.equal(result, 3, 'Should return the result of executing the function');
    result = y(2)(3);
    t.equal(result, 6, 'Should return the result of executing the function');
    t.end();
  });
});
