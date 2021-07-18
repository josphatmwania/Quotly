import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes:Quote[ ] =[
      new Quote('Productivity is being able to do things that you were never able to do before' 'Franz Kafka', 'Me',  new Date(2021, 7, 18), 0,0),
      new Quote('Dont be a slave to your emotion.Control them','Buddha', 'Me',  new Date(2021, 7, 17),0,0)
  ];


// Adding new quotes 

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    
  }
  
// Deleting a quote 

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  completeDate(complete: boolean){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
