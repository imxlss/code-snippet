let performanceS = function (salary) {
    return salary * 4;
}

let performanceA = function (salary) {
    return salary * 3;
}

let performanceB = function (salary) {
    return salary * 2;
}

let calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
        return performanceS(salary);
    }

    if (performanceLevel === 'A') {
        return performanceA(salary);
    }

    if (performanceLevel === 'B') {
        return performanceB(salary);
    }
}

console.log(calculateBonus('B', 5000));