   module.exports = {
    development: {
    client: 'pg',
     // Change these with your own database connection URL.
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'postgres',
        database : 'Sandeep',
       port: '5433'
      },
      migrations: {
        directory: './src/migrations'     // Directory to migration files of the project.
      }
    }
}
