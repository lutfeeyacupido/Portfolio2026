(function() {
    const toggleButton = document.getElementById('darkModeToggle');
    const toggleIconSpan = document.getElementById('toggleIcon');
    const toggleTextSpan = document.getElementById('toggleText');
    
    const getCurrentTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return 'light';
    };
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            if (toggleIconSpan) toggleIconSpan.textContent = '🟣';
            if (toggleTextSpan) toggleTextSpan.textContent = 'Purple mode';
        } else {
            document.body.classList.remove('dark');
            if (toggleIconSpan) toggleIconSpan.textContent = '💚';
            if (toggleTextSpan) toggleTextSpan.textContent = 'Green mode';
        }
        localStorage.setItem('theme', theme);
    };
    
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme);
    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark');
            toggleButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                toggleButton.style.transform = '';
            }, 150);
            
            if (isDark) {
                applyTheme('light');
            } else {
                applyTheme('dark');
            }
        });
    }
    

    const contactBtn = document.getElementById('contactMeBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            contactBtn.style.transform = 'scale(0.98)';
            setTimeout(() => {
                contactBtn.style.transform = '';
            }, 150);
            
            const connectSection = document.querySelector('.connect-section');
            if (connectSection) {
                connectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                connectSection.style.transition = 'all 0.3s';
                connectSection.style.boxShadow = '0 0 0 3px var(--accent-primary)';
                connectSection.style.transform = 'scale(1.01)';
                setTimeout(() => {
                    connectSection.style.boxShadow = '';
                    connectSection.style.transform = '';
                }, 1000);
            }
        });
    }
    
    
    const projectsBtn = document.getElementById('projectsScrollBtn');
    if (projectsBtn) {
        projectsBtn.addEventListener('click', () => {
            projectsBtn.style.transform = 'scale(0.98)';
            setTimeout(() => {
                projectsBtn.style.transform = '';
            }, 150);
            
            const projectsSection = document.querySelector('.section-title');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const projectsGrid = document.querySelector('.projects-grid');
                if (projectsGrid) {
                    projectsGrid.style.transition = 'all 0.3s';
                    projectsGrid.style.boxShadow = '0 0 0 3px var(--accent-primary)';
                    setTimeout(() => {
                        projectsGrid.style.boxShadow = '';
                    }, 800);
                }
            }
        });
    }
    

    const linkedinBtn = document.getElementById('linkedinLink');
    if (linkedinBtn) {
        linkedinBtn.addEventListener('click', (e) => {
            linkedinBtn.style.transform = 'scale(0.98)';
            setTimeout(() => {
                linkedinBtn.style.transform = '';
            }, 150);
        });
    }
    
    console.log("✨ Portfolio ready — Icon-based project cards active!");
})();