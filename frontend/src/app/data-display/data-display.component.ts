import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {

  httpClient = inject(HttpClient)
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
    .get('http://localhost:3000/api').subscribe((data: any) => {
      console.log(data);
      this.data = data
    });
  }

}
