import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{
    pointTableMatches:any;
    tableHeading:any;
match: any;
  constructor(private api:ApiCallService){
       
  }
  ngOnInit(): void {
    this.api.getPointTable().subscribe({
      next:data=>{
        this.pointTableMatches=data;
        this.tableHeading=[...this.pointTableMatches[0]];
      },
      error:error=>{
        console.log(error);
      }
    
    })
  }

}
