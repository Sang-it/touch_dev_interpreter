import {
	BaseFunctionArgument,
	BaseFunctionDeclarationStatement,
	BasePrimitive,
	BaseStatement,
	BaseStatementAST,
} from "src/base";
import { TSPrimitiveMap } from "../types";

export class TSFunctionDeclarationStatement extends BaseFunctionDeclarationStatement {
	name: string;
	args?: BaseFunctionArgument[];
	children?: BaseStatement[];
	returnType?: BasePrimitive;
	returnStatement?: string;

	constructor(
		name: string,
		args?: BaseFunctionArgument[],
		children?: BaseStatementAST[],
		returnType?: BasePrimitive,
		returnStatement?: string
	) {
		super(name, args, children, returnType, returnStatement);
	}

	createCodeBlock(): string {
		const args =
			this.args &&
			this.args
				.map((arg) => `${arg.name} : ${TSPrimitiveMap.get(arg.type)}`)
				.join(", ");

		const returnBlock =
			this.returnType && `: ${TSPrimitiveMap.get(this.returnType)}`;

		const childrenCodeBlock =
			this.children &&
			this.children.map((child) => child.createCodeBlock()).join("\n");

		const returnStatement =
			this.returnStatement && `return ${this.returnStatement};`;

		return `function ${this.name} (${args}) ${returnBlock} { \n${childrenCodeBlock}\n${returnStatement}\n}`;
	}
}
