import yargs from "yargs";
import "dotenv/config";
import * as crawlCmd from "../src/commands/crawl";

yargs().command(crawlCmd).help().strict().demandCommand();
