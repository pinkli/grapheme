Template.content.events({
  'click input' : function (e) {
    // submit user input data for parsing
    var string = document.getElementById("userstring").value;
    // Meteor.call('parsePOS', string)
  }
});