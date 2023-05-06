import { ABP, LocalizationService, RoutesService, TreeNode } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-coreui-layout',
    templateUrl: './core-ui-layout.component.html',
})

export class CoreUILayoutComponent implements OnInit {
  public navItems: INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(
    private routesService: RoutesService,
    private localizationService: LocalizationService) {}

    ngOnInit(): void {
      this.routesService.visible$.subscribe(route => {
        this.navItems = [];
        this.fillNavItems(route);
      });
    }

    fillNavItems(nodes: TreeNode<ABP.Route>[] | TreeNode<ABP.Route> | undefined, navs?: INavData[]) {
      if (!nodes) { return; }
      else if (nodes instanceof Array) {
        nodes.forEach(item => {
          this.fillSingleItem(item, navs);
        });
      } else {
        this.fillSingleItem(nodes, navs);
      }
    }
   
    fillSingleItem(item: TreeNode<ABP.Route>, navs?: INavData[]) {
      const navItem = this.addNavItem(item, navs);
      if (!item.isLeaf && this.routesService.hasChildren(item.name)) {
        if (item.path === undefined) {
          this.navItems.push({
            title: true,
            name: this.localizationService.instant(item.name)
          });
          this.fillNavItems(item.children);
        }
        else {
          navItem.children = [];
          this.fillNavItems(item.children, navItem.children);
        }
      }
    }
   
    addNavItem(item: ABP.Route, navs?: INavData[]): INavData{
      if (item.path === undefined) {
        return;
      }
   
      const localName = this.localizationService.instant(item.name);
      const navItem: INavData = {
        name: localName,
        url: item.path,
        iconComponent: {name: item.iconClass} 
      };
   
      if (navs) {
        navs.push(navItem);
      } else {
        this.navItems.push(navItem);
      }
   
      return navItem;
    }
  }
  