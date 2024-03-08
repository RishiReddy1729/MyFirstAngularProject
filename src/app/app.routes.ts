import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BodyContentComponent } from './body-content/body-content.component';


export const routes: Routes = [
    
    {path: '', redirectTo: '/body-content',pathMatch: 'full'},
    {path: 'body-content',component:BodyContentComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}