import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { appRoutePaths } from '../app.routes.names';

@Component({
template: '<page-router-outlet></page-router-outlet>',
standalone: false
})
export class ModalRouterComponent implements OnInit {
    constructor(
        protected routerExtensions: RouterExtensions,
        protected activeRoute: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.routerExtensions.navigate(
            [
                appRoutePaths.ROUTE_INTERMEDIARY,
                {
                    relativeTo: this.activeRoute
                }
            ]
        );
    }
}