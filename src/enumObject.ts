export function enumObject<T extends object>(input: {
  [K in keyof T as K extends string
    ? string extends K
      ? never
      : K
    : never]: `${T extends { [_ in K]: infer V extends number | string }
    ? V
    : ""}` extends `${infer T extends string}`
    ? T extends `${infer T extends number}`
      ? T
      : T
    : never;
}): {
  [K in keyof T as K extends string
    ? string extends K
      ? never
      : K
    : never]: T[K];
} {
  return input as any;
}
