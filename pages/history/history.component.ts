import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from "../../Components/match-card/match-card.component";

@Component({
    selector: 'app-history',
    standalone: true,
    templateUrl: './history.component.html',
    styleUrl: './history.component.css',
    imports: [MatchCardComponent,MatchCardComponent]
})
export class HistoryComponent implements OnInit{

  allMatches:any
constructor(private api:ApiCallService){

}

ngOnInit(): void {
    this.api.getAllMatches().subscribe({
      next:data=>{
        this.allMatches=data;
      },
      error:error=>{
        console.log(error);
      }
    })
}

}
