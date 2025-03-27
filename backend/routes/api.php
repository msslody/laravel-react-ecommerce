<?php

use App\Http\Controllers\admin\authcontroller;
use App\Http\Controllers\admin\Brandcontroller;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\front\Ordercontroller;
use App\Http\Controllers\front\ProductControllrt;
use App\Models\Orderitems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login',[authcontroller::class,'login']);
Route::post('register',[authcontroller::class,'register']);

Route::post("saveorder",[Ordercontroller::class , "order"]);

Route::get('FeaturedProducts',[ProductControllrt::class,'FeaturedProducts']);
Route::get('products',[ProductControllrt::class,'index']);
Route::get('productimages/{productid}', [ProductController::class,'productimage']);
Route::get('sellerproduct',[ProductControllrt::class,'sellerproduct']);
Route::get("getproduct/{id}",[ProductControllrt::class,"getproduct"]);



Route::group(['middleware' => "auth:sanctum"], function() {
    Route::post('product', [ProductController::class,'store']);
    Route::get('product', [ProductController::class,'index']);
    Route::put('product/{productid}', [ProductController::class,'update']);
    Route::get('product/{productid}', [ProductController::class,'getsingleproduct']);
    Route::delete('product/{productid}', [ProductController::class,'delete']);

    Route::get("category", [CategoryController::class, 'index']);
    Route::post("category", [CategoryController::class, 'stor']);
    Route::put("category/{id}", [CategoryController::class, 'update']);
    Route::delete("category/{id}", [CategoryController::class, 'delete']);



    Route::get('brand',[Brandcontroller::class, 'index']);
    Route::post('brand',[Brandcontroller::class,'stor']);
    Route::put('brand/{id}',[Brandcontroller::class,'update']);
    Route::delete('brand/delete',[Brandcontroller::class,'delete']);



});
