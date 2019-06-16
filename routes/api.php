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

Route::get('config', function () {
    return response()->json([
        'app'  => [
            'name'             => app_name(),
            'current_language' => app()->getLocale(),
            'config'           => config('locale.status'),
            'languages'        => ['picker' => __('menus.picker.language')] + config('locale.languages'),
        ],
        'lang' => [
            'alerts'     => __('alerts'),
            'auth'       => __('auth'),
            'buttons'    => __('buttons'),
            'exceptions' => __('exceptions'),
            'http'       => __('http'),
            'labels'     => __('labels'),
            'menus'      => __('menus'),
            'navs'       => __('navs'),
            'pagination' => __('pagination'),
            'passwords'  => __('passwords'),
            'roles'      => __('roles'),
            'strings'    => __('strings'),
            'validation' => __('validation'),
        ],
        'user' => [
            'guest' => auth()->guest(),
        ],
    ], 200);
});
