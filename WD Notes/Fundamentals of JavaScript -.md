# Fundamentals of JavaScript :-



### operations:-



/\*var name = prompt("Write your name");

name1 = name.slice(0,1);

name2 = name.slice(1,name.length);

alert("Hello, "+ name1.toUpperCase() + name2.toLowerCase() );



var dogage = prompt("Enter your dog age");

var humanage = (dogage - 2)\*4+21;

console.log("Humanage will be " + humanage);



x = null;

y = undefined;

console.log(x);

console.log(y);



let a = true;

let b = false;

console.log(a);

console.log(b);



\---------------------------------------------------------------------------------



### Basic Printing :-



const profile = {

&#x20;   username : "Rushikesh Mistari",

&#x20;   follow : "Follow",

&#x20;   message : "Message",

&#x20;   post : 12 + " Posts",

&#x20;   followers : 267 + " Followers",

&#x20;   following : 295 + " Following",

&#x20;   name : "Rushikesh Mistari",

&#x20;   thread : "@#Rushikeshmistar2i",

&#x20;   occupation : 'student',

&#x20;   details : "Student at VCET",

};

console.log(profile);

console.log(profile\["username"]);

console.log(profile\["follow"]);

console.log(profile\["message"]);

console.log(profile\["post"]);

console.log(profile\["followers"]);

console.log(profile\["following"]);

console.log(profile\["name"]);

console.log(profile\["thread"]);

console.log(profile\["occupation"]);

console.log(profile\["details"]);



\------------------------------------------------------------------------------



### Conditional Statements:-



\#1



let age = prompt("Enter your age :- ");

if (age < 18){

&#x20;   alert("Your teenager");

}

else if (age >18 \&\& age<65) {

&#x20;   console.log("Your adult");

}

else {

&#x20;   console.log("Your old");

}



\#2



age > 18 ? console.log("Your adult") : console.log("Your old");



\#3



let marks = prompt("Enter your marks :- ");

if (marks >= 0 \&\& marks <50){

&#x20;   ("failed");

}

else if (marks >= 50 \&\& marks < 60){

&#x20;   ("Grade D");

}

else if (marks >= 60 \&\& marks < 70){

&#x20;   ("Grade C");

}

else if (marks >= 70 \&\& marks < 80){

&#x20;   ("Grade B");

}

else if (marks >= 80 \&\& marks <+ 1000){

&#x20;   ("Grade A");

}

else {

&#x20;   ("enter valid number");

};



\------------------------------------------------------------------------



### Loops :-



##### \# For loop :-



let sum = 0;

for (let i = 0; i<=1000 ; i++){

&#x20;   sum +=i;

};

console.log(sum);

#### 

##### \# While loop :-



let n = prompt("Enter your number :-");

fact = 1;

let i =1;

while (j>=1){

&#x20;   fact \*= j;

&#x20;   j--;

}

alert(fact);



for (let i=0 ; i<= 100; i=i+2){

&#x20;   if (i % 2 == 0){

&#x20;       console.log(i);

&#x20;   };

}



\----------------------------------------------------------------------------------

### STRING : immutable :-



let key = 23;

let num = prompt("Enter your number to guess number:-");

while (num != key){

&#x20;   num = prompt("You entered wrong num number ,Enter your number to guess number:-");

};

alert("Congrats You guiss Corect number");



//PROPERTIES OF STRINGS

let str = " Rushikesh \\t Mistari ";

console.log(str\[5]);

console.log(str.charAt(8));

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim());

console.log(str.replace("Ru","Ri"));

console.log(str.slice(2,5));

console.log(str);

let str1 = "rushikesh";

let str2 = "mistari";

console.log(str1.concat(str2));

let object = {

&#x20;   name : "mango",

&#x20;   price : 40,

&#x20;   quality : "fresh",

}



//TEMPLATE LITERALS

console.log(`The fruit is ${object.name} \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nwhich is ${object.quality} and cost of ${object.price}`);



\---------------------------------------------------------------------------------------------------------------------------------------------------



### ARRAY :- mutable :-



let marks =  \[89,36,85,23,98,"rahul"];

let names = \["jadu","Rohit",'Rahul'];

console.log(marks);

console.log(marks.length);

console.log(marks\[3]);

console.log(typeof(marks));

marks\[3]=87;//replace

console.log(marks\[3]);

console.log(marks.slice(1,5));



marks.push("Rushikesh");

console.log(marks);



let deletedItem = marks.pop();

console.log(marks);

console.log("deleted", deletedItem);



console.log(marks.toString());



marks = marks.concat(names)

console.log(marks);

marks.unshift("Daku");//add at start

console.log(marks);



//Splice(Strat idx, delCount, elements) : change in origal array

marks.splice(2,3,"sonu","monu","raju");

console.log(marks);

marks.splice(3,0,"kaju");

console.log(marks);





for (let i=0; i < marks.length; i++){

&#x20;   console.log(marks\[i]);

};

for(let ele of marks){

&#x20;   console.log(ele);

}

for(let ele of marks){

&#x20;   console.log(ele);

}



let marks = \[78,97,86,70,85,39];

sum = 0;

for (let i = 0; i<marks.length; i++ ){

&#x20;   sum += marks\[i];

};

console.log(sum);

let avg = (sum)/(marks.length);

console.log("Average marks are :- " + avg);



let price = \[200,500,565,870,670];

for (let i = 0; i < price.length; i++ ){

&#x20;   console.log(`value at index ${1} = ${price\[i]}m

&#x20;   price\[i] = price\[i] - price\[i]/10;

&#x20;   console.log(`after 10% of offer price at ${i} is ${marks\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[i]}`);

};



let comp = \["Bloomberg", "Microsoft", "Uber", "IBM", "Netflix"];

comp.shift();

console.log(comp);

comp.splice(1,1,"Ola");

console.log(comp);

comp.push("Amazon");

console.log(comp);



\--------------------------------------------------------------------------------------------------------------------------------

### 

### FUNCTIONS :-





function myFunction(a,b){

&#x20;   console.log(`the sum of ${a} and ${b} are ${a+b}`);

&#x20;   return a+b;

&#x20;   console.log("I love You");

}

myFunction(7,6);



//Arrow function

const arFunction = (a,b) => {

&#x20;   console.log(a\*b);

}

arFunction(3,4);



const vowel = (str) => {

&#x20;   count = 0;

&#x20;  for(let i=0; i< str.length; i++) {

&#x20;      if (str\[i] == "a" || str\[i] == "e" || str\[i] == "i" || str\[i] == "o" || str\[i] == "u" ){

&#x20;          count ++;

&#x20;      }

&#x20;  }

&#x20;   console.log(`Number of vowels are ${count}`);

}

vowel("rushikesh");



let arr = \[3,6,2,8,4,89];

arr.forEach(function myFunction(val){

&#x20;   console.log(val);

});

arr.forEach( (va) => {

&#x20;   console.log(va);

});



let arr = \[1,2,3,4,5,6,7,8];

arr.forEach(function square(val){

&#x20;   console.log(`The square of ${val} is ${val}`);

});

arr.forEach((val) => {

&#x20; console.log(val\*val);

});



let arr = \[2,3,5,7,9,13,4,6,8,10,12];

let newArr = arr.map((val) => {

&#x20;   return val\*val;

});

console.log(newArr);



let evArr = arr.filter((val) => {

&#x20;   return val % 2 == 0;

});

console.log(evArr);



let arr = \[1,2,3,4,5,6,7,8,9,0];

let newArr = arr.reduce((pre,curr) => {

&#x20;   return pre + curr;

});

console.log(newArr);



let marks = \[78,98,95,58,91,39];

let newArr = marks.filter((val) => {

&#x20;       return val > 90;

});

console.log(newArr);



let n = prompt("Enter size of arr :- ");

let arr = \[];

for (let i=1; i<=n; i++){

&#x20;   arr\[i-1] = i;

};

console.log(arr);

const sumArr = arr.reduce((pre,cur) => {

&#x20;   return pre + cur;

});

console.log(`The sum of arry is ${sumArr}`);

const mulArr = arr.reduce((pre,cur) => {

&#x20;   return pre \* cur;

});

console.log(`The multiplication of whole element os arry is ${mulArr}`);\*/



\-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



### **Dom manipulation :-**



#### **1.Accessing :-**



let id = document.getElementById("my id); //by id

console.dir(id);



let class = document.getElementsByClassName("my class"); //by class

console.dir(class);



let tag = document.getElementsByTagName("p"); //by tag

console.dir(tag);



let firstheading = document.querySelector("p") //document.querySelector("tag"/"#id"/".class")

console.dir(firstheading);



#### **2.Attributes :-**



###### **1.getAttribute(attr)** :-

&#x20; let a = document.querySelector(".box");

&#x20; console.log(a.getAttribute("id"/"class"/"tag"));





###### **2.setAttribute(attr,value)** :-

&#x20; let a = document.querySelector(".box");

&#x20; console.log(a.setAttribute("id"/"class"/"tag","name"));



#### **3.Style :-**

let div = document.querySelector("div");

div.style.backgroundColor = "red";



#### **4.Insert Elements :-**



###### let el = document.createElement("div"/"p"/"button"...);



* ###### node.append(el);

&#x20;   let newbutton = document.createElement('button');

&#x20;   newbutton.innerText = "click MC!!!";

&#x20;   let div = document.querySelector("div");

&#x20;   div.append(newbutton);



* ###### node.prepend(el);

&#x20;   let newbutton = document.createElement('button');

&#x20;   newbutton.innerText = "click MC!!!";

&#x20;   let div = document.querySelector("div");

&#x20;   div.prepend(newbutton);



* ###### node.before(el);

&#x20;   let newbutton = document.createElement('button');

&#x20;   newbutton.innerText = "click MC!!!";

&#x20;   let div = document.querySelector("div");

&#x20;   div.before(newbutton);



* ###### node.after(el);

&#x20;   let newbutton = document.createElement('button');

&#x20;   newbutton.innerText = "click MC!!!";

&#x20;   let div = document.querySelector("div");

&#x20;   div.after(newbutton);



* ###### node.remove();

&#x20;  let para = document.querySelector('p');

&#x20;  para.remove();



\---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 

### Event Handeling :-



###### node.event = () =>{

###### //task

###### }



##### Event Listeners :-

**node.addEventListener(event, callback) :-**

&#x20; *newButton.addEventListener("click", () =>{*

&#x20;   *console.log("Ho gaya");*

&#x20; *});*



node.removeEventListener(Event, callback)



node.event = (evt) => {

&#x20; console.log(evt);

&#x20; console.log(evt.type);



\-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Math.random();

// Math.floor(operation);
//document.querySelector("ul").children\[2]



\--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## jQuery :-



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> //add next line before js linking in HTML



**$("tag/.class/#id")** *//accessing element*

**$("tag").css("color : red")** *//changing property*

**$("tag").text("Gandu")** *//change text*

**$("tag").hide()** *// hide containt*

**$("tag").toggle()** *//hide and show containt alternatively*

**$("tag").fadeout()** 

**$("tag").fadein()**

**$("tag").fadeToggle()**

**$("tag").slideup()**

**$("tag").slidedown()**

**$("tag").slideToggle()**

**$("tag").HTML("<B>Gandu")** *//change text and proprty*

**$("tag").addClass("class")** *//adding new class*

**$("tag").addClass("class1 class2 class3......")** *//adding multiple class*

**$("tag").removeClass("class")** *//removing class*

**$("tag").hasClass("class")** *//return true or false*

**$("tag").attr("href/src/..","value you have to replace")**



**console.log($("tag").attr("href/src/.."))** *//show containt*

**console.log($("h1").css("property")** *//shows value of property*



**$("tag").click(function() {**

&#x20;  *//task*

**});** *//change when you clicked on that*



**$("tag"/document).keypress(function(event){**

&#x20;  **console.log(event.key);**

**});** *//detect which key is presssed*



**$("tag"/document).on("click"/"mouseover"/something, function(event){**

&#x20;  *//task you wanted*

**});**



**$("tag").click(function() {**

&#x20;  $("tag").animate({opacity:0.5;});  //takes numerical properties

**});**



**$("tag").click(function() {**

&#x20;  $("tag").slideup().slidedown().animate({opacity:0.5;});  //takes numerical properties

**});**



