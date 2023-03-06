import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisavailComponent } from './visavail/visavail.component';

const routes: Routes = [
  { path: '', component: VisavailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
