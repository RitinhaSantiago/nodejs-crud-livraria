const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool

router.get('/autores', (req,res) => {
    const SQL = "SELECT * FROM autor"

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
                    "mensagem": "Erro ao buscar autores",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Autores listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})


router.get('/autores/:nacionalidade', (req,res) => {
    const { nacionalidade } = req.params
    const SQL = `SELECT * FROM autor WHERE nacionalidade="${nacionalidade}"`

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
                    "mensagem": "Erro ao buscar autores",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Autores listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.post('/autor', (req,res) => {
    const autor = req.body
    const SQL = `INSERT INTO autor (id, nacionalidade, data_morte, biografia) VALUES (${autor.id}, "${autor.nacionalidade}", ${autor.data_morte}, "${autor.biografia}")`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro de conexão",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
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

router.patch('/autor/:id', (req,res) => {
    const { id } = req.params
    const autor = req.body

    const SQL = `UPDATE autor SET nacionalidade= ?, data_morte= ?, biografia= ? WHERE id= ?`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [autor.nacionalidade, autor.data_morte, autor.biografia, id] , (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao editar autor",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Autor atualizado com sucesso",
                "total": result.affectedRows,
                
            })
        })
    })
})


router.delete('/autor/:id', (req,res) => {
    const { id } = req.params
    
    const SQL = `DELETE FROM autor WHERE id= ?`

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
                    "mensagem": "Erro ao excluir autor",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": `Autor com id ${id} excluido com sucesso!`,
                "total": result.affectedRows,
                
            })
        })
    })
})

router.get('/autores/poridade/:idade', (req,res) => {
    const { idade } = req.params
    const SQL = `SELECT * FROM autor WHERE idade=${idade}`

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
                    "mensagem": "Erro ao buscar autores",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Autores listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/autores/pornome/:nome', (req,res) => {
    const { nome } = req.params
    const SQL = `SELECT * FROM autor WHERE nome LIKE '%${nome}%'`

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
                    "mensagem": "Erro ao buscar autores",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Autores listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/autores/porletrai/:letrai', (req,res) => {
    const { letrai } = req.params
    const SQL = `SELECT * FROM autor WHERE letrai="${letrai}"`

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
                    "mensagem": "Erro ao buscar autores",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Autores listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/autores/porsexo/:sexo', (req,res) => {
    const { sexo } = req.params
    const SQL = `SELECT * FROM autor WHERE sexo="${sexo}"`

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
                    "mensagem": "Erro ao buscar autores",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Autores listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

module.exports = router