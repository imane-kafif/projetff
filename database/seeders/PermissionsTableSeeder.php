<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use App\Models\Permission;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $permissions = [
            [
                'id' => 1,
                'title' => 'task_create',
            ],
            [
                'id' => 2,
                'title' => 'task_edit',
            ],
            [
                'id' => 3,
                'title' => 'task_destroy',
            ],
        ];
        Permission::insert($permissions);
    }
}
