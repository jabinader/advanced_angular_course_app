import { Component, inject, Inject, signal } from '@angular/core';
import { ApiTestingService } from './services/api-testing.service';
import { BreedsModel } from './models/breed.model';
import { MatTableModule } from '@angular/material/table';
import { BreedTableModel } from './models/breed-table.model';
import { USE_VALUE_TOKEN } from './constants/injection-tokens';
import { UseFactoryService } from './services/use-factory.service';
import { UseExistingService } from './services/use-existing.service';

const myFactoryFunction = (apiTestingService: ApiTestingService) => new UseFactoryService(apiTestingService.isAdmin);

export interface UseValueExampleModel {title: string }

const useValueExampleObject: UseValueExampleModel = { title: 'My Title'}

@Component({
	selector: 'app-api-testing',
	imports: [MatTableModule],
	templateUrl: './api-testing.component.html',
	styleUrl: './api-testing.component.sass',
	providers: [
		ApiTestingService,
		// { provide: ApiTestingService, useClass: ApiTestingService},
		{ provide: UseExistingService, useExisting: ApiTestingService},
		{ provide: UseFactoryService, useFactory: myFactoryFunction, deps: [ApiTestingService]},
		{ provide: USE_VALUE_TOKEN, useValue: useValueExampleObject}
	]
})
export class ApiTestingComponent {
	constructor(private apiTestingService: ApiTestingService,
				private useFactoryService: UseFactoryService,
				private useExistingService: UseExistingService) {
		const useValueObject = inject(USE_VALUE_TOKEN);
		console.log(useValueObject);
	 }
	datasource = signal<BreedTableModel[]>([]);
	displayedColumns: string[] = ['name', 'description'];

	ngOnInit(): void {
		this.apiTestingService.getBreeds().subscribe((data: BreedsModel[]) => {
			const breedsList: BreedTableModel[] = []
			data.forEach(breeds => {
				breedsList.push({name: breeds.attributes.name, description: breeds.attributes.description, id: breeds.id})
			});
			this.datasource.set(breedsList);			
		});

		console.log(`useFactory example: ${this.useFactoryService.getIsAdmin()}`);
		console.log(`useExisting example: ${this.useExistingService.getIsAdmin()}`);
	}

	protected rowClicked(row: BreedTableModel): void {
		this.apiTestingService.getBreedDetails(row.id).subscribe(data => console.log(data));
	}
}
