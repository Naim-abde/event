<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/register" , [AuthController::class , "register"]);
Route::post("/login" , [AuthController::class , "login"]);


Route::post("/create-category", [CategoryController::class,"store"]);
Route::get("/categories",[CategoryController::class , "index"]);
Route::get('/all-users',[AdminController::class,'allUsers']);