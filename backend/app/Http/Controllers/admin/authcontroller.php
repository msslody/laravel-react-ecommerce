<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"=> "required",
            "email"=> "required",
            "password"=> "required",
          
        ]);

        if($validator->fails()){
            return response()->json([
                "status"=> 400,
                "error"=> $validator->errors(),
            ],400);
        }

        $user = new User();
        $user->name =$request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'status' =>200,
            'message' => "user create successful",
            'user' => $user
        ]);
    }
    public function login(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => 400,
                "error" => $validator->errors(),
            ], 400);
        }
        $user = User::where('email', $request->email)->first();


        if ($user || Hash::check($request->password,$user->password)) {

            $token = $user->createToken('authToken')->plainTextToken; // Corrected this line

            return response()->json([
                "status" => 200,
                "token" => $token,
                "email" => $user->email,
                "name" => $user->name,
            ]);
        } else {
            return response()->json([
                "status" => 400,
                "error" => "Invalid credentials",
            ], 400);
        }
    }
}