const grid_section = document.querySelector('.grid-section');

const squares = [];

function createGrid(size){ //creates the grid
    grid_section.style.setProperty('--grid-rows', size);
    grid_section.style.setProperty('--grid-cols', size);
    for (let i = 0; i < (size*size); i++) {
        squares[i] = document.createElement('div');
        squares[i].classList.add('grid-squares');
        grid_section.appendChild(squares[i]);
    }
    createHoverEffect();
}

function clearGrid(){
    let square_size = squares.length;
    while (grid_section.firstChild) { //remove all the old squares
        grid_section.removeChild(grid_section.firstChild);
      }
}

function createHoverEffect(){
    const squares_divs = document.querySelectorAll('.grid-squares'); //hover effect
    squares_divs.forEach(function(event){
        event.addEventListener("mouseover", (a) => {
            a.target.style.cssText = 'background-color: #3FE075;';
        });
    });
}

createGrid(16); //first grid starts at 16 x 16



document.querySelectorAll('.buttons-section > button').forEach(function(e){
    e.addEventListener("click", (a) => {
        let temp_input = prompt("Select the new grid size you prefer (size x size), up to 100");
        while (temp_input > 100 || temp_input <= 0){
            temp_input = prompt("Please select a valid value. Select the new grid size you prefer (size x size), up to 100");
        }
        clearGrid();
        createGrid(temp_input);
    })
});
