import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';
import { ConnectedUsersService } from '../../services/connected-users.service';
import { PlayerData } from '../../interfaces/player-data';

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas : any;

  chart!: Chart;

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Usuarios',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.y;
              }
            }
          }
        }
      }
    });
    setInterval(() => {
      const randomData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 50));
      this.chart.data.datasets[0].data = randomData;
      this.chart.update();
    }, 4000);
  }

  constructor(private ConnectedUsersService:ConnectedUsersService, private httpClient: HttpClient) { } // inject UserService


  data: any[] = [];
  playersData: PlayerData[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.ConnectedUsersService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.playersData = data.players;
    });

    this.httpClient
    .get('http://localhost:3000/api').subscribe((data: any) => {
      console.log(data);
      this.data = data
    });
  }

}