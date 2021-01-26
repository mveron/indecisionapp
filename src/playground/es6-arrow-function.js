const multipler = {
    numbers: [1,2,3],
    multiplyBy: 100,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy  )
    }
}

console.log(multipler.multiply())