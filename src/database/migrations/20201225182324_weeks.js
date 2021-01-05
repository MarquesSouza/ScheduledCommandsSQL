
exports.up = function(knex) {
    return knex.schema.createTable('weeks',table=>{
        table.increments('id').primary();
        table.string('week').notNullable();
        table.integer('schedule_id')
        .notNullable()
        .references('id')
        .inTable('schedules')
        .onUpdate('CASCADE')
        })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('weeks')
};
