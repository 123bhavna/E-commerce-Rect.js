


$('.plus-cart').click(function(){
    
  var id=$(this).attr("pid").toString();
  var eml = this.parentNode.children[2]
  $.ajax({
      type:"GET",
      url:"/pluscart",
      data:{
          prod_id:id
      },
      success:function(data){
          eml.innerText=data.quantity
          document.getElementById("amount").innerText=data.amount
          document.getElementById("totalamount").innerText=data.totalamount
      }
  })
})

$('.minus-cart').click(function(){
  
  var id=$(this).attr("pid").toString();
  var eml = this.parentNode.children[2]
  $.ajax({
      type:"GET",
      url:"/minuscart",
      data:{
          prod_id:id
      },
      success:function(data){
          eml.innerText=data.quantity
          document.getElementById("amount").innerText=data.amount
          document.getElementById("totalamount").innerText=data.totalamount
      }
  })
})

$('.remove-cart').click(function(){
  
  var id=$(this).attr("pid").toString();
  var eml = this
  $.ajax({
      type:"GET",
      url:"/removecart",
      data:{
          prod_id:id
      },
      success:function(data){
          document.getElementById("amount").innerText=data.amount
          document.getElementById("totalamount").innerText=data.totalamount
          eml.parentNode.parentNode.parentNode.parentNode.remove()
      }
  })
})

$('.remove-wishlist').click(function(){
 
  var id=$(this).attr("pid").toString();
  var eml = this
  $.ajax({
      type:"GET",
      url:"/removewishlist",
      data:{
          prod_id:id
      },
      success:function(data){
         
          eml.parentNode.parentNode.parentNode.parentNode.remove()
      }
  })
})

// slider
$('#slider1, #slider2, #slider3').owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          nav: false,
          autoplay: true,
      },
      600: {
          items: 3,
          nav: true,
          autoplay: true,
      },
      1000: {
          items: 5,
          nav: true,
          loop: true,
          autoplay: true,
      }
  }
})

$('.remove-wishlist').click(function() {
var id = $(this).attr("pid").toString();
var eml = this;

$.ajax({
    type: "GET",
    url: "/remove_from_wishlist/",
    data: {
        prod_id: id
    },
    success: function(data) {
        // Check if the response contains an error
        if (data.error) {
            console.error("Error:", data.error);
        } else {
            // Remove the parent container of the button upon success
            $(eml).closest('.row').remove();
        }
    },
    error: function(xhr, status, error) {
        console.error("AJAX Error:", error);
    }
});
});
