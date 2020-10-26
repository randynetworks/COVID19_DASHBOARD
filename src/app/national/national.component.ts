import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'node_modules/chart.js';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css'],
})
export class NationalComponent implements OnInit {


  title = 'Dashboard Covid-19 By Ayoboga Education';
  updateCovid: any;

  // statistik
  confirmed: any;
  recovered: any;
  deaths: any;
  hospitalized: any;

  // penambahan
  confirmsAdded: any;
  recoveredAdded: any;
  deathsAdded: any;

  // Data umur
  listUmur: any = [];

  // data gender
  listGender: any = [];

  constructor(
    public data: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    //SEO
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Dashboard Covid-19 By Ayoboga Education' },
      { name: 'description', content: 'Dashboard Covid-19 By Ayoboga Education (Experiment Only)' },
      { name: 'robots', content: 'Covid,pandemic' }
    ]);
    // chart
    var myChart = new Chart('oldChart', {
      type: 'doughnut',
      data: {
        labels: ['0 -5', '6 - 18', '19 - 30', '31 - 45', '46 - 59', '> 59'],
        datasets: [
          {
            label: '# of Votes',
            data: this.listUmur,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });

    var myChart2 = new Chart('jkChart', {
      type: 'doughnut',
      data: {
        labels: ['Laki-Laki', 'Perempuan'],
        datasets: [
          {
            label: '# of Votes',
            data: this.listGender,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });

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

    // data
    this.getDataUmur();
    this.getDataGender();

    this.prosesPerhitungan();
  }

  comma(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  // STATISTIK

  getDataupdateCovid() {
    this.updateCovid = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.updateCovid = data['last_date'];
      // console.log(this.updateCovid);
    });
  }

  getAllCase() {
    this.confirmed = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmed = this.comma(data['list_data'][2]['jumlah_kasus']);
      // console.log(this.confirmed);
    });
  }

  getRecovered() {
    this.recovered = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.recovered = this.comma(data['list_data'][2]['jumlah_sembuh']);
      // console.log(this.recovered);
    });
  }

  getDeaths() {
    this.deaths = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.deaths = this.comma(data['list_data'][2]['jumlah_meninggal']);
      // console.log(this.deaths);
    });
  }

  getHospitalized() {
    this.hospitalized = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.hospitalized = this.comma(data['list_data'][2]['jumlah_dirawat']);
      // console.log(this.hospitalized);
    });
  }

  // PENAMBAHAN
  getRecoveredAdded() {
    this.recoveredAdded = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.recoveredAdded = this.comma(
        data['list_data'][2]['penambahan']['sembuh']
      );
      // console.log(this.recoveredAdded);
    });
  }

  getDeathsAdded() {
    this.deathsAdded = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.deathsAdded = this.comma(
        data['list_data'][2]['penambahan']['meninggal']
      );
      // console.log(this.deathsAdded);
    });
  }

  getConfirmsAdded() {
    this.confirmsAdded = [];
    this.data.getCovidAll().subscribe((data: {}) => {
      this.confirmsAdded = this.comma(
        data['list_data'][2]['penambahan']['positif']
      );
      // console.log(this.confirmsAdded);
    });
  }

  // data umur
  getDataUmur() {
    this.data.getCovidAll().subscribe((data: {}) => {
      for (let i = 0; i <= 5; i++) {
        this.listUmur.push(
          data['list_data'][2]['kelompok_umur'][i]['doc_count']
        );
      }
    });
    // console.log(this.listUmur);
  }

  // data Gender
  getDataGender() {
    this.data.getCovidAll().subscribe((data: {}) => {
      for (let i = 0; i <= 1; i++) {
        this.listGender.push(
          data['list_data'][2]['jenis_kelamin'][i]['doc_count']
        );
      }
    });
    // console.log(this.listGender);
  }

  //   Membuat function prosesPerhitungan
  prosesPerhitungan() {
    // menampilkan string di console
    console.log("Fungsi prosesPerhitungan() dipanggil");

    // memilih nilai dari id input-j (Jumlah total ranjang di rumah sakit)

    var j: any = (<HTMLInputElement>document.getElementById("input-j")).value;
    // memilih nilai dari id input-t (Jumlah total ranjang di rumah sakit yang terisi)
    var t: any = (<HTMLInputElement>document.getElementById("input-t")).value;

    // Buat formula untuk menghitung persentase keterisian ranjang (ptj) !
    // Persentase keterisian ranjang = ranjang yang terisi dibagi dengan total ranjang

    var ptj = t / j;

    // menampilkan text melalui output-ptj
    document.getElementById("output-ptj").textContent =
      ptj + " %";

    /*
            Buat formula untuk menampilkan kondisi keterisian ranjang (k)
            Jika dibawah 30%, kondisi = AMAN
            Jika 30% - 70%, kondisi = WASPADA
            Jika diatas 70%, kondisi = DARURAT
          */
    var k = "";
    if (ptj <= 0.3) {
      k = "AMAN";
    } else if (ptj <= 0.7) {
      k = "WASPADA";
    } else if (ptj > 0.7) {
      k = "DARURAT";
    }

    // menampilkan ketersediaan ranjang (k) melalui it output-k
    document.getElementById("output-k").textContent = k;
  }
}
