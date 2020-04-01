// jQueryのコード ------------------- //
$(function () {


  var fruit = $('#fruit li');
  console.log(fruit[0]);



  var photos = ['img/photo01.jpg', 'img/photo02.jpg', 'img/photo03.jpg'];
  var counter = 0;
  console.log(counter);


  //変数を作って.modalを保存
  var modal = $('.modal');
  var modalContainer = $('.modal-container');

  //クリックしたら
  $('.photo-list li').on('click', function () {

    var indexNumber = $('.photo-list li').index(this);
    console.log(indexNumber);
    counter = indexNumber;


    //2 modal-containerの中のimgタグにsrc属性getImgSrcを入れる
    modalContainer.find('img').attr('src', photos[counter]);

    //classのshowを付与
    modal.addClass('active');
  });

  //closeをクリックしたら
  $('.close').on('click', function () {
    modal.removeClass('active');
  });



  $('.nav-left').on('click', function () {
    counter--;
    if (counter < 0) {
      counter = photos.length - 1;
    }
    modalContainer.find('img').attr('src', photos[counter]);

    console.log(counter);
  });

  $('.nav-right').on('click', function () {
    counter++;
    if (counter > photos.length - 1) {
      counter = 0;
    }
    modalContainer.find('img').attr('src', photos[counter]);

    console.log(counter);

  });

});
