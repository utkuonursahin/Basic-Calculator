# Basic Calculator Project

## Project Description
This is a calculator project for my portfolio. It isn't a scientific calculator in fact it has some bugs but despite that it can be very useful for many simple operations at least which are not require mathematical operator precedence. I think it's a well designed nice application.
<img src="src\images\calculatorphoto.png" width="1000" height = "500">

## Techniques That I Used To Build This Application
### First of all let's see how does it work : 
-- > 
<img src="src\images\calcdiagram.png">

In this project I used SASS and tried to implement MVC Architecture with modern ES6 modules. For bundling I used Parcel version one because version two has some bugs. I believe I nicely separate functions and variables into separate files.

## Problems & Cons
It's not much sensitive. **It doesn't have a mathematical operator precedence**.
It can't calculate **36 / -9** or **- 2 - 2 + 4** or **4 * - 4** or something like these. Because it simply assumes the **last sign** on the input string as the main operation sign then split entire string by that main sign for determining numbers. Then it does the operation according to that sign and numbers. There is no mathematical operator precedence at all. However you can do operations like **-36 / 9** or **4 - 2 - 2** or **-4 * 4**. These ones work because you simply didn't put different signs one after another. So if you want to doing operations with opposite sign numbers you can do that by following format **'Negative number' + 'Operator' + 'Positive Number'**. Unfortunately the other way around is simply not possible. You can't have negative numbers on the both sides of the operator except one situation. You can calculate **-2-2--4** or something like that because again you didn't put different signs one after another. So the main rule is 'do not put different signs one after another'.

#### Author : Utku Onur Sahin
##### Date : 15.07.2021
