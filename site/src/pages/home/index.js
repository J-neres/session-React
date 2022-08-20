import Card from '../../components/card';
import './index.scss'

export default function Home () {
    return(
    <section className='com-faixa'>
        
        <h1> Componentes</h1>
        <Card ordem="dtexto" num="01"></Card>
        <Card ordem="dtexto2" num="02"  ></Card>
        <Card ordem="dtexto3" num="03"></Card>
    </section>
    )
}