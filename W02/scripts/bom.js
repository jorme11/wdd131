const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
let el = document.getElementById("close-button");

if (el) {
    console.log(el.ariaLabel); // "Close"
    el.ariaLabel = "Close dialog";
    console.log(el.ariaLabel); // "Close dialog"
}

button.addEventListener('click', function () {
    // Check if the input value is not empty or just whitespace
    if (input.value.trim() !== '') {
        // Proceed with the remaining tasks here
        console.log("Input is received, please proceed");
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
    
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    } else {
        console.log("Please enter a value.");
        input.focus();  // Focus back on the input field if it's empty
    }
});

