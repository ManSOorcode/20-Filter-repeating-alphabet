let input = document.querySelector(".input");
const button = document.querySelector(".btn");

// console.log(input);
const finalResult = document.querySelector(".result");

// console.log(finalResult);

const method = [
	/a+/g,
	/b+/g,
	/c+/g,
	/d+/g,
	/e+/g,
	/f+/g,
	/g+/g,
	/h+/g,
	/i+/g,
	/j+/g,
	/k+/g,
	/l+/g,
	/m+/g,
	/n+/g,
	/o+/g,
	/p+/g,
	/q+/g,
	/r+/g,
	/s+/g,
	/t+/g,
	/u+/g,
	/v+/g,
	/w+/g,
	/x+/g,
	/y+/g,
	/z+/g,
];

button.addEventListener("click", () => {
	const enterValue = input.value;
	console.log(typeof enterValue);
	let result = [];

	for (let i = 0; i < method.length; i++) {
		result.push(String(enterValue.match(method[i])));
	}

	console.log(result);

	const filtertResult = result
		.map((el) => el.split(",").join(""))
		.filter((el) => {
			return el !== "null";
		});

	// console.log(filtertResult);

	const longestString = filtertResult.sort((a, b) => {
		return b.length - a.length;
	})[0];

	// console.log(longestString);

	finalResult.innerHTML = `The alphabet ${longestString.slice(
		0,
		1
	)} is longe in length value is ${longestString.length}`;

	// console.log(longestString, longestString.length);
});
