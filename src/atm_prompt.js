//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THEINITIAL BALANCE & SECURITY DATA
let userBalance = 25000;
let userPin = "1234";


// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let enteredPin = prompt("Welcome! Please enter your 4-digit pin: ");

// 3. VALIDATE / CHECK THE PIN NUMBER

if (enteredPin === userPin) {
     let userAmount = prompt(`PIN ACCEPTED! Your current balance is ${userBalance}. Enter amount to withdraw: `);
    console.log(typeof userAmount); // string
    userAmount = Number(userAmount); // reassigning the userAmount variable
    console.log(typeof userAmount); // number
    if (userBalance >= userAmount) {
        let newUserBalance = userBalance - userAmount
        "TRANSACTION SUCCESSFUL"
        receiptText.innerText = `Dispensing cash... You withdrew ${userAmount}.
        Your remaining balance is now ${newUserBalance}.`;
    } else {
        receiptText.innerText = `Transaction Declined... You cannot withdraw ${userAmount} because your account balance is ${userBalance}.`;
    }
} else {
    receiptText.innerText = "ACCESS DENIED";
    receiptText.innerText = `Invalid security PIN code entered. Account balance is hidden.`;
}


   

   
    
    
    
    // 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong