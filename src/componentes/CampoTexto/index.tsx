import './CampoTexto.css'

interface CampoDeTextoProps {
    aoAlterado: (value: string) => void
    placeholder: string
    label: string
    valor: string 
    obrigatorio?: boolean
}

const CampoTexto = (props: CampoDeTextoProps ) => {

    const { aoAlterado, placeholder, label, valor, obrigatorio = false} = props

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto