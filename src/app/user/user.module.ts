import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './shared/user.service';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { AuthService } from '../auth/shared/auth.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'users', 
   component: UserComponent,
   children: [
    { path: 'profile', canActivate: [AuthGuard], component: UserDetailComponent },

  ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
    
  ],
  providers: [
    UserService,
    AuthService
  ]
})
export class UserModule {}