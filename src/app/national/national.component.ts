import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css']
})

export class NationalComponent implements OnInit {

  updateCovid : any ;

  // statistik
  confirmed : any ;
  recovered : any ;
  deaths : any;
  hospitalized: any;

  // penambahan
  confirmsAdded : any;
  recoveredAdded : any;
  deathsAdded : any;


  constructor(public data: DataService) { }

  ngOnInit(): void {

    this.getDataupdateCovid();

    // STATISTIK
    this.getAllCase();
    this.getRecovered();
    this.getDeaths();
    this.getHospitalized();

    // TAMBAHAN
    this.getRecoveredAdded();
    this.getDeathsAdded();
    this.getConfirmsAdded();


  }

  comma(x){
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }

  // STATISTIK

  getDataupdateCovid(){
    this.updateCovid = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.updateCovid = data['last_date'];
      console.log(this.updateCovid);
    })
  }

  getAllCase() {
    this.confirmed = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmed = this.comma(data['list_data'][2]['jumlah_kasus']);
      console.log(this.confirmed);
    })
  }

  getRecovered() {
    this.recovered = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.recovered = this.comma(data['list_data'][2]['jumlah_sembuh']);
      console.log(this.recovered);
    })
  }

  getDeaths() {
    this.deaths = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.deaths = this.comma(data['list_data'][2]['jumlah_meninggal']);
      console.log(this.deaths);
    })
  }

  getHospitalized() {
    this.hospitalized = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.hospitalized = this.comma(data['list_data'][2]['jumlah_dirawat']);
      console.log(this.hospitalized);
    })
  }






  // PENAMBAHAN
  getRecoveredAdded(){
    this.recoveredAdded = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.recoveredAdded = this.comma(data['list_data'][2]['penambahan']['sembuh']);
      console.log(this.recoveredAdded);
    })
  }

  getDeathsAdded(){
    this.deathsAdded = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.deathsAdded = this.comma(data['list_data'][2]['penambahan']['meninggal']);
      console.log(this.deathsAdded);
    })
  }

  getConfirmsAdded(){
    this.confirmsAdded = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmsAdded = this.comma(data['list_data'][2]['penambahan']['positif']);
      console.log(this.confirmsAdded);
    })
  }


}
