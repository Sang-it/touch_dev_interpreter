import { statementParser } from "./parser";
import { BaseStatementAST } from "../../base";

export const codeGenerator = (
    ast: BaseStatementAST[]
): string => {
    const statementInstances = statementParser(ast);
    return statementInstances.reduce((acc, statementInstance) => {
        return acc + statementInstance.createCodeBlock();
    }, "");
};
