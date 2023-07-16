import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    obrigatorio: boolean
    aoAlterado: (valor: string) => void
    valor: string
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    const { aoAlterado, itens, label, obrigatorio, valor } = props

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor}
            >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa