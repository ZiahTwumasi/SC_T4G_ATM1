//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THEINITIAL BALANCE & SECURITY DATA
let userPin = "1234"; //pin stored for the user
let userBalance = 25000;


// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let enteredPin = prompt("Welcome to Student Bank ATM! Please enter your 4-digit pin:");

// 3. VALIDATE / CHECK THE PIN NUMBER
if(enteredPin === userPin){
   let userAmount = prompt(`PIN ACCEPTED! Your current balance is ${userBalance}. Enter amount to withdraw`);
   console.log(typeof(userAmount)); //string
   userAmount = Number(userAmount); //reassigning the user amount variable
   console.log(typeof(userAmount)); //Number
  //nested if statement
  if(userBalance >= userAmount){
    let newuserBalance = userBalance - userAmount;
    //userBalance = userBalance - userAmount;
    //userbalance -= userAmount;
    receiptTitle.innerText = "TRANSACTION SUCCESSFUL";
    receiptText.innerText = `Dispensing cash ... You withdrew ${userAmount}. 
    Your remaining balance is now ${userBalance-userAmount}`
   }else{
    receiptTitle.innerText = "INSUFFICIENT FUNDS";
    receiptText.innerText = `Transaction declined .. You cannot withdraw ${userAmount} because your account balance is ${userBalance}.`;
   }
} else{
   receiptTitle.innerText = "ACCESS DENIED";
   receiptText.innerText = "Invalid PIN CODE,please try again in an hour";
}

    
    
    
// 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong
    