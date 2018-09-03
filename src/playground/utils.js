console.log('utils.js is running');

// named exports
export const square = (x) => x * x;

export const add = (a, b) => a + b;

// named exports + default export
// export { square, add, subtract as default };

// export default
export default (a, b) => a - b;
