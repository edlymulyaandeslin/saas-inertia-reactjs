<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Package;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'super',
            'email' => 'super@gmail.com',
        ]);

        Feature::create([
            'image' => 'https://www.shutterstock.com/image-vector/features-sign-paper-origami-speech-260nw-1164486631.jpg',
            'route_name' => 'feature1.index',
            'name' => 'Calculate Sum',
            'description' => 'Calculate the sum of two numbers',
            'required_credits' => 4,
            'active' => true
        ]);

        Feature::create([
            'image' => 'https://www.shutterstock.com/image-vector/features-sign-paper-origami-speech-260nw-1164486631.jpg',
            'route_name' => 'feature2.index',
            'name' => 'Calculate Different',
            'description' => 'Calculate different numbers',
            'required_credits' => 7,
            'active' => true
        ]);

        Package::create([
            'name' => 'Basic',
            'price' => 5,
            'credits' => 20,
        ]);

        Package::create([
            'name' => 'Silver',
            'price' => 20,
            'credits' => 100,
        ]);

        Package::create([
            'name' => 'Gold',
            'price' => 50,
            'credits' => 500,
        ]);
    }
}
