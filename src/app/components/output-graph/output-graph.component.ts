import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';


@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.scss']
})
export class OutputGraphComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3, 4 , 5, 6, 7],
      type: 'area',
    }],
    title: {
      text: 'ERP Stats',
      style: {
        color: 'blue'
      }
    }
    };

  constructor() { }

  ngOnInit(): void {
  }

}

