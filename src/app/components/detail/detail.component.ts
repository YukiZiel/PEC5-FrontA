import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/components.service';
import { Detail } from 'src/app/models/detail.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  detail!:Detail;
  showDetails = false;
  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log('Identifier --> ', identifier);

    this.charactersService.getDetailById(identifier).subscribe((detail) => {
     
      if (!detail){
        this.router.navigateByUrl('/');
        return;
      }

      this.detail = detail;
      console.log('Detail --> ', this.detail);
    });
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
