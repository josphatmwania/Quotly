import { Component, OnInit } from '@angular/core';

import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[]= [
    new Quotes('Maneno ya kitoto kwa watoto ni utani tu, lakini maneno ya kitoto kuwaambia watu wazima ni upumbavu, hatutaki kudanganywa.', 'Mpoto G', 'Josphat Mwania', new Date(2020,7,22)),
    new Quotes('Sins should be buried like the dead. Not that they may be forgotten but we may them and find our way forward nonetheless.','Raymond Reddington', 'Josphat Mwania', new Date(2020,7,25 )),
    
  ]

  deleteQuote(event:boolean, index:number){
    let isTrue = confirm('Are you sure you want to delete this Quote?')

    if (isTrue) {
      this.quotes.splice(index, 1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
