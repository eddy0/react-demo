var sum = function(array) {
    // 先设置一个变量用来存数组的和
    var s = 0
    for (var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素的值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
    return s
}

var product = function(array) {
    let result = 1
    for (let i = 0; i < array.length; i++) {
        result *= array[i]
    }
    return result
}

var abs = function(n) {
    if (n < -n) {
        n = -n
    }
    return n
}

var average = function(array) {
    let s = sum(array)
    let average = s / array.length
    return average
}

var min = function(array) {
    return Math.max(...array)
}

const isOdd = (n) => {
    return n % 2
}

var sum1 = function(n) {
    let s = 1
    for (let i = 2; i <= n; i++) {
        const Odd = isOdd(i)
        if ( Odd ) {
            s += i
        } else {
            s -= i
        }
    }
    return s
}

var fac = function(n) {
    if ( n === 1) {
        return 1
    } else {
        return n * arguments.callee( n - 1 )
    }
}

console.log( fac( 5 ))

var apply = function(op, a, b) {
    const ops= {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
        '>': (a,b) => a > b,
        '<': (a,b) => a < b,
        '==': (a,b) => a == b,
    }
    if (op in ops ){
        return ops[op](a, b)
    }
}

var applyList = function(op, oprands) {
    const ops= {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
    }
    if (op in ops ){
        let s = oprands.reduce( (x , y) => {
            return ops[op](x, y)
        })
        return s
    }
}

var applyCompare = function(expression) {
    const op = expression[0]
    const oprands = expression.slice(1)
    const compare= {
        '>': (a,b) => a > b,
        '<': (a,b) => a < b,
        '==': (a,b) => a == b,
    }
    if (op in compare ){
        return compare[op](...oprands)
    }
}

var applyOps = function(expression) {
    const op = expression[0]
    const oprands = expression.slice(1)
    const ops= {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
    }

    const compare = {
        '>': (a,b) => a > b,
        '<': (a,b) => a < b,
        '==': (a,b) => a == b,
    }

    if (op in ops ){
        let s = oprands.reduce( (x , y) => {
            return ops[op](x, y)
        })
        return s
    }

    if (op in compare ){
        return compare[op]( ...oprands)
    }
}

var rect = (x, y, w, h) => {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i = i + 1
    }
}

var forecast = function(temps) {
    // 柱壮图里每个图宽 30，间距为 0
    const w = 30
    let x = 0
    const y = 0
    for (let i = 0; i < temps.length; i++) {
        let h = temps[i]
        rect(x, y, w, h)
        x = x + w
    }

}

var temps = [22, 19, 22, 21, 25, 27, 30, 28]
forecast(temps)


// console.log(product( a ))


// console.log(  abs(-10)  )
// console.log(  average(a)  )
// console.log(  apply('==', 1,1 )  )
// console.log(  applyCompare( ['<', 2, 2] )  )
// console.log(  expression( ['+', 3,4,2] )  )
