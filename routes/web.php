<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CreditController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Feature1Controller;
use App\Http\Controllers\Feature2Controller;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/buy-credits/webhook', [CreditController::class, 'webhook'])->name('credit.webhook');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard route
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Feature 1 route
    Route::get('feature1', [Feature1Controller::class, 'index'])->name('feature1.index');
    Route::post('feature1', [Feature1Controller::class, 'calculate'])->name('feature1.calculate');

    // Feature 2 route
    Route::get('feature2', [Feature2Controller::class, 'index'])->name('feature2.index');
    Route::post('feature2', [Feature2Controller::class, 'calculate'])->name('feature2.calculate');

    // Credit route
    Route::get('buy-credits', [CreditController::class, 'index'])->name('credit.index');
    Route::get('buy-credits/success', [CreditController::class, 'success'])->name('credit.success');
    Route::get('buy-credits/cancel', [CreditController::class, 'cancel'])->name('credit.cancel');

    Route::post('buy-credits/{package}', [CreditController::class, 'buyCredits'])->name('credit.buy');
});

require __DIR__ . '/auth.php';
