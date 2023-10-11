import { describe, expect, test } from "@jest/globals";
import { BaseStatementAST } from "../../base";
import { runnerTypescript } from "../../languages/typescript";

describe("TYPESCRIPT: Runner", () => {
    test(`Check that the runner is working correctly`, async () => {

        const ast: BaseStatementAST[] = [
            {
                type: "LET_STATEMENT",
                name: "x",
                value: 10,
                variableType: "NUMBER",
            },
            {
                type: "FUNCTION_CALL_STATEMENT",
                name: "console.log",
                args: ["ident_x"],
            },
        ]

        const result = await runnerTypescript(ast)

        expect(result).toStrictEqual(["10"]);
    });

});
