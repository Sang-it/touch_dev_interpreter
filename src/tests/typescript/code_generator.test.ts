import { BaseStatementAST } from "src/base";
import { prettierFormat } from "src/utils";
import { describe, expect, test } from "@jest/globals";
import { codeGenerator } from "src/languages/typescript";

describe("TYPESCRIPT: Generator", () => {
	test(`Check that valid code is produced`, async () => {
		const letStatementAST: BaseStatementAST[] = [
			{
				type: "LET_STATEMENT",
				name: "x",
				value: 10,
				variableType: "NUMBER",
			},
			{
				type: "LET_STATEMENT",
				name: "y",
				value: 20,
				variableType: "NUMBER",
			},
			{
				type: "FUNCTION_CALL_STATEMENT",
				name: "console.log",
				args: ["ident_x", "ident_y"],
			},
		];

		const actualCode = await codeGenerator(letStatementAST);

		const expectedCode = await prettierFormat(
			`let x: number = 10; let y: number = 20; console.log(x, y);`
		);

		expect(actualCode).toBe(expectedCode);
	});
});
