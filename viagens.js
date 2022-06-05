var arrayDeTipos = [
    {"nome":"Internacional", "transporte":"Avião", "valor":5000},
    {"nome":"Nacional", "transporte":"Avião", "valor":500},
    {"nome":"Interestadual", "transporte":"Ônibus", "valor":150},
    {"nome":"Intermunicipal", "transporte":"Ônibus", "valor":50},
    {"nome":"Municipal", "transporte":"Ônibus", "valor":25}   
  ];
  
  document.getElementById("transportes").onchange = function(){
    var selTipos = document.getElementById("tipo");
    selTipos.innerHTML = "";
    var tiposFiltrados = arrayDeTipos.filter(tipo =>{
      return tipo.transporte == this.value;
    });
    tiposFiltrados.forEach(tipo =>{
      var optionInc = document.createElement("OPTION");
      optionInc.innerHTML = tipo.nome;
      selTipos.appendChild(optionInc);
    });
  }

  document.getElementById("envia").onclick = function(){
    var saldo = document.getElementById("saldo")
    var viagem = document.getElementById("viagem")
    var gasto = document.getElementById("gasto")
    var historico = document.getElementById("historico")
    var selIdavolta = document.getElementById("idavolta");
    var selTipos = document.getElementById("tipo");
    var tipoViagem;
    var checkIdaVolta = "Não";
    var soma = 0;
    
    for (const tipo of arrayDeTipos) {
      if(selTipos.value == tipo.nome){
        soma = tipo.valor;
        tipoViagem = tipo;    
      } 
    }

    if( selIdavolta.checked ){
      soma *= 2
      checkIdaVolta = "Sim"
    }

    if(Number(saldo.innerHTML) - soma < 0 ){
      alert("Sem saldo para esta viagem.")
      return;
    }



    saldo.innerHTML = Number(saldo.innerHTML) - soma; 
    viagem.innerHTML = 1 + Number(viagem.innerHTML); 
    gasto.innerHTML = soma + Number(gasto.innerHTML); 

    historico.innerHTML += `
      <tr class="table-info">
        <th>${tipoViagem.transporte}</th>
        <th>${tipoViagem.nome}</th>
        <th>${checkIdaVolta}</th>
        <th>${soma}</th>
      </tr>
    `;

  
  }

  console.log()

  



/*

<tr class="table-info">
                        <th>Avião</th>
                        <th>Internacional</th>
                        <th>Sim</th>
                        <th>10000</th>
                    </tr>



<script type = "text/javascript" >
    function update() {
        var select = document.getElementById('transporte');
        var option = select.options[select.ariaSelectedIndex];

        document.getElementById('value').value = option.value;
        document.getElementById('text').value = option.text;
    }
    update(); 
</script>
*/