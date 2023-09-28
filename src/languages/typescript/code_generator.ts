import { prettierFormat } from "src/utils";
import { BaseStatementAST } from "src/base";
import { statementParser } from "./parser";

export const codeGenerator = async (
	ast: BaseStatementAST[]
): Promise<string> => {
	const statementInstances = statementParser(ast);

	return prettierFormat(
		statementInstances.reduce((acc, statementInstance) => {
			return acc + statementInstance.createCodeBlock() + "\n";
		}, "")
	);
};
