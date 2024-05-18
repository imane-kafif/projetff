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
        Role::findOrFail(1)->permissions()->sync([1, 2, 3]);
Role::findOrFail(2)->permissions()->sync([1]);
    }
}
