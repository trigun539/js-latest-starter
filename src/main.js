//Globall scope items
console.log("Welcome to the todo list APP");
var arrayList = ['Take out trash'];

//User interface for the program
intro();
function intro() {
    let keyPrompt;
    console.log('(A) To enter a todo object');
    console.log('(B) to check off a todo object');
    console.log('(C) To print out the list');
    console.log('(D) To exit out of the app');
    keyPrompt = prompt(`Please enter the corresponding tag`);

    switch (keyPrompt)
    {
        case 'A':
            console.log('You have chosen to enter an object');
            enterObject();
            break;
        case 'B':
            console.log('You have chosen to check off your object');
            deleteObject();
            break;
        case 'C':
            console.log('You have chosen to print out the list');
            printObjects();
            break;
        case 'D':
            console.log('Quit out of the todo app');
            quitApp();
            break;
        default:
            console.log("Please enter the correct values from the list");
            errorVal();
            break;
    }
}

function errorVal()
{
    console.log('You have entered a incorrect value into the system');
    intro();
}

//Function to enter a todo object into the list
function enterObject() {
    console.log('Please enter in the object into the List');
    let objectString = prompt("Enter the words in here");
    arrayList.push(objectString);
    intro();
}

//Function to quit out of the todo application
function quitApp() {
    console.log('Have a great day');
}

//Function to print out the list of todo objects
function printObjects() {
    console.log("We will know print out the list of objects from the list");
    for (let index in arrayList) {
        console.log(arrayList[index]);
    }
    intro();
}
//Function to delete an object from the list
function deleteObject() {
    console.log('This is where we can take out an object from the todo list');
    console.log('Which object you want to delete');

    let delObject = prompt('Enter an object to delete from the list');

    for (let index in arrayList) {
        if (delObject === arrayList[index]) {
            arrayList.splice(index);
        }
        else
        {
            console.log('The object was not found');
        }
    }
    intro();
}
