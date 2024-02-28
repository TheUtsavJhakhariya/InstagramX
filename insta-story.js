let currentIndex = 0;
        const screens = document.querySelectorAll('.story-screen');
 
        function showScreen(index) { 
            screens.forEach(screen => screen.style.display = 'none');
            screens[index].style.display = 'flex'; 
        } 
   
        function next() {   
            currentIndex = (currentIndex + 1) % screens.length;
            showScreen(currentIndex);
        } 
  
        function prev() {
            currentIndex = (currentIndex - 1 + screens.length) % screens.length;
            showScreen(currentIndex);
        }

        setInterval(() => {
            next();
        }, 2000);

        function goBack() {
        window.location.href = 'utsavthegreatmma.html';
        }
