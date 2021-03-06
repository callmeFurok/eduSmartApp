import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'result-university/:data',
    loadChildren: () =>
      import('./result-university/result-university.module').then(
        (m) => m.ResultUniversityPageModule
      ),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((m) => m.TestPageModule),
  },  {
    path: 'universityresult',
    loadChildren: () => import('./universityresult/universityresult.module').then( m => m.UniversityresultPageModule)
  },
  {
    path: 'myresult',
    loadChildren: () => import('./myresult/myresult.module').then( m => m.MyresultPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
