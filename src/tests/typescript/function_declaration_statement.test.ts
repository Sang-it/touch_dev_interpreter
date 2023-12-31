import { describe, expect, test } from "@jest/globals";
import { statementParser } from "../../languages/typescript";
import { FunctionDeclarationStatementAST } from "../../base";

describe("TYPESCRIPT : Function Declaration Statement", () => {
    test(`Check that statementParser can parse a function declaration statement with body.`, () => {
        const functionDeclarationStatementAST: FunctionDeclarationStatementAST =
        {
            type: "FUNCTION_DECLARATION_STATEMENT",
            name: "add",
            returnType: "NUMBER",
            args: [
                {
                    name: "a",
                    type: "NUMBER",
                },
                {
                    name: "b",
                    type: "NUMBER",
                },
            ],
            returnStatement: "a + b",
            children: [],
        };

        const functionDeclarationStatementInstance = statementParser([
            functionDeclarationStatementAST,
        ])[0];

        const actualCode = functionDeclarationStatementInstance.createCodeBlock()

        const expectedCode = `function add (a: number, b: number): number {return a + b;}`

        expect(actualCode).toBe(expectedCode);
    });
});
