'use strict'

var gProjs = [];

_createProjs();

function _createProjs() {
    var proj1 = _createProj('pacman', 'pacman', 'Pacman Project', 'img/proj-imgs/pac-man.jpg', ['Matrixes', 'keyboard events']);
    var proj2 = _createProj('minesweeper', 'minesweeper', 'Minesweeper Project', 'img/proj-imgs/minesweeper.jpg', ['Matrixes', 'recursion']);
    var proj3 = _createProj('bookshop', 'bookshop', 'Bookshop Project', 'img/proj-imgs/bookshop.jpg', ['JQuery', 'Bootstrap']);
    var proj4 = _createProj('todos', 'todos', 'Todos Project', 'img/proj-imgs/todos.jpg', ['JS', 'CRUD']);
    var proj5 = _createProj('secret-content', 'secret-content', 'Secret Content Project', 'img/proj-imgs/secret-content.jpg', ['JS', 'Flex']);
    var proj6 = _createProj('touch nums', 'touch nums', 'Touch Nums Project', 'img/proj-imgs/touch-nums.jpg', ['JS']);

    gProjs.push(proj1, proj2, proj3, proj4, proj5, proj6);

}


function _createProj(id, name, title, url, labels) {
    var proj = {
        id,
        name,
        title,
        desc: makeLorem(),
        url,
        publishedAt: Date.now(),
        labels
    };
    return proj;
}


function getProjs() {
    return gProjs;
}


function getProjModal(id) {
    gProjs.map(proj => (proj.id === id));

}
