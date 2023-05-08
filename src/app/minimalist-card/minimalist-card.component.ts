import { Component } from '@angular/core';

@Component({
  selector: 'app-minimalist-card',
  templateUrl: './minimalist-card.component.html',
  styleUrls: ['./minimalist-card.component.css']
})
export class MinimalistCardComponent {
  cardText = "Texto sobre doar esperança e bla bla bla"

  donationItems = [{
    itemName: "Cobertores",
    description: null,
    imageUrl: "../../assets/images/cobertores.jpg"

    },{
    
    itemName: "Roupas",
    description: null,
    imageUrl: "../../assets/images/roupas.jpg" 
    
    },{
  
    itemName: "Roupas Intimas",
    description: null,
    imageUrl: "../../assets/images/roupas-intimas.png" 
  
    },{
  
    itemName: "Alimentos",
    description: null,
    imageUrl: "../../assets/images/alimentos.jpg" 
  
    },{
  
    itemName: "Liquidos",
    description: null,
    imageUrl: "../../assets/images/liquidos.jpeg" 
  }]

}
