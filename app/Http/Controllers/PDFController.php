<?php

namespace App\Http\Controllers;

use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Http\Request;

use App\Models\User;
use \Barryvdh\DomPDF\Facade\Pdf;

class PDFController extends Controller
{
    public function generatePDF()
    {
        // Retrieve users from the database
        $users = User::all();

        // Load the PDF view with the users data
        $pdf = PDF::loadView('pdf.user_pdf', compact('users'));

        // Generate and download the PDF
        return $pdf->download('user.pdf');
    }
}

