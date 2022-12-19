import sharp from 'sharp';

async function resizeImage(image: string, thumb: string, w: number, h: number) {
  try {
    await sharp(image).resize(w, h).toFile(thumb);
    console.log(`image resized by ${w} and ${h}`);
  } catch (error) {
    console.log(error);
  }
}

export default resizeImage;
