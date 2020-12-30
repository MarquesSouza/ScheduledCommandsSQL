exports.up = function(knex) {
  return knex.schema.createTable('schedules',table=>{
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('datasouce').notNullable();
    table.string('initial').notNullable();
    table.int('type_schedule').notNullable();
    table.int('time');
    table.string('command').notNullable();
    table.boolean('status').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('schedules')
};
