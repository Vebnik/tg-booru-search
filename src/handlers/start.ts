import { Context, Telegraf} from 'telegraf'
import { Update } from 'typegram';

import { startMessage } from '../utils/defMessage'
import Event from './event'


class StartLogic {

  public async lanuch(bot: Telegraf<Context<Update>>): Promise<void> {

    bot.launch().then(() => console.log('Bot started'))

    bot.start((ctx) => { ctx.reply(startMessage.firstStart); Event.commands(bot) })
  }

}

export default new StartLogic();