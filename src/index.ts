import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import Express, { Response, Request } from "express";
import { prettierFormat } from "./utils";
import { codeGenerator, runnerTypescript } from "./languages/typescript";

(async () => {
    const app = Express();

    app.use(Express.json());

    app.use(helmet());

    app.use(
        cors({
            origin: ["http://localhost:3000"],
        })
    );

    app.get("/", (_, res: Response) => {
        res.send("Hello World!");
    });

    app.post("/typescript/run", async (req: Request, res: Response) => {
        const { body } = req;
        const result = await runnerTypescript(body);
        res.json(result);
    });

    app.post("/typescript/code-generator", async (req: Request, res: Response) => {
        const { body } = req;
        const code = await prettierFormat(codeGenerator(body));
        res.json(code);
    });

    app.listen(process.env.PORT, () =>
        console.log(`Server is running on ${process.env.PORT}`)
    );
})();
