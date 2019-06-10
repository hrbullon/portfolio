import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: any = [
    {
      title: 'Home',
      link: '',
      submenu: []
    },
    {
      title: 'Portfolio',
      link: 'portfolio',
      submenu: [
        {
          title: 'flex',
          link: 'portfolio/flex'
        },
        {
          title: 'Switch',
          link: 'portfolio/alt'
        },
        {
          title: 'raw',
          link: 'portfolio/raw'
        },
        {
          title: 'mansory',
          link: 'portfolio/mansory'
        },
      ]
    },
    {
      title: 'Blog',
      link: 'blog',
      submenu: []
    },
    {
      title: 'About',
      link: 'about',
      submenu: []
    },
    {
      title: 'Contact us',
      link: 'contact',
      submenu: []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
