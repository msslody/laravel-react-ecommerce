<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\authcontroller;
use Illuminate\Http\Request;

Route::post('/admin',[authcontroller::class,'authenticat']);


Route::get('/', function () {
    return view('welcome');
});
