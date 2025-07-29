        function updateCountdown() {
            // تاريخ الهدف: 15 أغسطس 2025 الساعة 12:00 مساءً
            const targetDate = new Date('August 15, 2025 12:00:00 GMT+0300');
            const now = new Date();
            const diff = targetDate - now;
            
            // الحسابات
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            // تحديث القيم في الصفحة
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        // تحديث العداد كل ثانية
        setInterval(updateCountdown, 1000);
        
        // تحديث أولي
        updateCountdown();

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
          });
        });
      });

      // Form submission handling
      document
        .getElementById('registrationForm')
        .addEventListener('submit', function (e) {
          e.preventDefault();

          // Get form values
          const fullName = document.getElementById('fullName').value;
          const email = document.getElementById('email').value;

          // Show success message
          alert(
            `شكرًا ${fullName}!\nتم تسجيلك بنجاح في السحب.\nستتلقى تأكيدًا على بريدك: ${email}`
          );

          // Reset form
          this.reset();

          // Scroll to top of form
          document.getElementById('registration').scrollIntoView();
        });
            // Add animation to step cards when they come into view
    document.addEventListener('DOMContentLoaded', function() {
        const stepCards = document.querySelectorAll('.step-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        stepCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    });