'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosCarrinhoSchema extends Schema {
  up () {
    this.create('produtos_carrinhos', (table) => {
      table.increments()
      table.integer('produtoId').unsigned()
      table.integer('carrinhoId').unsigned()
      table.integer('qtd').notNullable()
      table.decimal('vlrUnitario',10,2).notNullable()
      table.decimal('vlrTotal',10,2).notNullable()

      table.foreign('produtoId').references('id').inTable('produtos')
      table.foreign('carrinhoId').references('id').inTable('carrinhos')

      table.timestamps()
    })
  }

  down () {
    this.drop('produtos_carrinhos')
  }
}

module.exports = ProdutosCarrinhoSchema
