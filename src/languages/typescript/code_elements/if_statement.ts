import { BaseIfStatement, BaseStatement, BaseStatementAST } from "../../../base";
import { statementParser } from "../parser";

export class TSIfStatement extends BaseIfStatement {
    condition: string;
    children: BaseStatement[];

    constructor(condition: string, children: BaseStatementAST[]) {
        super(condition, children, statementParser);
    }

    createCodeBlock(): string {
        const childrenCodeBlock = this.children
            .map((child) => child.createCodeBlock())
            .join(" ");

        return `if (${this.condition}) { ${childrenCodeBlock} }`;
    }
}
