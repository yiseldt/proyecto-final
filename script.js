const containerList = document.getElementById("list-notes"),
form = document.getElementById("form");
let listnotes = [];

evenListeners()
function evenListeners() {
form.addEventListener("submit", addlist)
document.addEventListener("DOMContentLoaded", ()=> {
    listnotes = JSON.parse(localStorage.getItem("list")) || []

    crearHTML()
    
})

}function addlist(e) {
    e.preventDefault();

    const textArea = document.getElementById("text").value;

    if (textArea == "") {
        mostrarError("inserte texto")
        return;
      }

let lisNotesObj = {
    id:Date.now(),
    textArea
}

      listnotes = [...listnotes,lisNotesObj];
      
        crearHTML();
    }
        form.reset()

       function crearHTML(){
        limpiarHTML();

        listnotes.forEach(list => {
            const li = document.createElement("li"),
                borrarLista = document.createElement("a");
            borrarLista.classList.add("borrar-lista");
            borrarLista.textContent = "X";

            borrarLista.onclick = () => {
                borrarElemento(list.id)
            }
            
            li.textContent = list.textArea;
            
            containerList.appendChild(li)
            li.appendChild(borrarLista)

        });


        sincronizarNotas()
       }

       function sincronizarNotas(){
        localStorage.setItem("list",JSON.stringify(listnotes))
       }

        function mostrarError(error) {
            const mensajeError = document.createElement("a");
            mensajeError.textContent = error; 
            mensajeError.classList.add("error");
            form.appendChild(mensajeError);  

            setTimeout(() => {
                mensajeError.remove()

            }, 3000);
        }

            function borrarElemento(id) {
                listnotes = listnotes.filter(list => list.id !== id);
                crearHTML();
                
            }

        

        function limpiarHTML() {
            while (containerList.firstChild) {
                containerList.removeChild(containerList.firstChild);
            }
        }

    



    
    
    