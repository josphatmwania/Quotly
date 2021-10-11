import { Component, OnInit } from '@angular/core';

import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[]= [
    new Quotes('HABIT IS STRONGER THAN TALENT. CHAMPIONS ARE KNOWN BY THEIR HABITS..', 'Benjamin Israel', 'Josphat Mwania', new Date(2021,9,9)),
    new Quotes('The provision of basic services to the people is not a privilege. Nor is it a charitable act. The people already paid for the services via the high taxes.', 'Miguna Miguna', 'Josphat Mwania', new Date(2021,9,8)),
    new Quotes('Sins should be buried like the dead. Not that they may be forgotten but we may them and find our way forward nonetheless.','Raymond Reddington', 'Josphat Mwania', new Date(2020,7,25 )),
    
  ]

  deleteQuote(event:boolean, index:number){
    let isTrue = confirm('Are you sure you want to delete this Quote?')

    if (isTrue) {
      this.quotes.splice(index, 1)
    }
  }


  addQuote(newQuote:Quotes){
    this.quotes.push(newQuote);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
