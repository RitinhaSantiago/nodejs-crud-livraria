const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool

router.get('/enderecos', (req,res) => {
    const SQL = "SELECT * FROM endereco"

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
                    "mensagem": "Erro ao buscar endereços",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereços listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/enderecos/:rua', (req,res) => {
    const { rua } = req.params
    const SQL = `SELECT * FROM endereco WHERE rua="${rua}"`

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
                    "mensagem": "Erro ao buscar endereços",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereços listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.post('/endereco', (req,res) => {
    const endereco = req.body
    const SQL = `INSERT INTO endereco (id_cliente, descricao, rua, numero, bairro, cep, complemento, cidade, uf) VALUES (${endereco.id_cliente}, "${endereco.descricao}", "${endereco.rua}", "${endereco.numero}", "${endereco.bairro}", "${endereco.cep}", "${endereco.complemento}", "${endereco.cidade}", "${endereco.uf}")`

    banco.getConnection((error, conn) => {
        if (error) {
            return res.status(500).json({
                "mensagem": "Erro no cadastro",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if (error) {
                return res.status(500).json({
                    "mensagem": "Erro no cadastro",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereço cadastrado com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/endereco/:id', (req,res) => {
    const { id } = req.params
    const endereco = req.body
    
    const SQL = `UPDATE endereco SET descricao= ?, rua= ?,numero= ?, bairro= ?, cep= ?, complemento= ?, cidade= ?, uf= ? WHERE id= ?`
   
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [endereco.descricao, endereco.rua, endereco.numero, endereco.bairro, endereco.cep, endereco.complemento, endereco.cidade, endereco.uf, id] , (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao editar endereço",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereço atualizado com sucesso",
                "total": result.affectedRows,
                
            })
        })
    })
})

router.delete('/endereco/:id', (req,res) => {
    const { id } = req.params

    const SQL = `DELETE FROM endereco WHERE id=?`
    
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
                    "mensagem": "Erro ao excluir endereço",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": `Endereço com id ${id} excluido com sucesso!`,
                "total": result.affectedRows,
                
            })
        })
    })
})

router.get('/enderecos/pornumero/:numero', (req,res) => {
    const { numero } = req.params
    const SQL = `SELECT * FROM endereco WHERE numero="${numero}"`

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
                    "mensagem": "Erro ao buscar endereços",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereços listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/enderecos/porbairro/:bairro', (req,res) => {
    const { bairro } = req.params
    const SQL = `SELECT * FROM endereco WHERE bairro="${bairro}"`

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
                    "mensagem": "Erro ao buscar endereços",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereços listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/enderecos/porcep/:cep', (req,res) => {
    const { cep } = req.params
    const SQL = `SELECT * FROM endereco WHERE cep="${cep}"`

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
                    "mensagem": "Erro ao buscar endereços",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereços listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/enderecos/porcidade/:cidade', (req,res) => {
    const { cidade } = req.params
    const SQL = `SELECT * FROM endereco WHERE cidade="${cidade}"`

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
                    "mensagem": "Erro ao buscar endereços",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereços listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/enderecos/poruf/:uf', (req,res) => {
    const { uf } = req.params
    const SQL = `SELECT * FROM endereco WHERE uf="${uf}"`

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
                    "mensagem": "Erro ao buscar endereços",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Endereços listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})
module.exports = router