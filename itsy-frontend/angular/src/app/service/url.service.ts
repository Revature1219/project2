import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    backendURL: string;

    constructor() { 
        this.backendURL = "http://13.59.124.17:8085/itsy/";
        // this.backendURL = "http://localhost:9001";
    }

    getBackendURL(): string {
        return this.backendURL;
    }

    getBackendURLWithSlash(): string {
        return this.backendURL + "/";
    }
}
