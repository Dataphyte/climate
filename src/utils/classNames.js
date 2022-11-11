/**
 *
 * @param  {...any} classes - List of classes to be added to element, could be strings primitives or js expressions
 * @returns Single stringas class name
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
