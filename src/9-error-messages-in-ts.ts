export const deepEqualCompare = <Arg>(
    a: Arg extends any[] ? `Don't pass an array!` : Arg,
    b: Arg extends any[] ? `Don't pass an array!` : Arg
): boolean => {
   /* if  (Array.isArray(a) || Array.isArray(b)) {
        throw new Error("You can not compare two arrays");
    }  - this code moved to the type level */

    return a === b;
}

deepEqualCompare('1', '2');
deepEqualCompare([], []);