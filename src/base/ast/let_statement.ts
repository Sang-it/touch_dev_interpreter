import { BasePrimitive } from "../types";

export interface LetStatementAST {
    type: "LET_STATEMENT";
    name: string;
    value: unknown;
    variableType: BasePrimitive;
}
