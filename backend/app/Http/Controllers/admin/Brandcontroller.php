<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Brandcontroller extends Controller
{
    public function index (Request $request){
        $brand = Brand::all();

        if(!$brand){
            return response()->json([
                "status" => 404,
                "message" => "brand no data"
            ]);
        }

        return response()->json([
               "status" => 200,
               "brand" => $brand
        ]);
           
        
    }

    public function stor (Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => 400,
                "error" => $validator->errors(),
            ], 400);
        }

        $brand = new Brand();
        $brand->name = $request->name;
        $brand->status = $request->status;
        $brand->save();
        return response()->json([
            "status"=> 200,
            "message"=> "brand add successful",
            "data"=>$brand,
        ]);

    }

    public function update ($id, Request $request)
    {
        $brand = Brand::find($id);

        if(!$brand){
            return response()->json([
                "status" => 404,
                "message" => "brand not found"
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
                "message" => "brand not found"
            ]);
        }

        $brand->delete();
        
        return response()->json([
            "status"=> 200,
            "message"=> "brand delete successful",
        ]);

    }
}
