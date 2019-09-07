<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Http\Requests\PostRequest;

class PostsController extends Controller
{
    /**
     * 記事一覧の表示
     */
    public function index()
    {
        // $posts = Post::all();
        // $posts = Post::orderBy('created_at', 'desc')->get();
        $posts = Post::latest()->get(); //上と同じ意味
        // $posts = [];
        // dd($posts->toArray()); //dump die

        // return view('posts.index', ['posts' => $posts]);
        return view('posts.index')->with('posts', $posts); //上と同じ意味
    }
    /**
     * 記事詳細の表示
     * @param Post $post  idが入る
     */
    // public function show($id)
    public function show(Post $post)
    {
        // $post = Post::findorFail($id); //エラーの場合は例外エラーになる
        return view('posts.show')->with('post', $post);
    }
    /**
     * 新規記事フォーム表示
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * 記事の保存
     *
     * @param PostRequest $request
     * @return void
     */
    public function store(PostRequest $request)
    {
        // $this->validate($request, [
        //     'title' => 'required | min:3',
        //     'body' => 'required'
        // ]);
        $post = new Post();
        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();
        return redirect('/');
    }
    /**
     * 記事変更フォームの表示
     * @param Post $post  idが入る
     */
    public function edit(Post $post)
    {
        return view('posts.edit')->with('post', $post);
    }

    /**
     * 記事の更新
     *
     * @param PostRequest $request
     * @param Post $post
     * @return void
     */
    public function update(PostRequest $request, Post $post)
    {
        // $this->validate($request, [
        //     'title' => 'required | min:3',
        //     'body' => 'required'
        // ]);
        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();
        return redirect('/');
    }

    /**
     * 記事の削除
     *
     * @param Post $post 削除対象オブジェクト
     * @return void
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('/');
    }
}
