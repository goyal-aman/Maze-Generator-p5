var rows, cols;
var cell_width = 20;
var all_cells = [];
var current_cell;

function setup() {
	createCanvas(windowWidth, windowHeight);
	console.log('width', width, 'height', height)
	rows = floor(height / cell_width);
	cols = floor(width / cell_width);

	// creating grid
	for (var j = 0; j < rows; j++) {
		var col = [];
		for (var i = 0; i < cols; i++) {
			var cell = new Cell(i, j, cell_width);
			col.push(cell)
		}
		all_cells.push(col)
	}

	current_cell = all_cells[2][3];
	current_cell.visited = true;
	current_cell.SetColor(255, 255, 255)
}

function draw() {
	// frameRate(5);
	background(51);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = all_cells[j][i];
			cell.Show()
		}
	}

	next_cell = current_cell.FindNextCell(all_cells);

	// if there are neighbor
	if (next_cell) {
		current_cell.SetColor(255, 15, 255)
		next_cell.SetColor(255, 255, 255);
		next_cell.visited = true;
		current_cell = next_cell
	}


}

