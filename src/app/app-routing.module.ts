import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}
