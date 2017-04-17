$('body').show();
$('#wait').hide();
$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});
Materialize.toast('Still in Beta Version. Might not work properly', 5000) // 4000 is the duration of the toast
$('.loader').hide();
var rankArray = [];
var iteration = 0;
var currentName = "team";
var otherName = "team";
var currentCode = "2017wasno";
var count = 0;
var xTable;
var autoGen = function() {
  var x = document.getElementById('yr');
  var y = document.getElementById('ecode');
  var z = document.getElementById('selector');
  if(y.value == "") {
    currentCode = x.value + z.value
  } else {
    currentCode = x.value + y.value
  };
  tba.event.rankings(currentCode, foo);
};
var foo = function (tba) {
  if (document.getElementById('newInfo').checked) {
    data = {}
  }
  count = count + 1;
  if (count > 1) {
    xTable.destroy();
  };
  Materialize.toast('Hold on! This might take a while', 4000) // 4000 is the duration of the toast
  $('.loader').show();
  $('.remove').remove();
  $('<tr class="remove" id="header"><th>Rank<i class="material-icons">swap_vert</i></th><th class="tooltipped" data-position="top" data-delay="50" data-tooltip="Of all the things to sort by...">Number<i class="material-icons">swap_vert</i></th><th class="tooltipped" data-position="top" data-delay="50" data-tooltip="You really want to sort by name?">Name<i class="material-icons">swap_vert</i></th><th>Match Points<i class="material-icons">swap_vert</i></th><th class="tooltipped" data-position="top" data-delay="50" data-tooltip="I do not work well...">Record (W-L-T)</th><th class="tooltipped" data-position="top" data-delay="50" data-tooltip="That did... nothing?">Played</th><th>Ranking Score<i class="material-icons">swap_vert</i></th><th>Alliance Score<i class="material-icons">swap_vert</i><i class="material-icons tooltipped" data-position="top" data-delay="50" data-tooltip="Prediction on how well a team would be as an alliance partner.">info_outline</i></th></tr>').appendTo('#th');
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
  $('.remove').hide();
  rankArray=[];
  for (var i = 1; i <= tba.length; i++) {
      rankArray.push(tba[i]);
  }
  iteration = 0;
  var checkIteration = function() {
    if (iteration < rankArray.length-1) {
      getNameForRank();
    } else {
      $('.remove').show();
      $('.loader').hide();
      xTable = $('#table').DataTable({
        "displayLength": 9999,
        "paging": false,
      });
    }
  }
  var getNameForRank = function() {
    currentName = "frc" + rankArray[iteration][1];
    tba3.team.get(currentName, parseName);
  }
  var parseName = function(tbal) {
    otherName = tbal.nickname;
    $('<tr class="remove"><td>' + rankArray[iteration][0] + '</td><td>' + rankArray[iteration][1] + '</td><td>' + otherName + '</td><td>' + rankArray[iteration][3] + '</td><td>' + rankArray[iteration][8]  + '</td><td>' + rankArray[iteration][9] + '</td><td>' + rankArray[iteration][2] + '</td><td>' + Math.round((((rankArray[iteration][3] + rankArray[iteration][4] + rankArray[iteration][5] + rankArray[iteration][6] + rankArray[iteration][7]) / 5) / rankArray[iteration][9])) + '%</td></tr>').appendTo('#tb');
    $('.remove').hide();
    iteration = iteration + 1;
    checkIteration();
  }
  getNameForRank();
}
// DataTable script
var table = $('#data-table-row-grouping').DataTable({
        "columnDefs": [
            { "visible": false, "targets": 2 }
        ],
        "order": [[ 2, 'asc' ]],
        "displayLength": 9999,
        "drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;

            api.column(2, {page:'current'} ).data().each( function ( group, i ) {
                if ( last !== group ) {
                    $(rows).eq( i ).before(
                        '<tr class="group"><td colspan="5">'+group+'</td></tr>'
                    );

                    last = group;
                }
            } );
        }
    });

    // Order by the grouping
    $('#data-table-row-grouping tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === 2 && currentOrder[1] === 'asc' ) {
            table.order( [ 2, 'desc' ] ).draw();
        }
        else {
            table.order( [ 2, 'asc' ] ).draw();
        }
    } );
