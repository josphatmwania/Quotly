import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() details:Quotes;
  @Output() isToDelete=new EventEmitter<boolean>();

  constructor() { }

  upvote=0; 
  downvote=0;

  upVote(){
    return this.upvote++;

  }

  downVote(){
    return this.downvote++;
  }

  ngOnInit(): void {
  }


  toDelete(isTrue:boolean){
    this.isToDelete.emit(isTrue);
    
  }



}
