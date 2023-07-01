<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MultitapeController extends Controller
{

    public function index(){
        return view ('dashboard.index');
    }
    public function addition(){
        return view ('addition');
    }

    public function substraction(){
        return view ('substraction');
    }

    public function multiplication(){
        return view ('multiplication');
    }

    public function division(){
        return view ('division');
    }

    public function factorial(){
        return view ('factorial');
    }

    public function binaryLogarithm(){
        return view ('binary');
    }

    public function squares(){
        return view ('squares');
    }

    public function squareRoot(){
        return view ('squareroot');
    }
}
