import './Btn.css'

function Btn (props){
    return(
        <button className='btn'> 
            {props.texto}
        </button>
    )
}export default Btn