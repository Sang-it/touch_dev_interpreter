import { exec as execSync } from "child_process";
import { promisify } from "util";

const exec = promisify(execSync);

export const runner = async (command: string, code: string): Promise<string> => {
    try {
        const { stdout } = await exec(`${command} '${code}'`);
        return stdout;
    } catch ({ stderr }) {
        return stderr;
    }
}
