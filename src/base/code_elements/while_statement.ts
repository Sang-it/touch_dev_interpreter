import { BaseStatement, BaseStatementAST } from "../types";
import { StatementParser } from "../types/statement_parser";

export class BaseWhileStatement {
    condition: string;
    children: BaseStatement[];

    constructor(
        condition: string,
        children: BaseStatementAST[],
        statementParser: StatementParser,
    ) {
        this.condition = condition;
        this.children = statementParser(children);
    }

    createCodeBlock(): string {
        throw "Must override createCodeBlock method!";
    }
}
