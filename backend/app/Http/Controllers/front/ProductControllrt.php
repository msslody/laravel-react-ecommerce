<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
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

    public function store(ProductRequest $request)
{
    $data = $request->validated();

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $filename = time() . '_' . $image->getClientOriginalName();

        // Store in storage/app/public/images
        $path = $image->storeAs('public/images', $filename);

        // Save only the accessible path
        $data['image'] = asset('storage/images/' . $filename);


    }

    $product = Product::create($data);

    return response()->json([
        'status' => 200,
        'message' => 'Product created successfully',
        'product' => $product
    ], 200);
}




   


}
