function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const stack = [{ source: obj, target: Array.isArray(obj) ? [] : {} }];
    const rootClone = stack[0].target;

    while (stack.length > 0) {
        const { source, target } = stack.pop();

        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                const value = source[key];

                if (typeof value === 'object' && value !== null) {
                    // If the value is an object or array, create its clone and add to the stack
                    const newClone = Array.isArray(value) ? [] : {};
                    target[key] = newClone;
                    stack.push({ source: value, target: newClone });
                } else {
                    // If the value is a primitive, copy it directly
                    target[key] = value;
                }
            }
        }
    }
    return rootClone;
}

let a = {
    val1: "val 1",
    val2: {
        sub1: "val 2",
        sub2: {
            val: "val"
        }
    },
    val0: 0
};

let b = {
    val1: "val 1",
    val2: {
        sub1: "val 2",
    }
}

b.val2.sub2 = b;

console.log(a);
let clonedA = deepCopy(a);
a.val2.sub1 = " asdf"
console.log(a);
console.log(clonedA);
