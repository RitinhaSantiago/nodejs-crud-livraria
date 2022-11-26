const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool

router.get('/livros', (req,res) => {
    const SQL = "SELECT * FROM livro"
    
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
                "mensagem": "Livros listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/livros/:titulo', (req,res) => {
    const {palavra} = req.params
    const SQL = `SELECT * FROM livro WHERE titulo =${palavra}`
    
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
                "mensagem": "Livros listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.post('/livro', (req,res) => {
    const livro = req.body
    const SQL = `INSERT INTO livro (id, titulo, resumo, descricao, paginas, preco, edicao, idioma, ano_lancamento, id_autor, id_editora) VALUES (${livro.id}, ${livro.titulo}, ${livro.resumo},${livro.descricao},${livro.paginas}, ${livro.preco}, ${livro.edicao}, ${livro.idioma}, ${livro.ano_lancamento},${livro.id_autor}, ${livro.id_editora})`
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
                "mensagem": "Livro cadastrado com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/livro/:id', (req,res) => {
    const {id} = req.params
    const livro = req.body

    const SQL = `UPDATE livro SET titulo = ?, resumo = ?, descricao = ?, paginas = ?, preco = ?, edicao = ?, idioma = ?, ano_lancamento = ?, id_autor = ?, id_editora = ? WHERE id = ?`
    
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [livro.titulo, livro.resumo, livro.descricao, livro.paginas, livro.preco, livro.edicao, livro.idioma, livro.ano_lancamento, livro.id_autor, livro.id_editora, id], (error, result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao atualizar livro",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Livro atualizado com sucesso!",
                "total": result.affectedRows
            })
        })
    })
})

router.delete('/livro/:id', (req,res) => {
    const {id} = req.params

    const SQL = `DELETE FROM livro WHERE id = ?`

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
                "mensagem": "Livro excluido com sucesso!",
                "total": result.affectedRows
            })
        })
    })
})

router.get('/livros/porautor/:autor' , (res,req) => {
    const {autor} = req.params
    const SQL = `SELECT * FROM livro WHERE autor=${autor}`
    
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
                "mensagem": "Livros listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/livros/pordata/:data', (req,res) => {
    const {data} = req.params
    const SQL = `SELECT * FROM livro WHERE data=${data}`

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
                "mensagem": "Livros listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/livros/porfaixadedata/:datai/:dataf', (req,res) => {
    const {datai, dataf} = req.params
    const SQL = `SELECT * FROM livro WHERE data BETWEEN ${datai} AND ${dataf}`

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
                "mensagem": "Livros listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/livros/preco/:preco' , (req,res) => {
    const {preco} = req.params
    const SQL = `SELECT * FROM livro WHERE preco=${preco}`

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
                "mensagem": "Livros listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/livros/porpreco/:precomin/:precomax' , (req,res) => {
    const { precomin, precomax } = req.params
    const SQL = `SELECT * FROM livro WHERE preco BETWEEN ${precomin} and ${precomax}`

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
                "mensagem": "Livros listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

module.exports = router