import { BasePrimitive, BaseStatement } from "../types";

export class BaseFunctionDeclarationStatement {
    name: string;
    args: unknown[];
    children: BaseStatement[];
    returnType: BasePrimitive;

    constructor(
        name: string,
        args: unknown[],
        children: Object[],
        returnType: BasePrimitive,
    ) {
        this.name = name;
        this.args = args;
        this.children = children as BaseStatement[];
        this.returnType = returnType;
    }

    createCodeBlock(): string {
        throw "Must override createCodeBlock method!"
    }
}
