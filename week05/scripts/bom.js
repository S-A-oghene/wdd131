const inputScripture = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const listScripture = document.querySelector("#list");

// Event listener for button click
addButton.addEventListener("click", function () {
  if (inputScripture.value.trim() !== "") {
    displayList(inputScripture.value);
    chaptersArray.push(inputScripture.value);
    setChapterList(chaptersArray);
    inputScripture.value = "";
    inputScripture.focus();
  } else {
    inputScripture.focus();
  }
});

// Event listener for pressing enter key
inputScripture.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    if (inputScripture.value.trim() !== "") {
      displayList(inputScripture.value);
      chaptersArray.push(inputScripture.value);
      setChapterList(chaptersArray);
      inputScripture.value = "";
      inputScripture.focus();
    } else {
      inputScripture.focus();
    }
  }
});

// Display a list item for each chapter
function displayList(item) {
  const listItem = document.createElement("li");
  listItem.textContent = item;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  deleteButton.addEventListener("click", function () {
    deleteChapter(item);
    listScripture.removeChild(listItem);
  });

  listItem.append(deleteButton);
  listScripture.appendChild(listItem);
}

// Set chapters list in local storage
function setChapterList(chapters) {
  localStorage.setItem("chapters", JSON.stringify(chapters));
}

// Get chapters list from local storage
function getChapterList() {
  return JSON.parse(localStorage.getItem("chapters")) || [];
}

// Delete a chapter from the list and update local storage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList(chaptersArray);
}

// Initialize chapters array from local storage or empty array
let chaptersArray = getChapterList() || [];
