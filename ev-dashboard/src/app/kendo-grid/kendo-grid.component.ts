import { Component, OnInit, ViewChild } from '@angular/core';
import { KendoGridService } from './kendo-grid.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrl: './kendo-grid.component.css'
})

export class KendoGridComponent implements OnInit {

  public gridData: any[] = [];

  displayedColumns = ['VIN', 'County', 'City', 'State', 'Postal_Code', 'Model_Year', 'Make', 'Model', 'Electric_Vehicle_Type', 'Electric_Range','Legislative_District'];
  dataSource = new MatTableDataSource(this.gridData);
  @ViewChild(MatSort) sort!: MatSort;

   constructor(private kendoGridService: KendoGridService) {  }

  ngOnInit(): void {
    this.kendoGridService.getCSVData().subscribe(
      data => {
        this.gridData = this.gridData.concat(data);
        this.dataSource.data = this.gridData;
      },
      error => {
        console.error('Error loading CSV data', error);
        this.gridData = [];
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
