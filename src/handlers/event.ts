import { Context, Telegraf } from "telegraf";
import { Update } from "typegram";

import GetImage from "../commands/GetImage";

class Event {

  public commands(bot: Telegraf<Context<Update>>) {

    bot.command('getpic', (ctx) => 
      GetImage.getPicture(ctx))
  }

}

export default new Event();