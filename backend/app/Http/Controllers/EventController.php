<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index (Request $request){
        $events = User::all();
        return response()->json($events);
    }

    public function store (){

    }
}
