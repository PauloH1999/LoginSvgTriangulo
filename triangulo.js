var r = document.querySelectorAll("#r")



r.forEach(input => {
    input.addEventListener("input",()=>{
        var x = parseInt(r[0].value)
        

        document.getElementById("triangulo").style.animationDuration=`${x/2}s`

        document.getElementById("login").style.animationDuration=`${x/2}s`


    })
})