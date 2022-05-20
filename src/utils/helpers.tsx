export type some = { [key: string]: any };

const has = Object.prototype.hasOwnProperty;

export const isDiff = (A: some, B: some) =>
  JSON.stringify(A) !== JSON.stringify(B);

export const isEmpty = (prop: any) => {
  return (
    prop === null ||
    prop === undefined ||
    (has.call(prop, "length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
};

export const isJSONString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
