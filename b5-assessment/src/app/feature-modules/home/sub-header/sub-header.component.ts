import { loadCategories } from './../../../store/actions/categories.actions';
import { AppState } from './../../../store/index';
import { CategoriesService } from './../../../services/categories.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  public categories$!: Observable<string[]>;

  constructor(
    private _categoriesService: CategoriesService,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._store.dispatch(loadCategories());
    this.categories$ = this._categoriesService.getAllProductsCategories();
  }

}
