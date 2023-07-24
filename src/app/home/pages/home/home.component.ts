import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../service/homeService.service';
import { Router } from '@angular/router';
import { Category, Tag } from 'app/señales/Interface/category';
import { Signal } from 'app/home/Interface/signals';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

 query: string = "";
 category: string = "";
 categories: Category[] = []
 categorySelected: Category | null = null;
 tagSelected: Category | null = null;
 tags: Tag[] = []

 signals: Signal[] = [];


 constructor(private service : HomeServiceService, private router:Router){}

  ngOnInit(): void {
this.service.getCategories().subscribe(category => {
  this.categories = category
});

this.service.searchSignal().subscribe(signals => {
  this.signals = signals;
});

}



  getCategoryById(id: number){
    this.service.getCategoriesById(id).subscribe(category => {
      this.tags = category
    })

  }
  guardarSenal() {
    this.service.saveSignal(this.query, this.category).subscribe(signal => {
      console.log("señal guardada con exito");
      this.signals.push(signal)
      this.router.navigate(['/señales']);
    })

  }


}
