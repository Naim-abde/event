<?php

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("slug")->unique();
            $table->text("description");
            $table->string('image');
            $table->string('location');
            $table->dateTime("start_date");
            $table->dateTime("end_date");
            $table->foreignIdFor(User::class)->constrained("users");
            $table->foreignIdFor(Category::class)->constrained("categories");
            $table->integer("total_seats");
            $table->integer("available_seats");
            $table->decimal("price",10,2);
            $table->enum("status",['draft','published', 'cancelled', 'finished'])->default('draft');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
