import './Banner.css'

interface BannerProps {
    src: string
    alt?: string
}

export const Banner = (props: BannerProps) => {
    const {src, alt} = props
    // JSX
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={src} alt={alt}/>

        </header>
    )
}