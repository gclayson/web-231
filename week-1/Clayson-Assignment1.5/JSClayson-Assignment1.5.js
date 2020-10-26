/*
Title: Clayson-Assignment 1.5 Primitive Types
Author: George Clayson
Date: 25 October 2020
Modified By: George Clayson
Description: This program is to show how to use types, value and variables in Javascript
*/
// Start program
/*
   Expected Output
   First Name
   Last Name
   Address
   Pay Rate
   Hire Date
*/
//  Declaration of Variables for Values, variables, functions and types Exercise
//First Record
  var first_name = "George"
  var last_name = "Clayson"
  var address = "646 North Street Anaheim, Ca 92806"
  var num =18.77
  var n = num.toFixed(1);
  let date = new Date
  let now = date.toLocaleDateString()
  let nowV2 = date.toLocaleDateString('en-US') 
 // Second Record
  var first_name1 = "Mark"
  var last_name1 = "Deluca"
  var address1 = "311 South Street Anaheim, Ca 92806"
  var num =19.55
  var n1 = num.toFixed(1);
  // Third Record 
  var first_name2 = "Jerry"
  var last_name2 = "Hall"
  var address2 = "2460 East Street Anaheim, Ca 92806"
  var num =22.35
  var n2 = num.toFixed(1);
//  Output
    console.log("First Name:  "+  first_name)
    console.log("Last Name:   "+  last_name)
    console.log("Address:     "+  address)
    console.log("Pay Rate:    $"+  n)
    console.log ("Hire Date:  --"+nowV2+"--") 
    console.log("")
    console.log("First Name:  "+  first_name1)
    console.log("Last Name:   "+  last_name1)
    console.log("Address:     "+  address1)
    console.log("Pay Rate:    $"+  n1)
    console.log ("Hire Date:  --"+nowV2+"--") 
    console.log("") 
    console.log("First Name:  "+  first_name2)
    console.log("Last Name:   "+  last_name2)
    console.log("Address:     "+  address2)
    console.log("Pay Rate:    $"+  n2)
    console.log ("Hire Date:  --"+nowV2+"--")




//  End program