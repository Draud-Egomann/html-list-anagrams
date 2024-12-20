const tableBody = document.getElementById("input-rows");

// Initial 5 Input fields
for (let i = 0; i < 5; i++) {
  addInputField();
}

function addInputField() {
  const row = document.createElement("tr");

  // cell for input field
  const inputCell = document.createElement("td");
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputCell.appendChild(inputField);

  // cell for output field
  const outputCell = document.createElement("td");
  outputCell.className = "anagrams";
  outputCell.textContent = "Noch keine Anagramme berechnet";

  row.appendChild(inputCell);
  row.appendChild(outputCell);
  tableBody.appendChild(row);
}

function generateAnagrams() {
  const rows = document.querySelectorAll("#input-rows tr");
  rows.forEach((row) => {
    const inputField = row.querySelector("input");
    const outputCell = row.querySelector(".anagrams");
    const inputText = inputField.value.trim();

    if (inputText) {
      const anagrams = getAnagrams(inputText);
      outputCell.textContent = anagrams.join(", ");
    } else {
      outputCell.textContent = "Bitte ein Wort eingeben";
    }
  });
}

function getAnagrams(word) {
  if (word.length <= 1) return [word];

  const anagrams = [];
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const remaining = word.slice(0, i) + word.slice(i + 1);
    const subAnagrams = getAnagrams(remaining);

    subAnagrams.forEach((subAnagram) => {
      anagrams.push(letter + subAnagram);
    });
  }
  
  return [...new Set(anagrams)]; // remove duplicates
}