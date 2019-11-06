button = document.getElementById("btn")
img_one = document.getElementById("img_one")
img_two = document.getElementById("img_two")


button.addEventListener('click',()=>{
    console.log("clicked")
    const photos = [
        'static/images/dice1@3x.png',
        'static/images/dice2@3x.png',
        'static/images/dice3@3x.png',
        'static/images/dice4@3x.png',
    ];
    console.log(photos)
    const pick_img = Math.floor(Math.random() * 6) + 1;
    console.log(pick_img)
    if (pick_img===1){
        img_one.src = photos[1]
        console.log(photos[1])


    };
        if (pick_img===2){
            img_one.src = photos[2]

    };
            if (pick_img===3){
                img_one.src = photos[3]

    };
                if (pick_img===4){
                    img_one.src = photos[4]

    };
                    if (pick_img===5){
                        img_one.src = photos[5]

    };

})
