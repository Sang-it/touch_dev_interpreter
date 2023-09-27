import { BaseStatementAST } from "../types";

export interface IfStatementAST {
    type: "IF_STATEMENT";
    condition: string;
    children: BaseStatementAST[];
}
