<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductControllrt extends Controller
{
    public function FeaturedProducts()
    {
        $product= Product::all()
        ->where('status',1)
        ->limit(4);
        

        return response()->json([
            "status"=> 200,
            "product"=> $product,
        ],200);
        
    }
    public function sellerproduct(){
        $product= Product::all()
        ->where('status',1)
        ->limit(12);

        return response()->json([
            "status"=> 200,
            "product"=> $product,
        ],200);
    }
    public function index(){
        $product= Product::all();

        return response()->json([
            "status"=> 200,
            "product"=> $product,
        ],200);
    }

   


}
