'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProdutosCarrinho = use("App/Models/ProdutosCarrinho")

/**
 * Resourceful controller for interacting with produtoscarrinhos
 */
class ProdutosCarrinhoController {
  /**
   * Show a list of all produtoscarrinhos.
   * GET produtoscarrinhos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const produtosCarrinho = ProdutosCarrinho.all()
    return produtosCarrinho
  }

  async produtosporcarrinho({params, request, response, view}){
    const produtos = await ProdutosCarrinho.query().where('carrinhoId','=', params.id).fetch();
    return produtos;
  }

  /**
   * Render a form to be used for creating a new produtoscarrinho.
   * GET produtoscarrinhos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new produtoscarrinho.
   * POST produtoscarrinhos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['produtoId','carrinhoId','qtd','vlrUnitario','vlrTotal'])
    let produtosCarrinho = await ProdutosCarrinho.create(data)

    return produtosCarrinho    
  }

  /**
   * Display a single produtoscarrinho.
   * GET produtoscarrinhos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const produtoCarrinho = ProdutosCarrinho.find(params.id)

    return produtoCarrinho
  }

  /**
   * Render a form to update an existing produtoscarrinho.
   * GET produtoscarrinhos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update produtoscarrinho details.
   * PUT or PATCH produtoscarrinhos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let produtoCarrinhorequest = request.only(['produtoId','carrinhoId','qtd','vlrUnitario','vlrTotal'])
    const produtoCarrinho = await ProdutosCarrinho.find(params.id)
    produtoCarrinho.merge(produtoCarrinhorequest)
    await produtoCarrinho.save()

    return produtoCarrinho 
  }

  /**
   * Delete a produtoscarrinho with id.
   * DELETE produtoscarrinhos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const produtoCarrinho = await ProdutosCarrinho.find(params.id)
    produtoCarrinho.delete()
    response.send({messagem:'deletado com sucesso'})    
  }
}

module.exports = ProdutosCarrinhoController
