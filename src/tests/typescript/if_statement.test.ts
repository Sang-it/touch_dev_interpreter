import { describe, expect, test } from "@jest/globals";
import { statementParser } from "src/languages/typescript";
import { IfStatementAST } from "src/base";

describe("TYPESCRIPT : If Statement", () => {
    test(`Check that statementParser can parse a if statement with body.`, () => {
        const ifStatementAST: IfStatementAST = {
            type: "IF_STATEMENT",
            condition: "true",
            children: [
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
            ],
        };

        const ifStatementInstance = statementParser([ifStatementAST])[0];

        const actualCode = ifStatementInstance.createCodeBlock();
        const expectedCode = "if (true) { let x: number = 10; let y: number = 20; console.log(x, y); }";

        expect(actualCode).toBe(expectedCode);
    });
});
