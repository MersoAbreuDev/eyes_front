import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterGuard } from 'src/guards/router.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eyes_front';
  constructor(private routerGuard:RouterGuard,
    private router: Router ){}

}
