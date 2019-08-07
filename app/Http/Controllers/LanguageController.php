<?php

namespace App\Http\Controllers;

/**
 * Class LanguageController.
 */
class LanguageController extends Controller
{
    protected $json;

    public function __construct()
    {

    }

    /**
     * @param $locale
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function swap($locale)
    {
        dd(array_key_exists($locale, config('locale.languages')));
        if (array_key_exists($locale, config('locale.languages'))) {
            session()->put('locale', $locale);
            app()->setLocale($locale);
        }
        $this->json = [
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
        ];

        #dump($this->json);

        #dd(session()->all());

        return response()->json( [
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
        ]
        #return back();
        );
    }
}
