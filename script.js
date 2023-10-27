function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector("#txtano");
    var rest = document.querySelector('.res');

    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente")
        } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = "homem"
            if(idade > 0 &&  idade < 10){
                img.setAttribute('src', 'foto-menino.jpg')
            } else if(idade < 21 ){
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-homem.jpg')
            } else{
                img.setAttribute('src', 'foto-idoso.jpg')
            }
         }else if(fsex[1].checked){
            genero = "mulher"
            if(idade > 0 &&  idade < 10){
                img.setAttribute('src', 'foto-menina.jpg')
            } else if(idade < 21 ){
                img.setAttribute('src', 'foto-jovem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-mulher.jpg')
            } else{
                img.setAttribute('src', 'foto-idosa.jpg')
            }
         }
            
         
        }
        
        rest.innerHTML = `genero ${genero} com ${idade} anos`
        rest.appendChild(img)
    }

