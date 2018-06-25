
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', (table) => {
    table.increments();
    table.string('full_name').notNullable();
    table.string('weapon');
    table.integer('age');
    table.integer('price');
    table.decimal('rating', 3, 1);
    table.integer('kills');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('assassins');
};
