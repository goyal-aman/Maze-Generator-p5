function Cell(i, j, cell_width) {
    this.i = i * cell_width;
    this.j = j * cell_width;
    this.cell_width = cell_width;
    this.top_border = true;
    this.right_border = true;
    this.bottom_border = true;
    this.left_border = true;
    this.show = function () {
        fill(255, 115, 255);
        noStroke();
        rect(this.i, this.j, cell_width, cell_width);

        stroke(0);
        strokeWeight(1)
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
}
