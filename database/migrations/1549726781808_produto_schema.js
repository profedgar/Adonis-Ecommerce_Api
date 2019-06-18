'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.integer('categoriaId').unsigned()
      table.decimal('preco',10,2)
      table.string('nome',255).notNullable()
      table.string('icone',255).notNullable()

      table.foreign('categoriaId').references('id').inTable('categorias')

      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
