function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#fano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano)
        {window.alert('Erro')}
    else
        {var fsex = document.getElementsByName('x')
         var idade = ano - Number(fano.value)
         var genero = ' '
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked)
            {genero = 'Homem'
             if(idade >= 0 && idade < 17)
                {img.setAttribute('src', './imagem/criançahomem.jpg')}            
                else if (idade >=17 && idade <21)
                {img.setAttribute('src','./imagem/jovemhomem.jpg')}
                else if (idade < 50)
                {img.setAttribute('src','./imagem/adultohomem.jpg')}
                else
                {img.setAttribute('src', './imagem/idosohomem.jpg')} } 
        
         else if (fsex[1].checked)
            {genero = 'Mulher'
            if(idade >= 0 && idade < 17)
            {img.setAttribute('src', './imagem/criançamulher.jpg')}            
            else if (idade >=17 && idade <21)
            {img.setAttribute('src', './imagem/jovemmulher.jpg')}
            else if (idade < 50)
            {img.setAttribute('src', './imagem/adultamulher.jpg')}
            else
            {img.setAttribute('src', './imagem/idosamulher.jpg')} }
        res.innerHTML = `Ìdentificamos ${genero} com ${idade} anos.`}
        res.appendChild(img)
}