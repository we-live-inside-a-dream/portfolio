import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
  }



}
