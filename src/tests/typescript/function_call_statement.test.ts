import { describe, expect, test } from "@jest/globals";
import { FunctionCallStatementAST } from "src/base";
import { statementParser } from "src/languages/typescript";

describe("TYPESCRIPT : Function Call Statement", () => {
	test(`Creates valid function call code with all args being of type number.`, () => {
		const functionCallStatementAST: FunctionCallStatementAST = {
			type: "FUNCTION_CALL_STATEMENT",
			name: "print",
			args: [1, 2],
		};

		const functionCallStatementInstance = statementParser([
			functionCallStatementAST,
		])[0];
		const actualCode = functionCallStatementInstance.createCodeBlock();

		const expectedCode = "print(1, 2);";

		expect(actualCode).toBe(expectedCode);
	});

	test(`Creates valid function call code with all args being of type string.`, () => {
		const functionCallStatementAST: FunctionCallStatementAST = {
			type: "FUNCTION_CALL_STATEMENT",
			name: "print",
			args: ["Hello", " World!"],
		};

		const functionCallStatementInstance = statementParser([
			functionCallStatementAST,
		])[0];
		const actualCode = functionCallStatementInstance.createCodeBlock();

		const expectedCode = 'print("Hello", " World!");';

		expect(actualCode).toBe(expectedCode);
	});

	test(`Creates valid function call code with all args are of mixed type.`, () => {
		const functionCallStatementAST: FunctionCallStatementAST = {
			type: "FUNCTION_CALL_STATEMENT",
			name: "print",
			args: ["Hello", 1, " World!"],
		};

		const functionCallStatementInstance = statementParser([
			functionCallStatementAST,
		])[0];
		const actualCode = functionCallStatementInstance.createCodeBlock();

		const expectedCode = 'print("Hello", 1, " World!");';

		expect(actualCode).toBe(expectedCode);
	});

	test(`Creates valid function call code when args contain variables.`, () => {
		const functionCallStatementAST: FunctionCallStatementAST = {
			type: "FUNCTION_CALL_STATEMENT",
			name: "console.log",
			args: ["ident_x", "ident_y"],
		};

		const functionCallStatementInstance = statementParser([
			functionCallStatementAST,
		])[0];

		const actualCode = functionCallStatementInstance.createCodeBlock();

		const expectedCode = "console.log(x, y);";

		expect(actualCode).toBe(expectedCode);
	});
});
