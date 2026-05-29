<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" =>"required",
        ]);
        $path = null;
        if($request->hasFile("image")){
            $path = $request->file("image")->store("user","public");
        }

        $user = User::create([
            "name" => $data["name"],
            "email" => $data["email"],
            "password" => $data["password"],
            "image" => $path

        ]);
        $token = $user->createToken("api-token")->plainTextToken;

        return response()->json([
            'user' => $user,
            "token" => $token
        ]);

        


    }

    public function login (Request $request){
        $data =$request->validate([
            "email" => "required",
            "password" => "required"
        ]);

        if(!Auth::attempt($data)){
            return  response()->json('email or password not found !!');
        }
        $user = Auth::user();
        $token = $user->createToken('api-token')->plainTextToken;
        return response()->json([
            "user" => $user,
            "token" => $token
        ]);
    }
}
