import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryDetailResolverService } from './category-detail/category-detail-resolver.service';
import { CategoryListResolverService } from './category-management/category-list-resolver.service';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CanDeactivateGuardService } from "../shared/can-deactivate-guard.service";
import { SessionAuthGuardService } from "../shared/session-auth-guard.service";

const routes: Routes = [
    {
        path: 'category-list', children: [
            {
                path: '',
                pathMatch: 'full',
                resolve: {
                    list: CategoryListResolverService
                },
                component: CategoryManagementComponent
            },
            {
                path: 'category/:no',
                canActivate: [SessionAuthGuardService],
                canDeactivate: [CanDeactivateGuardService],
                resolve: {
                    category: CategoryDetailResolverService
                },
                component: CategoryDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        CategoryDetailResolverService,
        CategoryListResolverService
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRoutingModule {}