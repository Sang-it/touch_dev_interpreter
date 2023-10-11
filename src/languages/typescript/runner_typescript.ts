import { runner } from "../../runner";
import { BaseStatementAST } from "../../base";
import { codeGenerator } from "./code_generator";

const EXEC_COMMAND = "npx ts-node -p -e";

export const runnerTypescript = async (ast: BaseStatementAST[]): Promise<String[]> => {
    const stdout = (await runner(EXEC_COMMAND, codeGenerator(ast))).split("\n").slice(0, -2);
    return stdout;
};
