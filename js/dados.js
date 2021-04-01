var dados = [
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-01.jpg'},
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-02.jpg'},
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-03.jpg'},
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-04.jpg'},
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-05.jpg'},
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-06.jpg'},
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-08.jpg'},
    {'name':'Rolô', 'description':'Persianas Rolo','img':'images/galeria/img-09.jpg'}
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
                            <h3>`+dados[i].name+`</h3>
                            <p>`+dados[i].description+`</p>
                            </div>
                            <div class="folio-overview">
                            <span class="folio-link">
                                <a class="folio-read-more" href="#" data-single_url="portfolio-single.html" >
                                    <i class="fa fa-link"></i>
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

    
