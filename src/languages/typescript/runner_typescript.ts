import { runner } from "src/runner";
import { BaseStatementAST } from "src/base";
import { codeGenerator } from "./code_generator";

const EXEC_COMMAND = "npx ts-node -p -e";

export const runnerTypescript = async (ast: BaseStatementAST[]) => {
    const stdout = (await runner(EXEC_COMMAND, codeGenerator(ast))).split("\n").slice(0, -2);
    return stdout;
};
