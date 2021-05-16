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
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/hogebanner">Հոգեբաններ</a></li>
                    <li><a href="#/mermasin">մեր մասին</a></li>
                    <li><a href="#/blog">բլոգ</a></li>
                    <li><a href="#/carayutyuner">Ծառայություններ</a></li>
                    <li class="barsicon active menuopen"><i class="fas fa-bars"></i></li>
                </ul>
            </div>
            <div class="pages">
                <div class="div dream">
                    <h1>Bajinner</h1>
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
    bindEvents() { }
}