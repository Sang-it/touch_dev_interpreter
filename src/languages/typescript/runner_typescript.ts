// import { runner } from "../../runner";
import { BaseStatementAST } from "../../base";
import { codeGenerator } from "./code_generator";
import { transform } from "@swc/core";
import { spawn } from "child_process";

// const EXEC_COMMAND = "node -e";

export const runnerTypescript = async (ast: BaseStatementAST[]): Promise<String[]> => {
    const { code } = await transform(codeGenerator(ast), {
        jsc: {
            parser: {
                syntax: "typescript",
            },
        },
        minify: true,
    })


    return new Promise((resolve) => {
        const codeOutput: String[] = []

        const nodeProcess = spawn('node', ["-e", code]);

        nodeProcess.stdout.on('data', (data) => {
            codeOutput.push(`${data}`);
        });

        nodeProcess.stderr.on('data', (data) => {
            codeOutput.push(`${data}`);
        });

        nodeProcess.on('close', (_) => {
            resolve(codeOutput)
        })
    })

    // return (await runner(EXEC_COMMAND, code)).trim();
}
