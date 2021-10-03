const alterarTema = document.querySelector('.mudar-tema input[type="checkbox"]')

const temaNormal = localStorage.getItem("tema")

if (temaNormal){
    document.documentElement.setAttribute("data-tema", temaNormal)
    if (temaNormal === "dark"){
        alterarTema.checked = true
    }
}

function mudarTema(e){
    if (e.target.checked){
        document.documentElement.setAttribute("data-tema", "dark");
        localStorage.setItem("tema", "dark")
    }else{
        document.documentElement.setAttribute("data-tema", "light");
        localStorage.setItem("tema", "light")
    }
}

alterarTema.addEventListener("change", mudarTema, false);