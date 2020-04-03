var rows, cols;
var cell_width = 20;
var all_cells = [];
var current_cell;
var stack = [];
var stack_length_max = 0;

var VisitedCellColor = [255, 255, 255];
var CurrentCellColor = [255, 15, 255];

var HomeCell;
var homeX;
var homeY;

var FinalCell;

var donwloadCanvas = true;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
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

	homeX = floor(random(0, cols));
	homeY = floor(random(0, rows));

	current_cell = all_cells[homeY][homeX];
	HomeCell = current_cell;
	stack.push(current_cell); // step 1
	// current_cell.visited = true;
	// current_cell.SetColor(255, 255, 255)

}

function draw() {
	background(51);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = all_cells[j][i];
			cell.Show()
		}
	}
	if (stack.length > stack_length_max) {
		stack_length_max = stack.length;
		FinalCell = current_cell;
	}

	current_cell.SetColor(VisitedCellColor)
	if (stack.length > 0) { // step 2
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

	} else {
		console.log('aman')
		HomeCell.SetColor([0, 255, 0]);
		HomeCell.Show();

		FinalCell.SetColor([0, 0, 0]);
		FinalCell.Show();

		if (donwloadCanvas) {
			saveCanvas(canvas, 'Maze', 'jpg');
			donwloadCanvas = false;
		}
	}



}

