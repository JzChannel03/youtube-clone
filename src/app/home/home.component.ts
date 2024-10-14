import { Component } from '@angular/core';
import { VideoModule } from '../shared/video/video.module';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [VideoModule],
})
export class HomeComponent {}
