function requisicao(){
	var resultado = document.querySelector("#tb");
	var le = new XMLHttpRequest();

	le.open("GET", "https://api-pacientes.herokuapp.com/pacientes", true);

	le.onreadystatechange = function(){
		var bloc = "";
		if(le.status == 200){
			var result = JSON.parse(le.responseText);
			for(let i=0; i < result.length; ++i){
				var aux;
				aux = result[i];
				bloc += "<tr><td>"+aux.nome+"</td>"+
						"<td>"+aux.peso+"</td>"+
						"<td>"+aux.altura+"</td>"+
						"<td>"+aux.gordura+"</td>"+
						"<td>"+aux.imc+"</td></tr>";
			}
		}else{
			bloc = "sem conteudo";
		}
		resultado.innerHTML = bloc;
	};

	le.send();
}