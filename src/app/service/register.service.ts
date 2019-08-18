import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class RegService{
    constructor(private http:HttpClient){
        console.log('Task Service Initialized...');
    }
    
    addTask(newTask){
        var headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .pipe(map((res: any) => res.json()));
    }
  
}