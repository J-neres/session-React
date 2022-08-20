
import './index.scss';

export default function Card (props) {
    return (
        <section className='comp-card'>
            <div className='card2'>
                <div className='titulo'>
                    <h1 className=''>Seção {props.num}</h1>
                </div>
                <div>
                    <div className={props.ordem}>
                        <div className='quadrado'></div>
                        <p className='texto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui fdgsdf.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}