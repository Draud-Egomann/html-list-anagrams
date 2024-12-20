const tableBody = document.getElementById("input-rows");

// load dictionary from "file"
const dictionary = ["rat", "art", "tar", "star", "start", "tars"];

// Initial 5 Input fields
for (let i = 0; i < 5; i++) {
  addInputField();
}

function addInputField() {
  const row = document.createElement("tr");

  const inputCell = document.createElement("td");
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputCell.appendChild(inputField);

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
      const anagrams = getValidAnagrams(inputText);
      outputCell.textContent = anagrams.length > 0 
        ? anagrams.join(", ") 
        : "Keine gültigen Anagramme gefunden";
    } else {
      outputCell.textContent = "Bitte ein Wort eingeben";
    }
  });
}

function getValidAnagrams(word) {
  const permutations = getPermutations(word);
  const uniquePermutations = [...new Set(permutations)]; // remove duplicates
  return uniquePermutations.filter((anagram) => dictionary.includes(anagram));
}

function getPermutations(word) {
  if (word.length <= 1) return [word];

  const permutations = [];
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const remaining = word.slice(0, i) + word.slice(i + 1);
    const subPermutations = getPermutations(remaining);

    subPermutations.forEach((sub) => permutations.push(letter + sub));
  }
  return permutations;
}