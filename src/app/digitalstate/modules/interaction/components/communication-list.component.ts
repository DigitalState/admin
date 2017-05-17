import { Component } from '@angular/core';
import 'rxjs/Rx';

import { EntityApiService } from '../entity-api.service';
import { DsBaseEntityListComponent } from '../../../components/base-list.component';
import { MicroserviceConfig } from '../../microservice.provider';

@Component({
    selector: 'ds-communication-list',
    templateUrl: '../templates/communication-list.template.html'
})
export class DsCommunicationListComponent extends DsBaseEntityListComponent {

    entityUrlPrefix = 'communications';

    constructor(microserviceConfig: MicroserviceConfig,
                entityApiService: EntityApiService) {
        super(microserviceConfig);
        this.entityApiService = entityApiService;
    }

    setupList() {
        super.setupList();
        this.columns = [
            { prop: 'title', cellTemplate: this.textCellTpl, headerTemplate: this.headerTpl, filterable: true },
        ];
    }
}
