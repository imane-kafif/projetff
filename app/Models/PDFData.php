<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDFData extends Model
{
    use HasFactory;

    protected $table = 'pdf_data';

    protected $fillable = [
        'name',
        'email',
    ];
}
