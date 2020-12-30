
exports.up = function(knex) {
    return knex.schema.createTable('weeks',table=>{
        table.increments('id').primary();
        
        table.integer('schedule_id')
        .notNullable()
        .references('id')
        .inTable('schedules')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
        })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('weeks')
};
