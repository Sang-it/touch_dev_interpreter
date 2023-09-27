import { BaseWhileStatement, BaseStatement } from "src/base";

export class TSWhileStatement extends BaseWhileStatement {
    condition: string;
    children: BaseStatement[];

    constructor(condition: string, children: Object[]) {
        super(condition, children);
    }

    createCodeBlock(): string {
        const childrenCodeBlock = this.children
            .map((child) => child.createCodeBlock())
            .join("\n");

        return `while (${this.condition}) {\n${childrenCodeBlock}\n}`;
    }
}
