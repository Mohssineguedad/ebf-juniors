import React from 'react';
import "./Description.css"
import emsi from "./images/emsi.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function MyParagraph() {
  return (
    <div className="bordered-paragraph">
         <u><h1>L'École Marocaine des Sciences de l’ingénieure</h1><br/></u> 
        <img src={emsi} width="180px"></img>
        <br/>
        <h2>EMSI EN CHIFFRES:</h2>
        <br/>
        <div className="bordered-paragraph2">     
    <p>L'École Marocaine des Sciences de l'ingénieure, EMSI, est un établissement d'enseignement supérieur privé
     fondé en 1986, par un groupe d'enseignants universitaires pour former des élèves dans les domaines de 
     l'ingénierie, des nouvelles technologies et des télécoms au Maroc.</p>
     
    <b>La formation initiale de l'École Marocaine des Sciences de l'Ingénieur :</b> <p> s'étale sur une durée de cinq ans d'études après 
    le baccalauréat.
     Après deux années de classes préparatoires, la formation se poursuit dans l'une des filières suivantes2 :
   
     Filière Ingénierie Informatique et Réseaux (IIR)
   

    Filière Ingénierie Informatique et Réseaux (IIR)
    Filière Ingénierie des Automatismes et Informatique Industrielle (IAII)
    Filière Génie Industriel (GI)
    Filière Génie Civil, bâtiment et travaux publics (GCBTP)
    Filière ingénierie Financière et Audit (IFA)</p>
   
        <br/>
        </div>
     
    </div>
  );
}

export default MyParagraph;
