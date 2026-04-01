

    window.onload = function () {
        hamMenu();
    }
    

    function hamMenu() {
        console.log("in toggle()");
        const hamburger = document.querySelector('.hamburger');
        const sidebar   = document.querySelector('.sidebar'  );

        hamburger.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('active');
            console.log("hamburgler");
            hamburger.style.backgroundColor = this.classList.contains('active') ? 'gray' : 'white';
              sidebar.style.left            = this.classList.contains('active') ? '44%' : '-200px';
             // hamburger.style.left            = this.classList.contains('active') ? '60px' : '10px';
            // sidebar.style.right             = this.classList.contains('active') ? '200px' : '-200px'; 
            sidebar.style.display = this.classList.contains('active') ? 'block' : 'none';
            hamburger.classList.toggle('hamburger_90');
            sidebar.style.transition = 'all 0.9s ease-in-out';
        });
    }