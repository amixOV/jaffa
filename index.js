// let num = 100
// setInterval(() => {
//     num--
//     console.log(num);
    
// },1000)





// var not use 
let arrForLearn = ['jaffa is something', 2, true];
let newArr = [];
let newObj = {};
console.log(typeof(newArr)); // object
let isArr = Array.isArray(newArr);
console.log(isArr); // object
console.log(typeof(newObj));
console.log(typeof(arrForLearn[0]));
console.log(typeof(arrForLearn[1]));
console.log(typeof(arrForLearn[2]));

newArr.push('newElement', 3);
newArr.push('newElement2');
const myVar = false ;

let newObj2 = {
    a1: 'value',
    d2: 'value2',
    key3: 'value3',
    key4: 'value4',
}
// if
function myFun (){
    //do something
}

myFun() // execuite the function

function dosomething(){
    console.log('ddddd');  
}

function addOne(number){
    return number + 1;
}

function addMrForName (name){
    let nameWithMr = 'mr ' + name;
    // let nameWithMr = `mr ${name}`;
    return nameWithMr;
    
}

let newName = addMrForName('jaffa');
console.log(newName);

let number = 102003;

if(1-1>1){
    console.log('whaaaaaaaaat');
    
}else{
    console.log('yeeeeeaaaa');
    
}


// לבנות פונקציה שמקבלת 2 מספרים ומכפילה אותם אחד בשני 
function NumXNum (number1, number2){
    let ENumXNum = number1 * number2
    return ENumXNum
}

let Answer = NumXNum(2, 4)
console.log("The answer is " + Answer)


// addMrForName מקבל מערך עם שם מין ומצב משפחתתי ומחזיר
let ArrMRMS = ["Jaffa Ilana", "Ovitz", "F", "Nof Ramon 74", "Jerusalem", false]

if (ArrMRMS[5] === false){
    console.log("Ms "+ ArrMRMS[0] + ArrMRMS[1])
    console.log(ArrMRMS[3])
    console.log(ArrMRMS[4])
}else{
    console.log("Mis "+ ArrMRMS[0] + " " + ArrMRMS[1])
    console.log(ArrMRMS[3])
    console.log(ArrMRMS[4])
}
console.log(ArrMRMS);


// ArrMRMS.push = (false) 
// addMrForName מקבל אובייקט עם שם מין ומצב משפחתתי ומחזיר