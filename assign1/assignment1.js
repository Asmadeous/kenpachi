const score = Number(window.prompt("Type a number", ""))//prompts user to input a number and store in score variable.
//use if and else if statement to check score variable and output a grade.
if (score > 79){//If score is above 79 output is A.
    console.log("A");
}else if(score > 60 && score < 79) {
    console.log("B");//If score is less than 79 and greater than 60 output is B
}else if (score > 49 && score < 59){
    console.log ("C");//If score is less than 59 and greater than 49 output is c
}else if (score > 40 && score < 49){
    console.log ("D");//If score is less than 49 and greater than 40 output is D
}else {console.log ("E");}//due to 40 - 100 being defined anything below that is 'E'.