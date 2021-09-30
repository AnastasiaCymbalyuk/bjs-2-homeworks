'use strict'

// задание 1

function parseCount (value) {
	const parse = Number.parseInt(value, 10);
	if (isNaN(parse)) {
		let err = new Error('Невалидное значение');
		throw err;
	};
	return parse;
};

function validateCount (value) {
	try {
		parseCount(value);
	} catch (err) {
		return err;
	};
	return parseCount(value);
};

// задание 2

class Triangle {
	constructor (a, b, c) {
		if (a + b > c && c + b > a && a + c > b) {
			this.a = a;
			this.b = b;
			this.c = c;
		} else {
			let triangleError = new Error ('Треугольник с такими сторонами не существует');
			throw triangleError;
		};
	};

	getPerimeter () {
		return this.a + this.b + this.c;
	};

	getArea () {
		const p = this.getPerimeter() * 0.5;
		const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(s.toFixed(3));
	};
};

function getTriangle (a, b, c) {
	let triangle = {
		getPerimeter () {
			return 'Ошибка! Треугольник не существует';
		},
		getArea () {
			return 'Ошибка! Треугольник не существует';
		}
	};

	try {
		triangle = new Triangle(a, b, c);
	} catch (triangleError) {
		return triangle;
	} finally {
		return triangle;
	};
};