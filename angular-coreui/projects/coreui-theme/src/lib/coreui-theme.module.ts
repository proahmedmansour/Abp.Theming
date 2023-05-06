import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule, BadgeModule, DropdownModule, FooterModule, GridModule, HeaderModule, NavModule, SidebarModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { RouterModule } from '@angular/router';
import { CoreUILayoutComponent } from './components/core-ui-layout-component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DefaultFooterComponent } from './components/default-footer/default-footer.component';
import { DefaultHeaderComponent } from './components/default-header/default-header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

const coreuiModules = [PerfectScrollbarModule, HeaderModule, FooterModule,
  SidebarModule, NavModule, AvatarModule, GridModule, DropdownModule, IconModule,
  UtilitiesModule, BadgeModule];

  const APP_CONTAINERS = [
    DefaultFooterComponent,
    DefaultHeaderComponent,
    CoreUILayoutComponent,
    BreadcrumbComponent,
  ];

  const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
  };
  
@NgModule({
  declarations: [
    ...APP_CONTAINERS
  ],
  imports: [
    CommonModule,
    coreuiModules,
    RouterModule
  ],
  exports: [
    CoreUILayoutComponent
  ]
})
export class CoreUIModule { }
