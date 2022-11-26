const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool
 
router.get('/itensPedido', (req,res) => {
    const SQL = "SELECT * FROM item_pedido"
    
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao conectar com o banco",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Itens do pedido listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/itensPedido/:quantidade', (req,res) => {
    const {quantidade} = req.params
    const SQL = `SELECT * FROM item_pedido WHERE quantidade=${quantidade}`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao conectar com o banco",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Itens do pedido listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.post('/itemPedido', (req,res) => {
    const item_pedido = req.body
    const SQL = `INSERT INTO item_pedido (id, id_pedido, id_livro, preco_pago, quantidade) VALUES (${item_pedido.id}, ${item_pedido.id_pedido}, ${item_pedido.id_livro}, ${item_pedido.preco_pago}, ${item_pedido.quantidade})`
     
    banco.getConnection((error, conn) =>{
        if (error) {
            return res.status(500).json({
                "mensagem ": "Erro de conexão",
                "detalhes": error.message
            })
        }
      
        conn.query(SQL, (error, result ) => { 
            if (error) {
                return res.status(500).json({
                    "mensagem": "Erro no cadastro",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Item do pedido cadastrado com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/itemPedido/:id', (req,res) => {
    const {id} = req.params
    const item_pedido = req.body

    const SQL = `UPDATE item_pedido SET id_pedido = ?, id_livro = ?, preco_pago = ?, quantidade = ? WHERE id = ?`
    
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [item_pedido.id_pedido, item_pedido.id_livro, item_pedido.preco_pago, item_pedido.quantidade, id], (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao atualizar item do pedido",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Item do pedido atualizado com sucesso!",
                "total": error.message
            })
        })
    })
})

router.delete('/itemPedido/:id', (req,res) => {
    const {id} = req.params

    const SQL = `DELETE FROM item_pedido WHERE id = ?`
    
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [id], (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao excluir item do pedido",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Item do pedido excluido com sucesso!",
                "total": result.affectedRows
            })
        })
    })
})

router.post('/itemPedido/realizarpedido/:encomenda' , (req, res) => {
    const {encomenda} = req.params
    const SQL = `SELECT * FROM item_pedido WHERE encomenda=${encomenda}`
    return res.status(200).json({
        "mensagem":"vai realizar o pedido de um item",
        "SQL": SQL
    })
})

router.get('/itemPedido/porfaixadedata/:datai/:dataf', (req,res) => {
const {datai, dataf} = req.params

banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao conectar com o banco",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Itens do pedido listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/itemPedido/pordescricao/:pedidodescricao', (req, res) => {
    const {descricao} = req.params
    const SQL = `SELECT * FROM item_pedido WHERE descricao=${descricao}`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao conectar com o banco",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Itens do pedido listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/itemPedido/porcodigo/:codigo', (req, res) => {
    const {codigo} = req.params
    const SQL = `SELECT * FROM item_pedido WHERE codigo=${codigo}`
    
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao conectar com o banco",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Itens do pedido listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

module.exports = router