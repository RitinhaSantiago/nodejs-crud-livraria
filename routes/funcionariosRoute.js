const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool

router.get('/funcionarios', (req,res) => {
    const SQL = "SELECT * FROM funcionario"

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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/funcionarios/:cargo', (req,res) => {
    const { cargo } = req.params
    const SQL = `SELECT * FROM funcionario WHERE cargo="${cargo}"`

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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.post('/funcionario', (req,res) => {
    const funcionario = req.body
    const SQL = `INSERT INTO funcionario (id, data_admissao, salario, cargo) VALUES (${funcionario.id}, ${funcionario.data_admissao}, ${funcionario.salario}, "${funcionario.cargo}")`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro de conexão",
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
                "mensagem": "Funcionário cadastrado com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/funcionario/:id', (req,res) => {
    const { id } = req.params
    const funcionario = req.body

    const SQL = `UPDATE funcionario SET data_admissao= ?, salario= ?, cargo= ? WHERE id= ?`

    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [funcionario.data_admissao, funcionario.salario, funcionario.cargo, id] , (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao editar funcionário",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "funcionário atualizado com sucesso",
                "total": result.affectedRows,
                
            })
        })
    })
})

router.delete('/funcionario/:id', (req,res) => {
    const { id } = req.params

    const SQL = `DELETE FROM funcionario WHERE id= ?`

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
                    "mensagem": "Erro ao excluir funcionário",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": `Funcionário com id ${id} excluido com sucesso!`,
                "total": result.affectedRows,
                
            })
        })
    })
})

router.get('/funcionarios/pornome/:nome', (req,res) => {
    const { nome } = req.params
    const SQL = `SELECT * FROM funcionario WHERE nome="${nome}"`

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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/funcionarios/porcargo/:cargo', (req,res) => {
    const { cargo } = req.params
    const SQL = `SELECT * FROM funcionario WHERE cargo="${cargo}"`

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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/funcionarios/porsalariomin/:salariomin', (req,res) => {
    const { salariomin } = req.params
    const SQL = `SELECT * FROM funcionario WHERE salario=${salariomin}`

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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/funcionarios/porsalariomax/:salariomax', (req,res) => {
    const { salariomax } = req.params
    const SQL = `SELECT * FROM funcionario WHERE salario=${salariomax}`

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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/funcionarios/porfaixadesalario/:salariomin/:salariomax', (req,res) => {
    const { salariomin, salariomax } = req.params
    const SQL = `SELECT * FROM funcionario WHERE salario BETWEEN ${salariomin} and ${salariomax}`


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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})

router.get('/funcionarios/poridade/:idade', (req,res) => {
    const { idade } = req.params
    const SQL = `SELECT * FROM funcionario WHERE idade=${idade}`

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
                    "mensagem": "Erro ao buscar funcionários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Funcionários listados com sucesso",
                "total": result.length,
                "results":result
            })
        })
    })
})


module.exports = router
