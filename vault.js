//Pseudocode: This program will solve for the combination to the vault.
    //Step 1: Create a String that will show a message to the user, giving the user the secret combination.
        //Step 2: Assign a variable to the first answer in the combination using the divison operator (20/2=10)
        //Assign a variable to the second answer in the combination using the subtraction operator (72-32=40)
        //Assign a variable to the third answer in the combination using the addition operation (23+16=39)
            //Step 3: Add comments to explain each step.
                //Step 4: Create a pop up box (using alert) to display the message and combination to the user.

                console.log('You have received this message because you have been chosen to open an important vault. Here is the secret combination:');


let num1=Number(prompt(`Input result of 20/2`));
let num2=Number(prompt(`Input result of 72-32`));
let num3=Number(prompt(`Input result of 23+16`));

//String for user message
    
if ((num1)===10 && num2 === 40 && num3===39)
document.write('the vault is open!');
else (document.write('Incorrect code, access denied.'));









