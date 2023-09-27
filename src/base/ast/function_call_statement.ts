export interface FunctionCallStatementAST {
    type: "FUNCTION_CALL_STATEMENT";
    name: string;
    args: unknown[];
}
