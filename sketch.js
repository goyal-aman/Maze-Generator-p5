var rows, cols;
var cell_width = 70;
var all_cells = [];

function setup() {
	createCanvas(700, 700);
	rows = floor(height / cell_width);
	cols = floor(width / cell_width);
	for (var j = 0; j < rows; j++) {
		var col = [];
		for (var i = 0; i < cols; i++) {
			var cell = new Cell(i, j, cell_width);
			col.push(cell)
		}
		all_cells.push(col)
	}
}

function draw() {
	background(51);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = all_cells[i][j];
			cell.show()
		}
	}

}