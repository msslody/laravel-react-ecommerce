<?php

namespace App\HTTP\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\HTTP\Request;

class CategoryController extends Controller
{
    public function index(){
        $category =Category::all();

        if(!$category){
            return response()->json([
                "status" => 404,
                "message" => "category no data!"
            ]);
        }

        return response()->json([
            "status"=>200,
            "data"=>$category,
        ]);
    }

    public function store(CategoryRequest $request) {
        $category = new Category();
        $category->name = $request->name;
        $category->status = 1;
        $category->save();
        return response()->json([
            "status"=> 200,
            "msg"=> "category add successfully",
            "data"=>$category,
        ]);
    }

    public function update ($id,Request $request)
    {
        $category = Category::find($id);

        if(!$category){
            return response()->json([
                "status" => 404,
                "message" => "category not found!"
            ]);
        }

        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();

        return response()->json([
            "status" => 400,
            "message" =>"category update succesfully",
            "category" => $category

        ]);
    }

    public function delete ($id, Request $request){
        $category = Category::find($id);

        if(!$category){
            return response()->json([
                "status" => 404,
                "message" => "category not found!"
            ]);
        }

        $category->delete();

        return response()->json([
            "status"=> 200,
            "message"=> "category delete successfully",
        ]);
    }
}
