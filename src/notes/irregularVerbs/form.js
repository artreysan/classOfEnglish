function createRow(row){
    var tableIV = document.querySelector('#tableIV')
    const tr = document.createElement('tr')
    
    tableIV.appendChild(tr)     

    for(var i=0 ;i<row.length ;i++){
        var th = document.createElement('th'); 
        th.textContent = row[i]
        tr.appendChild(th)
    }
}

function data() {
    const form= document.querySelector('#formulary')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        var sf =  document.querySelector('#simpleForm').value;
        var sp = form.simplePast.value;
        var pp = form.participePast.value;
        var t = form.tranlation.value;
        var row = [sf,sp,pp,t]
        createRow(row) 
    })
}



data()

