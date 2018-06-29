
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassin_contracts', (table) => {
    table.integer('assassin_id').references('id').inTable('assassins').onDelete('cascade');
    table.integer('contract_id').references('id').inTable('contracts').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassin_contracts');
};
