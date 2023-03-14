interface Props{
    name:string;
    sponsors?:string[]
}
export default function Footer(props:Props){
    const {name,sponsors} = props
    return(
        <footer>
            <h5>{name}</h5>
            <p>  {new Date().getFullYear()} Todos los derechos reservados</p>
            {sponsors &&(
                <ul className="sponsor">
                    {sponsors.map((sponsor)=>(
                        <li key={sponsor}> {sponsor}</li>
                    ))}
                </ul>
            )}
        </footer>
    )
}