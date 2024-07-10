import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    {path: "home", component: HomeComponent, data: {description: "Home page"}},
    {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },    // lazy loading
    {path: "events", loadChildren: () => import('./events/events.module').then(m => m.EventsModule)},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "error", component: ErrorComponent, data: {error: {message: "Wrong route!"}} },
    {path: "**", redirectTo: "error", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
