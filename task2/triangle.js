const Triangle = function (n) {
    this.rows = [];
    let row = [1];
    for (let i = 0; i < n; i++) {
        this.rows.push(row);
        this.lastRow = row;
        row = nextRow(row);
    }
}

function nextRow(currentRow) {
    let row = [];
    let prev = 0;
    for (let i = 0; i < currentRow.length; i++) {
        row.push(currentRow[i] + prev);
        prev = currentRow[i];
    }
    row.push(prev);
    console.log(row);
    return row;
    
}

module.exports = Triangle;