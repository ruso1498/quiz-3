$.ajax({
    type: "GET",
    url: "https://api.saministro.com/companies/177",
    dataType: "JSON",
    success: function (data) {
        console.log(data),
        $('.section1').append(
            '<img id="pht" src=' + data.cover_photo + '>'
        );
        $('#section2').append(
            '<h1>' + data.name + '</h1>',
        )
        if (data.is_verified==1) {
            $('#section2').append(
                '<input type="checkbox" checked>'
            )
            }
            let k=0;
            let i=0;
            let rat= 0;
        for( i=0; i<data.reviews.length; i++) {
             k = k + data.reviews[i].rating;
        }   
        rat = k/ data.reviews.length;
        $('#section2').append(
            '<h2>' + rat + '</h2>'
        )
        $('#section3').append(
            '<p>' + data.description + '</p>'
        )
        for (i=0; i<data.addresses.length; i++) {
            $('.coms').append(
                '<p>' + data.addresses.array[i] + '</p>'
            )
        }
    }
});