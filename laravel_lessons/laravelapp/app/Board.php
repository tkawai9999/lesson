<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    //リスト6-30
    protected $guarded = array('id');
    public static $rules = array(
        'person_id' => 'required',
        'title' => 'required',
        'message' => 'required'
    );

    // リスト6-39
    public function person()
    {
        return $this->belongsTo('App\Person');
    }

    public function getData()
    {
        return $this->id . ': ' . $this->title . ' (' . $this->person->name . ')';
        // return $this->id . ': ' . $this->title;
    }
}
