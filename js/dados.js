var dados = [
    {'name':'Persiana celular', 'description':'Solicite o orçamento','img':'images/galeria/img-01.jpg', 'href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'},
    {'name':'Rollo', 'description':'R$ 260,00/m²','img':'images/galeria/img-03.jpg', 'href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'},
    {'name':'Persiana Horizontal 50mm em Madeira', 'description':'Solicite o orçamento','img':'images/galeria/img-05.jpg', 'href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'},
    {'name':'Persiana Vertical em Tecido', 'description':'R$ 180,00/m²','img':'images/galeria/img-06.jpg','href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'},
    {'name':'Persiana Horizontal 25mm em Aluminio', 'description':'R$ 180,00/m²','img':'images/galeria/img-12.jpeg','href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'},
    {'name':'Sheer Elegance | Double Vision', 'description':'R$ 350,00/m²','img':'images/galeria/img-21.jpg','href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'},
    {'name':'Cortina Painel', 'description':'R$ 300,00/m²','img':'images/galeria/img-27.jpeg','href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'},
    {'name':'Romana', 'description':'R$ 380,00/m²','img':'images/galeria/img-22.jpeg','href':'https://api.whatsapp.com/send?phone=553131407242&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20gostaria%20de%20um%20orçamento%20para%20'}
    // {'name':'Rolô', 'description':'Solicite o orçamento','img':'images/galeria/img-10.jpg'},
    // {'name':'Rolô', 'description':'Solicite o orçamento','img':'images/galeria/img-13.jpg'},
    // {'name':'Rolô', 'description':'Solicite o orçamento','img':'images/galeria/img-14.jpg'},
    // {'name':'Rolô', 'description':'Solicite o orçamento','img':'images/galeria/img-23.jpg'},
    // {'name':'Rolô', 'description':'Solicite o orçamento','img':'images/galeria/img-24.jpg'}
    
]


function onload(){
    var html = '';
    for (let i = 0 ; i < dados.length ; i++){

        html+=` <div class="col-sm-3">
                <div class="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div class="folio-image">
                    <img class="img-responsive" src="`+dados[i].img+`" alt="" style="height:250px;">
                </div>
                <div class="overlay">
                    <div class="overlay-content">
                        <div class="overlay-text">
                            <div class="folio-info">
                            <h3 style="color:orange;">`+dados[i].name+`</h3>
                            <p> A partir de:<br><h3><Strong><span style="color:orange;">`+dados[i].description+`</span></Strong></h3></p>
                            </div>
                            <div class="folio-overview">
                            <span class="folio-link">
                                <a class="folio-read-more" href="#" data-single_url="portfolio-single.html" >
                                    <i class="fa fa-link my-float"></i>  
                                </a>
                            </span>
                            <span class="folio-expand">
                                <a href="`+dados[i].href+dados[i].name+`">
                                    <i style="color:green;" class="fa fa-whatsapp my-float"></i>  
                                </a>
                            </span>
                            <span class="folio-expand">
                                <a href="`+dados[i].img+`" data-lightbox="portfolio">
                                    <i class="fa fa-search-plus"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>`;

    }
    console.log(html);
    document.getElementById("listaProdutos").innerHTML = html;
}

    
