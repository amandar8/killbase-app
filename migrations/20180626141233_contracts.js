
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', (table) => {
    table.increments();
    table.integer('target_id').references('id').inTable('assassins').onDelete('cascade');
    table.integer('client_id').references('id').inTable('clients').onDelete('cascade');
    table.integer('budget');
    table.boolean('complete');
    table.integer('completed_by_id').references('id').inTable('assassins').onDelete('cascade').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contracts');
};
