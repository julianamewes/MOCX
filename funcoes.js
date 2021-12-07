function mascaraCpf(mascara, input) {
    const vetMask = mascara.split("")
    const numCpf = input.valeu.replace(/\D/g,"")
    const cursor = input.selectionStart

    for(let i=0; i<numCpf.length; i++) {
        vetMask.splice(vetMask.indexOf("#"), 1, numCpf[i])
    }
    input.valeu = vetMask.join("")

    if(tecla !=37 && (cursor == 3 || cursor == 7 || cursor == 11)) {
        input.setSelectionRange(curso+1, curso+1)}
        else {input.setSelectionRange(cursor, cursor)}
}

function ValidaCPF(){	
	var RegraValida=document.getElementById("RegraValida").value; 
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
	if (cpfValido.test(RegraValida) == true)	{ 
	console.log("CPF Válido");	
	} else	{	 
	console.log("CPF Inválido");	
	}
    }
  function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}

  function fMascEx() {
obj.value=masc(obj.value)
}

   function mCPF(cpf){
cpf=cpf.replace(/\D/g,"")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
return cpf
}

function mascara(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ 
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}