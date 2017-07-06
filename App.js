// OGÓLNA FUNKCJA
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';

$.ajaxSetup({
    headers: {
        'X-Client-Id': '1904',
        'X-Auth-Token': '1477137a2581bdb4fb50879868401858'
    }
});

$.get(baseUrl + '/board').done(function(res) {
    setupColumns(res.columns);
});

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
        card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(card);
    })
}

