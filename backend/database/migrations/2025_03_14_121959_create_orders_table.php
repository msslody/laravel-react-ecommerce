<?php

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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id");
            $table->double("subtotal");
            $table->double("grand_total");
            $table->double("shipping");
            $table->enum("payment_status",['paid','not paid'])->default('not paid');
            $table->enum('status',['pending','shipped','cancelled'])->default('pending');
            $table->string("name");
            $table->string("email");
            $table->string("mobile");
            $table->string("address");
            $table->string("city");
            $table->string("state");
            $table->string('zip');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
