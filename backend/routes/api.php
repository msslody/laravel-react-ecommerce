<?php

use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\Brandcontroller;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\front\OrderController;
use App\Http\Controllers\front\ProductControllrt;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);
Route::post("saveorder",[OrderController::class , "order"]);
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
    Route::post("category", [CategoryController::class, 'store']);
    Route::put("category/{id}", [CategoryController::class, 'update']);
    Route::delete("category/{id}", [CategoryController::class, 'delete']);



    Route::get('brand',[Brandcontroller::class, 'index']);
    Route::post('brand',[Brandcontroller::class,'store']);
    Route::put('brand/{id}',[Brandcontroller::class,'update']);
    Route::delete('brand/delete',[Brandcontroller::class,'delete']);

   
    

});
Route::get('/users', function () {
    return User::all();
});