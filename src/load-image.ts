export default async function load(src:string):Promise<HTMLImageElement>{
  return new Promise(resolve=>{
    let img = new Image
    img.onload = function(){
      resolve(img)
    }
    img.src = src
  })
}