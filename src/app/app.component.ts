import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eyes_front';
  constructor(private authGuard:AuthGuard,
    private router: Router ){}

}
