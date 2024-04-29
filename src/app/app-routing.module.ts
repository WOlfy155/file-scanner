import {inject, NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AuthService} from './shared/services/auth.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'main',
    canMatch: [AuthGuard],
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

function AuthGuard() {
  const {authToken} = inject(AuthService);

  if (authToken) {
    return true;
  }

  return inject(Router).navigate(['/auth/login']);
};
