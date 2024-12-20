# html-list-anagrams

## Description

This project is a simple HTML application that lists anagrams of a given word. It takes a user input and displays all possible anagrams that can be formed using the letters of the input word.

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/Draud-Egomann/html-list-anagrams.git
  ```
2. Navigate to the project directory:
  ```bash
  cd html-list-anagrams
  ```
3. Open `src/index.html` in your web browser.
3. OR you build a Docker image and run a container:
  ```bash
  docker build -t html-list-anagrams .
  docker run -d --name html-list-anagrams -p 8080:80 html-list-anagrams
  ``` 

## Usage

1. Enter a word in the input field.
2. Click the "Generate Anagrams" button.
3. View the list of anagrams displayed below the input field.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).