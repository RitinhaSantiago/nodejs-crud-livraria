const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool

router.get('/pedidos', (req,res) => {
    const SQL = "SELECT * FROM pedido"

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
                "mensagem": "Pedidos listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/pedidos/:data_pedido', (req,res) => {
    const {numero} = req.params
    const SQL = `SELECT * FROM pedido WHERE data_pedido = ${numero}`

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
                "mensagem": "Pedidos listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.post('/pedido', (req,res) => {
    const pedido = req.body
    const SQL = `INSERT INTO pedido (id, id_cliente, data_pedido, previsao_entrega, forma_pagamento, observacoes, status) VALUES (${pedido.id}, ${pedido.id_cliente}, ${pedido.data_pedido}, ${pedido.previsao_entrega}, ${pedido.forma_pagamento}, ${pedido.observacoes}, ${pedido.status})`
    
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
                "mensagem": "Pedido cadastrado com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/pedido/:id', (req,res) => {
    const {id} = req.params
    const pedido = req.body

    const SQL =  `UPDATE pedido SET id_cliente= = ?, data_pedido = ?, previsao_entrega = ?, forma_pagamento = ?, observacoes = ?, status = ? WHERE id = ?`
    
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [pedido.id_cliente, pedido.data_pedido, pedido.previsao_entrega, pedido.forma_pagamento, pedido.observacoes, pedido.status, id], (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao editar pedido",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pedido atualizado com sucesso!",
                "total": result.affectedRows
            })
        })
    })
})

router.delete('/pedido/:id', (req,res) => {
    const {id} = req.params

    const SQL = `DELETE FROM pedido WHERE id = ?`
    
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
                    "mensagem": "Erro ao excluir pedido",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": `Pedido com o id ${id} excluido com sucesso!`,
                "total": result.affectedRows
            })
        })
    })
})

router.get('/pedido/pendentes', (req,res) => {
    const {pendente} = req.params

    const SQL = `SELECT * FROM pedido WHERE status = ${pendente}`
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
                "mensagem": "Pedidos listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/pedido/enviados', (req,res) => {
    const {enviado} = req.params

    const SQL = `SELECT * FROM pedido WHERE status = ${enviado}`
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
                "mensagem": "Pedidos listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/pedido/porrastreamento/:rastreamento', (req,res) => {
    const {rastrear} = req.params

    const SQL = `SELECT * FROM pedido WHERE rastrear=${rastrear}`
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
                "mensagem": "Pedidos listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

module.exports = router