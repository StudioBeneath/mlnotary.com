import { writeFile } from "node:fs/promises";
import { getHours } from "./lib/hours.mjs";

const data = await getHours();
await writeFile("./generated/hours.json", JSON.stringify(data));
