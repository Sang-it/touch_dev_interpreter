import { BaseStatementAST } from "../types";

export class WhileStatementAST {
	type: "WHILE_STATEMENT";
	condition: string;
	children: BaseStatementAST[];
}
