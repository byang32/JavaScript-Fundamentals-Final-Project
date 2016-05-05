/*This is javascript code for the ATM program coded by Bee Yang. This program is will
prompt user selection and excute a check balance, deposit withdrawal or exit the program. 
If deposit or withdrawl is selected balance will update based on the selection.*/
  function atm(){
   
   //Variable declarations 
    var amount = 0;
    var exit;
    var looping = true;
    var userSelection;
    var currentBalance = 1000;
    var balanceDifference = 0;


   //While loop prompts user selection by entering a number
   /*1. check balance, 2. deposit 3. withdrawal, 4. exit loop*/
   
    while (looping === true) {
       userSelection = prompt("Enter a Number:\n 1.Check Balance\n 2.Deposit\n 3.Withdrawal\n 4.Exit");
  
  //Switch statement used to identify which transaction is being prompt    
       switch(Number(userSelection)){
         case 1:
           checkBalance();
           break;
         case 2:
           deposit();
           break;
         case 3:
           withdrawalFunds();
           break;
         case 4:
           stopLooping();
           break;
         default:
           alert("Not a valid selection");  
       }
}
  // functions for prompting user, calculating new balance and alerts
  function checkBalance() {
    alert("Your current balance is: " + currentBalance + "\n");
  }
  
  function deposit() {
    amount = prompt ("How much would you like to deposit");
    amount = Number(amount);
    currentBalance+= amount;
    alert("Deposit Amount: " + amount + "\n");
  }
  
  function withdrawalFunds() {
    amount = prompt ("How much would you like to withdrawal");
    amount = Number(amount);
    currentBalance-= amount;
    alert("Withdrawal Amount: " + amount + "\n");     
  }
  
  function stopLooping() {
    looping = false;
    alert("Thank you come again!");
  }
}
 atm();