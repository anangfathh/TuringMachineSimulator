<?php

use App\Http\Controllers\MultitapeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [MultitapeController::class, 'index']);

Route::get('/addition', [MultitapeController::class, 'addition'])->name('addition');
Route::get('/substraction', [MultitapeController::class, 'substraction'])->name('substraction');
Route::get('/multiplication', [MultitapeController::class, 'multiplication'])->name('multiplication');
Route::get('/division', [MultitapeController::class, 'division'])->name('division');
Route::get('/binarylogarithm', [MultitapeController::class, 'binarylogarithm'])->name('binary');
Route::get('/squares', [MultitapeController::class, 'power'])->name('power');
Route::get('/squareroot', [MultitapeController::class, 'squareroot'])->name('squareroot');
Route::get('/factorial', [MultitapeController::class, 'factorial'])->name('factorial');
