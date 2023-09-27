import {
    IfStatementAST,
    LetStatementAST,
    WhileStatementAST,
    FunctionCallStatementAST,
    FunctionDeclarationStatementAST,
} from '../ast';

export type BaseStatementAST =
    IfStatementAST |
    LetStatementAST |
    WhileStatementAST |
    FunctionCallStatementAST |
    FunctionDeclarationStatementAST
