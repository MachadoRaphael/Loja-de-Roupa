'use strict';

//variáveis blusa
let somaPblusa = 0;
let somaMblusa= 0;
let somaGblusa = 0;

let vendaPblusa = 0.00;
let vendaMblusa = 0.00;
let vendaGblusa = 0.00;

//variáveis casacos
let somaPcasaco = 0;
let somaMcasaco = 0;
let somaGcasaco = 0;

let vendaPcasaco = 0.00;
let vendaMcasaco = 0.00;
let vendaGcasaco = 0.00;

//variáveis calças
let somaPcalca = 0;
let somaMcalca= 0;
let somaGcalca = 0;

let vendaPcalca = 0.00;
let vendaMcalca = 0.00;
let vendaGcalca = 0.00;

//variáveis bermudas
let somaPbermuda = 0;
let somaMbermuda = 0;
let somaGbermuda = 0;

let vendaPbermuda = 0.00;
let vendaMbermuda = 0.00;
let vendaGbermuda = 0.00;

let btnVendasBlusa = 
document.getElementById('vendasblusa');
let btnEstornoBlusa = 
document.getElementById('estornoblusa');

let btnVendasCasaco = 
document.getElementById('vendascasaco');
let btnEstornoCasaco = 
document.getElementById('estornocasaco');

let btnVendasCalca = 
document.getElementById('vendascalca');
let btnEstornoCalca = 
document.getElementById('estornocalca');

let btnVendasBermuda = 
document.getElementById('vendasbermuda');
let btnEstornoBermuda= 
document.getElementById('estornobermuda');

//planilha
let btnPlanilha = 
document.getElementById('export');

//eventos
btnVendasBlusa.addEventListener('click',venda,false);
btnEstornoBlusa.addEventListener('click',estorno,false);

btnVendasCasaco.addEventListener('click',venda2,false);
btnEstornoCasaco.addEventListener('click',estorno2,false);

btnVendasCalca.addEventListener('click',venda3,false);
btnEstornoCalca.addEventListener('click',estorno3,false);

btnVendasBermuda.addEventListener('click',venda4,false);
btnEstornoBermuda.addEventListener('click',estorno4,false);


//planilha
btnPlanilha.addEventListener('click',planilha,false);

function venda(e){
	if(document.getElementById('tamanhoPblusa').checked){
		somaPblusa = somaPblusa + 1;
		vendaPblusa = vendaPblusa + 40.00;
		document.getElementById('resultadoPblusa').innerHTML = somaPblusa;
		document.getElementById('vendaPblusa').innerHTML = vendaPblusa;

	}else if(document.getElementById('tamanhoMblusa').checked){
		somaMblusa = somaMblusa + 1;
		vendaMblusa = vendaMblusa + 60.00;
		document.getElementById('resultadoMblusa').innerHTML = somaMblusa;
		document.getElementById('vendaMblusa').innerHTML = vendaMblusa;

	}else if(document.getElementById('tamanhoGblusa').checked){
		somaGblusa = somaGblusa + 1;
		vendaGblusa = vendaGblusa + 80.00;
		document.getElementById('resultadoGblusa').innerHTML = somaGblusa;
		document.getElementById('vendaGblusa').innerHTML = vendaGblusa;
	}
}

function estorno(e) {
	if(document.getElementById('tamanhoPblusa').checked){
		somaPblusa = somaPblusa - 1;
		vendaPblusa = vendaPblusa - 40.00;
		if(somaPblusa<0){
			somaPblusa = 0;
			vendaPblusa = 0.00;
		}
		document.getElementById('resultadoPblusa').innerHTML = somaPblusa;
		document.getElementById('vendaPblusa').innerHTML = vendaPblusa;

	}else if(document.getElementById('tamanhoMblusa').checked){
		somaMblusa = somaMblusa - 1;
		vendaMblusa = vendaMblusa - 60.00;
		if(somaMblusa<0){
			somaMblusa = 0;
			vendaMblusa = 0.00;
		}
		document.getElementById('resultadoMblusa').innerHTML = somaMblusa;
		document.getElementById('vendaMblusa').innerHTML = vendaMblusa;

	}else if(document.getElementById('tamanhoGblusa').checked){
		somaGblusa = somaGblusa - 1;
		vendaGblusa = vendaGblusa - 80.00;
		if(somaGblusa<0){
			somaGblusa = 0;
			vendaGblusa = 0.00;
		}
		document.getElementById('resultadoGblusa').innerHTML = somaGblusa;
		document.getElementById('vendaGblusa').innerHTML = vendaGblusa;
	}
}

function venda2(e){
	if(document.getElementById('tamanhoPcasaco').checked){
		somaPcasaco = somaPcasaco + 1;
		vendaPcasaco = vendaPcasaco + 60.00;
		document.getElementById('resultadoPcasaco').innerHTML = somaPcasaco;
		document.getElementById('vendaPcasaco').innerHTML = vendaPcasaco;

	}else if(document.getElementById('tamanhoMcasaco').checked){
		somaMcasaco = somaMcasaco + 1;
		vendaMcasaco = vendaMcasaco + 80.00;
		document.getElementById('resultadoMcasaco').innerHTML = somaMcasaco;
		document.getElementById('vendaMcasaco').innerHTML = vendaMcasaco;

	}else if(document.getElementById('tamanhoGcasaco').checked){
		somaGcasaco = somaGcasaco + 1;
		vendaGcasaco = vendaGcasaco + 100.00;
		document.getElementById('resultadoGcasaco').innerHTML = somaGcasaco;
		document.getElementById('vendaGcasaco').innerHTML = vendaGcasaco;
	}
}

function estorno2(e) {
	if(document.getElementById('tamanhoPcasaco').checked){
		somaPcasaco = somaPcasaco - 1;
		vendaPcasaco = vendaPcasaco - 60.00;
		if(somaPcasaco<0){
			somaPcasaco = 0;
			vendaPcasaco = 0.00;
		}
		document.getElementById('resultadoPcasaco').innerHTML = somaPcasaco;
		document.getElementById('vendaPcasaco').innerHTML = vendaPcasaco;

	}else if(document.getElementById('tamanhoMcasaco').checked){
		somaMcasaco = somaMcasaco - 1;
		vendaMcasaco = vendaMcasaco - 80.00;
		if(somaMcasaco<0){
			somaMcasaco = 0;
			vendaMcasaco = 0.00;
		}
		document.getElementById('resultadoMcasaco').innerHTML = somaMcasaco;
		document.getElementById('vendaMcasaco').innerHTML = vendaMcasaco;

	}else if(document.getElementById('tamanhoGcasaco').checked){
		somaGcasaco = somaGcasaco - 1;
		vendaGcasaco = vendaGcasaco - 100.00;
		if(somaGcasaco<0){
			somaGcasaco = 0;
			vendaGcasaco = 0.00;
		}
		document.getElementById('resultadoGcasaco').innerHTML = somaGcasaco;
		document.getElementById('vendaGcasaco').innerHTML = vendaGcasaco;
	}
}

function venda3(e) {
	if(document.getElementById('tamanhoPcalca').checked){
		somaPcalca = somaPcalca + 1;
		vendaPcalca = vendaPcalca + 90.00;
		document.getElementById('resultadoPcalca').innerHTML = somaPcalca;
		document.getElementById('vendaPcalca').innerHTML = vendaPcalca;

	}else if(document.getElementById('tamanhoMcalca').checked){
		somaMcalca = somaMcalca + 1;
		vendaMcalca = vendaMcalca + 110.00;
		document.getElementById('resultadoMcalca').innerHTML = somaMcalca;
		document.getElementById('vendaMcalca').innerHTML = vendaMcalca;

	}else if(document.getElementById('tamanhoGcalca').checked){
		somaGcalca = somaGcalca + 1;
		vendaGcalca = vendaGcalca + 120.00;
		document.getElementById('resultadoGcalca').innerHTML = somaGcalca;
		document.getElementById('vendaGcalca').innerHTML = vendaGcalca;
	}
}

function estorno3(e) {
	if(document.getElementById('tamanhoPcalca').checked){
		somaPcalca = somaPcalca - 1;
		vendaPcalca = vendaPcalca - 90.00;
		if(somaPcalca<0){
			somaPcalca = 0;
			vendaPcalca = 0.00;
		}
		document.getElementById('resultadoPcalca').innerHTML = somaPcalca;
		document.getElementById('vendaPcalca').innerHTML = vendaPcalca;

	}else if(document.getElementById('tamanhoMcalca').checked){
		somaMcalca = somaMcalca - 1;
		vendaMcalca = vendaMcalca - 110.00;
		if(somaMcalca<0){
			somaMcalca = 0;
			vendaMcalca = 0.00;
		}
		document.getElementById('resultadoMcalca').innerHTML = somaMcalca;
		document.getElementById('vendaMcalca').innerHTML = vendaMcalca;

	}else if(document.getElementById('tamanhoGcalca').checked){
		somaGcalca = somaGcalca - 1;
		vendaGcalca = vendaGcalca- 120.00;
		if(somaGcalca<0){
			somaGcalca = 0;
			vendaGcalca = 0.00;
		}
		document.getElementById('resultadoGcalca').innerHTML = somaGcalca;
		document.getElementById('vendaGcalca').innerHTML = vendaGcalca;
	}
}

function venda4(e) {
	if(document.getElementById('tamanhoPbermuda').checked){
		somaPbermuda = somaPbermuda + 1;
		vendaPbermuda = vendaPbermuda + 80.00;
		document.getElementById('resultadoPbermuda').innerHTML = somaPbermuda;
		document.getElementById('vendaPbermuda').innerHTML = vendaPbermuda;

	}else if(document.getElementById('tamanhoMbermuda').checked){
		somaMbermuda = somaMbermuda + 1;
		vendaMbermuda= vendaMbermuda + 100.00;
		document.getElementById('resultadoMbermuda').innerHTML = somaMbermuda;
		document.getElementById('vendaMbermuda').innerHTML = vendaMbermuda;

	}else if(document.getElementById('tamanhoGbermuda').checked){
		somaGbermuda = somaGbermuda + 1;
		vendaGbermuda = vendaGbermuda + 110.00;
		document.getElementById('resultadoGbermuda').innerHTML = somaGbermuda;
		document.getElementById('vendaGbermuda').innerHTML = vendaGbermuda;
	}
}

function estorno4(e) {
	if(document.getElementById('tamanhoPbermuda').checked){
		somaPbermuda = somaPbermuda - 1;
		vendaPbermuda = vendaPbermuda - 80.00;
		if(somaPbermuda<0){
			somaPbermuda = 0;
			vendaPbermuda = 0.00;
		}
		document.getElementById('resultadoPbermuda').innerHTML = somaPbermuda;
		document.getElementById('vendaPbermuda').innerHTML = vendaPbermuda;

	}else if(document.getElementById('tamanhoMbermuda').checked){
		somaMbermuda = somaMbermuda - 1;
		vendaMbermuda = vendaMbermuda - 100.00;
		if(somaMbermuda<0){
			somaMbermuda = 0;
			vendaMbermuda = 0.00;
		}
		document.getElementById('resultadoMbermuda').innerHTML = somaMbermuda;
		document.getElementById('vendaMbermuda').innerHTML = vendaMbermuda;

	}else if(document.getElementById('tamanhoGbermuda').checked){
		somaGbermuda = somaGbermuda - 1;
		vendaGbermuda = vendaGbermuda - 110.00;
		if(somaGbermuda<0){
			somaGbermuda = 0;
			vendaGbermuda = 0.00;
		}
		document.getElementById('resultadoGbermuda').innerHTML = somaGbermuda;
		document.getElementById('vendaGbermuda').innerHTML = vendaGbermuda;
	}
}

function planilha(e){
	TableToExcel.convert(document.getElementById('table1'));
}
