import {
  BaseFunctionDeclarationStatement,
  BaseFunctionCallStatement,
  BaseIfStatement,
  BaseWhileStatement,
  BaseLetStatement,
} from "../code_elements";

export type BaseStatement =
  | BaseFunctionDeclarationStatement
  | BaseFunctionCallStatement
  | BaseIfStatement
  | BaseWhileStatement
  | BaseLetStatement;
