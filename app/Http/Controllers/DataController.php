<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
public function gettasks(){
    $data =DB::select("CALL fetch_all_tasks()");

    echo"<pre>";
    print_r($data);
}
}
