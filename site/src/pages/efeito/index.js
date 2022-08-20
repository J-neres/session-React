import {useState} from "react";
import './index.scss';

export default function PaginaMedia () {
    const [media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState(" --- ");
    const [pergunta, setPergunta] = useState('');
    
    function verificarMedia () {
        if (media >= 5 ) {
            setSituacao("ALUNO PASSOU");
        }

        else if (media < 5 &&  media >= 3) {
            setSituacao("ALUNO ESTÁ DE RECUPERAÇÃO");
        }

        else if (media < 3){
            setSituacao("ALUNO NÃO PASSOU");
        }

        else {
            setSituacao("Média inválida");
        }  
    } 

    function fazerPergunta(){
        setPergunta("Quer namorar comigo?");
    }


    return(
        <section className="pagina">
            <div className="faixa">
                <h1 className="">
                    Média
                </h1>
                <input type="Number" value={media} onChange={e => setMedia(Number(e.target.value))} />

                <div className='fx-result'> {situacao} </div>

                <button onClick={verificarMedia}>Calcular</button>
            </div>

            <div>
                <h2>Tenho uma pergunta para voçê</h2>
                <button onClick={fazerPergunta}>Ver Pergunta</button>

                <p>{pergunta}</p>



            </div>
        </section>
    )
}