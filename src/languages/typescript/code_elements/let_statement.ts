import { TSPrimitiveMap } from "../types";
import { BaseLetStatement, BasePrimitive } from "../../../base";

export class TSLetStatement extends BaseLetStatement {
    name: string;
    value: unknown;
    variableType: BasePrimitive;

    constructor(name: string, value: unknown, variableType: BasePrimitive) {
        super(name, value, variableType);
    }

    createCodeBlock(): string {
        if (this.isString()) this.value = `'${this.value}'`;
        return `let ${this.name}: ${TSPrimitiveMap.get(this.variableType)} = ${this.value};`;
    }

    isString(): boolean {
        return this.variableType === "STRING";
    }
}
