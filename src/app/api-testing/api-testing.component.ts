import { Component, signal } from '@angular/core';
import { ApiTestingService } from './services/api-testing.service';
import { BreedsModel } from './models/breed.model';
import { MatTableModule } from '@angular/material/table';
import { BreedTableModel } from './models/breed-table.model';

@Component({
	selector: 'app-api-testing',
	imports: [MatTableModule],
	templateUrl: './api-testing.component.html',
	styleUrl: './api-testing.component.sass',
	providers: [ApiTestingService]
})
export class ApiTestingComponent {
	constructor(private apiTestingService: ApiTestingService) { }
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
	}

	protected rowClicked(row: BreedTableModel): void {
		this.apiTestingService.getBreedDetails(row.id).subscribe(data => console.log(data));
	}
}
