<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthContoller extends Controller
{
    // =========================
    // REGISTER
    // =========================
    public function register(Request $request)
    {
        $data = $request->validate([
            "name" => "required|string|max:255",
            "email" => "required|email|unique:users,email",
            "password" => "required|min:6",
            "image" => "nullable"
        ]);

        $user = User::create([
            "name" => $data["name"],
            "email" => $data["email"],
            "password" => Hash::make($data["password"]),
            "image" => $data["image"] ?? null,
        ]);
    

        $token = $user->createToken("auth")->plainTextToken;

        return response()->json([
            "message" => "User registered successfully",
            "user" => $user,
            "token" => $token
        ]);
    }

    // =========================
    // LOGIN
    // =========================
    public function login(Request $request)
    {
        $credentials = $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                "message" => "Invalid email or password"
            ], 401);
        }

        $user = Auth::user();

        $token = $user->createToken("auth")->plainTextToken;

        return response()->json([
            "message" => "Login successful",
            "user" => $user,
            "token" => $token
        ]);
    }

    // =========================
    // PROFILE (UPDATE USER)
    // =========================
   
 
    

    // =========================
    // GET ALL USERS (TEST ONLY)
    // =========================
    public function index()
    {
        return response()->json(User::all());
    }

    // =========================
    // LOGOUT
    // =========================
    public function logout(Request $request)
    {
        $user = $request->user();

        if ($user) {
            $user->tokens()->delete();
        }

        return response()->json([
            "message" => "Logged out successfully"
        ]);
    }
}