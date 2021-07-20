import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {
  
  transform(value: any): number {
    let today: Date = new Date(); //gets current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate()); //gets day without time
    var dayCounter = Math.abs(todayWithNoTime - value) //returns value in milliseconds
    const secondsInDay = 86400;
    var dayCountSeconds = dayCounter*0.001;
    var dateCounter = dayCountSeconds/secondsInDay;
    if (dateCounter >= 1 && value < todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

 

}
