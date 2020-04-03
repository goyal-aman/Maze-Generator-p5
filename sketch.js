var rows, cols;
var cell_width = 20;
var all_cells = [];
var current_cell;
var stack = [];

var VisitedCellColor  = [255, 255, 255];
var CurrentCellColor  = [255, 15, 255];

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
	stack.push(current_cell); // step 1
	// current_cell.visited = true;
	// current_cell.SetColor(255, 255, 255)
}

function draw() {
	// frameRate(1	);
	background(51);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = all_cells[j][i];
			cell.Show()
		}
	}

	current_cell.SetColor(VisitedCellColor)
	if (stack.length) { // step 2
		current_cell = stack.pop(); // 2.1
		current_cell.visited = true;
		current_cell.SetColor(CurrentCellColor);

		next_cell = current_cell.FindNextCell(all_cells); // step 2.2 and 2.2.2	
		if (next_cell) { // if current cell has any un visited neighbor
			stack.push(current_cell); // step 2.2.1
			current_cell.SetColor(VisitedCellColor)
			current_cell.RemoveWallBetween(next_cell); // 2.2.3

			next_cell.SetColor(CurrentCellColor);
			next_cell.visited = true;
			stack.push(next_cell)
		}

	}



}

