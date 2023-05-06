import { Component, Injector } from '@angular/core';
import { CoreUILayoutComponent } from 'projects/coreui-theme/src/lib/components/core-ui-layout-component';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  constructor(
    private router: Router,
    private injector: Injector,
    iconSetService: IconSetService, 
    private replaceableComponentsService: ReplaceableComponentsService
  ) {
    this.replaceableComponentsService.add({
      component: CoreUILayoutComponent,
      key: eThemeBasicComponents.ApplicationLayout
    });

    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
