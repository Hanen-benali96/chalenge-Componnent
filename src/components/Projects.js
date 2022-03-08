import Cards from "./Cards.js";
function Projects(){
    return(

        <section id="projects">
        <h2 class="text-important">Projects </h2>
<div style={ {display:"flex",paddingLeft:"100px"} } >
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         </div>
      </section>


    );
}

export default Projects;
