$(function() {
  $("#input-text").on("keyup", function(){
    var charNum = String($(this).val().length);
    $("#char-count").text(charNum + "文字");
  });

  // hideボタンを押したとき
  $("#hideButton").on("click", function() {
    $("#title").hide();
  });
  // showボタンを押したとき
  $("#showButton").on("click", function() {
    $("#title").show();
  });

  // fade outボタンを押したとき
  $("#fadeOutButton").on("click", function() {
    $("#title").fadeOut(1000);
  });
  // fade inボタンを押したとき
  $("#fadeInButton").on("click", function() {
    $("#title").fadeIn(3000);
  });

  // appendボタンを押したとき
  $("#appendButton").on("click", function() {
    $("#lists").append('<li class="list">追加されたリスト</li>');
  });
  // removeボタンを押したとき
  $("#removeButton").on("click", function() {
    $(".list").remove();
  });

  // add classボタンを押したとき
  $("#addClassButton").on("click", function() {
    $("p").addClass("red");
  });
  // remove classボタンを押したとき
  $("#removeClassButton").on("click", function() {
    $("p").removeClass("red");
  });

  $("#title").on("mouseover",function() {
    $("#title").addClass("red");
  }).on("mouseout", function() {
    $("#title").removeClass("red");
  });

  // get attrボタンを押したとき
  $("#getAttrButton").on("click", function() {
    console.log($("img").attr("src"));
  });

  // change attrボタンを押したとき
  $("#changeAttrButton").on("click", function() {
    $("img").attr("src", "http://yoso-walk.net/wp-content/uploads/2014/07/enhanced-buzz-wide-6868-1401738537-9_R.jpg");
  });

  // valボタンを押したとき
  $("#valButton").on("click", function() {
    console.log($("input").val());
  });
});
