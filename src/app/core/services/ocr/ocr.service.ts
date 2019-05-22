import { Injectable } from '@angular/core';
import * as Tesseract from 'node_modules/tesseract.js/dist/tesseract.min.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor() { }

  public async recognize(imageUrl: string) {
    const worker = new Tesseract.TesseractWorker({
      workerPath: '/assets/lib/tesseract/worker.min.js', // from "tesseract.js/dist/"
      //langPath: '/assets/lib/tesseract/fra.traineddata', // from repo 
      corePath: '/assets/lib/tesseract/tesseract-core.wasm.js', // from "tesseract-core/"
    });

    return await worker.recognize(imageUrl)
      .catch(err => console.error(err))
      .then(result => result)
  }

}
