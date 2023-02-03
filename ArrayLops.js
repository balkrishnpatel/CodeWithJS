let num = [3,4,5,6,69,56];
// for(let i = 0; i < num.length; i++){
//     console.log(num[i])
// }


/* forEach Loop*/

// num.forEach((element) => {
//    // console.log(element)
//     console.log(element * element)
// })

/* Array.from */
// let name ="Krishna"
// let arr = Array.from(name)
// console.log(arr)

/*for ...of */

// for(let i of num){
//     console.log(i)
// }

/*for ..in */

// for(let i in num){
//     console.log(num[i])
// }

/* map()*/

// let arr = [45,36,27,18]
// arr.map((value) => {
//     console.log(value )
// })

// let arr = [45,36,27,18]
// let a = arr.map((value) => {
//     console.log(value )
//     return value + 1
// })
// console.log(a)

// let arr = [45,36,27,18]
// let a = arr.map((value ,index , array) => {
//     console.log(value ,index , array )
//     return value + 1
// })
// console.log(a)


/*filter */

// let arr2 = [1,2,3,4,5,6,7,8,9,10]
// let a2 = arr2.filter((a) => {
//     return a<=5
// })
// console.log(a2)


/* reduce */


// let arr3 = [1,2,3,4,5,6,7,8,9]
//  let newArr = arr3.reduce((h1,h2) => {
//     return h1+h2
//  })
//  //console.log(arr3)
//  console.log(newArr)



let arr3 = [12,5,5,8,5,6]
const reduce_func = (p1,p2) =>{
    return p1+p2
}
let newARR= arr3.reduce(reduce_func)
console.log(newARR )





