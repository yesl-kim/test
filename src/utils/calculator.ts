const plus = (...args: number[]): number => {
  return args.reduce((a, b) => a + b);
};

const minus = (a: number, b: number): number => {
  return a - b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const percentage = (a: number): number => {
  return a / 100;
};

export default {
  plus,
  minus,
  multiply,
  divide,
  percentage,
};
