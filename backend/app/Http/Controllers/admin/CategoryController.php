<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index(){
        $category =Category::all();

        if(!$category){
            return response()->json([
                "status" => 404,
                "message" => "category no data"
            ]);
        }

        return response()->json([
            "status"=>200,
            "data"=>$category,
        ]);
    }

    public function stor(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => 400,
                "error" => $validator->errors(),
            ], 400);
        }

        $category = new Category();
        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();
        return response()->json([
            "status"=> 200,
            "msg"=> "category add successful",
            "data"=>$category,
        ]);       
    }

    public function update ($id,Request $request)
    {
        $category = Category::find($id);

        if(!$category){
            return response()->json([
                "status" => 404,
                "message" => "category not found"
            ]);
        }

        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();

        return response()->json([
            "status" => 400,
            "message" =>"category update succesful",
            "category" => $category

        ]);
    }

    public function delete ($id, Request $request){
        $category = Category::find($id);

        if(!$category){
            return response()->json([
                "status" => 404,
                "message" => "category not found"
            ]);
        }

        $category->delete();

        return response()->json([
            "status"=> 200,
            "message"=> "category delete successful",
        ]);
    }
}
