var arr =[]
var inputName = document.querySelector(".name")
var inputWebsite = document.querySelector(".website")
var divStorage = document.querySelector(".storage")

if(localStorage.getItem("book") !=null)
{
    arr = JSON.parse( localStorage.getItem("book") )
    display()
}

function save(){
    var obj ={
        bName : inputName.value,
        bWeb : inputWebsite.value
    }
    arr.push(obj)
    localStorage.setItem("book",JSON.stringify(arr))
    display()
    claer()
}
function display() {
    var storage = ""
    for(var i=0 ; i< arr.length ; i++){
        storage += `
        <div class="container p-4 my-5 test data mx-auto">
        <div class="row w-75 storage">
            <h3 class="col-6 fw-bold">${arr[i].bName}</h3>
            <div class="col-6">
                <a href="${arr[i].bWeb}" target="_blank" style="text-decoration-line: none;">
                    <button class="btn btn-primary">visit</button>
                </a>
                <button class="btn btn-danger" onclick="del(${i})">delete</button>
            </div>
        </div>
    </div> `
    }
    divStorage.innerHTML=storage

}

function claer(){
    inputName.value=""
    inputWebsite.value=""
}


function del(index) {
    arr.splice(index,1)
    localStorage.setItem("book",JSON.stringify(arr))
    display()
}