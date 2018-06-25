
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', (table) => {
    table.increments();
    table.string('full_name').notNullable();
    table.string('code_names').notNullable();
    table.string('weapon').notNullable();
    table.string('contact_info').notNullable();
    table.integer('age').notNullable();
    table.integer('price').notNullable();
    table.decimal('rating', 2, 1).notNullable();
    table.integer('kills').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('assassins');
};
