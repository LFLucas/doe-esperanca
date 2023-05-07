import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardText = "Texto sobre doar esperança e bla bla bla"
  cardSubtitle = null
  cardTitle = "Doe esperança"
}
