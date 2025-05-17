function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    
    /*   if(html.classList.contains('light')) {
           html.classList.remove('light')
       } else {
           html.classList.add('light')
       } */

    //pegar a tag img

    const img = document.querySelector("#profile img") 
    
    if (html.classList.contains('light')) {
        img.setAttribute('src' , 'assets/assets/foto-perfil-light.png')
        //se tiver light mode, adicionar a imagem light
    } else {
        img.setAttribute('src' , 'assets/assets/foto-perfil.png')
        //se tiver sem light mode, manter imagem normal
    }   
}