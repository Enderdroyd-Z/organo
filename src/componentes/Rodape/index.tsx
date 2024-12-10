import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section>
            <div>
                <img src='imagens/fb.png' alt='Logo do Facebook'/>
                <img src='imagens/tw.png' alt='Logo do Twitter'/>
                <img src='imagens/ig.png' alt='Logo do Instagram'/>
            </div>
            <div>
                <img src='imagens/logo.png' alt='Logo Organo'/>
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>
            </section>
        </footer>
    )
}

export default Rodape;