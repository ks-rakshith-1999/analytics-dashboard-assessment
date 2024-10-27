import { Component, OnInit } from '@angular/core';
import { KendoGridService } from '../kendo-grid/kendo-grid.service';
import { Chart, ChartData, ChartDataset, ChartOptions, ChartTypeRegistry, registerables } from 'chart.js'

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  public gridData: any[] = [];
  public columnNames: string[] = [];
  public chartOptions: ChartOptions = { responsive: true };
  public selectedColumn: string = '';
  public chartLabels: string[] = [];
  public chartData: ChartDataset<'bar'>[] = [];
  public chartType: keyof ChartTypeRegistry = 'bar';
  public chartPlugins = [];
  public chartLegend: boolean = true;
  public chart: any;

  constructor(private kendoGridService: KendoGridService) { }

  ngOnInit() { 
    this.kendoGridService.getCSVData().subscribe(
      data => {
        this.gridData = data;
        this.chartLabels = data.map(item => item.Model); // Extract model names
        this.chartData = [{
          data: data.map(item => item['Electric_Range']), // Extract electric ranges
          label: 'Electric Range',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }];
        this.createChart();
      },
      error => {
        console.error('Error loading CSV data', error);
      }
    );
  }

  createChart() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const context = canvas?.getContext('2d');
    if (context) {
      if (this.chart) {
        this.chart.destroy(); // Destroy previous chart instance to avoid overlap
      }
      this.chart = new Chart(context, {
        type: this.chartType,
        data: {
          labels: this.chartLabels,
          datasets: this.chartData
        },
        options: this.chartOptions
      });
    } else {
      console.error('Unable to get canvas context.');
    }
  }
}
