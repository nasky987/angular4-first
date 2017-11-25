import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';

  constructor(private logger: MySpecialLoggerService) {
    // this.testLoggerLevel();
  }

  testLoggerLevel() {
    console.log('======Default(INFO) Log Level======');
    this.logger.debug('test logging... in debug ');
    this.logger.info('test logging... in info ');
    this.logger.warn('test logging... in warn ');
    this.logger.error('test logging... in error');

    this.logger.logLevel = LogLevel.DEBUG;
    console.log('======DEBUG Log Level======');
    this.logger.debug('test logging... in debug ');
    this.logger.info('test logging... in info ');
    this.logger.warn('test logging... in warn ');
    this.logger.error('test logging... in error');

    this.logger.logLevel = LogLevel.WARN;
    console.log('======WARN Log Level======');
    this.logger.debug('test logging... in debug ');
    this.logger.info('test logging... in info ');
    this.logger.warn('test logging... in warn ');
    this.logger.error('test logging... in error');

    this.logger.logLevel = LogLevel.ERROR;
    console.log('======ERROR Log Level======');
    this.logger.debug('test logging... in debug ');
    this.logger.info('test logging... in info ');
    this.logger.warn('test logging... in warn ');
    this.logger.error('test logging... in error');
  }

  printDebugLog() {
    this.logger.debug('test dependency injector tree!');
  }
}
