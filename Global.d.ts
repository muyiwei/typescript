
type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ?  K extends keyof T ? U[K]|T[K] :U[K]
    : K extends keyof T
    ? T[K]
    : never;
};
type GetTreeData<T extends unknown[], children extends string = 'children'> =
    T extends Array<infer A> ? Array<Merge<{ [key in keyof A ] :A[key]}, {[key in children]?: T}>> :unknown;

type aaa = GetTreeData<[{a: 11, b: 12}]>