import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptorUrl implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newUrl = '';
        if (req.url.indexOf('http') !== 0) {
            newUrl += environment.apiPoint;
            newUrl += req.url.startsWith('/') ? req.url : '/' + req.url;
        } else {
            newUrl = req.url;
        }
        const newReq = req.clone({
            url: newUrl
        });
        return next.handle(newReq);
    }
}
