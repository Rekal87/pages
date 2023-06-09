import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Kobe Bryant',
      url: 'https://images.unsplash.com/photo-1584770557404-a5d2a798e81a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TkJBfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Tesla',
      url: 'https://images.unsplash.com/photo-1669625342302-e2215b90a5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlc2xhJTIwZG9vcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'City',
      url: 'https://images.unsplash.com/photo-1683490486144-716f98fceac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfE1yNDlFdmg1U2tzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
  ];
}
