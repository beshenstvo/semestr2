
function move(el){ setInterval(function(){
    // setTimeout(move, 10000, time = time/2)
    var height1 = $('.container').offset().top
    var width1 = $('.container').offset().left;
    var width2 = $('.container').width() +100;
    var height2 = $('.container').height() - $(el).height();
    var randomValueForY = Math.floor(Math.random() * (height2 - height1)) + height1;
    var randomValueForX = Math.floor(Math.random() * (width2 - width1) + width1);
    $(el).css({
        'top' : randomValueForY+'px',
        'left' : randomValueForX+'px'
    })
}, 1000)}

arrayel = [$('.test1__1'),$('.test1__2'),$('.test1__3'),$('.test2__1'),$('.test2__2'),$('.test2__3'),$('.test3__1'),$('.test3__2'),$('.test3__3')];
    console.log(arrayel.length)
    for (let i = 0; i < arrayel.length; i++) {
        move(arrayel[i]);
      }

$(this).click(function(e) { 
    if (($(e.target).attr("class") != 'container') && ($(e.target).attr("class") != undefined)){
    if (($(e.target).attr("class") === 'test1__1 a1')||($(e.target).attr("class") === 'test1__2 a1')||($(e.target).attr("class") === 'test1__3 a1')){
        console.log('10 очков')
        var value = Number($('.innercount').text())
        console.log(value+' value')
        $('.innercount').text(value+10)
        console.log($('.innercount').text()+' value2')
        if($(e.target).attr("class") === 'test1__1 a1'){
            arrayel.splice(0, 0);
            console.log(arrayel)
        }
        if($(e.target).attr("class") === 'test1__2 a1'){
            arrayel.splice(1, 1);
            console.log(arrayel)
        }
        if($(e.target).attr("class") === 'test1__3 a1'){
            arrayel.splice(2, 2);
            console.log(arrayel)
        }
    }
    if (($(e.target).attr("class") === 'test2__1 a2')||($(e.target).attr("class") === 'test2__2 a2')||($(e.target).attr("class") === 'test2__3 a2')){
        console.log('5 очков')
        var value = Number($('.innercount').text())
        console.log(value+' value')
        $('.innercount').text(value+5)
        console.log($('.innercount').text()+' value2')
        if($(e.target).attr("class") === 'test2__1 a2'){
            arrayel.splice(3, 3);
            console.log(arrayel)
        }
        if($(e.target).attr("class") === 'test2__2 a2'){
            arrayel.splice(4, 4);
            console.log(arrayel)
        }
        if($(e.target).attr("class") === 'test2__3 a2'){
            arrayel.splice(5, 5);
            console.log(arrayel)
        }
    }
    if (($(e.target).attr("class") === 'test3__1 a3')||($(e.target).attr("class") === 'test3__2 a3')||($(e.target).attr("class") === 'test3__3 a3')){
        console.log('5 очков')
        var value = Number($('.innercount').text())
        console.log(value+' value')
        $('.innercount').text(value+15)
        console.log($('.innercount').text()+' value2')
        if($(e.target).attr("class") === 'test3__1 a3'){
            arrayel.splice(6, 6);
            console.log(arrayel)
        }
        if($(e.target).attr("class") === 'test3__2 a3'){
            arrayel.splice(7, 7);
            console.log(arrayel)
        }
        if($(e.target).attr("class") === 'test3__3 a3'){
            arrayel.splice(8, 8);
            console.log(arrayel)
        }
    }
        $(e.target).remove();
        check();
}
})
function check(){
    if (Number($('.innercount').text()) == 90){
        $('.container').add( ".container" ).addClass( "new" ).text('Вы выиграли!')
        console.log('win!!!!!!!!!!!!')
    }
}



 var a = setInterval(() => {
var time = Number($('.innertime').text())
    $('.innertime').text(time - 1);
    console.log(time);
    if(Number($('.innertime').text() == 0)){
        $('.container').add( ".container" ).addClass( "new2" ).text('Время вышло!')
        clearInterval(a)
    }
    if(Number($('.innercount').text()) == 90){
        clearInterval(a)
    }
}, 1000);