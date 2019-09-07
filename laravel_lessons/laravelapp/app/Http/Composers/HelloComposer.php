<?php

namespace App\Http\Composers;

use Illuminate\View\View;

class HelloComposer
{

    public function compose(View $view)
    {
        $data = $view->getData();
        $view->with('view_message', 'this view is!!');
    }
}
