let num = document.querySelector(".num");
const increment = document.querySelector(".btn-increase");
const decrement = document.querySelector(".btn-decrease");
const reset = document.querySelector(".btn-reset");

// Global function that runs everything

function run() {
	increase();
	decrease();
	resetValue();
}

// Increment values

function increase() {
	increment.onclick = () => {
		let convertToNumberAndIncrement = Number(num.innerHTML++);
		let displayNumberToScreen = convertToNumberAndIncrement.innerText;
		return displayNumberToScreen;
	};
}

// Decrement values

function decrease() {
	decrement.onclick = () => {
		if (num.innerHTML >= 1) {
			let convertToNumberAndIncrement = Number(num.innerHTML--);
			let displayNumberToScreen = convertToNumberAndIncrement.innerText;
			return displayNumberToScreen;
		} else {
			alert("You can not count negatives!");
		}
	};
}

// Reset values

function resetValue() {
	reset.onclick = () => (num.innerHTML = 0);
}

// run counter

run();
