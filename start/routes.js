'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/*Route.get('/produtos/:id', function({params}) {
  return 'retornou '+params.id;
})*/

/*Route.post('/produtos', () => {
  return 'retornou produtos'
})*/

Route.get('/teste', 'TesteController.mostrarmenssagem')

Route.resource('/categorias','CategoriaController')

Route.resource('/produtos','ProdutoController')

Route.resource('/carrinhos','CarrinhoController')

Route.resource('/produtoscarrinhos','ProdutosCarrinhoController')

Route.get('/produtoscategoria/:id','ProdutoController.produtosporcategoria')

Route.get('/produtoscarrinho/:id','ProdutosCarrinhoController.produtosporcarrinho')

Route.get('/carrinhoaberto','CarrinhoController.carrinhoaberto')

Route.resource('/users','UserController')

