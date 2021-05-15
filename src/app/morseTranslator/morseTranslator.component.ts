import { Component } from '@angular/core'
import * as flashlight from "nativescript-flashlight";
import { TNSPlayer } from 'nativescript-audio';

@Component({
  selector:'morseTranslator',
  templateUrl:'morseTranslator.component.html',
  moduleId:module.id
})

export class morseTranslator {
  private _player: TNSPlayer;
  constructor() {
     this._player = new TNSPlayer();
     this._player.debug = false;
  }

  alphabet:Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "&", "(", ")", "-", "_", "=", "+", ".", ",", "/", "?", ";", ":", "\"", "\'" ];
  morse:Array<string> = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-","-....","--...","---..","----.","-----","-.-.--",".--.-.", ".....", ".-...", "-.--.", "-.--.-", "-....-", "..--.-", "-...-", ".-.-.", ".-.-.-", "--..--", "-..-.", "..--..", "-.-.-.", "---...", ".----.", ".-..-." ];

  encodeMessage(e:string):string{
    let encoded = "";
    let words = e.split(/\s+/).filter(function(i){return i});
    for (let i = 0; i < words.length; i++) {
      let ch = words[i].split('').filter(function(i){return i});
      for (let j = 0; j < ch.length; j++) {
          if (this.alphabet.indexOf(ch[j]) > -1){
            encoded += this.morse[this.alphabet.indexOf(ch[j])];
            if (j + 1 != ch.length) encoded += "*";
          }
      }
      if (i + 1 != words.length) encoded += "|";
    }
    return encoded;
  }

  decodeMessage(e:string):string{
    let decoded = "";
    var regex = /^[\.\-\*\|]+$/;
    if(e.match(regex) == null ){
      return 'Invalid characters!\n . (dot)\n - (dash)\n * (letters separator)\n | (word separator)';
    }
    let encodedWords = e.split('|').filter(function(i){return i});
    for (let i = 0; i < encodedWords.length; i++)
    {
        let ch = encodedWords[i].split('*').filter(function(i){return i});
        for (let j = 0; j < ch.length; j++)
        {
          if(this.morse.indexOf(ch[j]) > -1)decoded += this.alphabet[this.morse.indexOf(ch[j])];
        }
        if (i + 1 != encodedWords.length)  decoded += " ";
    }
    return decoded;
  }
  async playMorseCode(msg:string){
    for (let i = 0; i < msg.length; i++) {
      var currentUnit:number = 60;
      var play:boolean =true;
      if(msg[i] == "." ) currentUnit *=3;
      else if(msg[i] == "-") currentUnit *=7;
      else if(msg[i] == "*") {
        currentUnit *=3;
        play=false;
      }
      else if(msg[i] == "|") {
        currentUnit *=10;
        play=false;
      }
      if(play){
        if(flashlight.isAvailable() ) flashlight.on();
        await this._player.playFromFile({audioFile: '~/audio/beep.wav',loop: false});
        await this.wait({delay:currentUnit});
      }

      if(flashlight.isAvailable() ) flashlight.off();
      await this._player.pause();
      await this.wait({delay:currentUnit});


    }
  }

  private wait(arg:{delay:number} ) {
    return new Promise(resolve => setTimeout(resolve, arg.delay));
  }
}
