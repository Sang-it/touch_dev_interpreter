import { format } from "prettier";

export const prettierFormat = async (code: string): Promise<string> => {
	return format(code, { parser: "typescript" });
};
