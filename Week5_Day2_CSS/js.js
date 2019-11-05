
function mult(a, b) {
    return a * b;
}

function display(para) {
    console.log(para);
}


/* window.navigator
Create a function that prints out in the console the following information
the platform on which the browser is running
the information about the browser version
the company that created that browser
Each piece of information should be printed out in a new row.

Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is no Internet connection. */

function printInfoBrowser() {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.vendor);
}

function isOnline() {
    console.log(window.navigator.onLine);
}
function printScreen() {
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    console.log(window.screen.height);
    console.log(window.screen.width);
}

/* window.location
Write a function that prints out website’s url information in the console:
full url address
domain name
used protocol
parameters which are part of URL.

Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions */

function printWebSiteInfo() {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);
}

function reloadPage() {

    window.location.reload();

}

function redirectPage() {

    window.location.href = "https://mail.ru/";

}

/* window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.

Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the stored value.

Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data life cycle. */

function storeDataLocalStorage(a, b) {
    window.localStorage.setItem(a, b);
    console.log(a, b);
}

function getItemLocalStorage(c) {

    if (!window.localStorage.getItem(c)) {
        console.log("There is no data!");
    }
    console.log(window.localStorage.getItem(c));

}

function removeItemLocalStorage(d) {

    window.localStorage.removeItem(d);

}

function removeAllItems() {

    window.localStorage.clear();

}



function storeDataLocalStorage(a, b) {
    window.localStorage.setItem(a, b);
    console.log(a, b);
}

function getItemLocalStorage(c) {

    if (!window.localStorage.getItem(c)) {
        console.log("There is no data!");
    }
    console.log(window.localStorage.getItem(c));

}

function removeItemLocalStorage(d) {

    window.localStorage.removeItem(d);

}

function removeAllItems() {

    window.localStorage.clear();

}



/* window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back. */


function navigateOnePageBack() {
    window.history.back();
}


/* window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back. */


function navigateOnePageBack() {
    window.history.back();
}

function storeDataLocalStorage(a, b) {
    window.localStorage.setItem(a, b);
    console.log(a, b);
}

function getItemLocalStorage(c) {

    if (!window.localStorage.getItem(c)) {
        console.log("There is no data!");
    }
    console.log(window.localStorage.getItem(c));

}

function removeItemLocalStorage(d) {

    window.localStorage.removeItem(d);

}

function removeAllItems() {

    window.localStorage.clear();

}



/* window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back. */


function navigateOnePageBack() {
    window.history.back();
}


/* Window Methods
Create a function that shows the user a greeting message using alert
Then a question is presented to the user using prompt
When the user provides the answer, that answer is used in the confirm dialog
The format of the message in the dialog should be: "We will submit this answer now! " + the answer
If the user clicks OK, show alert with success message
If the user clicks Cancel, don't show anything */

function greetingMessage(message) {
    alert(message);
}

function promptUse() {
    var a = window.prompt("What's your name?");
    confirmDialog(a);
}


function confirmDialog(a) {
    var response = window.confirm("We will submit this answer now! " + a);
    if (response) {
        greetingMessage("Bravo!!!");
    }
}

greetingMessage("Cao, sta ima!!!");
promptUse();



