<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ApiController extends Controller
{
    /**
     * Update the authenticated user's API token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function config()
    {
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
            'locale' => config('locale'),
        ], 200);
    }

    public function swap($locale)
    {
        if (array_key_exists($locale, config('locale.languages'))) {
            session()->put('locale', $locale);
        }



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
            'locale' => config('locale'),
        ], 200);

    }
}
