import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  uploadUrl: string;
  responseData: any = {
    data: []
  };
  chartData: any;

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.uploadUrl = 'http://localhost:3001/api/upload';
    this.getChartData();
  }

  uploadComplete() {
    this.getChartData();
  }

  getChartData() {
    this.demoService.getChartData().subscribe( (data) => {
        this.responseData = data;
        console.log(this.responseData);

        let st = this.responseData.top.splice(0, 10);
        let labels = [];
        let dataSet = [];
        console.log(st);

        st.forEach((state) => {
          labels.push(state['property_state']);
          dataSet.push(state['interest_rate']);
        })

        console.log(labels);
        console.log(dataSet);

        let chart = {
          labels: null,
          datasets: []
        };
        chart.labels = labels;
      //  chart.dataSets = [];
        chart.datasets.push({
          label: 'Interest Rate',
          data: dataSet
        })

        console.log(chart);
        this.chartData = chart;
    });
  }

}
