import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home/services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private homeService: HomeService,

  ) { }

  ngOnInit(): void {
    this.homeService.setLocallyStoredData(localStorage.getItem('data'));
    this.router.navigate(['/home']);
  }
}

