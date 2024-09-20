/*1.We can add as many console statements as we want.
Write a program which does the following

Add a console.log() statement and output the sum of 3 + 4
Add another console.log() statement and output the sum of 2 + 1.
Note - Notice that the output is printed on separate lines. There are a couple of other ways also to achieve the same in JavaScript.
solution:
console.log(3+4);
console.log(2+1);
*/
/* 2Outputs on the same line
We can print multiple outputs on the same line, using the commas inside console.log() function.

Write a program which does the following

Output: 3 + 4
Output: 2 + 1 on the same line

solution:
console.log(3+4,2+1);*/
/*
3 Area & Perimeter of Rectangle
Write a program for the following problem

Let’s consider a rectangle of sides 11 and 13.
Output the following on separate lines:
Area of the rectangle having sides as 11 and 13
Perimeter of the rectangle having sides as 11 and 13
For any rectangle, the formula for area is length * breadth.
The formula for perimeter is 2 * (length + breadth)

solution:

console.log( 11*13)        // Area of the rectangle
console.log(2 * (11 +13))    // Perimeter of the rectangle
*/
/*Variables in JS
A variable is like a labelled box where you can store data. Imagine you have a box labelled "age" and you put the number 25 in it. In JavaScript, you would do this by writing var age = 25; (one of the ways, we'll learn about rest soon). This means you're storing the number 25 in the variable named age.

Here's the cool part: whenever you use age in your code, JavaScript will remember it is 25. For example, if you write console.log(age), JavaScript will show 25.

Task
Create a variable in the editor named age and assign the value 25 to it.
Print the value of age variable using a console statement.
Notice how we don't use " " (double quotes) when printing variables.

solution:
var age =25;
console.log(age);*/
/*Declaring a variable
To declare a variable, you use the var, let, or const keyword, followed by the variable name. Here's a short concept with examples:

Variable Declaration in JavaScript:
Using var (historical, less preferred):

The var keyword declares a variable globally or locally to an entire function, regardless of block scope.
var age = 25;
console.log(age); // Output: 25
Using let (block-scoped):

The let keyword declares a block-scoped variable, which means it is only accessible within the block or statement where it is defined.
let name = "John";
console.log(name); // Output: John
Using const (block-scoped, constant):

The const keyword declares a block-scoped variable that cannot be reassigned. It is a constant once assigned.
const PI = 3.14;
console.log(PI); // Output: 3.14
Notes:
Variable Naming:

Variable names should be meaningful and follow camelCase convention (e.g., myVariable, totalAmount).
Dynamic Typing:

JavaScript is a dynamically-typed language, so you don't need to explicitly mention the type of the variable; it is determined at runtime.
Initializing Variables:

You can declare and initialize a variable in a single step.
let greeting = "Hello, World!";
Task
Write a program which does the following

There is a variable named number having the value of 20 in the editor.
Use the console statement to output the value of (number - 1).

solution:
var number = 20;
console.log(20-1);

/*Properties of Variables
We learned that a variable is a labelled box which can store many different types of values. You can also change the value of a variable in your code.

For example

var age = 25;
console.log(age);

// Update age
age = 26;
console.log(age);
The above code will output

25
26
We are going to use variables all the time in the coming lessons. So let's learn a few more stuff about them.

Rules for variable names:

A variable name can only contain alphabets, numbers and underscores (ie. A-Z, a-z, 0-9, and _).
A variable name cannot start with a number.
A variable name cannot have spaces in between.
Variable names are case-sensitive (age, Age and AGE are three different variables).
Note
Reassignment (for let and var):

Variables declared with let and var can be reassigned.
let count = 10;
count = count + 1; // Reassignment is allowed
Immutability (for const):

Variables declared with const cannot be reassigned.
const maxAttempts = 3;
// maxAttempts = 4; // Error: Assignment to a constant variable
Be sure to follow these rules when creating a variable so as not to get errors.

Task
Some code is written in the editor to print "Code Chef". However, the variable name(s) are not following the rule. Can you spot the mistake and fix it?

solution:

var first_name = "Code";
var last_name = "Chef";
console.log(first_name, last_name);*/
/*
Addition of Variables
Write a program which does the following

Declare two variables
Assign the value



solution:
var a=23;
var b=20;
console.log(a+b); */
/*Area of Rectangle
Write a program which does the following

Find out and display the area of a rectangle of sides 45 and 76 respectively.
Declare variables length, width and area and assign the relevant values to them
Output the value of variable area

solution:
var length=45;
 var width=76;
 var area=length*width;
 console.log(area); */
/*Float datatype
In JS, you don't need to explicitly specify the type of a variable during declaration. The type is inferred based on the kind of value assigned to the variable.

For example if you put decimal values in a variable, the type of variable becomes float.

const pi = 3.14;
Task
Write a program which does the following:

Find the area of a circle whose radius is 8.9. Take pi = 3.14
Declare variables radius , pi and area and assign the relevant values to them
Output the area, you don't need to output any other text.
Note: Formula for the area of a circle is

pi×radius×radius
solution:
const pi=3.14;
const radius=8.9;
var area=3.14*8.9*8.9;

console.log(a);*/
/*
String Datatype
The string type is used to store a sequence of characters, i.e. text.
String values can be surrounded by either double quotes or single quotes. JS does not care about whether you use single or double quotes.

For example, both the below codes do the same thing: Declare a variable with value I am using CodeChef.

var sentence1 = "I am using CodeChef";
var sentence2 = 'I am using CodeChef';
Task
Write a program which does the following

Declare two variables a and b
Assign Learning to a and is fun! to b
Display the sentence "Learning is fun!" using variables a and b in a single line
solution:

let a:string="Learing";
let b:string=" is fun!";
console.log(a+ b);
*/
/*Creating a String
JavaScript is a versatile programming language, and one of its fundamental data types is the string. A string in JavaScript is a sequence of characters enclosed within single (' '), double (" "), or backticks (`) quotes. Whether you're manipulating text, building user interfaces, or performing data validation, understanding JavaScript strings is crucial. In this section, we'll delve into the basics and explore some common operations and methods related to strings.

For example:

var singleQuotedString = 'Hello, World!';
var doubleQuotedString = "JavaScript is fun!";
var backticksString = `You can use backticks too!`;
Write a program which does the following

Create a string named fruit and assign the value Apple to it.
Output fruit to the console.
 solution:
 var fruit="Apple";
console.log(fruit);
*/
/*Concatenation
The '+' sign can be used between strings to add them together to make a new string.
This is called concatenation.
For eg -

var x = "Good";
var y = "Work";
console.log(x + y);   //output: GoodWork
Note: You can add spaces between words by using an empty " " with a space inside or by providing a space at the end of a word.
For eg -

var x = "Good";
var y = "Work";
console.log(x + " " + y);   // output: Good Work
Task
Write a program which does the following

Declare two variables x and y
Assign the values Hello to variable x and World to variable y.
Output x and y to the console. Don't forget to add a space in between them.
Your output will be Hello World

solution:
var x="Hello";
var y="World";
console.log(x+" "+y);
*/
/*

let bgColor: [number,number?,number?], headerColor: [number, number, number?, number?];
bgColor = [0,3,4];
headerColor = [0, 255];*/
/*let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];
console.log(skills.filter((skills,i)=>skills.indexOf('Problem Solving')!=0));
console.log(skills);*/
/*
Strings and Integers
In JavaScript, the + operator is overloaded, meaning it can be used for different operations depending on the types of the operands. When one or both operands are strings, the + operator is used for string concatenation. If any of the operands is not a string, JavaScript will attempt to convert it to a string and then perform concatenation.

Here are examples illustrating the behaviour of the + operator with strings and other types:

String Concatenation:

var str1 = "Hello";
var str2 = "World";
var result = str1 + " " + str2;
console.log(result); // Output: Hello World
String and Number:

var str = "Hello";
var num = 42;
var result = str + num;
console.log(result); // Output: Hello42
The number 42 is implicitly converted to a string and then concatenated with the string.

String and Boolean:

var str = "Hello";
var bool = true;
var result = str + bool;
console.log(result); // Output: Hellotrue
The boolean value true is implicitly converted to the string "true" and then concatenated with the original string.

It's important to note that when using the + operator with non-string types, JavaScript will perform implicit type conversions. If you want to ensure a specific type or handle type conversions explicitly, you might consider using methods like String(), Number(), or toString().

Task
Given two integers x and y.
Print their concatenation on the console.

solution:
var x = 10;
var y = 12;
console.log(x+""+y);
*/
/*String length
We can use the length property to get the length of a string.
For eg.

var greeting = "hello";
console.log(greeting.length);
// output is 5
Task
Write a program which does the following

Create a variable txt and assign it the text NumeroTres
Use the length property to output to the console the number of characters in txt
solution:
var a="Numerotres";
console.log(a.length);
*/
/*
Outputting Characters from a String
In a string, characters are indexed from left to right. For instance, in a string named hello the first character is at index 0, while the last is at index str.length-1 (i.e., at the 4th index).

We use the concept of indexing which means every character in a string corresponds to a number called the index number

               0 1 2 3 4 5 6 7  - index number
     for eg - "C o d e C h e f"
Following are some of the ways we can access a specific character in a string in javascript:

using square brackets notation [ ]
var str = 'hello';
console.log(str[1]); // e
When we try to access a character whose index is equal to or larger than the string length, the square brackets [] return undefined.

var str = 'string';
console.log(str[999]); // undefined
using charAt() method This method will return the character at a specified index in a string. The method takes in a parameter, an integer that represents the index of the character to be returned. The syntax for usage is string.charAt(index).
var str = 'string';
console.log(str.charAt(0)); // s
//If no character is found, the method returns an empty string.
var str = 'string';
console.log(str.charAt(999)); // ''
Note

Indexing always starts from 0 when going left to right.
So the first character of a string str is s[0] , the second is s[1] , and so on.
Task
Write a program which does the following

Create a string variable word and assign the text Programming to it
Print the characters o and r from the string word in separate lines using the syntax defined above

solution:
var str="Programming";
console.log(str.charAt(2),str.charAt(4));
*/
/*
Changing Characters in a String
In JavaScript, strings are immutable, which means you cannot directly update or change a character in a string. For example

var name = "Chaf";
name[2] = 'e'; // nothing changes.
console.log(name); // Chaf
If you run the above program, you will still get the same string Chaf.

However, you can create a new string with the desired changes.
Here's an example of how you can replace the character

var name = "Chaf"
var newName = name.replace('a', 'e');
console.log(newName); // Chef
Note: If there are multiple occurrences of the substring you're trying to replace within the original string, the replace() method in JavaScript by default only replaces the first occurrence of the substring. For eg:

var name = "Chafaf";
var newName = name.replace('a', 'e');
console.log(newName); // Chefaf
Task
Write a program which does the following

Given a string variable word which has value "Ocygen".
You now want to fix the typo in the given string.
Use the syntax explained above to replace 'c' with 'x' in a new variable newWord
Output the updated newWord to console

 ​
solution:
var word = "Ocygen";
var newWord=word.replace('c', 'x');
console.log(newWord)

*/
/*String slicing
String slicing in JavaScript involves extracting a portion of a string by specifying the starting and ending indices.

You can achieve this using the slice() method. Here are a few examples:

slice() method:
var originalString = "Hello, World!";
var slicedString = originalString.slice(7, 12);

console.log(slicedString); // World
Omitting the End Index:
If you omit the end index, the slice will go until the end of the string:

let originalString = "Hello, World!";
let slicedString = originalString.slice(7);

console.log(slicedString); // World!
In this case, it extracts from index 7 to the end of the string.

Negative Indices:
You can use negative indices to count from the end of the string:

let originalString = "Hello, World!";
let slicedString = originalString.slice(-6, -1);

console.log(slicedString); // World
This extracts from the 6th character from the end to the 1st character from the end.

Task
Declare a string variable str
Assign the value String to it
Use string slicing to print ring to the console.

solution:
var org="String";
var ne=org.slice(2,6);
console.log(ne);

*/
/*If & Else Statements
We use conditions in code for decision-making and controlling the flow of a program.

The if-else statement in JavaScript is used to make decisions in your code. It allows your program to execute different blocks of code depending on whether a given condition is true or false.

Here's a simple explanation:

if (condition) {
  // This block of code runs if the condition is true
} else {
  // This block of code runs if the condition is false
}
Here's how it works:

The if keyword is followed by a set of parentheses ( ). Inside the parentheses, you write a condition (something that can be either true or false).

If the condition inside the parentheses is true, the code inside the first set of curly braces { } (after if) is executed.

If the condition is false, the code inside the second set of curly braces { } (after else) is executed.

Here's an example with actual code:

let age = 18;

if (age >= 13) {
  console.log("You're a teenager!");
} else {
  console.log("Hello baby!");
}
In this example, if the age variable is 13 or older, it will print "You're a teenager!" Otherwise, it will print "Hello baby!" The condition age >= 13 is true or false based on whether the value of age is greater than or equal to 13.

Complete the given program which is supposed to do the following:

Let's think of a real-life example where we need to find out if a person is old enough to vote.
Compare the age (25) with the voting age limit, which is set to 18.
It should output the following:
"Old enough to vote!" if age is greater than or equal to votingAge
"Not old enough to vote." if age is lesser than votingAge

solution:
var age = 25;
var votingAge = 18;

if(age>=votingAge) {
  console.log("Old enough to vote!");
}
else {
  console.log("Not old enough to vote.");
}
  */
/*Indentation
JavaScript operators are symbols or keywords that perform operations on variables and values. We'll talk more about it in later modules, for now, let's have a look at some of the prominent comparison operators which are used extensively in the if( ) condition:

Comparison Operators
== (equality): Checks if two values are equal.
!= (inequality): Checks if two values are not equal.
=== (strict equality): Checks if two values are equal without type conversion.
!== (strict inequality): Checks if two values are not equal without type conversion.
> (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to): Compare numeric values.
//Some examples:
var adultAge = 18;
var age = 11;
if(age >= adultAge){ // condition is false
  console.log("Adult");
} else {
  console.log("Minor"); // Minor will be printed
}


if (10 === '10') {  // condition is false (strict equality)
  console.log("Types are equal");
} else{
  console.log("Types are not equal"); // this would be the output
}


if(10 == '10'){  // true
  console.log("Values are equal"); // this would be the output
} else {
  console.log("Not equal");
}

If notice the last example, the the condition (10 == '10) is true. The == operator performs type coercion if the operands are of different types. Meaning, it compares values after attempting to convert them to a common type. In this example, JavaScript converts the string to a number before making the comparison.

Task
Write a program to check whether the length of the string CodeChef is less than 5 or greater.

If the length is greater than 5 print Long String
If it's less than or equal to 5 print Short String

solution:

var str="CodeChef";
var r=str.length;
if(r>5){
    console.log("Long String");
}
else{
    console.log("Short String");
}
    */
/*
If Statement
The else statement is optional.

Here is an example

var grade = 95;
if(grade >= 90){
    console.log("You got an A");
}

// Output:
// You got an A
In the above program, if the condition is True, then the console statement is executed.

Task
Complete the function in the code editor to do the following:

Takes two integer parameters.
Outputs "Coding is Fun" to the console if the first integer is greater than the second.

solution:
function check(){
    var one=25;
    var two=20;
    if(one>two){
        return "Coding is Fun";
    }
    
 
}
console.log(check());

*/
/*Elif Statement
In the cases, where you have to check for multiple conditions and run some code based on each, you have to use else if( ).

The else if( ) keyword means "if the previous conditions were not true, then try this condition".

The following example illustrates the usage of else if( ).

grade = 85;

if (grade >= 90) {
    console.log("You got an A");
} else if(grade >= 80) {
    console.log("You got a B");
} else {
    console.log("You got a C");
}

// Output:
// You got a B
The code above works as follows

If grade >= 90, then it will output: You got an A
If the grade is between 80 and 90 - it will output: You got a B
If the grade is less than 80 - it will output: You got a C
Task
Complete the function in the editor that performs the following actions:

Accepts two integer parameters, b and r.
Print "Rob scored higher marks than Bob", if r is greater than b
Print "Bob & Rob both scored the same", if both b and r are equal
Print "Bob scored higher marks than Rob", otherwise.


solution:
function solve(b,r) {
    
    if(r<b){
        console.log("Rob scored higher marks than Bob");
    }else if( r==b)
    {
        console.log("Bob & Rob both scored the same");
    }else{
        console.log("Bob scored higher marks than Rob");
    }
 
}
*/
/*Else Statement
As evident from previous example, the else keyword includes anything which isn't included in the previous if or else if conditions.

Task
Some code is written in the editor.

Two variables ram and karan are defined.
Output based on these conditions:
If ram is greater than karan, output "Ram is heavier than Karan"
If ram is less than karan, output "Karan is heavier than Ram"
Otherwise, output "Ram & Karan have the same weight!"
Your task is to complete the blanks in the code.

solution:
var ram = 74;
var karan = 82;

if (ram>karan) {
    console.log("Ram is heavier than Karan");
} else if(ram<karan) {
    console.log("Karan is heavier than Ram");
} else {
    console.log("Ram & Karan have the same weight!");
}
    
ram = 78
karan = 78

if (ram >karan){
    console.log("Ram is heavier than Karan");
} else if(ram <karan) {
    print("Karan is heavier than Ram");
} else {
    console.log("Ram & Karan have the same weight!");
}

*/
/*
Conditions in if statements
You are given a score that the player has achieved in a 100 point game.

Print some text based on below conditions:

If the score is 100, print "Perfect score"
If the score is less than 100, but greater or equal to 80, print "Almost perfect score"
If the score is less than 80, print "Nice try

 solution:

 function printScore(score) {
    // Complete this function
    if(score==100){
        console.log("Perfect score");
    }else if(score<100 && score >=80){
        console.log("Almost perfect score");
    }else{
        console.log("Nice try");
    }

}
*/
/*

Compilation error continued
How do you identify a 'Reference/Compilation error'?

When you run your code and there is an error, you will typically see it in the output.

For example, if you run the below code, you will get a syntax error.

var name = "Bob";
if (name == Bob) {
    consoloe.log(Name);
}
Error

Uncaught ReferenceError: Bob is not defined
    at <anonymous>:2:13
(anonymous) @ VM1609:2

The error description says that there is an error on line 2. The exact error is explained in the first line of the description: Uncaught ReferenceError: Bob is not defined.

It is clearly saying that we're comparing the string variable name which has the string "Bob" with another variable named Bob instead of comparing it with the string "Bob". The error goes away after adding " (quotes) around Bob in the if statement.

Task
Submit the code present in IDE as it is.
Read the error statement and understand what needs to be fixed.
Fix the code so that it correctly outputs: "Expensive".

solution:
var price = 105;
if(price > 100) {
  console.log("Expensive");
}
else {
  console.log("Affordable");
}

*/
/*Runtime error
We saw two different syntax errors in the last lessons. There are many different types of syntax errors, but they are generally easiest to debug as the error description clearly explains what needs to be fixed.

Let us now learn about Runtime errors

Runtime error
A runtime error occurs when your syntax is correct but the compiler (or interpreter in case of JavaScript), is still not able to run the code due to an error.

Example:

const pi = 3.14;
pi = 3.14159; //TypeError (one of the runtime errors)
If you run the above code, you will get this error.

Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:2:4
There is an error in line 2 because we are trying to re-assign a new value to a constant variable which is not possible.

Task
There is a buggy function present in IDE, which takes two numbers as parameters.
If you run the code, based on the input number it should store either Equal or Not Equal, in the string variable isEqual then print this value of the variable.
Try to fix it.


solution:

function solve(num1, num2) {
  var isEqual = "Equal";
  if(num1 === num2) {
     isEqual = "Equal";
  } else {
     isEqual = "Not Equal";
  }
  console.log(isEqual);
}

*/
/*
Incorrect Index
Strings in JavaScript have zero-based indexing. This means that the first index is 0. It is easy to forget that and use one-based indexing instead. This incorrect indexing leads to another logical error.

Program to print the last character of the string

var str = "Hello";
var len = str.length;  // string's length

console.log(str[len - 1]);   // Correct way to access the n-th character
console.log(str[n]); // incorrect way. It shall print undefined which we'll talk about later.
Task
Given a function which is supposed to print 1st, 4th and 6th character of a string
Complete its logic.

solurion:
function printCharacters(str) {
   console.log(str[0] + str[3] + str[5]);
}

function solve(str) {
   printCharacters(str);
}
*/
/*Creating Arrays
Arrays are a fundamental data structure in JavaScript that allows you to store and organize collections of data. Whether you're dealing with a list of numbers, strings, or more complex objects, arrays provide a convenient way to manage and manipulate your data.

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

In JS, an array is denoted by square brackets [ ]

It can hold elements of different data types, such as numbers, strings, or even other lists.
Arrays are mutable, which means you can modify them by adding, removing, or changing elements.
Consider the array 'fruits' and 'numbers' below

var fruits = ["apple", "banana", "orange", "grape"];

var numbers = [20, 10, 0, -5];
Task
Write a program which does the following

Create an Array of the first 5 positive integers - name it integers
Once the array is defined - output "Done" to the console.

solution:
var integers=['1','2','3','5'];
console.log("Done");
*/
/*
Index & printing specific elements of an Array
You access an array element by referring to the index number inside square brackets [ ].
Similar to what we saw in strings, array items are indexed and you can access them by referring to their index number:

            0      1      2      - index numbers
         ["red","Green","Blue"]  - the array
Note - Indexing always starts from 0 when going left to right.

Write a program which does the following

Output the 3rd element from the given array to the console.
solution:


var nums = [1, 2, 3, 4, 5];
console.log(nums[2]);
*/
/*Changing the elements of an Array
You can also modify elements in an array by assigning a new value to a specific index.

var fruits = ["apple", "banana", "orange", "grape"]
fruits[1] = "kiwi"
console.log(fruits);  // Output: ["apple", "kiwi", "orange", "grape"]
Task
Write a program which does the following.

The 3rd month in the given array is incorrect.
Update the 3rd month in the given array with the correct one - "Mar".
Once the 3rd array element is updated, output the entire array to the console.

solution:

var months = ["Jan", "Feb", "Dec", "Apr"];
months[2]="Mar";
console.log(months);

*/
//18 september
/*Displaying elements
Write a program which does the following

Create a string array for the following values "Monday", "Tuesday", "Wednesday", and "Thursday".
Name the list as per your choice
Output the last two elements of the array on separate lines

solution:
var a=["Monday","Tuesday","Wednesday","thursday"];
console.log(a[a.length - 2]);
console.log(a[a.length - 1]);

*/
/*
Displaying the count of elements
Same as what we saw in string, to get the length of an array or the number of elements present in an array, you can use the length property of the array:\

For e.g.

var myNumbers = [10, 20, 30, 40, 50];
console.log(myNumbers.length);      // will output 5
Write a program which does the following

Create an int array containing the elements - 10, 20, 30, 40, 50, 60
Compile and output to the console the accurate count of the number of integer elements in the given array.

solution:


var a=[10,20,30,40,50,60];
console.log(a.length);
*/
/*
Slicing a list
Similar to what we saw in slicing of strings, you can slice arrays as well.
You can specify a range of consecutive indexes by specifying where to start and where to end the range in this manner - console.log(arr.slice(1, 4));.
This will print elements from index number 1 to 3.

Note:

Indexing starts from 0.
Item on index no 4 will not be printed as the end index is excluded.
For eg -

arr = ["Juke", "King", "Hearts", "68", "Kite"];
console.log(arr.slice(1, 4));
The output will be

["King", "Hearts", "68"]
Write a program which does the following:

Create a list months of the first 7 months in a year.
Output the following to the console on separate lines:
Print the list containing first 6 months of the year.
Print the list containing 2nd to 5th month of the year - both 2nd and 5th included

solution:

var months = ["January", "February", "March", "April", "May", "June", "July"];
console.log(months.slice(0,6));
console.log(months.slice(1,5));
*/
/*let scores : (string | number)[];
scores = [5, 'rtygf', 'Software Design', 4];
console.log(scores);

let skill: [string, number];
skill = ['Programming', 5];
console.log(skill);*/
/*
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
};

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
console.log(isItSummer(6));


 var messsage="wsds";
function log(string:string): string{
  return string;

}
console.log(log(messsage));

var mes="rer";
function mes(goat): void {
  console.log(goat);
}
mes();

 var messsage="none";
function nine(message): void {
  console.log(messsage);
}nine(message);*/
/*
var message=12345;
function log(message): void {
  console.log(message);
}
log(message);*/
/*
let result: any;

result = 1;
console.log(result);

result = 'Hello';
console.log(result);

result = [1, 2, 3];
const total = result.reduce((a: number, b: number) => a + b, 0);
console.log(total);

function countAlphabets(input) {
    const count = {};

    // Loop through each character in the string
    for (let char of input.toLowerCase()) {
        // Check if the character is an alphabet
        if (char >= 'a' && char <= 'z') {
            count[char] = (count[char] || 0) + 1; // Count occurrences
        }
    }

    // Find the alphabet with the maximum occurrence
    let maxChar = '';
    let maxCount = 0;

    for (let char in count) {
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }

    console.log("Occurrences of each alphabet:", count);
    console.log(`The alphabet with maximum occurrence is '${maxChar}' with ${maxCount} occurrences.`);
}

// Example usage:
countAlphabets("Hello World!");



*/
/*
Input a string of alphabets. Find out the number of occurrence of all alphabets in that string.
Find out the alphabet with maximum occurrence.
*/
var a = "helloworld";
var count = 0;
var char;
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
        if (a[i] == a[j]) {
            count += 1;
        }
        else {
            count = 1;
        }
    }
}
console.log(count);
