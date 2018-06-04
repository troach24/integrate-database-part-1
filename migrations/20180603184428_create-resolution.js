
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolution', resolution => {
    resolution.increments();
    resolution.date('dueDate');
    resolution.text('resolution');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resolution')
};
