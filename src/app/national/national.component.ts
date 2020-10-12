import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css']
})
export class NationalComponent implements OnInit {

  confirmed : any ;
  recovered : any ;
  deaths : any;
  hospitalized: any;
  constructor(public data: DataService) { }

  ngOnInit(): void {

  //   var myChart = new Chart('covid', {
  //     type: 'line',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero: true
  //                 }
  //             }]
  //         }
  //     }
  // });

    this.getConfirmed();
    this.getRecovered();
    this.getDeaths();
    this.getHospitalized();
  }

  getConfirmed() {
    this.confirmed = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmed = data[0]['positif'];
      console.log(this.confirmed);
    })
  }

  getRecovered() {
    this.recovered = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.recovered = data[0]['sembuh'];
      console.log(this.recovered);
    })
  }

  getDeaths() {
    this.deaths = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.deaths = data[0]['meninggal'];
      console.log(this.deaths);
    })
  }

  getHospitalized() {
    this.hospitalized = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.hospitalized = data[0]['dirawat'];
      console.log(this.hospitalized);
    })
  }


}
