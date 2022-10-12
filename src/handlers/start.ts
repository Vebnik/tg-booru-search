import { Context, Telegraf} from 'telegraf'
import { Update } from 'typegram';

class StartLogic {

  public async lanuch(bot: Telegraf<Context<Update>>): Promise<void> {

    bot.launch().then(() => console.log('Bot started'))
    bot.start((ctx) => ctx.reply('Welcome BOY'))
  }

}

export default new StartLogic();