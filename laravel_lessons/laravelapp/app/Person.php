<?php

namespace App;

// use App\Scopes\ScopePerson;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Person extends Model
{
    // リスト6-18
    protected $guarded = array('id');

    public static $rules = array(
        'name' => 'required',
        'mail' => 'email',
        'age' => 'integer|min:0|max:150'
    );

    // リスト6-15
    // protected static function boot()
    // {
    //     parent::boot();
    //     static::addGlobalScope(new ScopePerson);
    // }

    //リスト6-5
    public function getData()
    {
        return $this->id . ': ' . $this->name . ' (' . $this->age . ')';
    }

    // リスト6-11
    public function scopeNameEqual($query, $str)
    {
        return $query->where('name', $str);
    }
    // リスト6-13
    public function scopeAgeGreaterThan($query, $n)
    {
        return $query->where('age', '>=', $n);
    }

    public function scopeAgeLessThan($query, $n)
    {
        return $query->where('age', '<=', $n);
    }

    // リスト6-35
    public function board()
    {
        return $this->hasOne('App\Board');
    }
    // リスト6-37
    public function boards()
    {
        return $this->hasMany('App\Board');
    }
}
