import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  nticoIsShown: boolean = false;
  quadraIsShown: boolean = false;
  norautoIsShown: boolean = false;
  baillycouroubleIsShown: boolean = false;
  cookieIcon: any;
  gameIcon: any;
  basketBallIcon: any;

  detailOnClick(id: String) {
    if (id == "ntico_detail") {
      this.nticoIsShown = !this.nticoIsShown;
    }
    else if (id == "quadra_detail") {
      this.quadraIsShown = !this.quadraIsShown;
    }
    else if (id == "norauto_detail") {
      this.norautoIsShown = !this.norautoIsShown;
    }
    else if (id == "baillycourouble_detail") {
      this.baillycouroubleIsShown = !this.baillycouroubleIsShown;
    }

  }

  constructor() {
  }

  ngOnInit(): void {
    this.cookieIcon = awesom.faCookie;
    this.gameIcon = awesom.faGamepad;
    this.basketBallIcon = awesom.faBasketballBall;
  }

}
