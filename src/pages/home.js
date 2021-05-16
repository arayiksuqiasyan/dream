export default {
    render() {
        return `
        <div class="menu">
            <span class="menuclose"><i class="far fa-window-close"></i></span>
            <ul>
                <li><a href="src/pages/bajiner.html">բաժիններ</a></li>
                <li><a href="src/pages/hogebanner.html">Հոգեբաններ</a></li>
                <li><a href="src/pages/mermasin.html">մեր մասին</a></li>
                <li><a href="src/pages/blog.html">բլոգ</a></li>
                <li><a href="src/pages/carayutyuner.html">Ծառայություններ</a></li>
            </ul>
        </div>

        <div class="container">
            <div class="section1">
                <div class="nav">
                    <ul>
                        <li><a href="#/bajiner">բաժիններ</a></li>
                        <li><a href="#/hogebanner">Հոգեբաններ</a></li>
                        <li><a href="#/mermasin">մեր մասին</a></li>
                        <li><a href="#/blog">բլոգ</a></li>
                        <li><a href="#/carayutyuner">Ծառայություններ</a></li>
                        <li class="barsicon active menuopen"><i class="fas fa-bars"></i></li>
                    </ul>
                </div>
                <div class="pages">
                    <div class="div dream">
                        <h1>Dream</h1>
                    </div>
                    <div class="div div1">aaaaaaa</div>
                    <div class="div div2">bbb</div>
                    <div class="div div3">bbb</div>
                    <div class="div div4">bbb</div>
                    <div class="div div4">bbb</div>
                </div>
                <div class="dots">
                    <div class="dot active" data-id="0"></div>
                    <div class="dot" data-id="1"></div>
                    <div class="dot" data-id="2"></div>
                    <div class="dot" data-id="3"></div>
                    <div class="dot" data-id="4"></div>
                </div>
            </div>
        </div>
        `
    },
    bindEvents() {
        const menu = document.querySelector('.menu')
        const menuclose = document.querySelector('.menuclose')
        const menuopen = document.querySelector('.menuopen')
        const pages = document.querySelector('.pages')
        const divs = document.querySelectorAll('.div')
        const dots = document.querySelectorAll('.dot')

        const div1 = document.querySelector('.div1')
        const div2 = document.querySelector('.div2')
        menuclose.addEventListener('click', function () {
            menu.classList.remove('active')
        })

        let idx = 0
        let allowSlide = true;
        menuopen.addEventListener('click', function () {
            menu.classList.add('active')
        })
        window.addEventListener('wheel', function (e) {
            if (allowSlide) {
                if (e.deltaY === 125 && idx < divs.length - 1) {
                    idx++
                    divs[idx].style.transform = "translateY(-100%)"
                    clearDot()
                    dots[idx].classList.add('active')

                } else if (e.deltaY === -125 && idx > 0) {
                    divs[idx].style.transform = "translateY(100%)"
                    idx--
                    clearDot()
                    dots[idx].classList.add('active')
                }
                allowSlide = false;
                setTimeout(() => {
                    allowSlide = true;
                }, 500)
                console.log(idx);
            }

        })
        function clearDot() {
            dots.forEach((item) => {
                item.classList.remove('active')
            })
        }
        dots.forEach((item) => {
            item.addEventListener('click', function (e) {
                let dataid = this.getAttribute('data-id')
                divs.forEach((el) => {
                    if (!el.classList.contains("dream")) {
                        el.style.transform = "translateY(100%)"
                        clearDot()
                        divs[dataid].style.transform = "translateY(-100%)"
                    }
                })
            })
        })

        let ts;
        document.addEventListener('touchstart', function (e) {
            ts = e.touches[0].clientY;
        });

        document.addEventListener('touchend', function (e) {
            let te = e.changedTouches[0].clientY;

            if (allowSlide) {
                if (ts > te + 5) {
                    idx++
                    divs[idx].style.transform = "translateY(-100%)"
                    clearDot()
                    dots[idx].classList.add('active')

                } else if (ts < te - 5) {
                    divs[idx].style.transform = "translateY(100%)"
                    idx--
                    clearDot()
                    dots[idx].classList.add('active')
                }
                allowSlide = false;
                setTimeout(() => {
                    allowSlide = true;
                }, 500)
                console.log(idx);
            }
        });

    }
}
