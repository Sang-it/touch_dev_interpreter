import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import Express, { Response } from "express";

(async () => {
	const app = Express();

	app.use(helmet);

	app.use(
		cors({
			origin: ["http://localhost:3000"],
		})
	).get("/", (_, res: Response) => {
		res.send("Hello World!");
	});

	app.listen(process.env.PORT, () =>
		console.log(`Server is running on ${process.env.PORT}`)
	);
})();
