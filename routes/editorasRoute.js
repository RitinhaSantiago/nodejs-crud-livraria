const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool

router.get('/editoras', (req,res) => {
    const SQL = "SELECT * FROM editora"

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar editoras",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Editoras listadas com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/editoras/:cnpj', (req,res) => {
    const { cnpj } = req.params
    const SQL = `SELECT * FROM editora WHERE cnpj="${cnpj}"`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar editoras",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Editoras listadas com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.post('/editora', (req,res) => {
    const editora = req.body
    const SQL = `INSERT INTO editora (id, cnpj, ie, razao_social) VALUES (${editora.id}, "${editora.cnpj}", "${editora.ie}", "${editora.razao_social}")`

    banco.getConnection((error,conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro de conexão",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro no cadastro",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pessoa cadastrada com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/editora/:id', (req,res) => {
    const { id } = req.params
    const editora = req.body

    const SQL = `UPDATE editora SET cnjp= ?, ie= ?, razao_social= ? WHERE id= ?`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [editora.cnpj, editora.ie, editora.razao_social, id] , (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao editar editora",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Editora atualizada com sucesso",
                "total": result.affectedRows,
                
            })
        })
    })
})

router.delete('/editora/:id', (req,res) => {
    const { id } = req.params
    
    const SQL = `DELETE FROM editora WHERE id= ?`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [id], (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao excluir editora",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": `Editora com id ${id} excluida com sucesso!`,
                "total": result.affectedRows,
                
            })
        })
    })
})

router.get('/editoras/porie/:ie', (req,res) => {
    const { ie } = req.params
    const SQL = `SELECT * FROM editora WHERE ie="${ie}"`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar editoras",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Editoras listadas com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/editoras/pornome/:nome', (req,res) => {
    const { nome } = req.params
    const SQL = `SELECT * FROM editora WHERE nome="${nome}"`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar editoras",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Editoras listadas com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/editoras/porpais/:pais', (req,res) => {
    const { pais } = req.params
    const SQL = `SELECT * FROM editora WHERE ie="${pais}"`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar editoras",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Editoras listadas com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

module.exports = router