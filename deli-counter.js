// 1. Write your functions here

const katzDeli = [] 

const takeANumber = (arr, name) => {
    arr.push(name)
   console.log(`Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`)
}

const line = arr => {
    if (arr.length === 0 ) {
        return "The line is currently empty."
    } 

    else {
    numArr = []
    for (const element of arr) numArr.push(`${arr.indexOf(element) + 1}. ${element}`)

    return `"The line is currently: ${numArr.join(' ')}"`
    }   
}

const nowServing = arr => {
    console.log(`Currently serving ${arr[0]}`)
    arr.shift()
}

// 2. Example Usage

// const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.
 
line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"