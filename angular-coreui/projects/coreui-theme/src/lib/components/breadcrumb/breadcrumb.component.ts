import {
  ABP,
  getRoutePath,
  RouterEvents,
  RoutesService,
  SubscriptionService,
  TreeNode,
} from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SubscriptionService],
})
export class BreadcrumbComponent implements OnInit {
  segments: Partial<ABP.Route>[] = [];

  constructor(
    public readonly cdRef: ChangeDetectorRef,
    private router: Router,
    private routes: RoutesService,
    private subscription: SubscriptionService,
    private routerEvents: RouterEvents,
  ) {}

  ngOnInit(): void {
    this.subscription.addOne(
      this.routerEvents.getNavigationEvents('End').pipe(
        startWith(null as NavigationEnd),
        map(() => this.routes.search({ path: getRoutePath(this.router) })),
      ),
      route => {
        this.segments = [];
        if (route) {
          let node = { parent: route } as TreeNode<ABP.Route>;

          while (node.parent) {
            node = node.parent;
            const { parent, children, isLeaf, ...segment } = node;
            if (!isAdministration(segment)) { this.segments.unshift(segment); }
          }

          this.cdRef.detectChanges();
        }
      },
    );
  }
}

function isAdministration(route: ABP.Route) {
  return route.name === eThemeSharedRouteNames.Administration;
}
