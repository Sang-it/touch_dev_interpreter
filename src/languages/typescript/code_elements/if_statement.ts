import { BaseIfStatement, BaseStatement, BaseStatementAST } from "src/base";

export class TSIfStatement extends BaseIfStatement {
	condition: string;
	children: BaseStatement[];

	constructor(condition: string, children: BaseStatementAST[]) {
		super(condition, children);
	}

	createCodeBlock(): string {
		const childrenCodeBlock = this.children
			.map((child) => child.createCodeBlock())
			.join("\n");

		return `if (${this.condition}) {\n${childrenCodeBlock}\n}`;
	}
}
