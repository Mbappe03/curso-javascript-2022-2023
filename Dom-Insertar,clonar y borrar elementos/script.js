const list = document.getElementById("list")
const newElement = document.createElement("li")
newElement.textContent = "Im a new element"
/*list.insertBefore(newElement,list.children[0])*/
/*list.children[0].insertAdjacentElement("beforebegin",newElement)
list.insertAdjacentElement("afterbegin",newElement)*/
/*list.insertAdjacentElement("beforeend",newElement)*/
/*list.children[0].insertAdjacentElement("afterend",newElement)*/

/*list.children[1].insertAdjacentHTML("afterend","<li>Elemento con HTML</li>")*/ 

/*list.replaceChild(newElement,list.children[0])*/

/*list.children[0].before(newElement)
list.prepend(newElement)*/

/*list.append(newElement)*/
/*list.children[0].after(newElement)*/

/*list.children[0].replaceWith(newElement)*/

/*list.after(list.cloneNode(true))*/
/*console.log(list.cloneNode(true))*/

/*list.remove()*/
list.removeChild(list.children[1])