(function () {
  var drops = $('.sidebar .sidebar-drop .sidebar-drop-controls');
  drops.click(function () {
    $(this).parent().toggleClass('show');
  });
})();
