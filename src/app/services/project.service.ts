import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from './global';

@Injectable()
export class ProjectService 
{
	public url: string;

	constructor( private _http: HttpClient )
	{
		this.url = Global.url;
	}

    getComidas(): Observable<any>
    {
        let httpHeader = new HttpHeaders().set( "Content-Type", "application/json" );
		let method = "getComidas";
		
		return this._http.get( this.url + method, {headers: httpHeader} );
    }

    getBebidas(): Observable<any>
    {
        let httpHeader = new HttpHeaders().set( "Content-Type", "application/json" );
		let method = "getBebidas";
		
		return this._http.get( this.url + method, {headers: httpHeader} );
    }

	addComida(): Observable<any>
	{
		let httpHeader = new HttpHeaders().set( "Content-Type", "application/json" );
		let method = "addComida";
		
		return this._http.get( this.url + method, {headers: httpHeader} );
	}

	addBebida(): Observable<any>
	{
		let httpHeader = new HttpHeaders().set( "Content-Type", "application/json" );
		let method = "addBebida";
		
		return this._http.get( this.url + method, {headers: httpHeader} );
	}
}