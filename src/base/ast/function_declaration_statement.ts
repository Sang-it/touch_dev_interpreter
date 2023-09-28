import {
	BaseFunctionArgument,
	BasePrimitive,
	BaseStatementAST,
} from "../types";

export interface FunctionDeclarationStatementAST {
	type: "FUNCTION_DECLARATION_STATEMENT";
	name: string;
	args?: BaseFunctionArgument[];
	children?: BaseStatementAST[];
	returnType?: BasePrimitive;
	returnStatement?: string;
}
