import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigOptions } from 'src/app/interfaces/config-options';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getConfigOptions(): Observable<ConfigOptions> {

    return this.httpClient.get<ConfigOptions>('http://localhost:3000');

  }

  setConfigOptions(configOptions: ConfigOptions): Observable<ConfigOptions> {

    return this.httpClient.post<ConfigOptions>('http://localhost:3000/set', configOptions);

  }

}
