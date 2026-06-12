const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        button.innerHTML="☀️";

        localStorage.setItem("theme","light");

    }

    else{

        button.innerHTML="🌙";

        localStorage.setItem("theme","dark");

    }

});

window.onload=()=>{

    const theme=localStorage.getItem("theme");

    if(theme==="light"){

        document.body.classList.add("light-mode");

        button.innerHTML="☀️";

    }

}