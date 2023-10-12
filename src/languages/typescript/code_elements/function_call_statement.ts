import { BaseFunctionCallStatement } from "../../../base";
import { TSNativeFunctionMap } from "../types";

export class TSFunctionCallStatement extends BaseFunctionCallStatement {
    name: string;
    args: unknown[];

    constructor(name: string, args: unknown[]) {
        super(name, args);
    }

    createCodeBlock(): string {
        if (this.isNativeFunction(this.name)) {
            // @ts-expect-error
            this.name = TSNativeFunctionMap.get(this.name);
        }

        this.args = this.args.map((arg) => {
            if (typeof arg !== "string") return arg;
            if (arg.startsWith("ident_")) return arg.replace("ident_", "");
            return `"${arg}"`;
        });

        return `${this.name}(${this.args.join(", ")});`;
    }

    isNativeFunction(name: string): boolean {
        // @ts-expect-error
        return TSNativeFunctionMap.has(name);
    }
}
