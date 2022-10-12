import { ApiGetImage } from "../interface/ApiResponse"
import { errorMessage, succsessMessage } from '../utils/defMessage'
const BooruApi = require('booruwrapperapi/src/BooruApi')

class GetImage {
  public async getPicture(ctx, page = 0) {

    const tags = ctx.update.message.text.replace('/getpic', '')
    const API = new BooruApi()

    API.GetImage(tags.split(' '), page).then((images: ApiGetImage[]) => {
      if (!images.length) {
        ctx.reply(errorMessage.notFound)
      } else {
        ctx.reply(succsessMessage.getPicture(images), { parse_mode: 'MarkdownV2' })
      }
    })
  }
}

export default new GetImage();