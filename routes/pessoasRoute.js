const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool


router.get('/pessoas', (req,res) => {
    const SQL = "SELECT * FROM pessoa"

    banco.getConnection((error, conn) => {
        if (error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if (error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar pessoas",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pessoas listadas com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })

    return res.status(200).json({
        "mensagem":"vai exibir todas as pessoas",
        "SQL": SQL
    })
})

router.get('/pessoas/pornome/:nome', (req,res) => {
    const {nome} = req.params
    const SQL = `SELECT * FROM pessoa WHERE nome = "${nome}"`

    banco.getConnection((error,conn) => {
        if (error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if (error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar pessoas",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pessoas listadas com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.post('/pessoa', (req,res) => {
    const pessoa = req.body
    const SQL = `INSERT INTO pessoa (nome, telefone, rua, numero, bairro, cep, cidade, uf, tipo) VALUES ("${pessoa.nome}", "${pessoa.telefone}", "${pessoa.rua}", "${pessoa.numero}", "${pessoa.bairro}", "${pessoa.cep}", "${pessoa.cidade}", "${pessoa.uf}", "${pessoa.tipo}")`
    
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
                "mensagem": "Pessoa cadastrada com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/pessoa/:id', (req,res) => {
    const {id} = req.params
    const pessoa = req.body
 
    const SQL =  `UPDATE  pessoa SET nome = ?, telefone = ?, rua = ?, numero= = ?, bairro = ?, cep = ?, cidade = ?, uf = ?, tipo = ? WHERE id = ?`
        
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [pessoa.nome, pessoa.telefone, pessoa.rua, pessoa.numero, pessoa.bairro, pessoa.cep, pessoa.cidade, pessoa.uf, pessoa.tipo, id], (error, result) =>{
            if(error){
                return res.status(500).json({
                    "mensagem": "Erro ao editar pessoa",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pessoa atualizada com sucesso!",
                "total": result.affectedRows
            })
        })
    })
})

router.delete('/pessoa/:id', (req,res) => {
    const {id} = req.params

    const SQL = `DELETE FROM pessoa WHERE id = ?`
    
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
                    "mensagem": "Erro ao excluir pessoa",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": `Pessoa com id ${id} excluida com sucesso!`,
                "total": result.affectedRows
            })
        })
    })
})

router.get('/pessoas/porbairro/:bairro', (req,res) => {
    const { bairro } = req.params
    const SQL = `SELECT * FROM pessoa WHERE bairro="${bairro}"`

    banco.getConnection((error,conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar pessoas",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pessoas listadas com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/pessoas/porcidade/:cidade', (req,res) => {
    const  { cidade } = req.params
    const SQL = `SELECT * FROM pessoa WHERE cidade="${cidade}"`
    
    banco.getConnection((error,conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar pessoas",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pessoas listadas com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/pessoas/poruf/:uf', (req,res) => {
    const { uf } = req.params
    const SQL = `SELECT * FROM pessoa WHERE uf="${uf}"`

    banco.getConnection((error,conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar pessoas",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Pessoas listadas com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

module.exports = router