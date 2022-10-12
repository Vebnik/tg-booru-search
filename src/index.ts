import * as dotenv from 'dotenv'
import { Telegraf } from "telegraf";
import StartLogic from './handlers/start'

dotenv.config()

if (process.env.TOKEN) {
  const bot = new Telegraf(process.env.TOKEN)
  StartLogic.lanuch(bot)

} else {
  console.log('TOKEN is not availiable')
}