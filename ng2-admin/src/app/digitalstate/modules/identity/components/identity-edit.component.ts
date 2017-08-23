import { Component, Injector } from '@angular/core';

import { MicroserviceConfig } from '../../../../shared/providers/microservice.provider';
import { IdentityUtils } from '../../../../shared/utils/identity.utils';

import { EntityApiService } from '../entity-api.service';
import { DsBaseEntityFormComponent } from '../../../components/base-entity-form.component';
import { Link } from '../../../models/link';

import 'rxjs/Rx';

@Component({
    selector: 'ds-identity-edit',
    templateUrl: '../templates/identity-form.template.html'
})
export class DsIdentityEditComponent extends DsBaseEntityFormComponent {

    entityUrlPrefix = 'identities';
    pageTitle = 'general.menu.identities';
    backLink = new Link(['../../list'], 'general.list');
    isNew = false;

    constructor(injector: Injector,
                microserviceConfig: MicroserviceConfig,
                entityApiService: EntityApiService) {

        super(injector, microserviceConfig);
        this.entityApiService = entityApiService;
    }
}

@Component({
    selector: 'ds-individual-edit',
    templateUrl: '../templates/identity-form.template.html'
})
export class DsIndividualEditComponent extends DsIdentityEditComponent {

    entityUrlPrefix = 'individuals';
    headerTitle = 'ds.microservices.entity.types.individual';

    constructor(injector: Injector,
                microserviceConfig: MicroserviceConfig,
                entityApiService: EntityApiService) {

        super(injector, microserviceConfig, entityApiService);
    }
}

@Component({
    selector: 'ds-staff-edit',
    templateUrl: '../templates/identity-form.template.html'
})
export class DsStaffEditComponent extends DsIdentityEditComponent {

    entityUrlPrefix = 'staffs';
    headerTitle = 'ds.microservices.entity.types.staff';

    constructor(injector: Injector,
                microserviceConfig: MicroserviceConfig,
                entityApiService: EntityApiService) {

        super(injector, microserviceConfig, entityApiService);
    }
}

@Component({
    selector: 'ds-staff-edit',
    templateUrl: '../templates/identity-form.template.html'
})
export class DsAnonymousEditComponent extends DsIdentityEditComponent {

    entityUrlPrefix = 'anonymouses';
    headerTitle = 'ds.microservices.entity.types.anonymous';

    constructor(injector: Injector,
                microserviceConfig: MicroserviceConfig,
                entityApiService: EntityApiService) {

        super(injector, microserviceConfig, entityApiService);
    }
}