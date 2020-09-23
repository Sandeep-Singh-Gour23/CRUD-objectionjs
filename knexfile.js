   module.exports = {
    development: {
    client: 'mysql',
     // Change these with your own database connection URL.
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'test'
      },
      migrations: {
        directory: './src/migrations'     // Directory to migration files of the project.
      }
    }
}