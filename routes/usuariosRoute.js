const {Router} = require('express')
const router = Router();
const banco = require('../banco').pool

router.get('/usuarios', (req,res) => {
    const SQL = "SELECT * FROM usuario"

    banco.getConnection((error,conn) => {
        if (error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if (error) {
                return res.status(500).json({
                    "mensagem": "Erro ao buscar usuários",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Usuários listados com sucesso",
                "total": result.length,
                "results": result

            })
        })
    })      
})

router.get('/usuarios/:username', (req,res) => {
    const {username} = req.params
    const SQL = `SELECT * FROM usuario WHERE username=${usuario.username}`

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
                    "mensagem": "Erro ao buscar pessoas",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Usuários listados com sucesso",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.post('/usuario', (req,res) => {
    const usuario = req.body

    const SQL = `INSERT INTO usuario (id, username, password, tipo, ativo) VALUES (${usuario.id}, ${usuario.username}, ${usuario.password}, ${usuario.tipo}, ${usuario.ativo})`
   
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
                "mensagem": "Usuário cadastrado com sucesso",
                "detalhes": result.affectedRows
            })
        })
    })
})

router.patch('/usuario/:id', (req,res) => {
const {id} = req.params
const usuario = req.body

const SQL = `UPDATE usuario SET username = ?, password = ?, tipo = ?, ativo = ? WHERE id = ?`

    banco.getConnection((conn, error) => {
        if(error) {
            return res.status(500).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, [usuario.username, usuario.password, usuario.tipo, usuario,ativo, id], (error,result) => {
            if(error) {
                return res.status(500).json({
                    "mensagem": "Erro ao editar usuário",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": "Usuário atualizado com sucesso!",
                "total": result.affectedRows
            })
        })
    })
    
})

router.delete('/usuario/:id', (req,res) => {
    const {id} = req.params

    const SQL = `DELETE FROM usuario WHERE id = ?`

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
                    "mensagem": "Erro ao excluir usuário",
                    "detalhes": error.message
                })
            }

            return res.status(200).json({
                "mensagem": `Usuário com id ${id} excluida com sucesso!`,
                "total": result.affectedRows
            })
        })
    })
})

router.get('/usuarios/portipo/:tipo', (req,res) => {
    const {tipo} = req.params
    const SQL = `SELECT * FROM usuario WHERE tipo=${usuario.tipo}`
    
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
                "mensagem": "Usuários listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
})

router.get('/usuarios/porativo/:usuarioativo') , (req,res) => {
    const {ativo} = req.params
    const SQL = `SELECT * FROM usuario WHERE ativo= ${usuario.ativo}`
    
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(200).json({
                "mensagem": "Erro ao conectar com o banco",
                "detalhes": error.message
            })
        }

        conn.query(SQL, (error, result) => {
            if(error) {
                return res.status(200).json({
                    "mensagem": "Erro ao conectar com o banco",
                    "detalhes": error.message
                })
            }

            return res.status(500).json({
                "mensagem": "Usuários listados com sucesso!",
                "total": result.length,
                "results": result
            })
        })
    })
}

module.exports = router