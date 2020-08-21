function createCalculator(num) {

    let input = num;


    return {

        add: function (input2){
            return input = input + input2;
        },
        min: function (input2) {
            return input = input - input2;
        },
        sub: function (input2) {
            return input = input / input2;
        },
        mult: function (input2) {
            return input = input * input2;
        },
        set: function (input2) {
            return input = input2;
        }

    }


}


const calculator1 = createCalculator(40);



console.log(calculator1.add(10));
console.log(calculator1.min(10));
console.log(calculator1.sub(10));
console.log(calculator1.mult(2));
console.log(calculator1.set(2));


