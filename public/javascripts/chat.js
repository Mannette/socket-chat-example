$(function() {
  var socket = io();
  var id = 0;

  $('form').on('submit', function(event) {
    event.preventDefault();

    socket.emit('chat message', $('#m').val());
    $('#m').val('');

  });

  socket.on('chat message', function(message) {
    $('#messages').append('<li>' + message + '</li>');
  });

});
