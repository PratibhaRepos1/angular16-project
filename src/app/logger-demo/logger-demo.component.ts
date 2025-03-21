import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-logger-demo',
  templateUrl: './logger-demo.component.html',
  styleUrls: ['./logger-demo.component.css']
})
export class LoggerDemoComponent {
  constructor(private logger: LoggerService) {}


  testLogging() {
    this.logger.log('logger-demo component called log', ['No Error!']);
    this.logger.info('logger-demo component called info', ['No Info!']);
    this.logger.warn('logger-demo component called warning', ['No warnings!']);
    this.logger.error('logger-demo component has errors', ['There is a Error!']);
  }

}
