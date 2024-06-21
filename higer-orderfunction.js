function createAdder(number) {
    return function(value){
        return value + number;
    }
}

const addFive = createAdder(5);
console.log(addFive(2));