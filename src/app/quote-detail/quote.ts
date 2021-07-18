export class Quote {
    public showDescription: boolean;
    constructor(public quote: string,public author: string,public submittedBy: string ,public since: Date, public upVote: number, public downVote :number){
      this.showDescription=false;
    }


}
