import { HttpHeaders } from '@angular/common/http';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'cache-control': 'no-cache',
    'Access-Control-Allow-Origin': 'Content-Type',
    'Content-Type':  'application/json'
  })
};

export {
    endpoint,
    httpOptions
}