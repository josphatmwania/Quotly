import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() emitQuote=new EventEmitter<Quotes>();
  newQuotes = new Quotes('', '','', new Date());

  submiQuote(){
    this.emitQuote.emit(this.newQuotes)
    this.newQuotes = new Quotes('', '','', new Date());

  }

  constructor() { }

  ngOnInit(): void {
  }

}
