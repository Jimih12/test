// event pada saat linnk di klik
$('.page-scroll').on('click', function(){

    // ambil isi href
    var tujuan = $(this).attr('href') ;
    // tangkap element ybs

    var elemenTujuan = $(tujuan) ;
   
    console.log($('body').scrollTop());
   
    $('body').scrollTop('700');

   


   

});