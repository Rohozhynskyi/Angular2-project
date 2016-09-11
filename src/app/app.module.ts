import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import {InputTextModule} from 'primeng/primeng';

import {InputComponent} from '../global/controls/input/input.component'

@NgModule({
    imports: [BrowserModule, FormsModule, InputTextModule],
    declarations: [AppComponent, InputComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}