<?php

use App\Http\Controllers\AuthContoller;
use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public routes
// Route::post('/register', [AuthContoller::class, 'register']);
// Route::post('/login', [AuthContoller::class, 'login']);
// Route::get("/index",[EventController::class,"index"]);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get("/events",[EventController::class,"index"])->middleware("auth:sanctum");

Route::post('/register', [AuthContoller::class, 'register']);
Route::post('/login', [AuthContoller::class, 'login']);

Route::get("/index",[EventController::class,"index"]); // public if needed

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/events', [EventController::class, 'index']);
});