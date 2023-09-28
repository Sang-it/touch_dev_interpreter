import { BaseStatement, BaseStatementAST } from "src/base";
import {
    TSFunctionCallStatement,
    TSFunctionDeclarationStatement, TSIfStatement,
    TSLetStatement,
    TSWhileStatement,
} from "./code_elements";

export const statementParser = (
    statementObjects: BaseStatementAST[]
): BaseStatement[] => {
    return statementObjects.map((statementObject) => {
        return parseSwitch(statementObject);
    });
};

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

        case "IF_STATEMENT": {
            const { condition, children } = statementObject;
            return new TSIfStatement(condition, children);
        }

        case "WHILE_STATEMENT": {
            const { condition, children } = statementObject;
            return new TSWhileStatement(condition, children);
        }

        case "FUNCTION_DECLARATION_STATEMENT": {
            const { name, args, children, returnType, returnStatement } =
                statementObject;
            return new TSFunctionDeclarationStatement(
                name,
                args,
                children,
                returnType,
                returnStatement
            );
        }

        default:
            throw new Error("Unknown statement type!");
    }
}
