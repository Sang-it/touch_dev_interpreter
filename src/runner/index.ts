import { exec as execSync } from "child_process";
import { promisify } from "util";

const exec = promisify(execSync);

export async function runner(command: string, code: string) {
	try {
		const { stdout } = await exec(`${command} '${code}'`);
		console.log(stdout);
	} catch ({ stderr }) {
		console.error(stderr);
	}
}
