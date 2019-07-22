<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    $user = [
	        'name' => "test",
	        'email' => "test@test.vn",
	        'password' => bcrypt('123456'),
	        'role' => 1,
	        'login_as' => 0,
	        'remember_token' => str_random(10),
	    ];

	    User::create($user);
	
    }
}
