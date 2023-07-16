import './Colaborador.css'

interface ColaboradorProps {
    nome: string
    imagem: string
    cargo: string
    corDeFundo: string 
}

export const Colaborador = (props: ColaboradorProps) => {
    const { nome, imagem, cargo, corDeFundo } = props


    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

