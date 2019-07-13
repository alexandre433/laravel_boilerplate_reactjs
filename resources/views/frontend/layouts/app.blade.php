<!DOCTYPE html>
@langrtl
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title', app_name())</title>
        <meta name="description" content="@yield('meta_description', 'Laravel 5 Boilerplate')">
        <meta name="author" content="@yield('meta_author', 'Anthony Rappa')">
        @yield('meta')

        {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
        @stack('before-styles')

        <!-- Check if the language is set to RTL, so apply the RTL layouts -->
        <!-- Otherwise apply the normal LTR layouts -->
        {{ style('css/frontend.css') }}

        @stack('after-styles')
    </head>
    <body>

        <div id="frontend" data-lang="[]"></div>

        <!-- Scripts -->
        @stack('before-scripts')
        {!! script('js/manifest.js') !!}
        {!! script('js/vendor.js') !!}
        {!! script('js/frontend.js') !!}
        {!! script('js/app.js') !!}
        @stack('after-scripts')

        @include('includes.partials.ga')
    </body>
</html>
