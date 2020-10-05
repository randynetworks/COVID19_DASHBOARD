import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css']
})
export class NationalComponent implements OnInit {

  confirmed : any = [];
  recovered : any = [];
  deaths : any = [];
  constructor(public data: DataService) { }

  ngOnInit(): void {

    var myChart = new Chart('covid', {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

    this.getConfirmed();
    this.getRecovered();
    this.getDeaths();
  }

  getConfirmed() {
    this.confirmed = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmed = data['confirmed'];
      console.log(this.confirmed);
    })
  }

  getRecovered() {
    this.confirmed = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmed = data['recovered'];
      console.log(this.confirmed);
    })
  }

  getDeaths() {
    this.confirmed = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmed = data['deaths'];
      console.log(this.confirmed);
    })
  }


}
