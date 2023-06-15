function ordenar(){
    nombre_alumno_array.sort();
    document.getElementById("ver_nombre").innerHTML=nombre_alumno_array;
}

nombre_alumno_array=[];
function enviar(){
        var ver_alumno_array=[];
        for (var j=1; j<=4; j++)
        {
            var nombre_alumno=document.getElementById("Nombre_Alumno_"+j).value;
            console.log(nombre_alumno);
            nombre_alumno_array.push(nombre_alumno);
 

        }
        document.getElementById("ver_nombre").innerHTML=nombre_alumno_array;
    document.getElementById("button_enviar").style.display="none";
    document.getElementById("button_ordenar").style.display="inline-block";
}
