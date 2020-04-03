// j->row
//i->col

function Cell(i, j, cell_width, color = [51, 51, 51]) {
    this.i = i * cell_width;
    this.j = j * cell_width;
    this.cell_width = cell_width;
    this.col_index = floor(this.i / this.cell_width);
    this.row_index = floor(this.j / this.cell_width);
    this.visited = false;

    // border variables
    this.top_border = true;
    this.right_border = true;
    this.bottom_border = true;
    this.left_border = true;

    this.r = color[0];
    this.g = color[1];
    this.b = color[2];
    this.SetColor = function (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    this.Show = function () {

        // cell without border
        // if (this.visited) {
        //     fill(255, 15, 240)
        // } else {
        //     fill(51);
        // }
        fill(this.r, this.g, this.b);
        noStroke();
        rect(this.i, this.j, cell_width, cell_width);

        // borders
        stroke(0);
        strokeWeight(2)
        if (this.top_border) {
            line(this.i, this.j, this.i + this.cell_width, this.j);
        }
        if (this.right_border) {
            line(this.i + this.cell_width, this.j, this.i + this.cell_width, this.j + this.cell_width);
        }
        if (this.bottom_border) {
            line(this.i + this.cell_width, this.j + this.cell_width, this.i, this.j + this.cell_width);
        }
        if (this.left_border) {
            line(this.i, this.j + this.cell_width, this.i, this.j);
        }
    }

    this.FindNextCell = function (all_cells) {
        var Neighbors = [];

        //left neighbor
        if (this.i / this.cell_width > 0) {
            var left_neighbor = all_cells[j][i - 1];
            if (!left_neighbor.visited) {
                Neighbors.push(left_neighbor);
            }
        }
        // right neighbor
        if (this.i / this.cell_width < all_cells[0].length - 1) {
            var right_neighbor = all_cells[j][i + 1];
            if (!right_neighbor.visited) {
                Neighbors.push(right_neighbor);
            }
        }
        // upper neighbor
        if (this.j / this.cell_width > 0) {
            var upper_neighbor = all_cells[j - 1][i];
            if (!upper_neighbor.visited) {
                Neighbors.push(upper_neighbor);
            }
        }
        // lower neighbor
        if ((this.j) / this.cell_width < all_cells.length - 1) {
            var lower_neighbor = all_cells[j + 1][i];
            if (!lower_neighbor.visited) {
                Neighbors.push(lower_neighbor);
            }
        }
        next_cell = random(Neighbors);
        return next_cell;
    }

}
