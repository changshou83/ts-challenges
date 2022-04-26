type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js
function myPick(arr, keys) {
  const obj = {};

  keys.forEach(k => {
    if (k in arr) obj[k] = arr[k];
  });

  return obj;
}

// 相关知识点
// 1. 返回一个对象
// 2. 遍历
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. 取值
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 查看 key 是否在 arr 中
//    1. keyof  lookup
//     - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
//    2. extends 条件约束
//     - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
