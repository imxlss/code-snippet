let strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
}

let calculateBonus = function (level, salary) {
    return strategies[level](salary);
}

console.log(calculateBonus('S', 1000));
console.log(calculateBonus('A', 1000));
console.log(calculateBonus('B', 1000));