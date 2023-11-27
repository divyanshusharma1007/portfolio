/* The code you provided is defining a TypeScript component called `SkillsComponent`. This component is
part of an Angular application. */
/* The code you provided is written in TypeScript and it defines a component called `SkillsComponent`. */
import { Component } from '@angular/core';

export interface Section {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [
  ]
})
export class SkillsComponent {
  sections: Section[] = [
    {
      title: 'Front-End',
      items: ['HTML', 'CSS', 'Javascript', 'React', 'Angular', 'Tailwind'],
    },
    {
      title: 'Backend-End',
      items: ['Node', 'Express', 'Mongo Db'],
    },
    {
      title: 'Programming',
      items: ['CPP', 'Python', 'Solidity','DSA', 'DBMS', 'Operation Systems', 'OOPM'],
    },
    // {
    //   title: 'Principles',
    //   items: [],
    // },
    // {
    //   title: 'Principles', // Repeated section
    //   items: ['DSA', 'DBMS', 'Operation Systems', 'OOPM'],
    // },
  ];
}
