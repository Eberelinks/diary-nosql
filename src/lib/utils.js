export const asyncWrapper = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// export function asyncWrapper(fn) {
//   return async (req, res, next) => {
//     await fn(req, res, next).catch(next);
//   };
// };