import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {   path:'',
        component:HomeComponent
    },
    {   path:'tasks',
        component:TasksComponent
    },
    {   path:'about',
        component:AboutComponent
    }
];
