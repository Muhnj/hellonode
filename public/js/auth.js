document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');
    
    // Redirect logic based on role
    if (authToken && userRole) {
        const currentPage = window.location.pathname.split('/').pop();
        
        // If on login page but already logged in, redirect to appropriate dashboard
        if (currentPage === 'login.html') {
            switch(userRole) {
                case 'manager':
                    window.location.href = 'manager-dashboard.html';
                    break;
                case 'agent':
                    window.location.href = 'agent-dashboard.html';
                    break;
                case 'director':
                    window.location.href = 'director-dashboard.html';
                    break;
            }
        }
        // If on wrong dashboard for role, redirect to correct one
        else if (
            (userRole === 'manager' && currentPage !== 'manager-dashboard.html') ||
            (userRole === 'agent' && currentPage !== 'agent-dashboard.html') ||
            (userRole === 'director' && currentPage !== 'director-dashboard.html')
        ) {
            switch(userRole) {
                case 'manager':
                    window.location.href = 'manager-dashboard.html';
                    break;
                case 'agent':
                    window.location.href = 'agent-dashboard.html';
                    break;
                case 'director':
                    window.location.href = 'director-dashboard.html';
                    break;
            }
        }
    } 
    // If not logged in but trying to access dashboard, redirect to login
    else if (!authToken && !['login.html', ''].includes(currentPage)) {
        window.location.href = 'login.html';
    }
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const branch = document.getElementById('branch').value;
            
            // Simulate authentication (in real app, this would be an API call)
            if (username && password) {
                let role;
                
                // Simple role determination for demo purposes
                if (username.toLowerCase() === 'manager') {
                    role = 'manager';
                } else if (username.toLowerCase() === 'agent') {
                    role = 'agent';
                } else if (username.toLowerCase() === 'director') {
                    role = 'director';
                } else {
                    alert('Invalid credentials');
                    return;
                }
                
                // Store auth data
                localStorage.setItem('authToken', 'simulated-token');
                localStorage.setItem('userRole', role);
                localStorage.setItem('branch', branch);
                localStorage.setItem('username', username);
                
                // Redirect based on role
                switch(role) {
                    case 'manager':
                        window.location.href = 'manager-dashboard.html';
                        break;
                    case 'agent':
                        window.location.href = 'agent-dashboard.html';
                        break;
                    case 'director':
                        window.location.href = 'director-dashboard.html';
                        break;
                }
            } else {
                alert('Please enter both username and password');
            }
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('branch');
            localStorage.removeItem('username');
            window.location.href = 'login.html';
        });
    }
    
    // Set branch name in dashboard headers
    const branchNameElement = document.getElementById('branchName');
    if (branchNameElement) {
        const branch = localStorage.getItem('branch');
        if (branch) {
            branchNameElement.textContent = branch;
        }
    }
    
    // Navigation between sections
    const navItems = document.querySelectorAll('nav li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all content sections
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => section.classList.remove('active'));
            
            // Show the corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Tab controls
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabContainer = this.closest('.tab-controls');
            
            // Remove active class from all buttons in this container
            tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active to clicked button
            this.classList.add('active');
            
            // Hide all tab contents in this container
            const tabContentContainer = tabContainer.nextElementSibling || 
                                      tabContainer.parentElement.querySelector('.tab-content');
            const tabContents = tabContentContainer.parentElement.querySelectorAll('.tab-content');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the corresponding content
            const tabId = this.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
});