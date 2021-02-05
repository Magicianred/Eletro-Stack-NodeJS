module.exports = () => {

    this.getConteudo = (connection, callback) => {
        connection.query("SELECT * FROM produtos", callback)
    }

    this.getPedidos = (connection, callback) => {
        connection.query("SELECT * FROM cliente INNER JOIN pedidos ON cliente.id_cliente = pedidos.id_cliente;", callback)
    }

    this.getProdutoPreco = (connection, callback) => {
        connection.query("SELECT * FROM produtos", callback)
    }

    return this;

}