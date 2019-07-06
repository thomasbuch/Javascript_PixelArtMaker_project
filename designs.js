// Select and define variables to work with

let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

// define function to make grid

function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
      let row = table.insertRow(i); // inserts new row
      for (let j = 0; j < width; j++) {
          let cell = row.insertCell(j); // inserts new column
          cell.addEventListener('click', () => { // add event listener to cell to change color when clicked
              cell.style.backgroundColor = color.value;
          });
      };
  };
};

// Call function to make grid if size picker is clicked
// sizePicker selected to scale grid immediately instead of waiting to press submit button

makeGrid(height, width);
  sizePicker.addEventListener('click', (e) => { // Listen for click
      e.preventDefault(); // surpress page reload, which would reset user input
      let height = document.getElementById('inputHeight').value; // extract user input
      let width = document.getElementById('inputWidth').value;
      table.firstElementChild.remove(); // ensures grid scales in square form
      makeGrid(height, width); // calls function again now that new height and width dimensions are set
  });
