function convertDataToJSONString(data) {
    return JSON.stringify(data);
}

console.log(convertDataToJSONString({a: 10}));
console.log(convertDataToJSONString(10));