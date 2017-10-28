import { TableData } from './../model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: ['#', 'Name', 'Job Position', 'Level', 'Status', 'Actions'],
      dataRows: [
        ['1', 'Mohamed Safwat', 'Front-End Developer', 'Mid-Level', 'Accepted', ''],
        ['2', 'Mohamed Ghobashy', 'Fornt-End Developer', 'TL', 'Accepted', ''],
        ['3', 'Mai Abd-Elfatah', 'Fornt-End Developer', 'Mid-Level', 'Accepted', ''],
        ['4', 'Mohamed Ali', 'NodeJS Developer', 'Senior', 'Rejected', ''],
        ['5', 'Mostafa Hazm', 'UI/UX Designer', 'Senior', 'Pending', '']
      ]
    };

  }

}
