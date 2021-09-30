class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix () {
		return this.state = this.state * 1.5;
	};

    set state (state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		};
	};

	get state () {
		return this._state;
	};
};

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = 'magazine';
	};
};
class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = 'book';
		this.author = author;
	};
};

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'novel';
	};
};

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'fantastic';
	};
};

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'detective';
	};
};

//задание 2

class Library {
	constructor (name, books) {
		this.name = name;
		this.books = [];
	};

	addBook (book) {
		if (book.state > 30) {
			this.books.push(book);
		};
	};

	findBookBy (type, value) {
		const check = this.books.some(element => element[type] === value);
		if (check === true) {
			for (let i = 0; this.books.length > 0; i++) {
				if (this.books[i][type] === value) {
					return this.books[i];
				};
			};
		} else {
			return null;	
		};
	};

	giveBookByName (bookName) {
		const book = this.books.findIndex(item => item.name == bookName);
		if (book === -1) {
			console.log(book);
			return null;
		} else {
			const bookAfter = (this.books.splice(book, 1));
			return bookAfter.pop();
		};
	};
};

//задание 3

class Student {
	constructor(name) {
        this.name = name;
        this.marks = {};
	};
	
    addMark (grade, subject) {
		if ((1 <= grade && grade <= 5) && (typeof grade === 'number')) {
			if (this.marks.hasOwnProperty(subject) === false) {
				this.marks[subject] = [];
				this.marks[subject].push(grade);
			} else {
				this.marks[subject].push(grade);
			};
		} else {
			console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
		};	
	};
    
    getAverageBySubject (subject) {
		if (this.marks.hasOwnProperty(subject) === false) {
            console.log(`Несуществующий предмет`);
			return 0;	
		} else {
			const sum = this.marks[subject].reduce(function(item, value) {
  				return item + value;
			});
            console.log(`Средний балл по предмету ${subject} ${sum / this.marks[subject].length}`);
			return sum / this.marks[subject].length;
		};
	};

    getAverage () {
		if (Object.keys(this.marks).length > 0) {
			let sum = 0;
			for (const key in this.marks) {
				let value = this.getAverageBySubject(key);
				sum += value;
			};
            console.log(`Средний балл по всем предметам ${sum / Object.keys(this.marks).length}`);
			return sum / Object.keys(this.marks).length;
		} else {
			return 0;
		};	
	};
      
    exclude (reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    };	
};