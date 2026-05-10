<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('events')->insert([
             'title' => 'Music Festival Casablanca',

    'slug' => 'music-festival-casablanca',

    'description' => 'Biggest music festival in Casablanca with many artists.',

    'image' => 'events/music.jpg',

    'location' => 'Casablanca, Morocco',

    'start_date' => '2026-06-15 18:00:00',

    'end_date' => '2026-06-15 23:30:00',

    'user_id' => 9,

    'category_id' => 1,

    'total_seats' => 500,

    'available_seats' => 500,

    'price' => 150,

    'status' => 'published',

    'created_at' => now(),
          
        ]);
    }
}
