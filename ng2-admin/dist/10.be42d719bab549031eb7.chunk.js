webpackJsonp([10],{1766:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(11),a=n(4),s=n(314),o=(n.n(s),n(1943)),c=n(1802),l=n(313),u=n(1790),p=n(316),h=n(1816),d=n(1819),f=n(1820),y=n(1817),m=n(1818);n.d(e,"MICROSERVICE_NAME",(function(){return g})),n.d(e,"DsAssetModule",(function(){return v}));var g="assets",v=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getMicroserviceName=function(){return g},e})(u.a);v=__decorate([n.i(i.NgModule)({imports:[r.CommonModule,a.FormsModule,s.NgxDatatableModule,p.a,o.a],declarations:[h.a,d.a,f.a,y.a,m.a],providers:[c.a,l.a,l.c]})],v)},1781:function(t,e,n){"use strict";var i=n(315),r=n(51),a=n(1782),s=n(36),o=(n.n(s),n(1)),c=(n.n(o),n(206)),l=n.n(c),u=n(832),p=n.n(u),h=n(833),d=n.n(h),f=n(91),y=n.n(f),m=n(319),g=n.n(m);n.d(e,"a",(function(){return v}));var v=(function(t){function e(e,n){var a=t.call(this,e)||this;return a.injector=e,a.microserviceConfig=n,a.headerTitle="",a.headerSubtitle="",a.submitted=!1,a.formErrors={},a.entityMetadata={},a.subscriptions={},a.active=!0,a.auth=e.get(r.a),a.staticTranslate=e.get(i.a),a}return __extends(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.loadEntityMetaData(),this.lang=this.translate.currentLang,this.subscriptions.lang=this.translate.onLangChange.subscribe((function(t){e.lang=e.translate.currentLang,e.prepareEntityParent()})),this.translate.getTranslation(this.translate.currentLang).subscribe((function(){e.formLang=e.translate.currentLang})),Object.keys(this.entityMetadata).forEach((function(t){e.formErrors[t]=""})),this.subscriptions.entity=this.prepareEntity().subscribe((function(t){return e.prepareEntitySubscriptionHandler(t)}))},e.prototype.ngOnDestroy=function(){var t=this;Object.keys(this.subscriptions).forEach((function(e){return t.subscriptions[e].unsubscribe()})),this.subscriptions=void 0},e.prototype.loadEntityMetaData=function(){this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties},e.prototype.onRouteParams=function(t){this.routeParams=t},e.prototype.prepareEntity=function(){var t=this;return this.route.params.flatMap((function(e){var n=e.id,i=e[t.entityParentUrlParam];return t.onRouteParams(e),t.isNew?t.createBlankEntity().flatMap((function(e){return t.entity=e,t.prepareEntityParent(t.entityParentUrlPrefix,i).flatMap((function(t){return o.Observable.of({entity:e,entityParent:t})}))})):t.entityApiService.getOne(t.entityUrlPrefix,n).flatMap((function(e){return t.entity=l()(t.entity,e),t.prepareEntityParent(t.entityParentUrlPrefix,i).flatMap((function(t){return o.Observable.of({entity:e,entityParent:t})}))}))}))},e.prototype.prepareEntityParent=function(t,e){var n=this;return this.entityParent?(this.generateBackLink(),o.Observable.of(this.entityParent)):t&&e?this.entityApiService.getOne(t,e).flatMap((function(t){return n.entityParent=t,n.generateBackLink(),o.Observable.of(t)})):o.Observable.of(null)},e.prototype.createBlankEntity=function(){var t=this,e=(this.auth.getAuthUser(),{owner:"BusinessUnit",weight:0,version:1});return Object.keys(this.entityMetadata).forEach((function(n,i){var r=t.entityMetadata[n],a=r.hasOwnProperty("default")?r.default:"";r.hasOwnProperty("translated")&&!0===r.translated?(e[n]={},t.translate.langs.forEach((function(t){e[n][t]=a}))):e[n]=a})),o.Observable.of(e)},e.prototype.displayFormErrors=function(t){if(void 0===t&&(t=!0),this.entityForm){var e=this.entityForm.form;for(var n in this.formErrors){this.formErrors[n]="";var i=e.get(n);if(i&&(i.dirty||t)&&!i.valid)for(var r in i.errors)this.setFormError(n,r)}}},e.prototype.prepareEntitySubscriptionHandler=function(t){this.onEntityPrepared(t),this.setBreadcrumbData(),this.commitBreadcrumb()},e.prototype.onEntityPrepared=function(t){},e.prototype.setBreadcrumbData=function(){this.pageBreadcrumbData.title=this.isNew?this.headerTitle:this.entity?this.entity.title:null,this.pageBreadcrumbData.subtitle=this.isNew?"ds.microservices.entity.action.create":"ds.microservices.entity.action.edit",this.pageBreadcrumbData.tags=["crud-"+(this.isNew?"create":"edit"),"prefix-"+this.entityUrlPrefix]},e.prototype.onFormInit=function(t){this.currentForm=t},e.prototype.onFormChange=function(t){var e=this;this.currentForm!==this.entityForm&&(this.entityForm=this.currentForm,this.entityForm&&this.entityForm.valueChanges.subscribe((function(t){return e.onValueChanged(t)})))},e.prototype.onFormCancel=function(){this.location.back()},e.prototype.onFormLanguageChange=function(t){this.formLang=t.key},e.prototype.onFormSubmit=function(t){if(!t.valid)return this.displayFormErrors(),this.toastr.error(this.translate.instant("ds.messages.formInvalid")),!1;this.submitted=!0,this.isNew?this.saveNewEntity(t):this.saveExistingEntity(t)},e.prototype.onValueChanged=function(t){this.displayFormErrors(!1)},e.prototype.saveNewEntity=function(t){var e=this;try{var n=this.preSave(p()(this.entity));this.entityApiService.resource(this.entityUrlPrefix).post(n).subscribe((function(t){e.onEntitySave(t)}),(function(t){e.onEntitySaveError(t)}))}catch(t){console.warn("Error in saveNewEntity",t)}},e.prototype.saveExistingEntity=function(t){var e=this;try{var n=p()(this.entity.plain()),i=this.preSave(n),r=this.entityApiService.resource(this.entityUrlPrefix),a={"Content-Type":"application/json"};r.customPUT(i,this.entity.uuid,void 0,a).subscribe((function(t){e.onEntitySave(t)}),(function(t){e.onEntitySaveError(t)}))}catch(t){console.warn("Error in saveExistingEntity",t)}},e.prototype.preSave=function(t){var e=this,n=this.getPropertiesToRemoveOnSave();return t=d()(t,n),Object.keys(this.entityMetadata).forEach((function(i,r){var a=e.entityMetadata[i];n.indexOf(i)>-1||(a.hasOwnProperty("translated")&&!0===a.translated?e.translate.langs.forEach((function(n){if(t[i]&&g()(t[i][n])&&y()(t[i][n])&&delete t[i][n],a.hasOwnProperty("type")&&"json"===a.type)try{g()(t[i][n])&&(0===t[i][n].trim().length&&(t[i][n]="{}"),t[i][n]=JSON.parse(t[i][n]))}catch(t){throw e.setFormError(i,"json"),{type:"validation",property:i,field:a.type,language:n}}})):g()(t[i])&&a.hasOwnProperty("type")&&"json"===a.type&&(t[i]=JSON.parse(t[i])))})),console.log("sanitized entity",t),t},e.prototype.getPropertiesToRemoveOnSave=function(){return["@context","@id","@type","id","uuid","createdAt","updatedAt","deletedAt"]},e.prototype.setFormError=function(t,e){var n=this.entityMetadata[t].validation,i=n[e].hasOwnProperty("params")?n[e].params:null,r="ds.microservices.entity.validation."+n[e].message,a=this.staticTranslate.instant(this.formLang,r,i);this.formErrors[t]+=a+" "},e.prototype.getRoutingUrlOnSave=function(t){return[this.isNew?"../"+t.uuid:"../","show"]},e.prototype.onEntitySave=function(t){if(console.log("Entity saved successfully, server response: ",t),this.toastr.success(this.translate.instant("ds.messages.entitySaveSucceeded")),t.uuid){var e=this.getRoutingUrlOnSave(t);this.router.navigate(e,{relativeTo:this.route})}else this.toastr.error(this.translate.instant("ds.messages.unexpectedError"))},e.prototype.onEntitySaveError=function(t){console.error("There was an error saving entity",t);var e=this.translate.instant("ds.messages.entitySaveFailed"),n="";t.data&&t.data["hydra:description"]&&(n=t.data["hydra:description"]),this.toastr.error(n,e)},e})(a.a)},1782:function(t,e,n){"use strict";var i=n(28),r=n(11),a=n(24),s=n(146),o=(n.n(s),n(79)),c=n(29),l=n(1787),u=n(145),p=n(36),h=(n.n(p),n(25)),d=n.n(h);n.d(e,"a",(function(){return f}));var f=(function(t){function e(e){var n=t.call(this,e)||this;return n.injector=e,n.router=e.get(i.c),n.route=e.get(i.b),n.globalState=n.injector.get(o.a),n.appState=n.injector.get(c.a),n.location=e.get(r.Location),n.translate=e.get(a.c),n.toastr=e.get(s.ToastsManager),n.config=n.appState.get("config"),n}return __extends(e,t),e.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),this.isInitialized=!0},e.prototype.generateBackLink=function(){return this.entityParent&&(this.backLink||(this.backLink=new u.a),this.backLink.routerLink=["/","pages",this.entityParentUrlPrefix,this.entityParent.uuid,"show"],this.entityParent.hasOwnProperty("title")&&(this.backLink.text=this.entityParent.title[this.translate.currentLang])),this.backLink},e.prototype.getEmptyBackLink=function(){return new u.a},e.prototype.getTranslatedPropertyValue=function(t,e){if(d()(t))return d()(t[e])&&t[e][this.translate.currentLang]?t[e][this.translate.currentLang]:t[e]},e})(l.a)},1783:function(t,e){t.exports='<ds-entity-list [headerTitle]="headerTitle"\n\t\t\t\t[headerSubtitle]="headerSubtitle"\n\t\t\t\t[actions]="actions"\n\t\t\t\t[headerActions]="headerActions"\n\t\t\t\t(headerActionEmitter)="handleHeaderEvent($event)">\n\n\t<div *ngIf="showCustomFilters" class="custom-filters">\n\t\t<form [formGroup]="customFiltersForm">\n\t\t</form>\n\t</div>\n\n\t<ngx-datatable #datatable\n\t\t\t\t   [loadingIndicator]="loading"\n\t\t\t\t   [sorts]="sorts"\n\t\t\t\t   [rows]="rows"\n\t\t\t\t   [columns]="columns"\n\t\t\t\t   [count]="pager.totalItems"\n\t\t\t\t   [offset]="pager.pageNumber"\n\t\t\t\t   [limit]="pager.size"\n\t\t\t\t   (page)="setPage($event)"\n\t\t\t\t   (sort)="onSort($event)"\n\t\t\t\t   (activate)="onRowActivation($event)"\n\t\t\t\t   class="material">\n\t</ngx-datatable>\n</ds-entity-list>\n\n<ng-template #headerTpl let-column="column" let-sorts="sorts" let-sortDir="sortDir" let-sort="sortFn">\n\t<ds-datatable-header sortType="single"\n\t\t\t\t\t\t sortAscendingIcon="datatable-icon-up"\n\t\t\t\t\t\t sortDescendingIcon="datatable-icon-down"\n\t\t\t\t\t\t [column]="column"\n\t\t\t\t\t\t [sort]="sort"\n\t\t\t\t\t\t [sortDir]="sortDir"\n\t\t\t\t\t\t (onFilterValueChange)="onFilterValueChange($event)"\n\t>\n\t</ds-datatable-header>\n</ng-template>\n\n<ng-template #textCellTpl let-column="column" let-row="row" let-value="value">\n\t<ds-datatable-cell [column]="column" [row]="row" [value]="value"></ds-datatable-cell>\n</ng-template>\n\n<ng-template #textCellUuidTpl let-column="column" let-row="row" let-value="value">\n\t<ds-datatable-cell-uuid [column]="column" [row]="row" [value]="value"></ds-datatable-cell-uuid>\n</ng-template>\n\n\x3c!--<ng-container *ngTemplateOutlet="actionsTpl; context: {actions: actions}"></ng-container>--\x3e\n<ng-template #actionsTpl let-column="column" let-row="row">\n\t<ds-datatable-cell-actions [row]="row" (rowActionEmitter)="handleRowEvent($event)"></ds-datatable-cell-actions>\n</ng-template>\n'},1784:function(t,e,n){"use strict";var i=n(28),r=n(37),a=n(147),s=n(146),o=(n.n(s),n(24)),c=n(831),l=n(1782),u=n(36),p=(n.n(u),n(1));n.n(p);n.d(e,"a",(function(){return h}));var h=(function(t){function e(e,n){var r=t.call(this,e)||this;return r.microserviceConfig=n,r.headerTitle="general.details",r.actions=[{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-primary btn-with-icon",iconClass:"ion-edit",visible:!0,routerLink:["../edit"],region:"header"},{name:"delete",title:"ds.microservices.entity.action.delete",class:"btn btn-danger btn-with-icon",iconClass:"ion-android-delete",visible:!0,region:"footer"}],r.entityMetadata={},r.subscriptions={},r.entitySubscribed=!1,r.router=r.injector.get(i.c),r.route=r.injector.get(i.b),r.translate=r.injector.get(o.c),r.modal=r.injector.get(a.c),r.toastr=r.injector.get(s.ToastsManager),r.initialLang=r.translate.currentLang,r}return __extends(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.lang=this.translate.currentLang,this.subscriptions.lang=this.translate.onLangChange.subscribe((function(t){if(e.initialLang===t.lang)return void(e.initialLang=null);e.lang=t.lang,e.initialLang=t.lang,e.subscriptions.entity=e.prepareEntity().subscribe((function(t){return e.prepareEntitySubscriptionHandler(t)}))})),this.subscriptions.entity=this.prepareEntity().subscribe((function(t){return e.prepareEntitySubscriptionHandler(t)})),this.entitySubscribed=!0},e.prototype.ngOnDestroy=function(){var t=this;Object.keys(this.subscriptions).forEach((function(e){return t.subscriptions[e].unsubscribe()})),this.subscriptions=void 0},e.prototype.prepareEntity=function(){var t=this;return this.route.params.flatMap((function(e){if(t.onRouteParams(e),t.entity)return p.Observable.of({entity:t.entity,entityParent:t.entityParent});var n=e.id,i=e[t.entityParentUrlParam];return t.entityApiService.getOne(t.entityUrlPrefix,n).flatMap((function(e){return t.entity=e,t.prepareEntityParent(t.entityParentUrlPrefix,i).flatMap((function(t){return p.Observable.of({entity:e,entityParent:t})}))})).catch((function(e){throw e instanceof r.Response?t.onPrepareEntityError(e):console.warn("Unexpected error occurred while fetching entity: "+e),e}))}))},e.prototype.prepareEntityParent=function(t,e){var n=this;return t&&e?this.entityApiService.getOne(t,e).flatMap((function(t){return n.entityParent=t,n.generateBackLink(),p.Observable.of(t)})):p.Observable.of(null)},e.prototype.onPrepareEntityError=function(t){var e=this.translate.instant("ds.messages.http."+t.status),n=t.json(),i=n&&n.error?n.error:"";this.toastr.error(i,e)},e.prototype.handleEntityEvent=function(t){switch(t.action.name){case"delete":this.onDelete();break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},e.prototype.onDelete=function(){var t=this,e=this.modal.open(c.a,{size:"lg"});e.componentInstance.modalHeader="Confirm",e.componentInstance.modalContent="Are you sure you want to delete this entity?",e.componentInstance.actions=[{command:"yes",label:"Yes"},{command:"no",label:"No"}],e.result.then((function(e){console.log(e),"yes"===e.command&&t.entity.remove().subscribe((function(e){t.onEntityDeleteSuccess(e)}),(function(e){t.onEntityDeleteError(e)}))}),(function(t){}))},e.prototype.onEntityDeleteSuccess=function(t){console.log("Entity deleted successfully, server response: ",t),this.toastr.success(this.translate.instant("ds.messages.entityDeletionSucceeded")),this.navigateAfterDeletion()},e.prototype.onEntityDeleteError=function(t){console.error("Failed to delete entity",t),this.toastr.error(this.translate.instant("ds.messages.entityDeletionFailed"))},e.prototype.navigateAfterDeletion=function(){this.router.navigate(["../../list"],{relativeTo:this.route})},e.prototype.prepareEntitySubscriptionHandler=function(t){this.onEntityPrepared(t),this.setBreadcrumbData(),this.commitBreadcrumb()},e.prototype.onEntityPrepared=function(t){},e.prototype.setBreadcrumbData=function(){this.entity&&(this.pageBreadcrumbData.title=this.headerTitle,this.pageBreadcrumbData.subtitle=this.entity.title,this.pageBreadcrumbData.tags=["crud-show"])},e.prototype.onRouteParams=function(t){this.routeParams=t},e.prototype.setActionVisibility=function(t,e){this.actions=this.actions.map((function(n){switch(n.name){case t:n.visible=e}return n}))},e})(l.a)},1785:function(t,e,n){"use strict";var i=n(0),r=n(1794),a=n.n(r),s=n(4),o=n(314),c=(n.n(o),n(828)),l=n(1789),u=n(1782),p=n(36),h=(n.n(p),n(36)),d=(n.n(h),n(112));n.n(d);n.d(e,"a",(function(){return f}));var f=(function(t){function e(e,n){var i=t.call(this,e)||this;return i.microserviceConfig=n,i.rows=[],i.columns=[],i.sorts=[],i.pager=new c.a,i.showCustomFilters=!1,i.size=10,i.datatableAttributes={columnMode:"force",rowHeight:"auto",headerHeight:100,footerHeight:50,externalPaging:!0,externalSorting:!0},i.headerActions=[{name:"create",title:"ds.microservices.entity.action.create",class:"btn btn-primary btn-with-icon",iconClass:"ion-android-add-circle",visible:!0,routerLink:["../create"]},{name:"refresh",title:"ds.microservices.entity.action.refresh",class:"btn btn-secondary btn-with-icon",iconClass:"ion-android-refresh",visible:!0}],i.actions=[{name:"show",title:"ds.microservices.entity.action.show",class:"btn btn-default btn-with-icon",iconClass:"ion-eye",visible:!0},{name:"edit",title:"ds.microservices.entity.action.edit",class:"btn btn-default btn-with-icon",iconClass:"ion-edit",visible:!0}],i.filters={},i.filterStream=new h.Subject,i.entityMetadata={},i.mediaQueryHandlers={},i.formBuilder=e.get(s.FormBuilder),i}return __extends(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.lang=this.translate.currentLang,this.languageChangeSubscriber=this.translate.onLangChange.subscribe((function(t){e.lang=t.lang,e.updateTranslations(t.lang),e.refreshList()})),this.entityMetadata=this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties,this.pager.size=this.size,this.setupUi(),this.setupList(),this.postSetupList(),this.setupQuery(),this.filterStream.distinctUntilChanged((function(t,e){return t.filterProperty===e.filterProperty&&t.filterValue===e.filterValue})).map((function(t){return e.assignFilterValue(t)})).debounceTime(500).subscribe((function(){return e.doFilter()})),this.setPage({offset:0}),this.pageBreadcrumbData.title=this.headerTitle,this.pageBreadcrumbData.tags=["crud-list"]},e.prototype.ngOnDestroy=function(){this.languageChangeSubscriber&&this.languageChangeSubscriber.unsubscribe(),this.customFiltersFormChangeSubscription&&this.customFiltersFormChangeSubscription.unsubscribe(),this.destroyUi()},e.prototype.ngAfterViewInit=function(){this.commitBreadcrumb()},e.prototype.setupQuery=function(){this.query=l.a.forUrl(this.microserviceConfig.settings.entrypoint.url,this.entityUrlPrefix).withPager(this.pager)},e.prototype.setupUi=function(){var t=this;this.setupMediaQueries(),this.setupCustomFilters(),n.i(d.forEach)(this.datatableAttributes,(function(e,n){t.datatable[n]=e}))},e.prototype.destroyUi=function(){n.i(d.forEach)(this.mediaQueryHandlers,(function(t,e){a.a.unregister(e)}))},e.prototype.setupMediaQueries=function(){var t=this.appState.get("config"),e=this.datatable;this.mediaQueryHandlers[t.mediaQueryAliases.small]={match:function(){},unmatch:function(){},setup:function(){e.scrollbarH=!0},destroy:function(){}},n.i(d.forEach)(this.mediaQueryHandlers,(function(t,e){a.a.register(e,t)}))},e.prototype.setupCustomFilters=function(){this.customFiltersForm=this.formBuilder.group({})},e.prototype.setupList=function(){},e.prototype.postSetupList=function(){var t=this;this.columns.forEach((function(e){e.propertyMetadata=t.entityMetadata[e.prop]})),this.columns.push({id:"actions",name:"actions",label:"ds.microservices.entity.action.actions",cellTemplate:this.actionsCellTpl,headerTemplate:this.headerTpl,sortable:!1}),this.updateTranslations(this.translate.currentLang)},e.prototype.refreshList=function(){var t=this;this.loading=!0,this.entityApiService.getList(this.query).subscribe((function(e){t.pager=e.pager,t.rows=t.preprocessRowsData(e.data),t.loading=!1}))},e.prototype.handleHeaderEvent=function(t){var e=this.entityParentUrlPrefix?"../"+this.entityUrlPrefix:"../";switch(t.action.name){case"refresh":this.refreshList();break;case"create":this.router.navigate([e,"create"],{relativeTo:this.route});break;default:t.action.routerLink&&this.router.navigate(t.action.routerLink,{relativeTo:this.route})}},e.prototype.handleRowEvent=function(t){var e=this.entityParentUrlPrefix?"../"+this.entityUrlPrefix:"../";switch(t.action.name){case"show":this.router.navigate([e,t.row.uuid,"show"],{relativeTo:this.route});break;case"edit":this.router.navigate([e,t.row.uuid,"edit"],{relativeTo:this.route})}},e.prototype.preprocessRowsData=function(t){var e,n=this;return t&&(e=t.map((function(t){return t._={actions:n.actions},t}))),e},e.prototype.onFilterValueChange=function(t){var e=t.column.hasOwnProperty("filterProp")?t.column.filterProp:t.column.prop,n=t.event.target.value;this.filterStream.next({filterProperty:e,filterValue:n})},e.prototype.assignFilterValue=function(t){return console.log("assignFilterValue: ",t),this.filters[t.filterProperty]=t.filterValue,t},e.prototype.doFilter=function(){var t=this;Object.keys(this.filters).forEach((function(e){var i=t.filters[e];null==i||n.i(d.isString)(i)&&0===i.length?(delete t.filters[e],t.query.unsetFilter(e)):(t.filters[e]=i,t.query.setFilter(e,t.filters[e]))})),console.log(this.filters),this.query.pager.pageNumber=0,this.refreshList()},e.prototype.setPage=function(t){this.pager.pageNumber=t.offset,this.refreshList()},e.prototype.onSort=function(t){console.log("base-list.component::onSort",t),t.column.prop&&(this.query.unsetOrder(),this.query.setOrder(t.column.prop,t.newValue),this.refreshList())},e.prototype.onRowActivation=function(t){if("actions"!==t.column.id){var e={action:n.i(d.find)(this.actions,{name:"show"}),row:t.row};this.handleRowEvent(e)}},e.prototype.updateTranslations=function(t){var e=this;this.datatable.messages=this.translate.instant("datatable"),this.columns.forEach((function(t){var n=t.label?t.label:"ds.microservices.entity.property."+t.prop;e.translate.get(n).subscribe((function(e){t.name=e}))}))},e})(u.a);__decorate([n.i(i.ViewChild)(o.DatatableComponent),__metadata("design:type",o.DatatableComponent)],f.prototype,"datatable",void 0),__decorate([n.i(i.ViewChild)("headerTpl"),__metadata("design:type",i.TemplateRef)],f.prototype,"headerTpl",void 0),__decorate([n.i(i.ViewChild)("textCellTpl"),__metadata("design:type",i.TemplateRef)],f.prototype,"textCellTpl",void 0),__decorate([n.i(i.ViewChild)("textCellUuidTpl"),__metadata("design:type",i.TemplateRef)],f.prototype,"textCellUuidTpl",void 0),__decorate([n.i(i.ViewChild)("actionsTpl"),__metadata("design:type",i.TemplateRef)],f.prototype,"actionsCellTpl",void 0)},1786:function(t,e){function n(t,e){var n=0,i=t.length;for(n;n<i&&!1!==e(t[n],n);n++);}function i(t){return"[object Array]"===Object.prototype.toString.apply(t)}function r(t){return"function"==typeof t}t.exports={isFunction:r,isArray:i,each:n}},1787:function(t,e,n){"use strict";var i=n(0),r=n(28),a=n(11),s=n(315),o=n(318),c=n(79);n.d(e,"a",(function(){return l}));var l=(function(){function t(t){this.injector=t,this.pageBreadcrumbData={},this.route=this.injector.get(r.b),this.location=this.injector.get(a.Location),this.staticTranslate=this.injector.get(s.a),this.globalState=this.injector.get(c.a),this.breadcrumbService=this.injector.get(o.a)}return t.prototype.ngOnInit=function(){this.pageTitle&&this.applyPageTitle(),this.setBreadcrumbData()},t.prototype.applyPageTitle=function(t){var e=this,n=t||this.pageTitle;n&&setTimeout((function(){e.globalState.notifyDataChanged("menu.activeLink",{title:n})}))},t.prototype.setBreadcrumbData=function(){this.pageTitle&&(this.pageBreadcrumbData.title=this.pageTitle)},t.prototype.buildBreadcrumb=function(){var t=this.location.path().split("/").slice(2,3).map((function(t){return"path-"+t}));return{title:"string"==typeof this.pageBreadcrumbData.title?this.staticTranslate.instantAll(this.pageBreadcrumbData.title):this.pageBreadcrumbData.title,subtitle:"string"==typeof this.pageBreadcrumbData.subtitle?this.staticTranslate.instantAll(this.pageBreadcrumbData.subtitle):this.pageBreadcrumbData.subtitle,link:this.location.path(),tags:[].concat(t,this.pageBreadcrumbData.tags),routeData:this.route.snapshot.data}},t.prototype.commitBreadcrumb=function(t,e){t||(t=this.buildBreadcrumb()),this.breadcrumbService.push(t,e)},t})();l=__decorate([n.i(i.Component)({}),__metadata("design:paramtypes",[i.Injector])],l)},1788:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",(function(){return r}));var r=(function(){function t(){}return t})();r=__decorate([n.i(i.Component)({selector:"ds-entity",template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],r)},1789:function(t,e,n){"use strict";var i=n(828);n.d(e,"a",(function(){return r}));var r=(function(){function t(t){this.pager=new i.a,this.filters={},this.orders={},this.enableParamItemsPerPage=!0,this.path=t}return t.forUrl=function(e,n){var i=new t(n);return i.urlPrefix=e,i},t.prototype.withPath=function(t){return this.path=t,this},t.prototype.withFilter=function(t,e){return this.setFilter(t,e)},t.prototype.setFilter=function(t,e){return this.filters[t]=e,this},t.prototype.unsetFilter=function(t){delete this.filters[t]},t.prototype.withOrder=function(t,e){return this.setOrder(t,e)},t.prototype.setOrder=function(t,e){return this.orders[t]=e,this},t.prototype.unsetOrder=function(t){if(t)delete this.orders[t];else for(var e in this.orders)delete this.orders[e]},t.prototype.withPager=function(t){return this.pager=t,this},t.prototype.getFullPath=function(){return this.urlPrefix+this.path},t.prototype.buildParameters=function(){var t={};if(this.pager&&(Object.assign(t,{page:this.pager.pageNumber+1}),this.enableParamItemsPerPage&&(t.limit=this.pager.size)),this.filters&&Object.assign(t,this.filters),this.orders)for(var e in this.orders)t["order["+e+"]"]=this.orders[e];return t},t})()},1790:function(t,e,n){"use strict";var i=n(0),r=n(11),a=n(4),s=n(29),o=n(317),c=n(314),l=(n.n(c),n(829)),u=n(313);n.d(e,"a",(function(){return p}));var p=(function(){function t(t,e){this.appState=t,this.msConfig=e,this.microserviceName=null,e.name=this.getMicroserviceName(),e.settings=this.appState.get("microservices")[e.name]}return t})();p=__decorate([n.i(i.NgModule)({imports:[r.CommonModule,a.FormsModule,o.a,l.a,c.NgxDatatableModule],declarations:[],providers:[u.a,u.c]}),__metadata("design:paramtypes",[s.a,u.a])],p)},1791:function(t,e,n){function i(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}var r=n(1793),a=n(1786).each;i.prototype={constuctor:i,addHandler:function(t){var e=new r(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;a(e,(function(n,i){if(n.equals(t))return n.destroy(),!e.splice(i,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";a(this.handlers,(function(e){e[t]()}))}},t.exports=i},1792:function(t,e,n){function i(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var r=n(1791),a=n(1786),s=a.each,o=a.isFunction,c=a.isArray;i.prototype={constructor:i,register:function(t,e,n){var i=this.queries,a=n&&this.browserIsIncapable;return i[t]||(i[t]=new r(t,a)),o(e)&&(e={match:e}),c(e)||(e=[e]),s(e,(function(e){o(e)&&(e={match:e}),i[t].addHandler(e)})),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=i},1793:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},1794:function(t,e,n){var i=n(1792);t.exports=new i},1802:function(t,e,n){"use strict";var i=n(0),r=n(313),a=n(207),s=n(36);n.n(s);n.d(e,"a",(function(){return o}));var o=(function(t){function e(e,n){var i=t.call(this,e,n)||this;return i.restangular=e,i.injector=n,i}return __extends(e,t),e})(a.a);o=__decorate([n.i(i.Injectable)(),__param(0,n.i(i.Inject)(r.d)),__metadata("design:paramtypes",[Object,i.Injector])],o)},1816:function(t,e,n){"use strict";var i=n(0),r=n(1788);n.d(e,"a",(function(){return a}));var a=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e})(r.a);a=__decorate([n.i(i.Component)({selector:"ds-asset",template:"<router-outlet></router-outlet>"})],a)},1817:function(t,e,n){"use strict";var i=n(0),r=n(28),a=n(11),s=n(146),o=(n.n(s),n(313)),c=n(1802),l=n(1781),u=n(36);n.n(u);n.d(e,"a",(function(){return p}));var p=(function(t){function e(e,n,i,r,a,s,o){var c=t.call(this,e,s)||this;return c.entityUrlPrefix="assets",c.headerTitle="Create Asset",c.isNew=!0,c.entityApiService=o,c}return __extends(e,t),e})(l.a);p=__decorate([n.i(i.Component)({selector:"ds-asset-create",template:n(1921)}),__metadata("design:paramtypes",[i.Injector,r.b,r.c,a.Location,s.ToastsManager,o.a,c.a])],p)},1818:function(t,e,n){"use strict";var i=n(0),r=n(28),a=n(11),s=n(146),o=(n.n(s),n(313)),c=n(1802),l=n(1781),u=n(36);n.n(u);n.d(e,"a",(function(){return p}));var p=(function(t){function e(e,n,i,r,a,s,o){var c=t.call(this,e,s)||this;return c.entityUrlPrefix="assets",c.headerTitle="Edit Asset",c.isNew=!1,c.entityApiService=o,c}return __extends(e,t),e})(l.a);p=__decorate([n.i(i.Component)({selector:"ds-asset-edit",template:n(1921)}),__metadata("design:paramtypes",[i.Injector,r.b,r.c,a.Location,s.ToastsManager,o.a,c.a])],p)},1819:function(t,e,n){"use strict";var i=n(0),r=n(36),a=(n.n(r),n(1802)),s=n(1785),o=n(313);n.d(e,"a",(function(){return c}));var c=(function(t){function e(e,n,i){var r=t.call(this,e,n)||this;return r.entityUrlPrefix="assets",r.entityApiService=i,r}return __extends(e,t),e.prototype.setupList=function(){t.prototype.setupList.call(this),this.columns=[{prop:"title",cellTemplate:this.textCellTpl,headerTemplate:this.headerTpl,filterable:!0}]},e})(s.a);c=__decorate([n.i(i.Component)({selector:"ds-asset-list",template:n(1783)}),__metadata("design:paramtypes",[i.Injector,o.a,a.a])],c)},1820:function(t,e,n){"use strict";var i=n(0),r=n(1784),a=n(313),s=n(1802),o=n(36);n.n(o);n.d(e,"a",(function(){return c}));var c=(function(t){function e(e,n,i){var r=t.call(this,e,n)||this;return r.entityUrlPrefix="assets",r.entityApiService=i,r}return __extends(e,t),e})(r.a);c=__decorate([n.i(i.Component)({selector:"ds-asset-show",template:n(1987)}),__metadata("design:paramtypes",[i.Injector,a.a,s.a])],c)},1921:function(t,e){t.exports='<ds-entity-form *ngIf="entity && formLang"\n\t\t\t\t[entity]="entity"\n\t\t\t\t[headerTitle]="headerTitle"\n\t\t\t\t[isNew]="isNew"\n\t\t\t\t(onFormInit)="onFormInit($event)"\n\t\t\t\t(onFormChange)="onFormChange($event)"\n\t\t\t\t(onFormSubmit)="onFormSubmit($event)"\n\t\t\t\t(onFormCancel)="onFormCancel($event)"\n>\n\t<div class="card-block">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="title">{{ \'ds.microservices.entity.property.title\' | translate }}</label>\n\t\t\t\t\t<input id="title" name="title" type="text" [(ngModel)]="entity.title" class="form-control" placeholder="" required>\n\t\t\t\t\t<div *ngIf="formErrors.title" class="alert alert-danger">\n\t\t\t\t\t\t{{ formErrors.title }}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ds-entity-form>\n'},1943:function(t,e,n){"use strict";var i=n(28),r=n(1816),a=n(1819),s=n(1820),o=n(1817),c=n(1818);n.d(e,"a",(function(){return u}));var l=[{path:"",component:r.a,children:[{path:"",redirectTo:"/pages/assets/list",pathMatch:"full"},{path:"list",component:a.a},{path:"create",component:o.a},{path:":id/show",component:s.a},{path:":id/edit",component:c.a}]}],u=i.a.forChild(l)},1987:function(t,e){t.exports='<ds-entity-show *ngIf="entity" [entity]="entity" (onDelete)="onDelete($event)">\n\n\t\x3c!-- begin: ng-content[select="button.entity-action"] --\x3e\n\t\x3c!-- end: ng-content[select="button.entity-action"] --\x3e\n\n\t\x3c!-- begin: ng-content[select=".entity-body"] --\x3e\n\t<div class="card-block entity-body entity-data">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-4 col-sm-offset-3">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt>{{ \'ds.microservices.entity.property.title\' | translate }}</dt>\n\t\t\t\t\t<dd>{{entity.title}}</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\x3c!-- end: ng-content[select=".entity-body"] --\x3e\n\n</ds-entity-show>\n'}});