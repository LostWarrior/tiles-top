const grid = class tileGrid {
	constructor(rows, cols) {
		this.parentClass = 'app';
		this.htmlGrid = 'grid_parent';
		this.rowParent = 'row_parent';
		this.tileParent = 'tiles';

		this.appendGrid();
	}
	createDiv(className, idName) {
		let elem = document.createElement('div');
		elem.className = className;
		elem.id = idName || '';

		return elem;
	}
	appendGrid() {
		let elem = document.getElementsByClassName(this.parentClass)[0];

		let grid_elem = this.createDiv(this.htmlGrid);

		elem.appendChild(grid_elem);
	}
};

const row_const = class rows extends grid {
	constructor(rows, cols) {
		super(rows, cols);

		let elem = document.getElementsByClassName(this.htmlGrid)[0];

		this.getRowHtml(rows, elem);
	}

	getRowHtml(rows, elem) {
		const className = this.rowParent;

		for (let i = 0; i < rows; i++) {
			let id = 'row_' + i;
			let rowElem = this.createDiv(className, id);

			elem.appendChild(rowElem);
		}
	}
};

const tile_const = class tiles extends row_const {
	constructor(rows, cols) {
		super(rows, cols);

		this.total = rows * cols;

		this.appendTileHtml();
	}

	appendTileHtml() {
		let elem = document.getElementsByClassName(this.rowParent);

		let len = elem.length;

		for (let i = 0; i < len; i++) {
			let parentId = elem[i].id;

			let num = Number(i);

			let element = document.getElementById(parentId);

			this.getTileHtml(cols, element, num);
		}
	}

	getTileHtml(cols, elem, rowNum) {
		const className = this.tileParent;
		let colStart = Number(rowNum * cols);

		for (let i = 0; i < cols; i++) {
			let num = colStart + Number(i);
			let id = 'tile_' + num;

			let tileElem = this.createDiv(className, id);

			elem.appendChild(tileElem);
		}
	}

	appendBacground(id) {}
};

const timer = class timerConst {
	constructor(count) {
		this.maxTime = 60000;
		this.count = count;
	}

	timerOver() {}

	tick() {}
};

const highlight = class highlightTile extends timer {
	constructor(rows, cols) {
		super();
		this.totalTiles = rows * cols;
		this.highlightClass = 'highlight';
	}
	removeHighlight() {
		let className = 'tiles';

		let elem = document.getElementsByClassName(className);

		for (let i in elem) {
			let el = elem[i];

			el.classList.remove(this.highlightClass);
		}
	}

	highlightRandomTile() {
		let random = Math.floor(Math.random() * this.totalTiles + 1);

		let id = 'tiles_' + random;

		let elem = document.getElementById(id);

		elem.classList.add(this.highlightClass);
	}

	bindEvent() {}
};

const score = class scoreIncrement extends highlight {
	constructor(rows, cols) {
		super(rows, cols);
		this.score = score;
		this.id = 'score_text';
		this.correctClick = false;
	}

	writeScore() {
		let elem = document.getElementById(this.id);
		elem.innerHTML = this.score;
	}

	updateScore() {
		let num = Number(this.score);
		this.score = this.correctClick ? num + 1 : num - 1;
	}
};
