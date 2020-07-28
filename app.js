
var list = document.getElementById('list')


function addItem(){
 
    var add = document.getElementById('todo-item')
    var lielement = document.createElement('li')
    var litext = document.createTextNode(add.value)
    lielement.appendChild(litext)

    list.appendChild(lielement)
    // console.log( list)
    add.value = ""


    var delbtn=document.createElement('button')
var btntext= document.createTextNode('DELETE')

delbtn.setAttribute("class","delete")

delbtn.setAttribute("onclick", "deleteItem(this)")

delbtn.appendChild(btntext)

lielement.appendChild(delbtn)




var editbtn = document.createElement('button')
var edittext = document.createTextNode('EDIT')
editbtn.setAttribute("class","delete")

editbtn.appendChild(edittext)

editbtn.setAttribute('onclick','edittodo(this)')

lielement.appendChild(editbtn)

}




function edittodo(a){

//    var get = a.parentNode.firstchild

     var editvalue = prompt("Edit your text" ,a.parentNode.firstChild.nodeValue)

     var val = a.parentNode.firstChild


     a.parentNode.firstChild.nodeValue = editvalue


    // console.log(a.parentNode.firstChild)


}


function deleteItem(a){

    // console.log(a.parentNode)
    a.parentNode.remove()
}

function deleteAll(){


    list.innerHTML =""
}

