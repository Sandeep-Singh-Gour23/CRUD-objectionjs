
exports.up = function(knex) {
    return knex.schema.createTable("users",function(table){
        table.increments("id");
        table.string("name").notNullable();
        table.string("email");
        table.string("city");
        table.integer("salary")

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
