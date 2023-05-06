import { ABP, RoutesService, eLayoutType } from '@abp/ng.core';
import { eIdentityRouteNames } from '@abp/ng.identity/config';
import { eSettingManagementRouteNames } from '@abp/ng.setting-management';
import { eTenantManagementRouteNames } from '@abp/ng.tenant-management/config';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    const newIdentityRouteConfig: Partial<ABP.Route> = {
      iconClass: 'cil-user',
      path: '/identity',
    };

    routesService.patch(eIdentityRouteNames.IdentityManagement, newIdentityRouteConfig);

    const newTenantRouteConfig: Partial<ABP.Route> = {
      path: '/tenant-management',
      iconClass: 'cil-people', 
    };
    
    routesService.patch(eTenantManagementRouteNames.TenantManagement, newTenantRouteConfig);
    const newSettingsRouteConfig: Partial<ABP.Route> = {
      iconClass: 'cil-settings',
    };

    routesService.patch(eSettingManagementRouteNames.Settings, newSettingsRouteConfig);
    
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'cil-speedometer',
        order: 1,
        layout: eLayoutType.application,
      },
    ]);
  };
}
