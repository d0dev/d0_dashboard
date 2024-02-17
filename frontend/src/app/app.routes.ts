import { Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
    // { path: 'home', component: HomeComponent },
     { path: 'test', component: TestComponent },
    { path: 'data-display', component: DataDisplayComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];
