import { BaseFunctionCallStatement } from "../../../base";

export class PYFunctionCallStatement extends BaseFunctionCallStatement {
    name: string;
    args: unknown[];

    constructor(name: string, args: unknown[]) {
        super(name, args);
    }

    createCodeBlock(): string {
        return `${this.name}(${this.args.join(", ")})`;
    }
}
