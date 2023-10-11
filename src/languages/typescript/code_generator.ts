import { BaseStatementAST } from "../../base";
import { statementParser } from "./parser";

export const codeGenerator = (
    ast: BaseStatementAST[]
): string => {
    const statementInstances = statementParser(ast);
    return statementInstances.reduce((acc, statementInstance) => {
        return acc + statementInstance.createCodeBlock();
    }, "");
};
