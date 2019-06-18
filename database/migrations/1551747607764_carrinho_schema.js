'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarrinhoSchema extends Schema {
  up () {
    this.create('carrinhos', (table) => {
      table.increments()
      table.decimal('vlrPedido',10,2).notNullable()
      table.string('observacao',255)
      table.string('formaPagamento',255).notNullable()
      table.string('status',15).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('carrinhos')
  }
}

module.exports = CarrinhoSchema
