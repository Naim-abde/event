<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
     protected $fillable = [
          'title',

        'slug',

        'description',

        'image',

        'location',

        'start_date',

        'end_date',

        'user_id',

        'category_id',

        'total_seats',

        'available_seats',

        'price',

        'status',
    ];
}
