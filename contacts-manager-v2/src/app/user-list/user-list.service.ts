import { Injectable } from '@angular/core';
import { MyApiGatewayService } from '../my-api-gateway.service';
import { User } from './user-detail';


@Injectable()
export class UserListService {

  constructor(public apiGateway: MyApiGatewayService) { }

  findAllUserSummary() {
    return this.apiGateway.get('/users');
  }

}