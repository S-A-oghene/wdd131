const inputScripture = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const listScripture = document.querySelector("#list");
const message = document.querySelector("#message");

addButton.addEventListener('click', addScripture);

function addScripture() {

    if (inputScripture.value.trim() !== '') {

        const list = document.createElement('li');
        list.textContent = inputScripture.value;

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = "❌";

        buttonDelete.addEventListener('click', function () {
            listScripture.removeChild(list);
            inputScripture.focus();
        });

        list.append(buttonDelete);
        listScripture.append(list);
        

        inputScripture.value = '';
        inputScripture.focus();
    } else {
        inputScripture.focus();
    }
};

inputScripture.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        addScripture();
    }
});
