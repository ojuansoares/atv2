import { Component } from "react";
import "../styles/bg5.css"
import "../index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface State {
    nome: string;
    descricao: string;
    valor: number;
}

export default class CadastroProduto extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            valor: 0,
        };
    }

    handleInputChange = (event: { target: { name: keyof State; value: any; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        } as Pick<State, keyof State>);
    }

    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const notify = () => toast.success("Produto cadastrado com sucesso!");
        notify();
        setTimeout(() => {
            window.location.href = '/cadastrar';
        }, 1200);
    };

    handleCancel = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = '/cadastrar';
    };

    render() {
        return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Produto</h2>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" name="nome"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" name="descricao"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Valor do produto" aria-label="Valor do produto" aria-describedby="basic-addon1" name="valor"/>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={this.handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
            <ToastContainer
            position="top-center"
            theme="dark"
            />
        </div>
        )
    }
}