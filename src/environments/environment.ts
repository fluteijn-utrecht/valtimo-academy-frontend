// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {NgxLoggerLevel} from 'ngx-logger';
import {ROLE_ADMIN, ROLE_DEVELOPER, ROLE_USER, ValtimoConfig, UploadProvider, IncludeFunction} from '@valtimo/config';
import {authenticationKeycloak} from './auth/keycloak-config';
import {openZaakExtensionInitializer} from '@valtimo/open-zaak';
import {defaultDefinitionColumns} from './columns';
import {menuItems} from './menu/menu';
import {customDefinitionTables} from './definition/customDefinitionsTables';
import {connectorLinkExtensionInitializer} from '@valtimo/connector-management';

export const environment: ValtimoConfig = {
  production: false,
  initializers: [
    openZaakExtensionInitializer,
    connectorLinkExtensionInitializer
  ],
  authentication: authenticationKeycloak,
  menu: {
    menuItems: menuItems
  },
  whitelistedDomains: [window['env']['whiteListedDomain']],
  mockApi: {
    endpointUri: window['env']['mockApiUri'] || '/mock-api/'
  },
  valtimoApi: {
    endpointUri: window['env']['apiUrl'] || '/api/'
  },
  swagger: {
    endpointUri: window['env']['swaggerUri'] || '/v3/api-docs'
  },
  logger: {
    level: NgxLoggerLevel.TRACE
  },
  definitions: {
    dossiers: []
  },
  openZaak: {
    catalogus: window['env']['openZaakCatalogusId'] || 'b23f4498-eb47-44ea-892d-ed97aff73f92'
  },
  uploadProvider: UploadProvider.OPEN_ZAAK,
  defaultDefinitionTable: defaultDefinitionColumns,
  customDefinitionTables: {
    vergunningsaanvraag: [
      ...defaultDefinitionColumns,
      {propertyName: '$.aanvrager.contactgegevens.voornaam', translationKey: 'firstName', sortable: true}
    ]
  },
  customTaskList: {
    fields: [
      {
        propertyName: 'created',
        translationKey: 'created',
        sortable: true
      },
      {
        propertyName: 'name',
        translationKey: 'name',
        sortable: true
      },
      {
        propertyName: 'assignee',
        translationKey: 'valtimoAssignee.fullName',
      },
      {
        propertyName: 'due',
        translationKey: 'due',
        sortable: true
      },
    ],
    defaultSortedColumn: {
      isSorting: true,
      state: {
        name: 'created',
        direction: 'ASC'
      }
    },
  },
  featureToggles: {
    showUserNameInTopBar: true,
    enableObjectManagement: true
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
