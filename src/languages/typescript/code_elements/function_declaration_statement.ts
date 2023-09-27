import { BaseFunctionDeclarationStatement, BasePrimitive, BaseStatement } from "src/base";
import { TSPrimitiveMap } from "../types";

export class TSFunctionDeclarationStatement extends BaseFunctionDeclarationStatement {
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
        super(name, args, children, returnType);
    }

    createCodeBlock(): string {
        const childrenCodeBlock = this.children
            .map((child) => child.createCodeBlock())
            .join("\n");

        return `function ${this.name} (${this.args.join(", ")}): ${TSPrimitiveMap.get(this.returnType)} { \n${childrenCodeBlock}\n}`;
    }
}
