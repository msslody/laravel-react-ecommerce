<?php

namespace App\HTTP\Controllers\admin;

use App\HTTP\Controllers\Controller;
use App\Http\Requests\BrandRequest;
use App\Models\Brand;
use Illuminate\HTTP\Request;
use Illuminate\Support\Facades\Validator;

class Brandcontroller extends Controller
{
    public function index (Request $request){
        $brand = Brand::all();

        if(!$brand){
            return response()->json([
                "status" => 404,
                "message" => "no data"
            ]);
        }

        return response()->json([
               "status" => 200,
               "brand" => $brand
        ]);


    }

    public function store (BrandRequest $request){

        $brand = new Brand();
        $brand->name = $request->name;
        $brand->status = 1;
        $brand->save();
        return response()->json([
            "status"=> 200,
            "message"=> "brand add successfully",
            "data"=>$brand,
        ]);

    }

    public function update ($id, Request $request)
    {
        $brand = Brand::find($id);

        if(!$brand){
            return response()->json([
                "status" => 404,
                "message" => "brand not found!"
            ]);
        }

        $brand->name = $request->name;
        $brand->status = $request->status;
        $brand->save();

        return response()->json([
            "status"=> 200,
            "message"=> "brand update successful",
            "brand"=>$brand,
        ]);
    }

    public function delete ($id,Request $request){
        $brand = Brand::find($id);

        if(!$brand){
            return response()->json([
                "status" => 404,
                "message" => "brand not found!"
            ]);
        }

        $brand->delete();

        return response()->json([
            "status"=> 200,
            "message"=> "brand delete successfully",
        ]);

    }
}
