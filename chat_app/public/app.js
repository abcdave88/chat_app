function writeAction(name, action) {
  var actionStrings = {'trout': 'slaps the room around with a large trout',
                       'rofl': 'rolls around on the floor laughing',
                       'sad': 'looks rather sad :(',
                       'boost': 'scatters Boost around the room liberally.'};
  $('.chatlines').append('<li class="action">' + name + ' ' + actionStrings[action] + '</li>');
}

$(document).ready(function() {
  $('form').on('submit', function(ev) {
    ev.preventDefault();
    var $name = $('#nick');
    var $line = $('#text');
    socket.emit('chat', {name: $name.val(), line: $line.val()});
    writeLine($name.val(), $line.val());
    $line.val("");
  });

  $('.actions button').on('click', function(ev) {
    var $name = $('#nick');
    var $button = $(ev.currentTarget);
    socket.emit('action', {name: $name.val(), action: $button.data('type')});
    writeAction($name.val(), $button.data('type'));
  }); 

});



