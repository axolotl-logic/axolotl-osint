import { ArgumentsCamelCase, Argv } from "yargs";
import { logger } from "../logger";
import { green } from "picocolors";

interface CrawlArgv {
  url: string;
}

export const command = "crawl <url>";
export const describe = "Crawl new site";
export const aliases = ["c"];

export function builder(yargs: Argv<CrawlArgv>): Argv {
  return yargs.positional("url", {
    type: "string",
    description: "url to site",
    default: "https://example.com",
  });
}

export function handler(argv: ArgumentsCamelCase<CrawlArgv>) {
  const url = argv.url;
  logger.success(green(`crawling ${url}`));
}
