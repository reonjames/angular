to install angular globally:
sudo npm install -g @angular/cli@latest
to create project
ng new my-first-app --no-strict
	add angular routing-->n
	style sheet--> css

	OR
ng new my-first-app --no-strict --standalone false --routing false
to create new component:
	ng g c <component name> --skip-tests

to install bootstrap
	npm install --save bootstrap@3
	to attach bootstrap in cli add bootstrap(css file) file location in .angular-cli.json under styles key

*********Revision****
selector:
	can be define as element,attribute,class

data binding
	databinding = communication
	output data (from typescript code to template(HTML)):
		string interpolation ( {{ data }} )
 		property binding( [property] = "data" )
	React to Events (from HTML to typescript):
		event binding ((event) = "expression")
	Combination of both:
		two way binding ( [(ngModel)] = "data")
Directives

	*ngIf= "<anything that return boolean value>;else <localReference>"    			ngIf is structural directives. structural that means it change the DOM
	<ng-template #<localReeference>>
		<p>.......</p>
	</ng-template>

	ngStyle: dynamic directive
	[ngStyle]="{backgroundColor: 'blue'}"   u should provide value as key value pair

	
	[ngStyle]="{key: value}"		dynamic style

	*ngFor="let x of list"			structural directive

__.model.ts --> used to create object.

@Input(<'aliasName'>) <propertyName>:<data type>;				this will take value from parent component.....aliasName is property name of parent component........work from parent to child

@Output(<'aliasName'>) <eventName> = new EventEmitter<{<data type>}>();		
 under fxn use emit fxn 
		this.<eventName>.emit({<assign values from data types>});

local reference in HTML template
	#<referenceName>		
		used in typescript by passing in fxn and in fxn argument type would be HTMLInputElement and to fetch value use reference.value
	@ViewChild('<referenceName>') variable: ElementRef (data type);				alternative way of getting value as compare to above but important thing is in this way we can access DOM
		to fetch value variable.nativeElement.value
<ng-content></ng-content>	with this u can reuse same html part anywhere......need more clarification

LIFECYCLE
	ngOnChanges: called after a bound input property changes    initially called after constructor and then whenever there is change in property
	ngOnInit: called once the component is initialized	    initially called after constructor and ngOnChange.
	ngDoCheck: called during every change detection run	    initially called after constructor,ngOnChanges and ngDoCheck and whenever any change detection if after property change then first ngOnChanges then ngDoCheck 
	ngAfterContentInit: called after content (ng-content) has been projected into view		initially called after constructor,ngOnChanges,ngDoCheck and ngAfterContentInit and then it will not be called again
	ngAfterContentChecked: called every time the projected content has been checked			initially called after constructor,ngOnChanges,ngDoCheck,ngAfterContentInit and ngAfterContentChecked and then after ngDoCheck
	ngAfterViewinit: called after the component's view (and child views) has been initialized	initially called after constructor,ngOnChanges,ngDoCheck,ngAfterContentInit and ngAfterViewinit and then it will not be called again
	ngAfterViewChecked: called every time the view (and child views) have been checked		initially called after constructor,ngOnChanges,ngDoCheck,ngAfterContentInit,ngAfterContentChecked,ngAfterViewinit and ngAfterViewChecked and then after ngAfterContentChecked
	ngOnDestroy: called once the component about to be destroyed. 

after ngOnInitView we can get DOM content value using ViewChild

@ContentChild 	
	get reference content value after ngAfterContentInit
	@ContentChild('<referenceName>') variable: ElementRef (data type);
ngClass:
	[ngClass]="{<css class name>:boolean expression">
ngStyle
  example: [ngStyle]="{backgroundColor:'yellow'}"

Basic attribute Directive:
	@Directive({
		selector:'[<selectorName>]'
	})						by using this selector Angular will send the reference. so using this reference u can change anything u want to change
	example: export class <className> implements OnInit {
			constructor(private elementRef: ElementRef) {}
			ngOnInit() {
				this.elementRef.nativeElement.style.backgrondColor = 'green';}			// not a good practise to set value of DOM like this. For better practise refer renderer section.
	inform angular about Directive in app.module.ts
	u can create Directive using command --> ng g d <directiveName>

	use renderer in Directive class
		example: export class <className> implements OnInit {
			constructor((private renderer: Renderer2, private elementRef: ElementRef) {}
			ngOnInit() {
				this.renderer.setStyle(this.elRef.nativeElement, 'background-color','red'};
			} } 	
@HostListener('mouseenter') mouseover(eventData: Event) {				//hostListener listen to event and alter to renderer
	this.renderer.setStyle(this.elRef.nativeElement, 'background-color','red'}; 
}
@HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';			//with hostBinding we don't need to use renderer
and inside hostListener instead of using renderer use this.backgroundColor = 'blue';

ngSwitch:										//alternative of multiple switch
	<div [ngSwitch]="value">
		<p *ngSwitchCase="5">Value is 5</p>
		<p *ngSwitchCase="10">Value is 10</p>
		<p *ngSwitchDefault>Value is 20</p>
	</div>
_.service.ts				//used to centralize the code so that it can be reused in different component
	After defining the service.ts use injector to instantiate in the component
	To use service in other component
		providers:[<service class name>]			// this is injector
		constructor(private <variable name>: <service name>)
		in any method:
			this.<variable>.<methodName from service.ts>(argument);
		alter of injecting through constructor u can inject through inject() function
	
		@Injectable() is used when we want to inject one service into another service.
	With service we can cross communicate between components.Here carefull about instantiating object better to do at app level.	
Routes								//used to load different component with different URL in single page
Routes should be declare at app.module.ts level
To declare different routes with its component:
	example: const appRoutes:Routes =[				//import Routes from @angular/router
			{ path: '', component: <componentName> },
			{ path: '<urlName after slash>', component: <componentName> }
		];
Angular would not knows about router unless it is register under imports
	Add RouterModule in imports section			//import RouterModule from @angular/router
	now register routes
		example: under import section add RouterModule.forRoot(<RoutesName>)
With angular directive <router-outlet> It marks the place in our document where we want the angular router to load the component of the currently selected route
routerLink:<a routerLink="/home">Home</a>		// it does not reload the page but direct it to that component.
routerLinkActive: <li role="presentation" routerLinkActive="active"><a routerLink="/home">Home</a>		//to active our current component
this.router.navigate(['/home'])			// for this inject router in constructor, this is used to navigate programatically as compare to above feature
this.router.navigate(['home'], {relativeTo: this.route})		//inject route: ActivatedRoute in constructor, this route contains metadata 

To dynamically load component :
	const appRoutes:Routes=[
	{ path:'home/:id',component:HomeComponent }				//here :id is replaced dynamically with whatever comes home/ 
	]	 

fetching route parameter:
	from ActivatedRoute get id value
		id:this.route.snapshot.params['id']			//here route dataType is ActivatedRoute, this contains metadata
fetching route parameter reactively:
	<a [routerLink]="['/users',10,'Anna']">Load Anna (10)</a>		//by clicking on load Anna link /users/10/Anna will load 
	to dynamically assign id:
		this.route.params.subscribe(
			(params:Params)=>{
				this.user.id=params['id'];}); 
[queryParams]="{allowEdit:'1'}"		//to show query parameter in url.Same can be done using router.navigate();
To fetch queryParameter value:
	initialize ActivatedRoute e.g: this.route.queryParams.subscribe();