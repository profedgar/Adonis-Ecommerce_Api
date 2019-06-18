'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with carrinhos
 */
const Carrinho = use("App/Models/Carrinho")

class CarrinhoController {
  /**
   * Show a list of all carrinhos.
   * GET carrinhos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const carrinhos = Carrinho.all()
    return carrinhos
  }

  async carrinhoaberto({params, request, response, view}){
    const carrinhoAberto = await Carrinho.query().where('status','=', "aberto").fetch();
    return carrinhoAberto;
  }

  /**
   * Render a form to be used for creating a new carrinho.
   * GET carrinhos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new carrinho.
   * POST carrinhos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['vlrPedido','observacao','formaPagamento','status'])
    let carrinho = await Carrinho.create(data)

    return carrinho    
  }

  /**
   * Display a single carrinho.
   * GET carrinhos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const carrinho = Carrinho.find(params.id)

    return carrinho
  }

  /**
   * Render a form to update an existing carrinho.
   * GET carrinhos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update carrinho details.
   * PUT or PATCH carrinhos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let carrinhorequest = request.only(['vlrPedido','observacao','formaPagamento','status'])
    const carrinho = await Carrinho.find(params.id)
    carrinho.merge(carrinhorequest)
    await carrinho.save()

    return carrinho
  }

  /**
   * Delete a carrinho with id.
   * DELETE carrinhos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const carrinho = await Carrinho.find(params.id)
    carrinho.delete()
    response.send({messagem:'deletado com sucesso'})    
  }
}

module.exports = CarrinhoController
