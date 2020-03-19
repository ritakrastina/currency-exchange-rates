import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  errors: string[] = [];

  constructor() { }

  addError(error: string) {
    this.errors.push(error);
  }

  clearErrors() {
    this.errors = [];
  }
}
