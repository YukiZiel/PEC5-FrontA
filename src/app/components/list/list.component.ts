import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/models/detail.interface';
import { CharactersService } from 'src/app/services/components.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void', 
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class ListComponent implements OnInit{
  characters: Detail[] = [];
  displayedColumns: string[] = ['id', 'name'];
  view: 'cards' | 'table' = 'cards';
  isLoading = true;
  constructor(private charactersService: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data) => {
      this.characters = data.results;
      this.isLoading = false;
    });
  }

  toggleView(view: 'cards' | 'table'): void {
    this.view = view;
  }
}

// export class ListComponent implements OnInit{
//   characters: Detail[] = [];
//   constructor(private charactersService: CharactersService) {}

//   ngOnInit(): void {
//     this.charactersService.getAllCharacters().subscribe((data) => 
//         this.characters = data.results);
//   }
// }
