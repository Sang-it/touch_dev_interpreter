import { describe, expect, test } from '@jest/globals';
import { LetStatementAST } from 'src/base';
import { statementParser } from 'src/languages/typescript';

describe('Typescript : Creates Valid Let Statement Code', () => {

    test(`Check that statementParser can parse a let statement when a variable of type number is given.`, () => {
        const letStatementAST: LetStatementAST = {
            type: 'LET_STATEMENT',
            name: 'x',
            value: 10,
            variableType: 'NUMBER'
        }

        const letStatementInstance = statementParser([letStatementAST])[0];
        const actualCode = letStatementInstance.createCodeBlock();

        const expectedCode = 'let x: number = 10;';

        expect(actualCode).toBe(expectedCode);
    });

    test(`Check that statementParser can parse a let statement when a variable of type string is given.`, () => {
        const letStatementAST: LetStatementAST = {
            type: 'LET_STATEMENT',
            name: 'fullName',
            value: 'John Doe',
            variableType: 'STRING'
        }

        const letStatementInstance = statementParser([letStatementAST])[0];
        const actualCode = letStatementInstance.createCodeBlock();

        const expectedCode = 'let fullName: string = "John Doe";';

        expect(actualCode).toBe(expectedCode);
    });

});
