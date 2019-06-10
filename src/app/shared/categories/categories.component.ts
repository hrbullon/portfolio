import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  leftmenu: any = [
        {
          title: 'flex',
          link: '/portfolio/flex'
        },
        {
          title: 'Switch',
          link: '/portfolio/alt'
        },
        {
          title: 'raw',
          link: '/portfolio/raw'
        },
        {
          title: 'mansory',
          link: '/portfolio/mansory'
        },
  ];
  constructor() { }

  ngOnInit() {
  }

}
