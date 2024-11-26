const post = document.querySelectorAll('.post');
console.log(post)

post.forEach(function(selectedPost){
    let btnLike = selectedPost.querySelectorAll('user-opinion');
    console.log(btnLike)

    btnLike.forEach(function(btnSelected , indexBtnI){
        btnSelected.addEventListener('click', function(){
            btnSelected.classList.toggle('active');

            btnLike.forEach(function(btnSelectedII , indexBtnII){
                if(indexBtnI != indexBtnII){
                    btnSelectedII.classList.remove('active');
                }
            })
        })
    })
})