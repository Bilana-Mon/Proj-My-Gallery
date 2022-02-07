'use strict';


function onInit() {
    console.log('Starting up');
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var strHTML = '';
    var $portfolio = $('#portfolio .projects-list');

    projs.forEach(project => {
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item" onclick="onGetProjModal('${project.id}')">
         <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
           <div class="portfolio-hover">
             <div class="portfolio-hover-content">
               <i class="fa fa-plus fa-3x"></i>
             </div>
           </div>
           <img class="img-fluid" src="${project.url}" alt="">
         </a>
         <div class="portfolio-caption">
           <h4>${project.title}</h4>
           <p class="text-muted">${project.name}</p>
         </div>`;
    });
    $portfolio.html(strHTML);
}

function renderModals() {
    var projs = getProjs();
    var strHTML = '';
    var $portfolioModals = $('.modal-body');

    projs.forEach(project => {
        strHTML += `<h2>${project.title}</h2>
                    <p class="item-intro text-muted">${project.desc}</p>
                    <img class="img-fluid d-block mx-auto" src="${project.url}" alt="">
                    <p>${project.desc}</p>
                    <ul class="list-inline">
                      <li>${project.publishedAt}</li>
                      <li>${project.name}</li>
                      <li>${project.labels}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })
    $portfolioModals.html(strHTML);
}

function onGetProjModal(id) {
    var projs = getProjModal();
    projs.forEach(proj => {
        $('.modal-body h2').text(proj.title);
        $('.item-intro').text(proj.desc)
    })
}