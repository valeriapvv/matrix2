let getRandomIntergerMatrix = function (rowsNumber, colomnsNumber, minInterger, maxInteger) {
	// cоздание матрицы целых чисел;
	let matrix = [];

	// получение случайного целого значения в диапазоне [minInterger, maxInteger];
	let getRandomMatrixElement = function () {
		return maxInteger - Math.floor(Math.random() * (maxInteger - minInterger + 1));
	};
 
 	// записывание матрицы по строкам;
	for (let i = 0; i < rowsNumber; i++) {
		let matrixRow = [];

		// каждый внутренний цикл записывает i-ю строку матрицы;
		for (let j = 0; j < colomnsNumber; j++) {
			matrixRow[j] = getRandomMatrixElement();
		}

		matrix[i] = matrixRow;
	}


	return matrix;
}

let matrix = getRandomIntergerMatrix(4, 4, -10, 10);
console.log(matrix);


let calculateMatrixDeterminant = function (squareMatrix) {
	// нахождение определителя как суммы произведений элементов строки и их алгебраических дополнений
	let sumOfProductions = 0;

	for (let i = 0; i < squareMatrix.length; i++) { // перебираем элементы первой строки, находим миноры и соотв. алг. доп.
		let minorMatrix = [];

		for (let j = 1; j < squareMatrix.length; j++) { // записываем в минорную матрицу строки матрицы, кроме первой, исключая i-е элементы столбцов
			let minorMatrixRow = [];

			for (let k = 0; k < squareMatrix.length; k++) {
				// записываем в строку минорной матрицы элемерты j-й строки исходной матрицы, кроме i-го элемента
				if (k !== i) {
					minorMatrixRow.push(squareMatrix[j][k]);
				}
			}
			minorMatrix.push(minorMatrixRow);
		}

		let factor = 1;
		if (i % 2) {
			factor = -1;
		}
		if (squareMatrix.length === 1) {
			sumOfProductions += squareMatrix[0][0];
		} else {
			sumOfProductions += squareMatrix[0][i] * factor * calculateMatrixDeterminant(minorMatrix);
		}
	}

	return sumOfProductions;
}

let matrixDeterminant = calculateMatrixDeterminant(matrix);
console.log(matrixDeterminant);
