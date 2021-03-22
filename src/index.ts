export function actionTypesFactory<T extends string[]>(
  prefix: string,
  ...actionType: T
): {
  readonly [K in T[number]]: {
    _SUCCEEDED: string;
    _FAILED: string;
  };
};

export function actionTypesFactory(
  prefix: string,
  ...actionType: string[]
): {
  readonly [k: string]: {
    _SUCCEEDED: string;
    _FAILED: string;
  };
} {
  const prefixString = prefix.length ? `${prefix}/` : "";
  return actionType.reduce(
    (acc, type) => ({
      ...acc,
      [type]: `${prefixString}${type}`,
      [type+'_SUCCEEDED']: `${prefixString}${type}_SUCCEEDED`,
      [type+'_FAILED']: `${prefixString}${type}`,
    }),
    {}
  );
}

export function dictionaryFactory<T extends string[]>(
  ...args: T
): {
  readonly [K in T[number]]: K;
};

export function dictionaryFactory(
  ...args: string[]
): {
  readonly [k: string]: string;
} {
  return args.reduce(
    (prev, next) => ({
      ...prev,
      [next]: next,
    }),
    {}
  );
}
