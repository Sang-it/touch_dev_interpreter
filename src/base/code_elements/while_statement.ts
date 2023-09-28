import { BaseStatement, BaseStatementAST } from "../types";
import { statementParser } from "src/languages/typescript";

export class BaseWhileStatement {
	condition: string;
	children: BaseStatement[];

	constructor(condition: string, children: BaseStatementAST[]) {
		this.condition = condition;
		this.children = statementParser(children);
	}

	createCodeBlock(): string {
		throw "Must override createCodeBlock method!";
	}
}
