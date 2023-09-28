import { runner } from "src/runner";
import { BaseStatementAST } from "src/base";
import { codeGenerator } from "./code_generator";

export const runnerTypescript = async (ast: BaseStatementAST[]) => {
	return runner("npx ts-node -p -e", await codeGenerator(ast));
};
