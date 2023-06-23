import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
notelist:Notes[]=[
  {
    text:"STYLING ACCESSORIES THAT COMPLEMENT YOUR FORMAL WEAR"
  },
  {
    text:"5 CLASSIC LOOKS FOR HER"
  },
  {
    text:"ACING YOUR FORMAL ATTIRE"
  },
  {
    text:"5 CLASSELECTING & STYLING YOUR WORKWEAR"
  },
  {
    text:"LET’S TALK ‘BODY TYPES’, WOMEN!"
  },
  {
    text:"5 CLASSIC LOOKS FOR HER"
  },
  {
    text:"TIPS FOR A GREAT OUTFIT"
  },
  {
    text:"DRESSING TO SUCCEED: THE IMPORTANCE OF ‘FORMALS’"
  },
  {
    text:"WORKWEAR FOR ALL SEASONS: THE WOMEN EDIT"
  },
  {
    text:"THE ACECRAFT DIFFERENCE"
  },
  {
    text:"CORPORATE TO CUPCAKES! – STORY OF A SUPERWOMAN."
  },
  {
    text:"HOW TO COMPLETE YOUR COLLEGE LOOK"
  },
  {
    text:"DRESS THE RIGHT WAY TO IMPRESS THE RIGHT WAY"
  },
]
}
interface Notes{
  text:string|any;
}
