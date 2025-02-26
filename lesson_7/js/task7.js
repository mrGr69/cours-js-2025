// 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

if (confirm('start')) {
    function getimage() {
        let firstImage = 'img/slot1.jpg'
        let secondImage = 'img/slot2.jpg'
        let thirdImage = 'img/slot3.jpg'
        let image4Th = 'img/slot4.jpg'
        let randomNum = Math.floor(Math.random() * (4)) + 1
        let result
        switch (randomNum) {
            case 1: result = firstImage
                break;
            case 2: result = secondImage
                break;
            case 3: result = thirdImage
                break;
            case 4: result = image4Th
                break;
        }
        return '<img src="' + result + '" alt="">'
    }

    document.write(getimage())
}