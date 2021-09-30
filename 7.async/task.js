class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.timerId = null;
	};

	addClock (time, callback, id) {
		if (id === undefined) {
			throw new Error('Параметр id не передан');
		};
		if (this.alarmCollection.some(item => item.id === id)) {
			console.error('error этот объект уже существует');
		} else {
			this.alarmCollection.push({id, time, callback});
		};
	};

	removeClock (id) {
		this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
	};

	getCurrentFormattedTime () {
		return new Date().toTimeString().slice(0, 5);
	};

	start () {
		function checkClock (item) {
			if (clock.getCurrentFormattedTime() === item.time) {
				item.callback();
			};
		};
		if(this.timerId === null){
			const fn = () => {
				this.alarmCollection.forEach(item => checkClock(item));
			};
			this.timerId = setInterval(fn, 1000);
		};
	};

	stop () {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		};
	};

	printAlarms () {
		this.alarmCollection.forEach(item => console.log(`Будильник номер ${item.id} заведен на ${item.time}`));
	};

	clearAlarms () {
		this.stop();
		this.alarmCollection.splice(0, this.alarmCollection.length);
	};
};

// const clock = new AlarmClock();
// clock.addClock(clock.getCurrentFormattedTime(), () => console.log('Вставай!'), 1);
// clock.addClock("20:32", () => {console.log('Пора вставать!'); clock.removeClock(2)}, 2);
// clock.addClock("20:33", () => console.log('Давай, вставай уже'), 3);
// clock.printAlarms();
// clock.start();

