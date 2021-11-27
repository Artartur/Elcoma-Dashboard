var dados = []

function ApagaRegistro(id){
  let _confirm = confirm("Deseja realmente excluir este registro?")
  
  if(_confirm){
      for(let i = 0; i < dados.length; i++){
          if(dados[i].ID == id){
            dados.splice(i,1)
          }
      }
      PopulaTabela()
  }
}

function EditaRegistro(id){
  $("#modalRegistro").modal("show")

  dados.forEach(function(item){
    if(item.ID == id){
      $("#hdID").val(item.ID)
      $("#txtTitulo").val(item.Titulo)
      $("#txtData").val(item.Data)
      $("#txtPeriodo").val(item.Periodo)
      $("#txtPeriodoF").val(item.PeriodoF)
      $("#txtAtiva").val(item.Ativa)
      $("#txtDashboard").val(item.Dashboard)
  }
})
}
function PopulaTabela(){
    if(Array.isArray(dados)){
            $("#tblDados tbody").html("")
            
            localStorage.setItem("__dados__", JSON.stringify(dados))
            dados.forEach(function(item){

                $("#tblDados tbody").append(`<tr> 
                <th>${item.ID}</th>
                <th>${item.Titulo}</th>
                <td>${item.Data}</td>
                <td>${item.Periodo}</td>
                <td>${item.PeriodoF}</td>
                <td>${item.Ativa}</td>
                <td>${item.Dashboard}</td>
                <td><button type="button" class="btn btn-primary" onclick="javascript:EditaRegistro(${item.ID});"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
                <td><button type="button" class="btn btn-light btn-outline-secondary"><i class="fa fa-list" aria-hidden="true"></i></button></td>
                <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fa fa-times" aria-hidden="true"></i></button></td>
                </tr>`)
        
        })
    }
}

$(function(){
   dados = JSON.parse(localStorage.getItem("__dados__"))??[]

   if (dados){
     PopulaTabela()
   }
   
   $("#btnSalvar").click(function(){

    let ID = $("#txtTitulo").val()
    let Titulo = $("#txtTitulo").val()
    let Data =  $("#txtData").val()
    let Periodo = $("#txtPeriodo").val()
    let PeriodoF = $("#txtPeriodoF").val()
    let Ativa = $("#txtAtiva").val()
    let Dashboard = $("#txtDashboard").val()
   
    let registro = {}

    
    registro.Titulo = Titulo
    registro.Data = Data
    registro.Periodo = Periodo
    registro.PeriodoF = PeriodoF
    registro.Ativa = Ativa
    registro.Dashboard = Dashboard
    
      registro.ID = dados.lenght + 1
      dados.push(registro)

      
   

    alert("Item adicionado com sucesso")
    $("#modalRegistro").modal("hide")
    
    $("#txtId").val("")
    $("#txtTitulo").val("")
    $("#txtData").val("")
    $("#txtPeriodo").val("")
    $("#txtPeriodoF").val("")
    $("#txtAtiva").val("")
    $("#txtDashboard").val("")
    PopulaTabela()
   })

   })