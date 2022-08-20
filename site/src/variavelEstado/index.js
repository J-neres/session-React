
import {useState} from 'react';

export default function estado() {
    
    const [Cumprim, SetCumprim] = useState('');
    const [escolha, SetEscolha] = useState('');
    const [selecionado,setSelecionado] = useState(false);

    return(
        <section>
            <h1>Variáveis de estado</h1>
            <div>
                <h3>{Cumprim}</h3>
                <input type='text'value={Cumprim} onChange={e => SetCumprim(e.target.value)}  />    
            </div>

            <div>
                <h3>{escolha}</h3>
                <select value={escolha} onChange={e => SetEscolha(e.target.value)}>
                    
                    <option>JavaScript</option>
                    <option>Csharp</option>
                </select>

                <div>
                    <h3>Selecionado?rfscxddgdfg teste jj</h3> {selecionado}
                    <div>{selecionado == true &&
                        <div> <p>SIM</p> </div> }
                    </div>
                    <div>{selecionado == false &&
                        <div> <p>Não</p> </div> }
                    </div>

                    <input type='radio' value={selecionado} onChange={e => setSelecionado(e.target.checked)}></input>
                </div>
            </div>
        </section>
    )
}