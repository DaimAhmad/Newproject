import { Link } from 'react-router-dom';
import img24 from '../Images/entery.avif';
function Enter(){
   return(
<div>
<div style={{ position: "relative", textAlign: "center" }}>
  <img src={img24} style={{ width: "110%" }} alt="MystiScents" />

  <Link to="/home" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    <button >WELCOME TO MYSTISCENTS</button>
  </Link>
</div>


</div>
   )
}
export default Enter;