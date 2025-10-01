<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class AdminLayout extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * Method ini menentukan file Blade mana yang akan di-render
     * saat komponen ini dipanggil. Kita arahkan ke 'layouts.admin'.
     */
    public function render(): View|Closure|string
    {
        return view('layouts.admin');
    }
}
