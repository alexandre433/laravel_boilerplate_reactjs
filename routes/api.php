<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

#Route::middleware('auth:api')->get('/user', function (Request $request) {
#    return $request->user();
#});

Route::group(['middleware' => 'auth:api'], function () {});

Route::get('config', 'ApiController@config')->name('api.config');

Route::get('lang/{lang}', 'ApiController@swap')->name('api.lang');

Route::get('locale', function () {
    return response()->json(app()->getLocale());
});
