const flattened =[[0, 1], [2, 3], [4, 5]].reduce(
    (acc, array) =>{
        debugger;
        return acc.concat(array);
    }, []
    );

console.log(flattened);