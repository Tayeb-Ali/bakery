import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/bakery/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
    },
    {
        path: 'agent-home',
        loadChildren: () => import('./pages/agents/agent-home/agent-home.module').then(m => m.AgentHomePageModule)
    },
    {
        path: 'agent-order-details',
        loadChildren: () => import('./pages/agents/agent-order-details/agent-order-details.module')
            .then(m => m.AgentOrderDetailsModule)
    },
    {
        path: 'order-details',
        loadChildren: () => import('./pages/bakery/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
    },
    {
        path: 'received-order-details',
        loadChildren: () => import('./pages/bakery/received-order-details/received-order-details.module')
            .then(m => m.ReceivedOrderDetailsPageModule)
    },
    {
        path: 'agent-state-of-bakery',
        loadChildren: () => import('./pages/agents/agent-state-of-bakery/agent-state-of-bakery.module')
            .then(m => m.AgentStateOfBakeryPageModule)
    },
    {
        path: 'agent-list-orders',
        loadChildren: () => import('./pages/agents/agent-list-orders/agent-list-orders.module').then(m => m.AgentListOrdersPageModule)
    },
    {
        path: 'list-orders',
        loadChildren: () => import('./pages/bakery/list-orders/list-orders.module').then(m => m.ListOrdersPageModule)
    },
    {
        path: 'state-of-bakery',
        loadChildren: () => import('./pages/bakery/state-of-bakery/state-of-bakery.module').then(m => m.StateOfBakeryPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
