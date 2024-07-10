import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DataService {
    private apiUrl = "https://sgthubyy9a.execute-api.eu-west-1.amazonaws.com/demo/"
    
	constructor(private httpClient: HttpClient) {}

    getData(route: any) {
        return this.httpClient.get(this.apiUrl + route)
    }
}
