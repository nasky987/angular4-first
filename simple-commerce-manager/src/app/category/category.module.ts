import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryItemComponent } from './category-management/category-item/category-item.component';
import { CAT_LIST_PAGE_SIZE } from './category.tokens';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  providers: [
    {
      provide: CAT_LIST_PAGE_SIZE,
      useValue: 3
    }
  ],
  declarations: [CategoryManagementComponent, CategoryDetailComponent, CategoryItemComponent]
})
export class CategoryModule { }
