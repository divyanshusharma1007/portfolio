/* The MyWorkComponent class is responsible for initializing a Swiper carousel and managing a list of
projects. */
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

interface Project {
  name: string;
  description: string;
  url?: string;
}

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css'],
})
export class MyWorkComponent implements OnInit {
  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination],
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
      breakpoints: {
        250: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  projects: Project[] = [
    {
      name: 'Shayara',
      description: `Divyam's React Native poetry app beautifully presents his poems and shayaris, offering a user-friendly platform to savor his artistic expressions`,
      url: 'https://github.com/skprogrammer1007/shayara',
    },
    {
      name: 'my-meal',
      description:
        '"Discover meal nutrition effortlessly on our Meal App. Simplify your dining choices and prioritize health with ease. Your guide to mindful eating',
      url: 'https://github.com/skprogrammer1007/my_meal',
    },
    {
      name: 'blogs-api',
      description:
        'The Node.js and Express.js-powered blogs API seamlessly manages content, providing a robust platform for creating, updating, and retrieving blogs. Efficient, scalable, and developer-friendly, it ensures smooth content management.',
      url: 'https://github.com/skprogrammer1007/sk-programmer',
    },
    {
      name: 'portfolio',
      description:
        'The Node.js and Express.js-powered blogs API seamlessly manages content, providing a robust platform for creating, updating, and retrieving blogs. Efficient, scalable, and developer-friendly, it ensures smooth content management.',
      url: 'https://github.com/skprogrammer1007/sk-programmer',
    },
  ];
}
