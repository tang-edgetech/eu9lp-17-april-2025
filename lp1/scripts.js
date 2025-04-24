jQuery(document).ready(function ($) {
    let reviewSlider;
  
    function getCoverflowEffect(mediaSet) {
        if (mediaSet.sm.matches) {
            return {
                rotate: 0,
                stretch: 0,
                depth: 1000,
                modifier: 1,
                slideShadows: false,
            };
        } else if (mediaSet.md.matches) {
            return {
                rotate: 40,
                stretch: 1200,
                depth: 500,
                modifier: 1,
                slideShadows: false,
            };
        } else if (mediaSet.lg.matches) {
            return {
                rotate: 0,
                stretch: 880,
                depth: 500,
                modifier: 1,
                slideShadows: false,
            };
        } else if (mediaSet.xl.matches) {
            return {
                rotate: 0,
                stretch: 1000,
                depth: 500,
                modifier: 1,
                slideShadows: false,
            };
        } else if (mediaSet.xl2.matches) {
            return {
                rotate: 0,
                stretch: 1080,
                depth: 500,
                modifier: 1,
                slideShadows: false,
            };
        } else if (mediaSet.xxl.matches) {
            return {
                rotate: 0,
                stretch: 1330,
                depth: 500,
                modifier: 1,
                slideShadows: false
            };
        }
    }
  
    // Define your media sets
    const mediaSet = {
        sm: window.matchMedia("(max-width: 767px)"),
        md: window.matchMedia("(min-width: 768px) and (max-width: 1199px)"),
        lg: window.matchMedia("(min-width: 1200px) and (max-width: 1439px)"),
        xl: window.matchMedia("(min-width: 1440px) and (max-width: 1559px)"),
        xl2: window.matchMedia("(min-width: 1560px) and (max-width: 1899px)"),
        xxl: window.matchMedia("(min-width: 1900px)")
    };
  
    function initSwiper() {
        const effectSettings = getCoverflowEffect(mediaSet);

        if (reviewSlider) {
            reviewSlider.destroy(true, true);
        }
        
        reviewSlider = new Swiper('#review-slider', {
            slidesPerView: "auto",
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            allowTouchMove: false,
            loop: true,
            navigation: {
                prevEl: '.review-nav-prev',
                nextEl: '.review-nav-next',
            },
            coverflowEffect: effectSettings,
        });
    }
  
    // Initial load
    initSwiper();
    $(window).on('resize', initSwiper);
  
    // Watch for any media query changes
    Object.values(mediaSet).forEach(mq => {
        mq.addEventListener('change', initSwiper);
    });

    var startNextLevel = false;
    function nextLevelCard() {
        if( $('.next-level-card').is(':visible') ) {

            if( startNextLevel == false ) {
                const $cards = $('.next-level-card .card-item');
                const totalItems = $cards.length;
                let currentIndex = 0;
              
                // Add active class to the first card-item
                $cards.eq(currentIndex).addClass('active');
              
                setInterval(function() {
                    // Remove active from the current item
                    $cards.eq(currentIndex).removeClass('active');
    
                    // Increment index like a for loop, loop back if at the end
                    currentIndex = (currentIndex + 1) % totalItems;
    
                    // Add active to the next item
                    $cards.eq(currentIndex).addClass('active');
                }, 3000);
                startNextLevel = true;
            }
        }
    }
    nextLevelCard();
    $(window).bind('scroll', nextLevelCard);
});
  