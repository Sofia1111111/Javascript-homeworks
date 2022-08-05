let  user = {
    firstname:'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
 };
console.log (user.studentstatus);

var euCountries = ['Italy', 'Germany', 'UK', 'France', 'Austria'];
for (var x =0; x < euCountries.length; x++) {
    console.log(euCountries[x])
}

or 

for (var item of euCountries) {
    console.log(item);
}

var numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i]>5) {
    console.log(numbers[i]);
}
}


var user1 = {
	name: "giorgi",
	age:  20,
	studentstatus: "active"
}
if (user1.age < 18 && user1.studentstatus == 'active') {
    console.log ('hello');
} else if (user1.name == 'levan') {
    console.log ('hello giorgi');
}else if (user1.studentstatus == 'active' || user1.age < 25) {
    console.log ('hello world');
}else {
    console.log (error);
}


var array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;
for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
    console.log (array[i]);
}
}

var array1 = [32, 10, 'hello', null, 'hello2', 50]
for (var i=0; i < array1.length; i++) {
    if (array1[i] % 5 == 0) {
        console.log (array1[i])
    }
}

//1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sum(...numbers) {
    let newSum = 0;
    for (let item of numbers) {
        if (item > 0) {
            newSum += item;
        }
    }
    console.log(newSum);
}

sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

     
//2.ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
10, 50, 6, 7, 8, 11, 6, 3, 9

function sum(...arguments) { 
    let numbersSum = 0;
    for (let item of arguments) {
        numbersSum = numbersSum + item; //ან numberSum += item;
    }
    return numbersSum;
}

let result = sum (10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);

//3. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

 
function testFunction () {
    if (user.isloggedin == true) {
        return user.firstname + " " + user.lastname
    } else {
        return false
    }
}
let result = testFunction();
console.log(result); 

//4.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი.
//ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა 
//დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function getMaxValue (numbers) {
    let maxValue = 0;
    for (let item of numbers) {
        if (item > maxValue) {
            maxValue = item;
        }
    }
    return maxValue;
}

console.log(getMaxValue([3, 102, 205, 10, 25, 36, 4 ]));



//5.მოცემულია მასივი let array = [1,2,4,10,34,5,7,87]
//გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;

let array = [1,2,4,10,34,5,7,87]
for (let index = 0; index < array.length; index++) { 

 if (array[index] > 0 && array[index] < 10){
 console.log (array[index]);
}
}

//6.Let numbers =[1,2,3,4,5,6,7,8,9,10]
//ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი

let array =[1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == 5) {
        break;
    }
    console.log (array[index]);
} 

//ლექცია 4 
//1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// დაბეჭდეთ მასივისი ახალი ელემენტები.

let array = [5, 25, 89, 120, 36];
array.push('javascript', 'python');
console.log(array);

array.unshift('html', 'css');
console.log(array);

console.log(array.length);

array.shift();
array.pop();
console.log(array);

array.splice(4,0,'Sofia knows Javascript well');
console.log(array);

array.splice(1,0,'c++');
console.log(array);

//2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits = ['orange', 'banana', 'pear'];

console.log (fruits.length);

fruits.push('apple','pineapple');
console.log(fruits);

fruits.unshift('watermelon');
console.log(fruits);

console.log(fruits.length);

fruits.splice (2,0,'mango')
console.log(fruits);

fruits.shift();
fruits.pop();
console.log(fruits);

console.log(fruits.length);

//3. მოცემულია მასივი:
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray = array.map (function(x) {
    return x / 3;
})

console.log (newArray);

// 4.  მოცემულია მასივი:
// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

 let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
 let newArray = array.filter(function(item) {
     return typeof item == 'number';
 })
 console.log(newArray);
 

//  5.მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', 'python, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newArray = languages.filter(function(item) {
    return item.length > 5;
})
console.log(newArray);

// 6.მოცემულია მასივი:
// let array= ['academy', 'of', 'digital', 'industries']
// Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

let array= ['academy', 'of', 'digital', 'industries'].reduce (
function(accumulator, currentValue) { 
    return accumulator.concat(currentValue);
},
 ' '
) 
console.log(array);

// 7. მოცემულია მასივი:
// let item = [12, ‘google’, 32, null, ‘yahoo’, 25];

//შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით:
//თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ
//ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი 
//ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

let item = [12, ‘google’, 32, null, ‘yahoo’, 25];

let result = item.map ( item => {
    if (typeof item == 'number') {
        return item * item;
    }else if (typeof item == 'string') {
        return item.toUpperCase();
    }
        return item;
})

console.log(result);


// 8. Მოცემულია მასივი:
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი 
//სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let result = words.filter ( element => {
    if (element.includes('m') || element.includes('M')) {
        return true;
    }
    return false
})
console.log(result);
//ან

let result2 = words.filter(item => item.toLowerCase().includes('m'));
console.log(result2);

// 9. მოცემულია სამი მასივი:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// Concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let newValue = arr1.concat (arr2, arr3);
console.log(newValue);


// 10.მოცემულია მასივი:
// let arr = [1, 2, 3, 4, 5];
// Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

let arr = [1, 2, 3, 4, 5]

let sum = 0;
arr.forEach(function(item) {
    sum += item;
})
console.log(sum);

// 11.მოცემულია მასივი:
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// Filter მეთოდის საშუალებით ამოიღეთ მარტო დადებითი რიცხვები

let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let newArray = numbers.filter (function(y) {
    return y > 0;
})
console.log(newArray);


// 12.შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; 
// არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით
let arr = [-1, -2, -3, 4].some(function(item){
    return item < 0;
})
console.log(arr);

// 13.მოცემულია მასივი let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
// Reduce da filter მეთოდებით ამოიღეთ დადებითი რიცხვები;

let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]].reduce (function(accumulator,currentValue){
    return accumulator.concat(currentValue)
},
[]
)
console.log(arr);
let newArray = arr.filter( (item) => item > 0);
console.log(newArray);


// 14. მოცემულია მასივი let array =[23,45,32,5,87,7,3,98]
// Sort მეთოდის საშუელებით დაალაგეთ ელემენტები კლებადონის მიხედვით და ამოიღეთ მინიმალური რიცხვი;

let array = [23,45,32,5,87,7,3,98];

let result = array.sort( (x,y) => y - x)[array.length-1]; 
console.log(result);


//input example
let form1 = document.querySelector('.formwrapper1');
let inputToDo1 = document.querySelector('.input-form1');
let ulToDo = document.querySelector('.ul-list-todo1');

form1.addEventListener('submit', (event2){
    event2.preventDefault();
    let value1 = inputToDo.value1;
    if (value1 === " ");
    alert ('text is required');
    return;
})

let li1 = document.createElement('li');

let deleteButton1 = document.createElement('span');
deleteButton1.textContent = 'X'; 
deleteButton1.addEventListener('click', function() {
    li1.remove();
}

li1.textContent = value1;
li1.appendChild(deleteButton1);
ulToDo1.appendChild('li');

input.value1 = ' ';


