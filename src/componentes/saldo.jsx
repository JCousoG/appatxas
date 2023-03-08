import imagedebe from "../pulgarabajo.png" 
import imagesobra from "../bolsa.jfif"
import imagepagou from "../pulgar.png"
import eurodebe from "../eurodebe.png"
import europagou from "../europagou.png"
import pagoudemais from "../pagoudemais.jfif"


function Saldo(props) {
 

 return (
    <>
    {props.diferencia < 0 && <span className="debe"><img src={imagedebe} alt="debe"/>  {props.diferencia}<img src={eurodebe} alt="eurodebe"/></span>}
    {props.diferencia == 0 && <span className="pagou"><img src={imagepagou} alt="pagou"/> {props.diferencia}<img src={europagou} alt="europagou"/></span>}
    {props.diferencia > 0 && <span className="pagoudemais"><img src={imagesobra} alt="pagoudemais"/> {props.diferencia}<img src={pagoudemais} alt="pagoudemais"/></span>}
    </>
 )
    
}
export default Saldo