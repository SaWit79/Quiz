import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  intercept(req, next) {

    var token = localStorage.getItem('token');

    var authrequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    return next.handle(authrequest);
  }

}
