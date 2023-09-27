import { BasePrimitive, BaseStatementAST } from "../types";

export interface FunctionDeclarationStatementAST {
    type: "FUNCTION_DECLARATION_STATEMENT";
    name: string;
    args: unknown[];
    children: BaseStatementAST[];
    returnType: BasePrimitive;
}
