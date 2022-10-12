import { ApiGetImage } from "../interface/ApiResponse"

export const startMessage: {firstStart: string} = {
  firstStart: 'Welcome BOY\nUse commands - for see all commands'
}

export const errorMessage: {notFound: string} = {
  notFound: 'Not found images for this tag/s'
}

export const succsessMessage = {
  getPicture: (images: ApiGetImage[]) =>
    `[Source 1](${images[0].source}) \n[Source 2](${images[0].source.replace('jpg', 'png')}) \n[Source 3](${images[0].source.replace('jpg', 'jpeg')})`,
}