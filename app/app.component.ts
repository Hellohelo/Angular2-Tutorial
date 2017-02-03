import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
  image: string;
}

const HEROES: Hero[] = [
  {id: 11, name : 'Mr. Nice', image: 'img1.png'},
  {id: 12, name : 'Narco', image:'img2.png'},
  {id: 13, name : 'Bombasto', image:'img3.png'},
  {id: 14, name: 'Celeritas', image: 'img4.png'},
  {id: 15, name: 'Magneta', image: 'img5.png'},
  {id: 16, name: 'Dynama', image: 'img6.png'},
  {id: 17, name: 'RubberMan', image: 'img1.png'},
  {id: 18, name: 'Dr IQ', image: 'img2.png'},
  {id: 19, name: 'Magma', image: 'img5.png'},
  {id: 20, name: 'Tornado', image: 'img4.png'},
];

@Component({
  selector: 'my-app',
  template: `
  <div id="main">
    <div class="flex-item">
      <h1>{{title}}</h1>
      <h2>My heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes" [class.selected]="hero===selectedHero" (click)="onSelect(hero)" >
          <span class="badge">{{hero.id}}</span>
          {{hero.name}}
        </li>
      </ul>
    </div>
    <div class="flex-item">
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details</h2>
        <img src="../img/{{selectedHero.image}}"/>
        <div><label>id : </label>{{selectedHero.id}}</div>
        <div>
          <label>name : </label>
          <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        </div>
      </div>
    </div>
  </div>
    `,
    styles: [`
    *{
      font-family: Roboto;
    }
  #main{
    display:flex;
    justify-content: space-around;
    margin-left:150px;
  }
  #main:last-child{
    align-items: center;
    margin-right:150px;
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = "Tour of Heroes";
  heroes= HEROES;

 /*mise en place de la méthode onSelect*/
  selectedHero :Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
