<?php

namespace App\HTTP\Controllers\admin;

use App\HTTP\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\HTTP\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create($request->all());

        return response()->json([
            'status' =>200,
            'message' => "user create successful",
            'user' => $user
        ]);
    }
    public function login(LoginRequest $request)
    {
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
