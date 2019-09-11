'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route to root/home
Route.on('/').render('welcome')

//get
Route.get('/home', ()=> 'Welcome to my Home')
Route.get('/home2', function(){
  return 'Welcome to my Home 2';
})

//get with param
Route.get('/home/:id', function({ params }){
  return `This is the id ${params.id}`;
})
