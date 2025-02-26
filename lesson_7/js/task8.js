// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

if (confirm('start')) {
    function getBunner() {
        document.write(`<div class="container__ls7-task8"><h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, vero.</h2>
                <a href="https://www.google.com.ua/" target="_blank">
                    <img src="img/Google.webp" width="400px"  alt="">
                </a></div>`)
    }
    getBunner()
}