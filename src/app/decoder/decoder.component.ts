import { Component, OnInit } from '@angular/core'
import { morseTranslator } from '../morseTranslator/morseTranslator.component'
import { Toasty } from "@triniwiz/nativescript-toasty"

@Component({
  selector: 'Decoder',
  templateUrl: './decoder.component.html',
  styleUrls:['./decoder.component.css'],
  moduleId:module.id
})
export class DecoderComponent implements OnInit {
  constructor(){}
  translator:morseTranslator;
  testText:string;
  clipboard = require("nativescript-clipboard");
  translatedText:string = "";
  ngOnInit() {
    this.translator = new morseTranslator();
  }
  translateText(e){
    this.translatedText = this.translator.decodeMessage(e.object.text.toLowerCase());
  }
  copyToClipboard(){
    this.clipboard.setText(this.translatedText).then(function() {
      new Toasty({ text: 'Copied to the clipboard!' }).show();
    })
  }
}
