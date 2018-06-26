
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', (table) => {
    table.increments();
    table.string('full_name');
    table.string('weapon');
    table.string('contact_info');
    table.integer('age');
    table.integer('price');
    table.decimal('rating', 2, 1);
    table.integer('kills').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('assassins');
};
