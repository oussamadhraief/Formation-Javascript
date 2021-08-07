const mq1 = window.matchMedia("(max-width: 570px)");
const banner = document.querySelector(".banner");
const header = document.querySelector("#nav");
const sectionOne = document.querySelector("#products");
const anchors = document.querySelectorAll("#nav a");
const searchTerm = document.querySelector(".searchTerm");
const webname = document.querySelector("#webname");
const searchBorder = document.querySelector(".search");
const searchIcon = document.querySelector("#search-icon");

let randomize = Math.floor((Math.random() * 2) + 1);

if (mq1.matches == false) {
    if (randomize == 1) {
        banner.innerHTML = `<video id="banner" width="100%" height="auto" loop muted autoplay>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/WEBM">
    </video>`;


        const sectionOneOptions = {
            rootMargin: "100px 0px 0px 0px"
        };

        const sectionOneObserver = new IntersectionObserver(function (
                entries,
                sectionOneObserver
            ) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        header.classList.remove("nav-scrolled");
                        anchors.forEach(item => item.classList.add("nav-anchors-unscrolled"));
                        searchTerm.classList.add("nav-input-unscrolled");
                        webname.classList.remove("webname");
                        webname.classList.add("webname-unscrolled");
                        searchBorder.classList.add("search-unscrolled");
                        searchIcon.src = "search-unscrolled.png";
                    } else {
                        header.classList.add("nav-scrolled");
                        anchors.forEach(item => item.classList.remove("nav-anchors-unscrolled"));
                        searchTerm.classList.remove("nav-input-unscrolled");
                        webname.classList.add("webname");
                        webname.classList.remove("webname-unscrolled");
                        searchBorder.classList.remove("search-unscrolled");
                        searchIcon.src = "search.png";
                    }
                });
            },
            sectionOneOptions);

        sectionOneObserver.observe(sectionOne);

    } else {
        header.classList.add("nav-scrolled");
        header.style.border = "none";
        header.style.boxShadow = "1px 1px 5px black";
        banner.innerHTML = ` 
    <div id="slider">
    
		
            
			<img src="https://www.scoop.com.tn/modules/sphomeslider/images/c3e8e4b0ad02f2470a20317442c308b549d37633_Asus%20(1).jpg" class="animate__animated animate__fadeIn">
			
            
		
        
	</div>`;
        document.querySelector("#slider").style.height = document.querySelector("#slider img").offsetHeight.toString() + "px";
        document.querySelector("#slider img").style.marginTop = header.offsetHeight.toString() + "px";
        slider2();

        function slider1() {
            globalThis.oneTimeout = setTimeout(() => {
                banner.innerHTML = ` 
    <div id="slider">
    
		
            
			<img src="https://www.scoop.com.tn/modules/sphomeslider/images/c3e8e4b0ad02f2470a20317442c308b549d37633_Asus%20(1).jpg" class="animate__animated animate__fadeIn">
			
            
		
        
	</div>`;


                document.querySelector("#slider img").style.marginTop = header.offsetHeight.toString() + "px";
                slider2();
            }, 3000);
        }



        function slider2() {
            globalThis.twoTimeout = setTimeout(() => {
                banner.innerHTML = ` 
    <div id="slider">
    
		
            
			<img src="https://www.scoop.com.tn/modules/sphomeslider/images/54868396aa7ca3b6f246c8e234291f6d49878f52_ps5.jpg" class="animate__animated animate__fadeIn">
			
            
		
        
	</div>`;
                document.querySelector("#slider img").style.marginTop = header.offsetHeight.toString() + "px";

                slider3();

            }, 3000);
        }

        function slider3() {
            globalThis.threeTimeout = setTimeout(() => {
                banner.innerHTML = ` 
        <div id="slider">
        
            
                
                <img src="https://www.scoop.com.tn/modules/sphomeslider/images/6f86d90fe53f580927195abf48c386264cbe69f2_VivoBook-15-X571.jpg" class="animate__animated animate__fadeIn">
                
                
            
            
        </div>`;
                document.querySelector("#slider img").style.marginTop = header.offsetHeight.toString() + "px";

                slider4();
            }, 3000);

        }

        function slider4() {
            globalThis.fourTimeout = setTimeout(() => {
                banner.innerHTML = ` 
        <div id="slider">
        
            
                
                <img src="https://www.scoop.com.tn/modules/sphomeslider/images/26ae80b9cdad9996e1c8625abd021c70ef843804_ThinkPad-e15%20(1).jpg" class="animate__animated animate__fadeIn">
                
                
            
            
        </div>`;
                document.querySelector("#slider img").style.marginTop = header.offsetHeight.toString() + "px";

                slider5();
            }, 3000);

        }

        function slider5() {
            globalThis.fiveTimeout = setTimeout(() => {
                banner.innerHTML = ` 
        <div id="slider">
        
            
                
                <img src="https://www.scoop.com.tn/modules/sphomeslider/images/56e32bb5499750aaf76651ffe6c0bb6b571f5571_Nintendo-switch.jpg" class="animate__animated animate__fadeIn">
                
                
            
            
        </div>`;
                document.querySelector("#slider img").style.marginTop = header.offsetHeight.toString() + "px";

                slider1();
            }, 3000);

        }

    }
} else {
    header.classList.add("nav-scrolled");
    header.style.border = "none";
    header.style.boxShadow = "1px 1px 5px black";
    banner.remove();
    header.style.top = "0px";
    document.querySelector("#sort-menu-area").style.marginTop = (header.offsetHeight + 10).toString() + "px";
}