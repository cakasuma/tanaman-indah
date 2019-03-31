import { HttpHeaders } from '@angular/common/http';

const endpoint = 'https://young-garden-19814.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

export {
    endpoint,
    httpOptions
}