import { BaseStatementAST } from "./base_statement_ast";
import { BaseStatement } from "./base_statement_class";

export type StatementParser = (statementObjects: BaseStatementAST[]) => BaseStatement[]
