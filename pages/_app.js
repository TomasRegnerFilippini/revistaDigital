import react from "react";
import Head from "next/head";
import "../css/main.css"
import Redes from "../components/redes";


const Index = () => {
    return <div className="body">
             <div className="mainContainer" >
                <Head>
                <title> Home Page</title>
                </Head>
             <h1 className="mainTitle">UN NUEVO FUTURO</h1>
             <div className="redcont">
                 <p className="mainP">
                Te acercamos toda la información necesaria para que puedas armar tu viaje y enterarte de las experiencias de otras personas.
                 </p>
                <Redes />
             </div>
                 
             </div>
            </div>
}
export default Index