import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as visavail from "visavail";
import * as d3 from "d3";
import { fakeData } from './fake-data';


@Component({
  selector: 'app-visavail',
  templateUrl: './visavail.component.html',
  styleUrls: ['./visavail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VisavailComponent implements OnInit {

  chart: any = {};
  alarm_bar: any = {};

  constructor() {}

  ngOnInit() {
    this.chart['options'] = {
      id_div_container: "alarm_bar_container",
      id_div_graph: "alarm_bar_div",
      date_in_utc: false,
      width: document.getElementById("alarm_bar_div")?.clientWidth,
      line_spacing: 24,
      tooltip: {
        height: 18,
        position: "overlay",
        left_spacing: 20,
      },
      responsive: {
        enabled: true
      },
      onClickBlock: (d: any, i: any) => {
        console.log(d[0].toISOString());
        console.log(d[1]);
        console.log(d[2].toISOString());
      },
    };
    this.chart['dataset'] = fakeData;
    this.chart['chart'] = visavail.generate(this.chart['options'], this.chart['dataset']);
  }
}
