button = document.getElementById("btn")
img_one = document.getElementById("img_one")
img_two = document.getElementById("img_two")


button.addEventListener('click',()=>{
    console.log("clicked")
    const photos = [
        'https://image.flaticon.com/icons/svg/220/220724.svg',
        'https://image.flaticon.com/icons/svg/220/220723.svg',
        'https://image.flaticon.com/icons/svg/220/220725.svg',
        'https://image.flaticon.com/icons/svg/220/220726.svg',
        'https://image.flaticon.com/icons/svg/220/220728.svg',
        'https://image.flaticon.com/icons/svg/220/220727.svg'
    ];
    console.log(photos)
    const random_num = Math.floor(Math.random() * 6);
    const random_two = Math.floor(Math.random() * 6);
    console.log(random_num)

    if (random_num===0){
        img_one.src = photos[0]
        img_two.src = photos[5]
        console.log(photos[0])


    };
        if (random_num===1){
            img_one.src = photos[1]


    };
            if (random_num===2){
                img_one.src = photos[2]

    };
                if (random_num===3){
                    img_one.src = photos[3]

    };
                    if (random_num===4){
                        img_one.src = photos[4]

    };
                    if (random_num===5){
                        img_one.src = photos[5]

    };


//                    ===========================================
//                    ===========================
//                    ========================
//                    sadsxjxnsdjmd
            if (random_two===1){
            img_two.src = photos[1]


    };
            if (random_two===2){
                img_two.src = photos[2]

    };
                if (random_two===3){
                    img_two.src = photos[3]

    };
                    if (random_two===4){
                        img_two.src = photos[4]

    };
                    if (random_two===5){
                        img_two.src = photos[5]

    };

})
