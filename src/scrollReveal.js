// Configuração global do ScrollReveal
if (typeof window !== 'undefined') {
  const ScrollReveal = window.ScrollReveal || null;
  
  if (ScrollReveal) {
    // Configuração padrão
    const sr = ScrollReveal({
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
      mobile: true,
      scale: 0.9
    });

    // Função para inicializar animações comuns
    window.initScrollReveal = () => {
      // Animações para elementos comuns
      sr.reveal('.welcome-section', { 
        delay: 100,
        distance: '50px'
      });
      
      sr.reveal('.stats-card', { 
        delay: 200, 
        interval: 100,
        origin: 'left'
      });
      
      sr.reveal('.features-section', { 
        delay: 300,
        distance: '40px'
      });
      
      sr.reveal('.feature-card', { 
        delay: 400, 
        interval: 150,
        origin: 'bottom'
      });

      sr.reveal('.login-card', {
        delay: 200,
        distance: '60px',
        scale: 0.8
      });
    };

    // Auto-inicializar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', window.initScrollReveal);
    } else {
      window.initScrollReveal();
    }
  }
}

export default null;