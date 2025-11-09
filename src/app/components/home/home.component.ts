import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, NgImageSliderModule  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {




 imageData:any = [
  {
    image: 'assets/01.jpg',
    thumbImage: 'assets/01.jpg',
    title: ''
  },


  {
    image: 'assets/04.jpg',
    thumbImage: 'assets/04.jpg',
    title: ''
  },
  {
    image: 'assets/05.jpg',
    thumbImage: 'assets/05.jpg',
    title: ''
  },
  {
    image: 'assets/06.jpg',
    thumbImage: 'assets/06.jpg',
    title: ''
  },
   {
    image: 'assets/02.jpg',
    thumbImage: 'assets/02.jpg',
    title: ''
  },
  {
    image: 'assets/07.jpg',
    thumbImage: 'assets/07.jpg',
    title: ''
  },
  {
    image: 'assets/08.jpg',
    thumbImage: 'assets/08.jpg',
    title: ''
  },
  {
    image: 'assets/09.jpg',
    thumbImage: 'assets/09.jpg',
    title: ''
  },
  {
    image: 'assets/10.jpg',
    thumbImage: 'assets/10.jpg',
    title: ''
  },
  {
    image: 'assets/11.jpg',
    thumbImage: 'assets/11.jpg',
    title: ''
  },
  {
    image: 'assets/03.jpg',
    thumbImage: 'assets/03.jpg',
    title: ''
  },
  {
    image: 'assets/12.jpg',
    thumbImage: 'assets/12.jpg',
    title: ''
  },
  {
    image: 'assets/13.jpg',
    thumbImage: 'assets/13.jpg',
    title: ''
  },
  {
    image: 'assets/14.jpg',
    thumbImage: 'assets/14.jpg',
    title: ''
  },
  {
    image: 'assets/15.jpg',
    thumbImage: 'assets/15.jpg',
    title: ''
  },
  {
    image: 'assets/16.jpg',
    thumbImage: 'assets/16.jpg',
    title: ''
  },
  {
    image: 'assets/17.jpg',
    thumbImage: 'assets/17.jpg',
    title: ''
  },
  {
    image: 'assets/18.jpg',
    thumbImage: 'assets/18.jpg',
    title: ''
  },
  {
    image: 'assets/19.jpg',
    thumbImage: 'assets/19.jpg',
    title: ''
  },
  {
    image: 'assets/20.jpg',
    thumbImage: 'assets/20.jpg',
    title: ''
  },
  {
    image: 'assets/21.jpg',
    thumbImage: 'assets/21.jpg',
    title: ''
  },
  {
    image: 'assets/22.jpg',
    thumbImage: 'assets/22.jpg',
    title: ''
  },
  {
    image: 'assets/23.jpg',
    thumbImage: 'assets/23.jpg',
    title: ''
  },{
    image: 'assets/24.jpg',
    thumbImage: 'assets/24.jpg',
    title: ''
  },{
    image: 'assets/25.jpg',
    thumbImage: 'assets/25.jpg',
    title: ''
  },{
    image: 'assets/26.jpg',
    thumbImage: 'assets/26.jpg',
    title: ''
  },{
    image: 'assets/27.jpg',
    thumbImage: 'assets/27.jpg',
    title: ''
  },
{
    image: 'assets/28.jpg',
    thumbImage: 'assets/28.jpg',
    title: ''
  },
];
  constructor() {

  }




  }
