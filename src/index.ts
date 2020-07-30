import loadImg from './load-image'

export default async function rotate(
  src: string,
  degree: number,
  type?: string, quanlity?: number): Promise<string> {
  let canvas = document.createElement('canvas')
  // @ts-ignore
  let ctx: CanvasRenderingContext2D = canvas.getContext('2d')

  let img = await loadImg(src), angle = ((degree % 180) + 180) % 180 * Math.PI / 180
  let cheight = Math.ceil(
    Math.sin(angle) * img.width + Math.abs(Math.cos(angle)) * img.height)
  let cwidth = Math.ceil(
    Math.sin(angle) * img.height + Math.abs(Math.cos(angle)) * img.width)
  canvas.height = cheight// Math.max(cheight, img.height)
  canvas.width = cwidth // Math.max(cwidth, img.width)
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(angle)
  ctx.drawImage(img, (-img.width) / 2, (-img.height) / 2)
  return canvas.toDataURL(type, quanlity)
}