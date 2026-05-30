<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
            "name" => "required",
            "image" => "nullable|image"
        ]);
        $path = null;
        if($request->hasFile("image")){
            $path = $request->file("image")->store("category","public");
        }
         Category::create([
            "name" =>$data["name"],
            "slug" =>Str::slug($data["name"]),
            "image" => $path
            

        ]);
         return response()->json("category add");
    }
    public function index (){
        $categories = Category::all();
        return response()->json($categories);
    }
}
