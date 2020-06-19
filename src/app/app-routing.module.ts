import { AdminAuthGuard } from "./guards/adminAuth.guard";
import { ProfileComponent } from "./components/profile/profile.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

import { ListIngredientComponent } from "./components/admin/ingredient/list-ingredient/list-ingredient.component";
import { EditIngredientComponent } from "./components/admin/ingredient/edit-ingredient/edit-ingredient.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarsListComponent } from "./components/bars/bars-list/bars-list.component";
import { DrinksListComponent } from "./components/drinks/drinks-list/drinks-list.component";
import { DrinksFilterComponent } from "./components/drinks/drinks-filter/drinks-filter.component";
import { AddIngredientComponent } from "./components/admin/ingredient/add-ingredient/add-ingredient.component";
import { AddBarComponent } from "./components/admin/bar/add-bar/add-bar.component";
import { JuegosComponent } from "./components/juegos/juegos.component";
import { ListBarComponent } from "./components/admin/bar/list-bar/list-bar.component";
import { EditBarComponent } from "./components/admin/bar/edit-bar/edit-bar.component";

import { PruebaComponent } from "./components/prueba/prueba.component";
import { PruebaNewComponent } from "./components/prueba-new/prueba-new.component";
import { PruebaEditComponent } from "./components/prueba-edit/prueba-edit.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";
import { from } from "rxjs";

import { FilterParentComponent } from "./components/drinks/filter-parent/filter-parent.component";
import { ListDrinkComponent } from "./components/admin/drink/list-drink/list-drink.component";
import { AddDrinkComponent } from "./components/admin/drink/add-drink/add-drink.component";
import { EditDrinkComponent } from "./components/admin/drink/edit-drink/edit-drink.component";
import {AddZoneComponent} from './components/admin/zone/add-zone/add-zone.component';
import {EditZoneComponent} from './components/admin/zone/edit-zone/edit-zone.component';
import {ListZoneComponent} from './components/admin/zone/list-zone/list-zone.component';
import {ListGameComponent} from './components/admin/game/list-game/list-game.component';
import {EditGameComponent} from './components/admin/game/edit-game/edit-game.component';
import {AddGameComponent} from './components/admin/game/add-game/add-game.component';

const routes: Routes = [
  // USERS' ROUTES

  {
    path: "bars",
    component: BarsListComponent,
    canActivate: [AuthGuard],
  },
  { path: "drinks", component: DrinksListComponent, canActivate: [AuthGuard] },
  {
    path: "drinks/filter",
    component: FilterParentComponent,
    canActivate: [AuthGuard],
  },

  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },

  { path: "juegos", component: JuegosComponent },

  // ADMIN'S ROUTES
  {
    path: "admin/ingredient/add",
    component: AddIngredientComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: "admin/ingredient",
    component: ListIngredientComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: "admin/ingredient/edit/:id",
    component: EditIngredientComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: "admin/bar/add",
    component: AddBarComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: "admin/bar",
    component: ListBarComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: "admin/bar/edit/:id",
    component: EditBarComponent,
    canActivate: [AdminAuthGuard],
  },

  {
    path: "admin/drink",
    component: ListDrinkComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/drink/add",
    component: AddDrinkComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/drink/edit/:id",
    component: EditDrinkComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/zone",
    component: ListZoneComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/zone/add",
    component: AddZoneComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/zone/edit/:id",
    component: EditZoneComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/game",
    component: ListGameComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/game/add",
    component: AddGameComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/game/edit/:id",
    component: EditGameComponent,
    canActivate: [AdminAuthGuard]
  },


  

  // RUTAS DE PRUEBA
  { path: "prueba", component: PruebaComponent },
  { path: "add-prueba", component: PruebaNewComponent },
  { path: "prueba/update/:id", component: PruebaEditComponent },

  //Ruta no encontrada
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
