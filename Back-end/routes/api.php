<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\BitacoraController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(UserController::class)->group(function () {
    Route::get('user', "index");
    Route::get('user/show/{id}', "show");
    Route::get('user/details/{email}', "getByEmail");
    Route::post('user/login', "login");    
    Route::post('user/create', "create");
    Route::put('user/delete/{id}', "delete");
    Route::put('user/update/{id}', "update");
});

Route::controller(PersonaController::class)->group(function () {
    Route::get('persona', "index");
    Route::get('persona/show/{id}', "show");
    Route::post('persona/create', "create");
    Route::put('persona/delete/{id}', "delete");
    Route::put('persona/update/{id}', "update");
});

Route::controller(RoleController::class)->group(function () {
    Route::get('rol', "index");
    Route::get('rol/show/{id}', "show");
    Route::post('rol/create', "create");
    Route::put('rol/delete/{id}', "delete");
    Route::put('rol/update/{id}', "update");
});

Route::controller(PaginaController::class)->group(function () {
    Route::get('pagina', "index");
    Route::get('pagina/show/{id}', "show");
    Route::post('pagina/create', "create");
    Route::put('pagina/delete/{id}', "delete");
    Route::put('pagina/update/{id}', "update");
});

Route::controller(EnlaceController::class)->group(function () {
    Route::get('enlace', "index");
    Route::get('enlace/show/{id}', "show");
    Route::get('enlace/rol/{id}', "getByRol");
    Route::post('enlace/create', "create");
    Route::put('enlace/delete/{id}', "delete");
    Route::put('enlace/update/{id}', "update");
});

Route::controller(BitacoraController::class)->group(function () {
    Route::get('bitacora', "index");
    Route::get('bitacora/show/{id}', "show");
    Route::post('bitacora/create', "create");
});