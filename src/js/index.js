let hoje = new Date();
let dia = String(hoje.getDate()).padStart(2, '0');
let mes = String(hoje.getMonth() + 1).padStart(2, '0');
let ano = hoje.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

$('#pesquisar').click(function(event){
    event.preventDefault();

    let data = $('#data').val();

    if(data >='1995-06-16'){
        const url = "https://api.nasa.gov/planetary/apod?api_key="
        const api = "nY1cr97W2x0xU9oZsjtJI6UJPi18QW4kFwPRA3b8&date="
        
        $.ajax({url: `${url}${api}${data}`,
             success: function (resultado){
               
                console.log(resultado)
                       
                $('#titulo').html(`${resultado.title}`)
                
                if(resultado.media_type == 'image'){
                    $('#midia').html(` <img src="${resultado.hdurl}" alt="${resultado.copyright}"><figcaption>${resultado.copyright}</figcaption>`)
                   
                  
              }
              else if(resultado.media_type == 'video'){
                $('#midia').html(` <iframe id="video" src="${resultado.url}" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
                
              }
 
                $('#texto').html(`ID: ${resultado.explanation}`)
              
               
             }})
    }else{
        $('#midia').html("")
        $('#titulo').html(`<h1>A primeira foto adicionada ao Apod foi dia 20/06/2015</h1>`)
        $('#texto').html(`<h2>Sei que você está curioso para ver mais fotos. <br>Mas infelizmente só podemos exibir fotos entre os dias 20/06/2015 e ${dataAtual}</h2>`)
       
    }


   

        
    }
) 

