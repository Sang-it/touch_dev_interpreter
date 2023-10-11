import { BasePrimitive, BaseStatement, BaseStatementAST } from "../types";
import { BaseFunctionArgument } from "../types";
import { StatementParser } from "../types/statement_parser";

export class BaseFunctionDeclarationStatement {
    name: string;
    args?: BaseFunctionArgument[];
    children?: BaseStatement[];
    returnType?: BasePrimitive;
    //TODO: Implement an actual return statement
    returnStatement?: string;

    constructor(
        statementParser: StatementParser,
        name: string,
        args?: BaseFunctionArgument[],
        children?: BaseStatementAST[],
        returnType?: BasePrimitive,
        returnStatement?: string,
    ) {
        this.name = name;
        this.args = args;
        this.children = children && statementParser(children);
        this.returnType = returnType;
        this.returnStatement = returnStatement;
    }

    createCodeBlock(): string {
        throw "Must override createCodeBlock method!";
    }
}
