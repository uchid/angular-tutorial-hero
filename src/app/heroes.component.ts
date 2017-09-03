import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html' ,
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit  {
  heroes: Hero[];
  selectedHero: Hero;

  //Don't use new with the HeroService
  constructor(
    private heroService: HeroService,
    private router: Router
  ){}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate([ '/detail', this.selectedHero.id ]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
