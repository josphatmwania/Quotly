import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
// import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
// import { QuoteFormComponent } from './quote-form/quote-form.component';
// import { DateCountPipe } from './date-count.pipe';
import {FormsModule }  from  '@angular/forms';
// import { HighlightersComponent } from './highlighters/highlighters.component';
import { HighlightersDirective } from './quote-detail/highlighters.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    DateCountPipe,
    HighlightersComponent,
    HighlightersDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
