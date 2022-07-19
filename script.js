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


