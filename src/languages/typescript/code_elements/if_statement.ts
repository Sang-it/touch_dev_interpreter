import { BaseIfStatement, BaseStatement } from "src/base";

export class TSIfStatement extends BaseIfStatement {
    condition: string;
    children: BaseStatement[];

    constructor(condition: string, children: Object[]) {
        super(condition, children);
    }

    createCodeBlock(): string {
        const childrenCodeBlock = this.children
            .map((child) => child.createCodeBlock())
            .join("\n");

        return `if (${this.condition}) {\n${childrenCodeBlock}\n}`;
    }
}
