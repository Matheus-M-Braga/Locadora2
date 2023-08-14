// Scripts sidebar
let body = document.querySelector("body")
let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
let drop = document.querySelector(".drop")
let links = document.querySelector(".adm-links")
let dialog = document.querySelector(".dialog")
let width = window.innerWidth

btn.onclick = function (){
   sidebar.classList.toggle("active")
}
// window.onresize = function (){
//    sidebar.classList.remove("active")
// }
body.onload = function (){
   if(width < 700){
      sidebar.classList.remove("active")
   }
   else{
      sidebar.classList.add("active")
   }
}
drop.onclick = function (){
   if(sidebar.classList.contains("active")){
      links.classList.toggle("open")
   }
   else{
      dialog.classList.toggle("visible")
   }
}

// Modals
// Modal cadastro
function abrirModal(cadast){
   var modal = document.getElementById(cadast)
   modal.style.display = 'block'
}
function fecharModal(fechcadast){
   var modal = document.getElementById(fechcadast)
   modal.style.display = 'none'
}

// Modal editar
function abrirModalEdit(edit){
   var modal_edit = document.getElementById(edit)
   modal_edit.style.display = 'block'
}
function fecharModalEdit(fechedit){
   var modal_edit = document.getElementById(fechedit)
   modal_edit.style.display = 'none'
}

// Modal Execluir
function abrirModalExclu(exclu){
   var modal_exclu = document.getElementById(exclu)
   modal_exclu.style.display = 'block'
}
function fecharModalExclu(fechexclu){
   var modal_exclu = document.getElementById(fechexclu)
   modal_exclu.style.display = 'none'
}

// Modal devolver
function abrirModalDevol(devol){
   var modal_devol = document.getElementById(devol)
   modal_devol.style.display = 'block'
}
function fecharModalDevol(fechdevol){
   var modal_devol = document.getElementById(fechdevol)
   modal_devol.style.display = 'none'
}