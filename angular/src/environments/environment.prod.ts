import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Theming',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44318/',
    redirectUri: baseUrl,
    clientId: 'Theming_App',
    responseType: 'code',
    scope: 'offline_access Theming',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44318',
      rootNamespace: 'Abp.Theming',
    },
  },
} as Environment;
