import { describe, expect, test } from "@jest/globals";
import { statementParser } from "src/languages/typescript";
import { WhileStatementAST } from "src/base";

describe("TYPESCRIPT: While Statement", () => {
    test(`Check that statementParser can parse a while statement with body.`, () => {
        const ifStatementAST: WhileStatementAST = {
            type: "WHILE_STATEMENT",
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

        const whileStatementInstance = statementParser([ifStatementAST])[0];

        const actualCode = whileStatementInstance.createCodeBlock()

        const expectedCode = "while (true) { let x: number = 10; let y: number = 20; console.log(x, y); }"

        expect(actualCode).toBe(expectedCode);
    });
});
