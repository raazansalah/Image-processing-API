import express from 'express';
import isValidParam from '../../utils/paramvalidation';
import path from 'path';
import fs from 'fs';
import resizeImage from '../../utils/resize';
const images = express.Router();

images.get('/', async (req, res) => {
  // url query params
  const filename: string = req.query.filename as string;
  const height = Number(req.query.width) as number;
  const width = Number(req.query.height) as number;
  //parameter validation
  if (isValidParam(filename, height, width)) {
    const imagePath = `${path.resolve(
      __dirname,
      `../../assets/images/${filename}.jpg`
    )}`;
    const thumbImagePath = `${path.resolve(
      __dirname,
      `../../assets/thumb/${filename}_${width}_${height}.jpg`
    )}`;
    //check if image is exist
    if (fs.existsSync(imagePath)) {
      if (fs.existsSync(thumbImagePath)) {
        res.sendFile(thumbImagePath);
        res.status(200);
      } else {
        await resizeImage(imagePath, thumbImagePath, width, height);
        res.sendFile(thumbImagePath);
        res.status(200);
      }
    } else {
      res.status(404);
      res.send('this image is not exit ,Please enter a correct filename');
    }
  } else {
    res.status(400);
    res.send('wrong or missing parameters make sure of URL');
  }
});

export default images;
