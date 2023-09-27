import { exec as execSync } from "child_process";
import { promisify } from "util";

const exec = promisify(execSync);

export async function main() {
    try {
        const { stdout } = await exec("npx ts-node -p -e 'let x=1; console.log(x); console.log(process.pid);'");
        console.log(stdout);
    } catch ({ stderr }) {
        console.error(stderr);
    }
}
