import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message:string, ...optionalParams:any[]): void {
    console.log(`[Log]: ${message}`, ...optionalParams);
  }

  info(message:string, ...optionalParams:any[]): void {
    console.log(`[info] ${message}`, ...optionalParams);
  }

  warn(message:string, ...optionalParams:any[]): void {
    console.log(`[warn] ${message}`, ...optionalParams);
  }

  error(message:string, ...optionalParams:any[]): void {
    console.log(`[error] ${message}`, ...optionalParams);
  }
}
