import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDialogComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    SecurityRoutingModule,
  ]
})
export class SecurityModule { }


