export const getDeepValue = <
    TObj,
    TKey extends keyof TObj,
    TSecondKey extends keyof TObj[TKey]
>(
    obj: TObj,
    firstKey: TKey,
    secondKey: TSecondKey
) => {
    return obj[firstKey][secondKey];
}

const obj = {
    foo: {
        a: true,
        b: 2,
    },
    bar: {
        c: "12",
        d: 18,
    }
}

const value = getDeepValue(obj, "bar", "d");

typeof value === 'number'

