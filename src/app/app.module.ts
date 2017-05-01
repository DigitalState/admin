import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';

//
import * as _ from 'lodash';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { FormioModule, FormioAppConfig } from 'ng2-formio';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

// Function for setting the default restangular configuration
export function RestangularConfigFactory (restangularProvider) {
  restangularProvider.setBaseUrl('http://localhost:8014/');
  // restangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
  // JSON-LD @id support
  restangularProvider.setRestangularFields({
    id: '@id',
    // selfLink: '@id'
  });
  restangularProvider.setSelfLinkAbsoluteUrl(false);

  // Hydra collections support
  restangularProvider.addResponseInterceptor(function(data, operation) {
    // Remove trailing slash to make Restangular working
    function populateHref(record) {
      if (record['@id']) {
        record.href = record['@id'].substring(1);
      }
    }

    // Populate href property for the collection
    populateHref(data);

    if ('getList' === operation) {
      let collectionResponse = data['hydra:member'];
      collectionResponse.metadata = {};

      // Put metadata in a property of the collection
      _.forEach(data, function(value, key) {
        if ('hydra:member' !== key) {
          collectionResponse.metadata[key] = value;
        }
      });

      // Populate href property for all elements of the collection
      _.forEach(collectionResponse, function(value) {
        populateHref(value);
      });

      return collectionResponse;
    }

    return data;
  });
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    {
      provide: FormioAppConfig,
      useValue: {
        appUrl: 'https://examples.form.io',
        apiUrl: 'https://api.form.io'
      }
    }
  ]
})

export class AppModule {

  constructor(public appRef: ApplicationRef,
              public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
