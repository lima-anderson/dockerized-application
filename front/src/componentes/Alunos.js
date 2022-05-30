import React from 'react'
import {Table, Button, Form} from 'react-bootstrap'

export class Alunos extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            nome: '',
            email: '',
            alunos: []
        }

    }

    componentDidMount(){
        this.buscarAluno()
    }

    componentWillUnmount(){
    }



    buscarAluno(){
        fetch("http://localhost:3000/alunos")
            .then(res => res.json())
            .then(dados => {
                this.setState({ alunos: dados})
            })
    }

    deletarAluno(id){
        fetch("http://localhost:3000/alunos/"+id, {method: 'DELETE'})
        .then(res => {
            if(res.ok) {
                this.buscarAluno()
            }
        })
    }

    carregarAluno(id){
        fetch("http://localhost:3000/alunos/"+id, {method: 'GET'})
            .then(res => res.json())
            .then(aluno => {
                this.setState({
                    id: aluno.id,
                    nome: aluno.nome,
                    email: aluno.email
                })
            })
    }

    cadastraAluno = (aluno) => {
        fetch("http://localhost:3000/alunos/", {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(aluno)})

        .then(res => {
            if(res.ok) {
                this.buscarAluno()
            }
        })
    }

    atualizarAluno = (aluno) => {
        fetch("http://localhost:3000/alunos/" + aluno.id, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(aluno)})

        .then(res => {
            if(res.ok) {
                this.buscarAluno()
            }
        })
    }

    renderTabela = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-Mail</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.alunos.map(aluno =>
                                    <tr key={aluno.id}>
                                        <td>{aluno.nome}</td>
                                        <td>{aluno.email}</td>
                                        <td>
                                            <Button variant="secondary" onClick={() => this.carregarAluno(aluno.id)} >Atualizar</Button>
                                            <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)} >Excluir</Button>
                                        </td>
                                    </tr>
                                )
                    }                                       
                </tbody>
            </Table>
        )
    }

    atualizaNome = (e) => {
        this.setState({
            nome: e.target.value
        })
    }

    atualizaEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    submit = () =>{
        if(this.state.id == 0) {
            const aluno = {
                nome: this.state.nome,
                email: this.state.email
            }
            this.cadastraAluno(aluno)
        } else {
            const aluno = {
                id: this.state.id,
                nome: this.state.nome,
                email: this.state.email
            }
            this.atualizarAluno(aluno)
        }
    }

    limpar(){
        this.setState({
            id: 0,
            email: '',
            email: ''
        })
    }
    

    render() {
        return (
            <div>

                <Form>
                <Form.Group className="mb-3" controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do aluno" value={this.state.nome} onChange={this.atualizaNome}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite o e-mail do aluno" value={this.state.email} onChange={this.atualizaEmail}/>
                    <Form.Text className="text-muted">
                        Use o e-mail principal.
                    </Form.Text>
                </Form.Group>                            
                <Button variant="primary" type="submit" onClick={this.submit}>
                    Salvar
                </Button>
                <Button variant="warning" type="submit" onClick={this.limpar}>
                    Limpar
                </Button>
                </Form>

                {this.renderTabela()}
            </div>
        )
    }
    
    }
