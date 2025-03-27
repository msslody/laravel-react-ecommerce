<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::all();

        return response()->json([
            "status" => 200,
            "products" =>  $products,
        ]);
    }

    public function store (Request $request)
    {
        $vailadator = Validator::make($request->all(), [
            'title' => 'required',
            'category_id' => 'required',
            'brand_id' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'image' => 'required',
            'description' => 'required',
            'status' => 'required',
        ]);
        if ($vailadator->fails()) {
            return response()->json([
                "status" => 400,
                "errors" => $vailadator->errors()
            ]);
        }
        $image = $request->file('image');
        $imageName = time().'.'.$request->image->extension();  
        $image->move(public_path('/uploads'), $imageName);

        $product = new product();
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->title = $request->title;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->image = $imageName;
        $product->description = $request->description;
        $product->status = $request->status;
        $product->save();

        return response()->json([
            "status" => 201,
            "product" =>  $product
        ]);
    }

    public function getsingleproduct ($id,Request $request){
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "status" => 404,
                "message" => "product not found with id $id"

            ]);
        };

        return response()->json([
            "status" => 200,
            "product" => $product
        ]);
    }

    public function update($id, Request $request)
    {
        $product = Product::find($id);
    
        if (!$product) {
            return response()->json([
                "status" => 404,
                "message" => "Product not found"
            ]);
        }
    
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('/uploads'), $imageName);
    
            if ($product->image && file_exists(public_path('/uploads' . $product->image))) {
                unlink(public_path('/uploads' . $product->image));
            }
    
            $product->image = $imageName;
        }
    
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->title = $request->title;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->description = $request->description;
        $product->status = $request->status;
        $product->save();
    
        return response()->json([
            "status" => 200,
            "product" => $product
        ]);
    }

    public function delete($id,Request $request)
    {
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "status" => 404,
                "message" =>  "product not found"
            ]);
        };

        $product->delete();

        return response()->json([
            "status" => 200,
            "message" =>  "product deleted successfully"
        ]);
    }
}
