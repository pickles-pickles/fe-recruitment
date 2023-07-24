import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'
import { CounterContainerComponent } from './counter-container/counter-container.component'

const routes: Routes = [
  { path: 'counter', component: CounterContainerComponent },
  { path: '**', component: HomepageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
