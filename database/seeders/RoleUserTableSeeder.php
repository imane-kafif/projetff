<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use App\Models\Role;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::findOrFail(1)->roles()->sync([1]);
        User::findOrFail(2)->roles()->sync([2]);
        
    }
}
