import { BaseStatement, BaseStatementAST } from "src/base";
import { TSFunctionCallStatement, TSLetStatement } from "./code_elements";

export const statementParser = (statementObjects: BaseStatementAST[]): BaseStatement[] => {
    return statementObjects.map((statementObject) => { return parseSwitch(statementObject) });
}

function parseSwitch(statementObject: BaseStatementAST): BaseStatement {
    switch (statementObject.type) {
        case "LET_STATEMENT": {
            const { name, value, variableType } = statementObject;
            return new TSLetStatement(name, value, variableType);
        }

        case "FUNCTION_CALL_STATEMENT": {
            const { name, args } = statementObject;
            return new TSFunctionCallStatement(name, args);
        }

        default:
            throw new Error("Unknown statement type!");
    }
}

