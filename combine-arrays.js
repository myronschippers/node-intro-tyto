function combineArrays(array1, array2) {
    const newArray = [];

    for (item of array1) {
        newArray.push(item)
    }

    for (item of array2) {
        newArray.push(item)
    }

    return newArray;
}

module.exports = combineArrays;