import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BreedsModel } from '../models/breed.model';

@Injectable()
export class ApiTestingService {

	constructor(private http: HttpClient) { }

	public getBreeds(): Observable<BreedsModel[]> {
		return this.http.get<any>('https://dogapi.dog/api/v2/breeds').pipe(map(data => data.data))
	}

	public getBreedDetails(breedId: string): Observable<any> {
		return this.http.get<any>(`https://dogapi.dog/api/v2/breeds/${breedId}`);
	}
}
