// ==UserScript==
// @name         ISMIS Revamp Bundle
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Full 100% Fidelity Bundle of all ISMIS Modernization Scripts
// @author       Deion & Antigravity
// @match        *://ismis.usc.edu.ph/*
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    const path = window.location.pathname.toLowerCase();
    console.log("[ISMIS Bundle] Path detected:", path);
// --- MODULE: LOGIN (v1.1) ---
if (path.includes('login') || path === '/') {
    console.log("[ISMIS Bundle] Initializing Login Module...");
(function () {
    'use strict';

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Define the Modern CSS
    const modernCSS = `
        :root {
            --primary: #10B981; /* Modern Green */
            --primary-dark: #059669;
            --usc-gold: #FCD34D;
            --glass-bg: rgba(255, 255, 255, 0.75);
            --glass-border: rgba(255, 255, 255, 0.4);
            --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
            --text-main: #1F2937;
            --text-muted: #6B7280;
            --bg-gradient: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        body.login {
            background: var(--bg-gradient) !important;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', sans-serif !important;
            margin: 0;
            padding: 0;
        }

        /* Hide the old background slideshow if it interferes */
        .backstretch {
            display: none !important;
        }

        /* Container Restructuring */
        body.login > .col-lg-12 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Main Login Card (Glassmorphism) */
        .col-lg-3.col-md-3 {
            background: var(--glass-bg) !important;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            border-radius: 20px !important;
            box-shadow: var(--glass-shadow);
            padding: 40px !important;
            width: 100%;
            max-width: 420px;
            float: none !important;
            margin: 20px auto !important;
            color: var(--text-main) !important;
        }

        /* Hide empty columns and spacers */
        .col-lg-2, .col-lg-12.visible-xs {
            display: none !important;
        }

        /* Logo Styling */
        .logo {
            margin-bottom: 30px !important;
            margin-top: 0 !important;
            padding: 0 !important;
            text-align: center;
        }
        .logo img {
            height: 80px !important; /* Adjust size */
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }

        /* Typography */
        h3.semi-bold {
            font-weight: 700 !important;
            font-size: 24px !important;
            text-align: center;
            margin-bottom: 10px !important;
            color: var(--text-main);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        h3.semi-bold i {
            font-size: 32px;
            color: var(--primary);
            margin-right: 0 !important;
        }

        hr {
            border-top: 1px solid rgba(0,0,0,0.1) !important;
            margin: 20px 0 !important;
        }

        /* Form Controls */
        .form-group {
            margin-bottom: 20px !important;
        }

        .input-group {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            border: 1px solid #E5E7EB;
            transition: all 0.3s ease;
            background: white;
        }

        .input-group:focus-within {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
        }

        .input-group-addon {
            background: white !important;
            border: none !important;
            color: var(--text-muted) !important;
            padding-left: 15px !important;
        }

        .form-control {
            border: none !important;
            height: 45px !important;
            padding-left: 10px !important;
            font-size: 15px !important;
            box-shadow: none !important;
            background: transparent !important;
            color: var(--text-main) !important;
        }

        /* Placeholder Color */
        ::-webkit-input-placeholder { color: #9CA3AF !important; }
        ::-moz-placeholder { color: #9CA3AF !important; }

        /* Login Button */
        .btn.green {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%) !important;
            border: none !important;
            border-radius: 12px !important;
            width: 100%;
            height: 45px;
            font-size: 16px !important;
            font-weight: 600 !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 10px;
            transition: transform 0.2s, box-shadow 0.2s !important;
            float: none !important; /* Fix pull-right */
        }

        .btn.green:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(16, 185, 129, 0.3);
        }

        /* Forgot Password */
        .forget-password {
            text-align: center;
            margin-top: 20px !important;
        }

        .forget-password h4 {
            font-size: 14px !important;
            color: var(--text-muted);
            margin-bottom: 5px;
        }

        .forget-password p {
            font-size: 13px !important;
            color: var(--text-muted);
        }

        .forget-password a {
            color: var(--primary) !important;
            font-weight: 600;
            text-decoration: none;
        }
        .forget-password a:hover {
            text-decoration: underline;
        }

        /* Copyright */
        .copyright {
            text-align: center;
            margin: 30px 0 0 0 !important;
            padding: 0 !important;
            color: rgba(255,255,255,0.8) !important;
            text-shadow: 0 1px 2px rgba(0,0,0,0.1);
            position: fixed;
            bottom: 20px;
            width: 100%;
            left: 0;
            font-size: 12px !important;
        }


        /* Secondary Links (Centering via Flexbox) */
        .col-lg-5.col-md-7 {
            float: none !important;
            width: 100% !important;
            max-width: 1100px;
            display: flex !important;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
            margin-top: 50px !important;
            padding: 0 20px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Reset the anchor tag wrappers to behave well in flex */
        .col-lg-5 a {
            display: block;
            text-decoration: none;
            width: calc(33.33% - 16px);
            min-width: 280px;
        }

        /* Card Styling */
        .col-lg-5 .well {
            background: rgba(255, 255, 255, 0.9) !important;
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.6);
            border-radius: 20px !important;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
            min-height: 220px;
            padding: 30px 20px !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0 !important;
        }

        .col-lg-5 .well:hover {
            transform: translateY(-8px);
            background: #ffffff !important;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
            border-color: var(--primary);
        }

        .col-lg-5 .well .row {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin: 0 !important;
            height: 100%;
            justify-content: center;
        }

        .col-xs-2.text-center {
            width: auto !important;
            padding: 0 !important;
            margin-bottom: 20px;
        }

        .col-lg-5 .well i {
            font-size: 2.5rem !important;
            color: var(--primary);
            padding: 0 !important;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            background: rgba(16, 185, 129, 0.1);
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .col-lg-5 .well:hover i {
            background: var(--primary);
            color: white;
            transform: rotate(-10deg) scale(1.1);
        }

        .col-xs-10.section-box {
            width: 100% !important;
            padding: 0 !important;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .col-lg-5 .section-box h2 {
            font-size: 1.1rem !important;
            font-weight: 700 !important;
            margin: 0 0 12px 0 !important;
            color: var(--text-main);
            line-height: 1.3;
        }

        .col-lg-5 .section-box p {
            font-size: 0.85rem !important;
            color: var(--text-muted);
            margin: 0;
            line-height: 1.5;
            opacity: 0.9;
            max-width: 90%;
        }

        @media (max-width: 768px) {
            .col-lg-5 a {
                width: 100%;
            }
        }

        /* Remember Me UI */
        .remember-me-container {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            margin-bottom: 20px;
            font-size: 14px;
            color: var(--text-muted);
            cursor: pointer;
            user-select: none;
            transition: color 0.2s;
        }
        .remember-me-container:hover {
            color: var(--text-main);
        }
        .remember-me-container input {
            cursor: pointer;
            width: 16px;
            height: 16px;
            margin: 0;
            accent-color: var(--primary);
        }
        .remember-me-container label {
            cursor: pointer;
            margin: 0;
            line-height: normal;
            font-weight: 500;
        }

    `;

    // Inject CSS
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = modernCSS;
    document.head.appendChild(style);

    // DOM Adjustments
    function adjustLayout() {
        // Move Logo inside the Glass Card if it's outside, or Ensure it's centered above
        const logo = document.querySelector('.logo');
        const mainContainer = document.querySelector('body.login > .col-lg-12');

        // Ensure Logo is the first child of the main container
        if (logo && mainContainer) {
            mainContainer.insertBefore(logo, mainContainer.firstChild);
        }

        const btn = document.querySelector('button.btn.green');
        if (btn) {
            btn.innerHTML = 'Sign In';

            // --- Remember Me Feature ---
            const formActions = document.querySelector('.form-actions');
            if (formActions && !document.getElementById('remember-me-wrap')) {
                const rememberWrap = document.createElement('div');
                rememberWrap.id = 'remember-me-wrap';
                rememberWrap.className = 'remember-me-container';
                rememberWrap.innerHTML = `
                    <input type="checkbox" id="remember-me-checkbox">
                    <label for="remember-me-checkbox">Remember Me</label>
                `;
                formActions.parentNode.insertBefore(rememberWrap, formActions);

                const userField = document.getElementById('Username');
                const passField = document.getElementById('Password');
                const rememberBox = document.getElementById('remember-me-checkbox');

                // Load saved credentials
                const savedUser = localStorage.getItem('usc_login_user');
                const savedPass = localStorage.getItem('usc_login_pass');
                const justLoggedOut = sessionStorage.getItem('usc_just_logged_out');

                if (savedUser && savedPass) {
                    userField.value = savedUser;
                    passField.value = savedPass;
                    rememberBox.checked = true;

                    // If we just logged out, don't auto-login again
                    if (justLoggedOut) {
                        console.log("Logged out recently. Skipping auto-login.");
                        sessionStorage.removeItem('usc_just_logged_out');
                        return;
                    }

                    // --- Auto-Login Logic ---
                    const statusText = document.createElement('div');
                    statusText.style.cssText = 'font-size: 12px; color: var(--primary); margin-bottom: 15px; text-align: center; font-weight: 500;';
                    statusText.innerText = 'Signing you in automatically...';
                    rememberWrap.parentNode.insertBefore(statusText, rememberWrap);

                    setTimeout(() => {
                        const form = document.getElementById('loginForm');
                        if (form) {
                            console.log("Auto-logging in...");
                            form.submit();
                        }
                    }, 600); // 600ms delay to let user see the page
                }

                // Save on submit
                const form = document.getElementById('loginForm');
                if (form) {
                    form.addEventListener('submit', () => {
                        if (rememberBox.checked) {
                            localStorage.setItem('usc_login_user', userField.value);
                            localStorage.setItem('usc_login_pass', passField.value);
                        } else {
                            localStorage.removeItem('usc_login_user');
                            localStorage.removeItem('usc_login_pass');
                        }
                    });
                }
            }
        }
    }

    // Run adjustments
    window.addEventListener('load', adjustLayout);
    if (document.readyState !== 'loading') {
        adjustLayout();
    } else {
        document.addEventListener('DOMContentLoaded', adjustLayout);
    }

})();
}
// --- MODULE: PAGES & GLOBAL (v3.5) ---
if (!path.includes('login') && path !== '/') {
    console.log("[ISMIS Bundle] Initializing Pages Module...");
(function () {
    'use strict';

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const modernCSS = `
        :root {
            --primary: #10B981;
            --primary-dark: #059669;
            --secondary: #3B82F6;
            --usc-gold: #FCD34D;
            --glass-bg: rgba(255, 255, 255, 0.95);
            --glass-border: rgba(255, 255, 255, 0.6);
            --text-main: #1F2937;
            --text-muted: #6B7280;
            --bg-gradient: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        body {
            font-family: 'Inter', sans-serif !important;
            background: var(--bg-gradient) !important;
            min-height: 100vh;
            color: var(--text-main);
            padding-top: 80px !important;
            overflow-x: hidden;
            letter-spacing: -0.011em;
        }

        /* Force Inter everywhere */
        h1, h2, h3, h4, h5, h6, b, strong, .caption-subject, label {
            font-family: 'Inter', sans-serif !important;
            letter-spacing: -0.02em;
        }

        /* --- Layout & Containers --- */
        .page-container, .page-content, .container, .container-fluid {
            background: transparent !important;
        }

        .page-content, .wrapper {
            max-width: 1400px !important;
            margin-left: 100px !important;
            width: calc(100% - 130px) !important;
            transition: none !important;
            padding: 10px 20px 20px 20px !important;
        }

        .header, .page-header, .page-header-top, .page-header-menu, .page-head, .hor-menu, .footer, .page-footer-inner {
            display: none !important;
        }

        /* --- Modern Top Bar --- */
        #modern-topbar {
            position: fixed;
            top: 0;
            left: 80px;
            right: 0;
            height: 60px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 30px;
            transition: left 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .topbar-logo {
            margin-right: auto;
            display: flex;
            align-items: center;
            cursor: pointer;
            text-decoration: none !important;
            transition: opacity 0.2s;
        }
        .topbar-logo:hover {
            opacity: 0.8;
        }
        .topbar-logo img {
            height: 28px;
        }

        /* Notification & Blocking Styles */
        .topbar-icon-btn {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background 0.2s;
            color: var(--text-muted);
            position: relative;
        }
        .topbar-icon-btn:hover, .topbar-icon-btn.active {
            background: rgba(16, 185, 129, 0.1);
            color: var(--primary);
        }
        .topbar-icon-btn i { font-size: 1.2rem; }

        .modern-badge {
            position: absolute;
            top: 6px;
            right: 6px;
            background: #EF4444;
            color: white;
            font-size: 0.6rem;
            font-weight: 700;
            height: 16px;
            min-width: 16px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid white;
            padding: 0 3px;
        }

        /* Shared Dropdown Styles */
        .modern-dropdown {
            position: fixed;
            top: 70px;
            right: 30px;
            width: 320px;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 16px;
            box-shadow: 0 20px 40px -5px rgba(0,0,0,0.1);
            z-index: 10001;
            padding: 10px 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            max-height: 400px;
            overflow-y: auto;
        }
        .modern-dropdown.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .modern-dropdown .dropdown-header {
            padding: 10px 20px;
            border-bottom: 1px solid #f1f5f9;
            font-size: 0.8rem;
            color: var(--text-muted);
            display: flex;
            justify-content: space-between;
        }
        .modern-dropdown .dropdown-item {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            border-bottom: 1px solid #f8fafc;
            color: var(--text-main);
            font-size: 0.85rem;
            text-decoration: none;
            transition: background 0.1s;
            cursor: pointer;
        }
        .modern-dropdown .dropdown-item i { margin-right: 12px; width: 16px; text-align: center; color: var(--text-muted); }
        .modern-dropdown .dropdown-item:hover { background: #f8fafc; color: var(--primary-dark); }
        .modern-dropdown .dropdown-item:hover i { color: var(--primary); }
        .modern-dropdown .dropdown-empty { padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.85rem; }

        /* Dropdown Footer */
        .dropdown-footer {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            padding: 12px 20px;
            background: #f8fafc;
            border-top: 1px solid #f1f5f9;
            color: var(--primary-dark) !important;
            font-size: 0.8rem;
            font-weight: 600;
            text-decoration: none !important;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            transition: background 0.2s;
            cursor: pointer;
        }
        .dropdown-footer:hover {
            background: #f1f5f9;
            color: var(--primary) !important;
        }

        .topbar-user {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 6px 14px;
            border-radius: 12px;
            transition: background 0.2s;
            cursor: pointer;
        }
        .topbar-user:hover, .topbar-user.active {
            background: rgba(0,0,0,0.03);
        }

        .topbar-user img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid var(--primary);
            object-fit: cover;
        }

        .topbar-user-info {
            display: flex;
            flex-direction: column;
            text-align: right;
        }

        .topbar-user-id {
            font-weight: 700;
            color: var(--text-main);
            font-size: 0.85rem;
        }

        .topbar-user-role {
            font-size: 0.65rem;
            color: var(--text-muted);
            font-weight: 600;
            text-transform: uppercase;
        }

        /* --- Modern Sidebar --- */
        #modern-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 80px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(25px);
            border-right: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 4px 0 24px rgba(0, 0, 0, 0.04);
            z-index: 10000;
            transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            overflow-x: hidden;
            overflow-y: hidden;
            display: flex;
            flex-direction: column;
            padding: 0;
        }

        #modern-sidebar:hover {
            width: 280px;
            overflow-y: auto;
        }

        #modern-sidebar::-webkit-scrollbar { width: 5px; }
        #modern-sidebar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }

        .sidebar-logo {
            text-align: center;
            padding: 25px 0 15px 0; /* Adjusted to fix cutting */
            margin-bottom: 10px;
            height: auto;
            min-height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-decoration: none !important;
        }

        .sidebar-logo img {
            height: 48px; /* Slightly larger, better fit */
            width: auto;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .sidebar-logo:hover img {
            transform: scale(1.1) rotate(-5deg);
        }

        /* Nav Items */
        .modern-nav-container {
            list-style: none !important;
            padding: 10px 0;
            margin: 0;
            width: 280px;
        }

        .modern-nav-item {
            display: flex;
            align-items: center;
            height: 48px;
            padding: 0 26px;
            color: #4B5563;
            text-decoration: none !important;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border-left: 4px solid transparent;
            white-space: nowrap;
        }

        .modern-nav-item:hover, .modern-nav-item.active {
            background: rgba(16, 185, 129, 0.06);
            color: var(--primary-dark);
            border-left-color: var(--primary);
        }

        .modern-nav-item i.nav-icon {
            font-size: 1.2rem;
            min-width: 28px;
            text-align: center;
            color: var(--primary);
            margin-right: 25px;
            opacity: 0.9;
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.2s;
        }

        .modern-nav-item:hover i.nav-icon {
            transform: scale(1.2) rotate(-5deg);
            color: var(--primary-dark);
        }

        .modern-nav-text {
            font-weight: 500;
            font-size: 0.85rem;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s;
        }

        .chevron {
            margin-left: auto;
            font-size: 0.75rem;
            opacity: 0;
            visibility: hidden;
            transition: transform 0.3s, opacity 0.3s;
        }

        #modern-sidebar:hover .modern-nav-text,
        #modern-sidebar:hover .chevron {
            opacity: 1;
            visibility: visible;
        }

        .modern-nav-item.open .chevron { transform: rotate(90deg); }

        .modern-submenu {
            list-style: none !important;
            padding: 0;
            margin: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background: #fcfcfc;
        }

        .modern-submenu.open { max-height: 2000px; }

        .modern-submenu-item {
            display: block;
            padding: 10px 20px 10px 80px;
            color: var(--text-muted);
            text-decoration: none !important;
            font-size: 0.8rem;
            font-weight: 500;
            transition: all 0.2s;
        }

        .modern-submenu-item:hover {
            color: var(--primary-dark);
            background: rgba(16, 185, 129, 0.05);
        }

        /* Sidebar Footer */
        .sidebar-footer {
            margin-top: auto;
            padding: 15px 0;
            background: rgba(0,0,0,0.01);
            width: 280px;
        }

        /* --- Extended UI Components --- */
        .panel, .portlet, .card, .well {
            background: white !important;
            border: 1px solid rgba(0,0,0,0.06) !important;
            border-radius: 14px !important;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04) !important;
            margin-bottom: 24px !important;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .panel:hover, .portlet:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.08) !important;
        }

        .panel-heading, .portlet-title {
            background: #ffffff !important;
            border-bottom: 1px solid #f3f4f6 !important;
            padding: 16px 20px !important;
        }

        .panel-title, .caption-subject {
            font-weight: 700 !important;
            color: #111827 !important;
            font-size: 0.95rem !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Modern Tabs */
        .nav-tabs {
            border-bottom: 2px solid #f3f4f6 !important;
            margin-bottom: 20px !important;
        }
        .nav-tabs > li > a {
            border: none !important;
            background: transparent !important;
            color: var(--text-muted) !important;
            font-weight: 600 !important;
            padding: 12px 24px !important;
            border-radius: 0 !important;
            transition: color 0.2s;
            position: relative;
        }
        .nav-tabs > li.active > a, .nav-tabs > li > a:hover {
            color: var(--primary-dark) !important;
        }
        .nav-tabs > li.active > a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary);
        }

        /* Tables */
        .table { width: 100% !important; border-radius: 12px !important; border: 1px solid #f3f4f6 !important; overflow: hidden; }
        .table thead th { background: #f9fafb !important; color: #374151 !important; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; padding: 15px 20px !important; border: none !important; }
        .table tbody td { padding: 16px 20px !important; border-top: 1px solid #f3f4f6 !important; font-size: 1rem; font-weight: 500; }

        /* Inputs & Forms */
        .form-control {
            border: 1px solid #e1e8ed !important;
            border-radius: 10px !important;
            padding: 10px 16px !important;
            font-size: 0.9rem !important;
            transition: border-color 0.2s, box-shadow 0.2s !important;
        }
        .form-control:focus {
            border-color: var(--primary) !important;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
            outline: none !important;
        }

        /* Modals */
        .modal-content {
            border-radius: 20px !important;
            border: none !important;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25) !important;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.98) !important;
            backdrop-filter: blur(10px);
        }
        .modal-header { background: #ffffff !important; border-bottom: 1px solid #f3f4f6 !important; padding: 20px 25px !important; }
        .modal-title { font-weight: 800 !important; color: #111827 !important; }

        /* Buttons Fix */
        .btn { padding: 8px 18px !important; font-weight: 600 !important; border-radius: 10px !important; transition: transform 0.1s, filter 0.2s !important; }
        .btn:active { transform: scale(0.96); }

        /* --- Footer --- */
        .page-prefooter {
            background: #111827 !important; /* Dark equivalent to text-main */
            color: #9CA3AF !important;
            padding: 30px 40px !important;
            margin-left: 80px !important; /* clear sidebar */
            font-size: 0.85rem !important;
            border-top: 1px solid rgba(255,255,255,0.05);
            position: relative;
            z-index: 1;
            clear: both !important;
        }

        .page-prefooter h2 {
            color: white !important;
            font-size: 1rem !important;
            font-weight: 700 !important;
            margin-bottom: 15px !important;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .page-prefooter a {
            color: #9CA3AF !important;
            text-decoration: none !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            display: inline-block;
        }

        .page-prefooter a:hover {
            color: var(--primary) !important;
            transform: translateX(5px);
            text-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }

        .page-prefooter .footer-block {
            margin-bottom: 20px;
        }

        .page-prefooter p, .page-prefooter address {
            line-height: 1.6 !important;
            opacity: 0.8;
            margin-bottom: 10px !important;
        }

        /* Icons in footer */
        .page-prefooter i {
            width: 20px;
            text-align: center;
            margin-right: 5px;
            color: var(--secondary);
            transition: transform 0.3s;
        }
        .page-prefooter a:hover i {
            transform: scale(1.2);
            color: var(--usc-gold);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .page-prefooter { margin-left: 0 !important; padding: 20px !important; }
            .page-content, .wrapper { margin-left: 0 !important; width: 100% !important; }
            #modern-sidebar { width: 0; }
            .page-footer { margin-left: 0 !important; text-align: center !important; }
        }

        /* Bottom Footer */
        .page-footer {
            background: #0f172a !important;
            color: #6B7280 !important;
            padding: 20px 40px !important;
            margin-left: 80px !important;
            font-size: 0.75rem !important;
            border-top: 1px solid rgba(255,255,255,0.03) !important;
            text-align: left !important;
            position: relative;
            z-index: 1;
            clear: both !important;
        }

        .page-content {
            min-height: auto !important; /* Override Metronic dynamic height */
        }
        .page-footer .container-fluid { padding: 0 !important; }

        /* --- Home Page / Dashboard Specifics --- */
        #modern-dashboard {
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding: 10px 0;
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Hero Greeting */
        .modern-hero {
            background: linear-gradient(135deg, var(--primary) 0%, #1d4ed8 100%);
            border-radius: 24px;
            padding: 40px;
            color: white;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .modern-hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 300px;
            height: 300px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            filter: blur(50px);
        }

        .modern-hero h1 {
            font-size: 2.5rem !important;
            font-weight: 800 !important;
            margin: 0 !important;
            color: white !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .hero-subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
            margin-top: 10px;
            font-weight: 400;
        }

        .hero-date {
            position: absolute;
            top: 40px;
            right: 40px;
            text-align: right;
            opacity: 0.8;
            font-weight: 600;
            font-size: 0.9rem;
        }

        /* Dashboard Grid */
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .dash-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 20px;
            padding: 25px;
            display: flex;
            align-items: center;
            gap: 20px;
            text-decoration: none !important;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            overflow: hidden;
        }

        .dash-card:hover {
            transform: translateY(-5px);
            background: white;
            box-shadow: 0 15px 30px rgba(0,0,0,0.08);
            border-color: var(--primary);
        }

        .dash-card-icon {
            width: 54px;
            height: 54px;
            background: rgba(16, 185, 129, 0.1);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            font-size: 1.5rem;
            transition: all 0.3s;
        }

        .dash-card:hover .dash-card-icon {
            background: var(--primary);
            color: white;
            transform: scale(1.1);
        }

        .dash-card-info h3 {
            margin: 0 !important;
            font-size: 1.1rem !important;
            font-weight: 700 !important;
            color: var(--text-main) !important;
        }

        .dash-card-info p {
            margin: 5px 0 0 0 !important;
            font-size: 0.85rem !important;
            color: var(--text-muted) !important;
        }

        /* News Cards */
        .news-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .news-header h2 {
            margin: 0 !important;
            font-size: 1.5rem !important;
            font-weight: 800 !important;
            color: var(--text-main) !important;
        }

        .news-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .news-card {
            background: white !important;
            border-radius: 20px !important;
            padding: 30px !important;
            border: 1px solid rgba(0,0,0,0.03) !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.02) !important;
            display: flex;
            gap: 25px;
            transition: all 0.3s;
        }

        .news-card:hover {
            box-shadow: 0 12px 24px rgba(0,0,0,0.06) !important;
        }

        .news-author-img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid #f1f5f9;
            object-fit: cover;
            flex-shrink: 0;
        }

        .news-content-wrapper {
            flex-grow: 1;
        }

        .news-meta {
            margin-bottom: 12px;
        }

        .news-author-name {
            font-weight: 700;
            color: var(--text-main);
            font-size: 1.1rem;
            display: block;
        }

        .news-author-dept {
            font-size: 0.75rem;
            color: var(--text-muted);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .news-date {
            font-size: 0.8rem;
            color: var(--text-muted);
            margin-top: 2px;
            display: block;
        }

        .news-body-content {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #374151;
        }

        .news-body-content h3, .news-body-content p {
            margin-bottom: 15px;
        }

        .news-body-content a {
            color: var(--primary);
            font-weight: 600;
            text-decoration: none;
            border-bottom: 2px solid rgba(16, 185, 129, 0.2);
            transition: all 0.2s;
        }

        .news-body-content a:hover {
            background: rgba(16, 185, 129, 0.1);
            border-bottom-color: var(--primary);
        }

        /* Pagination Modernization */
        .modern-pagination-container {
            margin-top: 30px;
            padding: 20px;
            background: white;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .modern-pagination-info {
            display: flex;
            justify-content: space-between;
            width: 100%;
            font-size: 0.85rem;
            color: var(--text-muted);
            font-weight: 500;
        }

        .pagination {
            margin: 0 !important;
            display: flex !important;
            gap: 5px !important;
            list-style: none !important;
            padding: 0 !important;
        }

        .pagination li a, .pagination li span {
            border: none !important;
            background: #f1f5f9 !important;
            color: var(--text-main) !important;
            padding: 8px 14px !important;
            border-radius: 8px !important;
            font-weight: 600 !important;
            transition: all 0.2s !important;
            text-decoration: none !important;
            display: block !important;
        }

        .pagination li.active span, .pagination li.active a {
            background: var(--primary) !important;
            color: white !important;
        }

        .pagination li a:hover:not(.active) {
            background: #e2e8f0 !important;
            transform: translateY(-2px);
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = modernCSS;
    document.head.appendChild(style);

    // --- Scrapers ---
    function getProfileData() {
        const img = document.querySelector('img#header_profile_pic') || document.querySelector('.dropdown-user img');
        const nameNode = document.querySelector('.username');
        let rawName = nameNode ? nameNode.innerText.trim() : 'User';

        // Extract Numeric ID (e.g., "25101258 - ENCARGUEZ..." -> "25101258")
        let studentId = rawName.match(/\d+/)?.[0] || rawName;
        let userName = studentId; // Default to ID for navigations

        const links = [];
        const menuItems = document.querySelectorAll('.dropdown-user .dropdown-menu li a');

        let foundName = '';

        menuItems.forEach(a => {
            const iconClass = a.querySelector('i')?.className || 'fa fa-circle';
            const text = a.innerText.trim();
            links.push({
                text: text,
                href: a.getAttribute('href'),
                icon: iconClass,
                originalNode: a
            });

            // Check if this looks like a name (contains comma and not just "Profile")
            if (text.includes(',') && text.length > 10 && !text.toLowerCase().includes('profile')) {
                foundName = text;
            }
        });

        // Check for cached name
        const cachedName = localStorage.getItem('usc_student_full_name');

        // Resolve Full Name for Greetings
        let finalFullName = foundName || cachedName || studentId;

        // Aggressive Scan if we still don't have a real name
        if (!foundName && !cachedName) {
            const allTds = Array.from(document.querySelectorAll('td'));
            const fullNameLabel = allTds.find(td => td.innerText.trim().includes('Full Name'));
            if (fullNameLabel && fullNameLabel.nextElementSibling) {
                const scrapedName = fullNameLabel.nextElementSibling.innerText.trim();
                if (scrapedName && scrapedName.length > 5) {
                    finalFullName = scrapedName;
                    localStorage.setItem('usc_student_full_name', scrapedName);
                }
            }
        }

        return {
            imgSrc: img ? img.src : '',
            userName: studentId, // Topbar/Profile uses ID
            fullName: finalFullName, // Greeting uses name
            links: links
        };
    }

    function scrapeNotifications() {
        const notifDropdown = document.querySelector('li.dropdown-notification') || document.querySelector('#header_notification_bar');
        if (!notifDropdown) return null;

        const badge = notifDropdown.querySelector('.badge');
        const count = badge ? parseInt(badge.innerText.trim()) : 0;
        const listContainer = notifDropdown.querySelector('ul.dropdown-menu');

        const viewAllNode = listContainer ? listContainer.querySelector('a[href*="/Notification/NotificationList"]') : null;
        let items = [];

        if (listContainer) {
            items = Array.from(listContainer.querySelectorAll('li.external, li:not(.external) a')).map(li => {
                if (li.classList.contains('external')) {
                    if (li.querySelector('a[href*="/Notification/NotificationList"]')) return null;
                    const a = li.querySelector('a');
                    return { type: 'header', text: li.innerText.trim(), href: a ? a.href : '#' };
                }
                const anchor = li.tagName === 'A' ? li : li.querySelector('a');
                if (!anchor) return null;
                return { type: 'item', html: anchor.innerHTML, href: anchor.href };
            }).filter(Boolean);
        }

        return { count, items, viewAllNode };
    }

    function scrapeBlocking() {
        // Scrape the "Student Blocking" dropdown
        const blockDropdown = document.querySelector('#StudentBlockListPanel');
        if (!blockDropdown) return null;

        const listContainer = blockDropdown.querySelector('#BlockedListHeaderPanel'); // inner scroller
        let message = "No blocking info.";

        if (listContainer) {
            // Usually contains a <center> tag with text
            const centerTag = listContainer.querySelector('center');
            if (centerTag) message = centerTag.innerHTML;
            else message = listContainer.innerText;
        }

        // Find the history link
        const historyLinkNode = blockDropdown.querySelector('a[href*="/BlockedStudent/StudentBlockHistory"]');

        return {
            message: message,
            historyLinkNode: historyLinkNode
        };
    }

    // --- Helper: Create Dropdown ---
    function createDropdown(id) {
        const drop = document.createElement('div');
        drop.id = id;
        drop.className = 'modern-dropdown';
        return drop;
    }

    function toggleDropdown(drop, triggerBtn) {
        // Close others
        document.querySelectorAll('.modern-dropdown').forEach(d => {
            if (d.id !== drop.id) d.classList.remove('show');
        });
        document.querySelectorAll('.topbar-icon-btn, .topbar-user').forEach(b => {
            if (b !== triggerBtn) b.classList.remove('active');
        });

        drop.classList.toggle('show');
        if (triggerBtn) triggerBtn.classList.toggle('active');
    }

    // --- Top Bar Creation ---
    function createTopbar() {
        if (document.getElementById('modern-topbar')) return;

        const profile = getProfileData();
        const notifs = scrapeNotifications();
        const blocking = scrapeBlocking();

        const topbar = document.createElement('div');
        topbar.id = 'modern-topbar';

        // 1. Build Notification Icon
        let notifHTML = '';
        if (notifs) {
            const badgeHTML = notifs.count > 0 ? `<span class="modern-badge">${notifs.count}</span>` : '';
            notifHTML = `
                <div class="topbar-icon-btn" id="modern-notif-btn" title="Notifications">
                    <i class="fa fa-bell-o"></i>
                    ${badgeHTML}
                </div>
            `;
        }

        // 2. Build Blocking Icon
        let blockingHTML = '';
        if (blocking) {
            blockingHTML = `
                <div class="topbar-icon-btn" id="modern-blocking-btn" title="Student Blocking">
                    <i class="fa fa-ban"></i>
                </div>
            `;
        }

        // 3. Main HTML Structure
        topbar.innerHTML = `
            <a href="/" class="topbar-logo">
                <img src="/Content/reportHeader1.png" alt="Logo">
            </a>

            <div style="display:flex; align-items:center; gap:20px; margin-left: auto;">
                ${blockingHTML}
                ${notifHTML}
                <div class="topbar-user" id="modern-user-btn">
                    <div class="topbar-user-info">
                        <span class="topbar-user-id">${profile.userName}</span>
                        <span class="topbar-user-role">Student</span>
                    </div>
                    <img src="${profile.imgSrc}" alt="Avatar" onerror="this.src='https://via.placeholder.com/40'">
                </div>
            </div>
        `;

        document.body.appendChild(topbar);

        // --- Event Handling ---

        // 1. Notifications Dropdown
        if (notifs && document.getElementById('modern-notif-btn')) {
            const btn = document.getElementById('modern-notif-btn');
            const drop = createDropdown('modern-notif-dropdown');

            let listHTML = '';
            const actualItems = notifs.items.filter(i => i.type !== 'header');

            if (actualItems.length > 0) {
                actualItems.forEach(item => {
                    listHTML += `<a href="${item.href}" class="dropdown-item">${item.html}</a>`;
                });
            } else {
                listHTML = '<div class="dropdown-empty">No unread notifications</div>';
            }

            listHTML += `
                <a href="#" class="dropdown-footer" id="modern-view-history">
                    <span>View Past Notifications</span>
                    <i class="fa fa-arrow-right"></i>
                </a>
            `;

            drop.innerHTML = listHTML;
            document.body.appendChild(drop);

            btn.addEventListener('click', (e) => { e.stopPropagation(); toggleDropdown(drop, btn); });

            drop.querySelector('#modern-view-history').addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown(drop, btn); // Close
                if (notifs.viewAllNode) notifs.viewAllNode.click();
                else window.location.href = '/Notification/NotificationList';
            });
        }

        // 2. Blocking Dropdown
        if (blocking && document.getElementById('modern-blocking-btn')) {
            const btn = document.getElementById('modern-blocking-btn');
            const drop = createDropdown('modern-blocking-dropdown');

            drop.innerHTML = `
                <div class="dropdown-item" style="cursor:default; display:block; text-align:center; padding: 20px;">
                    ${blocking.message}
                </div>
                <a href="#" class="dropdown-footer" id="modern-blocking-history">
                    <span>Show Blocking History</span>
                    <i class="fa fa-arrow-right"></i>
                </a>
            `;
            document.body.appendChild(drop);

            btn.addEventListener('click', (e) => { e.stopPropagation(); toggleDropdown(drop, btn); });

            drop.querySelector('#modern-blocking-history').addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown(drop, btn);
                if (blocking.historyLinkNode) blocking.historyLinkNode.click();
                else window.location.href = '/BlockedStudent/StudentBlockHistory';
            });
        }

        // 3. Profile Dropdown
        const userBtn = document.getElementById('modern-user-btn');
        if (userBtn) {
            const drop = createDropdown('modern-user-dropdown');

            profile.links.forEach((link, index) => {
                const item = document.createElement('a');
                item.className = 'dropdown-item';
                item.href = link.href;
                item.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;

                // Add click listener to trigger original node if present (for modals)
                item.addEventListener('click', (e) => {
                    // --- Logout Logic: Clear Auto-Login Credentials ---
                    const linkText = link.text.toLowerCase();
                    if (linkText.includes('log out') || linkText.includes('sign out') || linkText.includes('log-out')) {
                        console.log("Logging out... clearing auto-login credentials.");
                        localStorage.removeItem('usc_login_user');
                        localStorage.removeItem('usc_login_pass');
                        // Set a flag to prevent auto-login on the next page load
                        sessionStorage.setItem('usc_just_logged_out', 'true');
                    }

                    if (link.originalNode) {
                        e.preventDefault(); // Prevent default nav if we are clicking a modal trigger
                        toggleDropdown(drop, userBtn);
                        link.originalNode.click();
                    }
                });

                drop.appendChild(item);
            });

            document.body.appendChild(drop);
            userBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleDropdown(drop, userBtn); });
        }

        // Global Close
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.modern-dropdown') && !e.target.closest('.topbar-user') && !e.target.closest('.topbar-icon-btn')) {
                document.querySelectorAll('.modern-dropdown').forEach(d => d.classList.remove('show'));
                document.querySelectorAll('.topbar-icon-btn, .topbar-user').forEach(b => b.classList.remove('active'));
            }
        });
    }

    // --- Sidebar Creation ---
    function createSidebar() {
        if (document.getElementById('modern-sidebar')) return;

        // Icon Mapping for recognizable navigation
        const iconMap = {
            'home': 'fa-home',
            'dashboard': 'fa-th-large',
            'features': 'fa-star-o',
            'privacy policy statement': 'fa-shield',
            'privacy policy': 'fa-shield',
            'meet caloy': 'fa-commenting-o',
            'safad magazine': 'fa-book',
            'student task': 'fa-tasks',
            'student services': 'fa-graduation-cap', // Toga hat as requested
            'online purchase(textbook dept)': 'fa-shopping-cart',
            'motor vehicle pass': 'fa-car',
            'evaluation': 'fa-line-chart',
            'administrative': 'fa-cogs',
            'job placement': 'fa-briefcase',
            'osa': 'fa-university',
            'downloadable forms': 'fa-download',
            'grades': 'fa-graduation-cap',
            'tuition': 'fa-money',
            'schedule': 'fa-calendar',
            'enrollment': 'fa-pencil-square-o',
            'profile': 'fa-user',
            'notification': 'fa-bell',
            'blocking': 'fa-ban',
            'about us': 'fa-info-circle',
            'contact us': 'fa-envelope'
        };

        const sidebar = document.createElement('div');
        sidebar.id = 'modern-sidebar';

        // Fix Logo Clipping
        const logoLink = document.createElement('a');
        logoLink.href = '/';
        logoLink.className = 'sidebar-logo';
        logoLink.innerHTML = '<img src="/favicon.ico" alt="USC Logo">';
        sidebar.appendChild(logoLink);

        const navContainer = document.createElement('ul');
        navContainer.className = 'modern-nav-container';

        const topLevelItems = document.querySelectorAll('.hor-menu > ul.nav > li');

        topLevelItems.forEach(li => {
            const mainLink = li.querySelector(':scope > a');
            if (!mainLink) return;

            const text = mainLink.innerText.replace(/[\n\t]/g, '').trim();
            const lowerText = text.toLowerCase();
            const href = mainLink.getAttribute('href');
            const hasDropdown = li.classList.contains('menu-dropdown') || li.querySelector(':scope > ul.dropdown-menu');

            // Find best icon
            let iconClass = 'fa-folder-o'; // Default
            for (const key in iconMap) {
                if (lowerText.includes(key)) {
                    iconClass = iconMap[key];
                    break;
                }
            }

            const navItemLi = document.createElement('li');

            if (hasDropdown) {
                const parentDiv = document.createElement('div');
                parentDiv.className = 'modern-nav-item';
                parentDiv.innerHTML = `<i class="fa ${iconClass} nav-icon"></i><span class="modern-nav-text">${text}</span><i class="fa fa-chevron-right chevron"></i>`;
                navItemLi.appendChild(parentDiv);

                const submenuUl = document.createElement('ul');
                submenuUl.className = 'modern-submenu';

                const subItems = li.querySelectorAll(':scope > ul.dropdown-menu > li.dropdown-submenu');
                subItems.forEach(subLi => {
                    const subLink = subLi.querySelector(':scope > a');
                    if (!subLink) return;
                    const subText = subLink.innerText.replace(/[\n\t]/g, '').trim();

                    const subLiItem = document.createElement('li');

                    const nestedUl = subLi.querySelector(':scope > ul.dropdown-menu');
                    if (nestedUl) {
                        const subParentDiv = document.createElement('div');
                        subParentDiv.className = 'modern-nav-item';
                        subParentDiv.style.paddingLeft = '50px';
                        subParentDiv.innerHTML = `<i class="fa fa-caret-right nav-icon" style="margin-right:15px"></i><span class="modern-nav-text">${subText}</span><i class="fa fa-chevron-right chevron"></i>`;
                        subLiItem.appendChild(subParentDiv);

                        const nestedSubmenuUl = document.createElement('ul');
                        nestedSubmenuUl.className = 'modern-submenu';

                        const nestedLinks = nestedUl.querySelectorAll(':scope > li > a');
                        nestedLinks.forEach(nestedA => {
                            const nestedText = nestedA.innerText.replace(/[\n\t]/g, '').trim();
                            const nestedHref = nestedA.getAttribute('href');
                            const nestedLi = document.createElement('li');
                            nestedLi.innerHTML = `<a class="modern-submenu-item" href="${nestedHref}">${nestedText}</a>`;
                            nestedSubmenuUl.appendChild(nestedLi);
                        });
                        subLiItem.appendChild(nestedSubmenuUl);

                        subParentDiv.addEventListener('click', (e) => {
                            e.stopPropagation();
                            subParentDiv.classList.toggle('open');
                            nestedSubmenuUl.classList.toggle('open');
                        });
                    } else {
                        const subHref = subLink.getAttribute('href');
                        subLiItem.innerHTML = `<a class="modern-submenu-item" href="${subHref}">${subText}</a>`;
                    }
                    submenuUl.appendChild(subLiItem);
                });

                navItemLi.appendChild(submenuUl);
                parentDiv.addEventListener('click', () => {
                    parentDiv.classList.toggle('open');
                    submenuUl.classList.toggle('open');
                });

            } else {
                const simpleLink = document.createElement('a');
                simpleLink.className = 'modern-nav-item';
                simpleLink.href = href || '/';
                simpleLink.innerHTML = `<i class="fa fa-home nav-icon"></i><span class="modern-nav-text">${text}</span>`;
                navItemLi.appendChild(simpleLink);
            }
            navContainer.appendChild(navItemLi);
        });

        sidebar.appendChild(navContainer);

        const footerDiv = document.createElement('div');
        footerDiv.className = 'sidebar-footer';
        const logoutLink = document.createElement('a');
        logoutLink.className = 'modern-nav-item';
        logoutLink.href = '/Account/Logout';
        logoutLink.innerHTML = `<i class="fa fa-sign-out nav-icon"></i><span class="modern-nav-text">Logout</span>`;

        logoutLink.addEventListener('click', () => {
            console.log("Sidebar Logging out... clearing auto-login credentials.");
            localStorage.removeItem('usc_login_user');
            localStorage.removeItem('usc_login_pass');
            sessionStorage.setItem('usc_just_logged_out', 'true');
        });

        footerDiv.appendChild(logoutLink);
        sidebar.appendChild(footerDiv);

        document.body.appendChild(sidebar);
    }

    // --- Privacy Modal Handler ---
    // --- Privacy Modal Handler ---
    function handlePrivacyModal() {
        // 1. Hide the modal immediately via CSS injection so the user doesn't see it
        const hideStyle = document.createElement('style');
        hideStyle.innerHTML = `
            #myModal, .modal-backdrop { opacity: 0 !important; pointer-events: none !important; }
        `;
        document.head.appendChild(hideStyle);

        function attemptAccept() {
            const confirmBox = document.getElementById('Confirmation');
            const submitBtn = document.getElementById('Submit');

            if (confirmBox && submitBtn) {
                console.log("Found Privacy Modal. Auto-accepting...");

                // 2. Check the box
                if (!confirmBox.checked) {
                    confirmBox.checked = true;
                    // Trigger events that might enable the button
                    confirmBox.dispatchEvent(new Event('change', { bubbles: true }));
                    confirmBox.dispatchEvent(new Event('click', { bubbles: true }));
                }

                // 3. Remove disabled attribute
                submitBtn.removeAttribute('disabled');
                submitBtn.disabled = false;

                // 4. Try calling the global function directly (if available)
                // 'unsafeWindow' allows access to the page's window object in Tampermonkey
                try {
                    const win = window.unsafeWindow || window;
                    if (typeof win.Continued === 'function') {
                        console.log("Calling global Continued() function directly.");
                        win.Continued();
                        return true;
                    }
                } catch (e) {
                    console.error("Error calling global Continued:", e);
                }

                // 5. Fallback: Click the button
                console.log("Clicking Continue button (fallback).");
                submitBtn.click();

                return true;
            }
            return false;
        }

        // Try immediately
        if (attemptAccept()) return;

        // Check continuously for a short duration
        const checker = setInterval(() => {
            if (attemptAccept()) {
                clearInterval(checker);
            }
        }, 50); // Fast check

        // Stop checking after 10 seconds
        setTimeout(() => clearInterval(checker), 10000);
    }

    function handleHomePage() {
        const path = window.location.pathname;
        if (path !== '/' && !path.toLowerCase().includes('/home')) return;

        console.log("Modernizing Home Page Dashboard...");

        const contentArea = document.querySelector('#content');
        if (!contentArea) return;

        // 1. Get User Data for the Hero Section
        const profile = getProfileData();
        const hour = new Date().getHours();
        let greeting = "Good Evening";
        if (hour < 12) greeting = "Good Morning";
        else if (hour < 18) greeting = "Good Afternoon";

        const today = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Improve Name Detection: If the scraped name looks like an ID, try to find a better one
        let displayName = profile.fullName;

        // Clean up "LASTNAME, FIRSTNAME" or "ID - NAME"
        if (displayName.includes(',')) {
            // "ENCARGUEZ, DEION ALFRED" -> "DEION ALFRED"
            const parts = displayName.split(',');
            displayName = (parts[1] || parts[0]).trim().split(' ')[0];
        } else if (displayName.includes('-')) {
            // "25101258 - DEION" -> "DEION"
            displayName = displayName.split('-')[1].trim().split(' ')[0];
        } else {
            displayName = displayName.split(' ')[0];
        }

        // Final check: if it's still just an ID or generic, try the profile link
        if (/^\d+$/.test(displayName) || displayName.toLowerCase() === 'user') {
            const profileLink = document.querySelector('a[href*="/Profile/"]');
            if (profileLink && profileLink.innerText.trim()) {
                const pName = profileLink.innerText.trim();
                displayName = pName.includes(',') ? pName.split(',')[1].trim().split(' ')[0] : pName.split(' ')[0];
            }
        }

        // Capitalize properly (e.g., DEION -> Deion)
        if (displayName) {
            displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase();
        }

        // If it's still an ID, let's add a placeholder but keep checking
        const isStillId = /^\d+$/.test(displayName);
        const finalGreetingName = isStillId ? 'Student' : displayName;

        // Hide ALL original children of contentArea to prevent layout phantom space
        Array.from(contentArea.children).forEach(child => {
            if (child.id !== 'modern-dashboard') {
                child.style.display = 'none';
            }
        });

        // 3. Create Modern Dashboard Container
        if (document.getElementById('modern-dashboard')) {
            // If already exists but we found a better name, update the h1
            if (!isStillId) {
                const title = document.querySelector('#modern-dashboard .modern-hero h1');
                if (title) title.innerText = `${greeting}, ${displayName}!`;
            }
            return;
        }

        const dash = document.createElement('div');
        dash.id = 'modern-dashboard';

        // 4. Hero Section
        dash.innerHTML = `
            <div class="modern-hero">
                <div class="hero-date">${today}</div>
                <h1 id="dashboard-greeting-title">${greeting}, ${finalGreetingName}!</h1>
                <div class="hero-subtitle">Welcome back to your USC ISMIS portal. Ready to tackle your day?</div>
            </div>

            <div class="dashboard-grid">
                <a href="/ViewGrades" class="dash-card">
                    <div class="dash-card-icon"><i class="fa fa-graduation-cap"></i></div>
                    <div class="dash-card-info">
                        <h3>My Grades</h3>
                        <p>Track your academic progress</p>
                    </div>
                </a>
                <a href="/Extras" class="dash-card">
                    <div class="dash-card-icon"><i class="fa fa-calendar"></i></div>
                    <div class="dash-card-info">
                        <h3>Weekly Schedule</h3>
                        <p>Classes and room assignments</p>
                    </div>
                </a>
                <a href="/tuitionfeecomputation" class="dash-card">
                    <div class="dash-card-icon"><i class="fa fa-money"></i></div>
                    <div class="dash-card-info">
                        <h3>Tuition & Fees</h3>
                        <p>Account balance and payments</p>
                    </div>
                </a>
                <a href="/advisedcourse" class="dash-card">
                    <div class="dash-card-icon"><i class="fa fa-pencil-square-o"></i></div>
                    <div class="dash-card-info">
                        <h3>Registration</h3>
                        <p>Enrollment and adding subjects</p>
                    </div>
                </a>
            </div>

            <div class="news-section">
                <div class="news-header">
                    <h2>Academic Announcements</h2>
                </div>
                <div class="news-container" id="modern-news-list">
                    <div class="dropdown-empty" id="news-loading-status" style="padding: 40px;">
                        <i class="fa fa-refresh fa-spin" style="margin-right: 10px;"></i>
                        Loading latest announcements...
                    </div>
                </div>
                <div id="modern-pagination-wrapper"></div>
            </div>
        `;

        // 5. Inject Dashboard
        contentArea.prepend(dash);

        // 6. Repackage Announcements with Observer for AJAX support
        const newsList = dash.querySelector('#modern-news-list');
        const paginationWrapper = dash.querySelector('#modern-pagination-wrapper');
        const announcementTarget = document.querySelector('#AnnouncementList');

        function updateNewsList() {
            const oldItems = Array.from(document.querySelectorAll('#AnnouncementList .timeline-item'));

            // Limit to first 10 items if there are too many, to keep page height manageable
            // Though usually the server paginates, we'll be safe.
            const itemsToShow = oldItems.slice(0, 10);

            // Clear current list
            newsList.innerHTML = '';

            if (itemsToShow.length > 0) {
                const loadingStatus = document.getElementById('news-loading-status');
                if (loadingStatus) loadingStatus.remove();
            }

            itemsToShow.forEach(item => {
                const authorImg = item.querySelector('.timeline-badge-userpic')?.src || '';
                const authorName = item.querySelector('.timeline-body-title')?.innerText || 'USC Official';
                const authorDept = item.querySelector('.font-grey-cascade')?.innerText || 'Information Office';
                const postDate = item.querySelectorAll('.font-grey-cascade')[1]?.innerText || '';
                const content = item.querySelector('.timeline-body-content')?.innerHTML || '';

                // Skip items that are essentially empty
                if (!content.trim() && authorName === 'USC Official') return;

                const card = document.createElement('div');
                card.className = 'news-card';
                card.innerHTML = `
                    <img src="${authorImg}" class="news-author-img" onerror="this.src='https://via.placeholder.com/50'">
                    <div class="news-content-wrapper">
                        <div class="news-meta">
                            <span class="news-author-name">${authorName}</span>
                            <span class="news-author-dept">${authorDept}</span>
                            <span class="news-date">${postDate}</span>
                        </div>
                        <div class="news-body-content">
                            ${content}
                        </div>
                    </div>
                `;
                newsList.appendChild(card);
            });

            // Handle Pagination Robustly based on exact site structure
            const panel = document.getElementById('AnnoucementPanel');
            if (panel) {
                // Find any span containing "Showing Page" or "Total Count"
                const spans = Array.from(panel.querySelectorAll('span'));
                let showingText = spans.find(s => s.innerText.includes('Showing Page'))?.innerText || '';
                let totalText = spans.find(s => s.innerText.includes('Total Count'))?.innerText || '';

                const pagContainer = panel.querySelector('.pagination-container');
                const pagUl = panel.querySelector('.pagination');

                if (showingText || totalText || pagUl) {
                    const wrap = document.createElement('div');
                    wrap.className = 'modern-pagination-container';

                    if (showingText || totalText) {
                        const infoDiv = document.createElement('div');
                        infoDiv.className = 'modern-pagination-info';
                        infoDiv.innerHTML = `<span>${showingText}</span><span>${totalText}</span>`;
                        wrap.appendChild(infoDiv);
                    }

                    if (pagUl) {
                        // Clone it to avoid removing it from the hidden panel (some AJAX scripts need it there)
                        const clonedUl = pagUl.cloneNode(true);
                        wrap.appendChild(clonedUl);

                        // Proxy clicks from our cloned pagination back to the original links
                        clonedUl.querySelectorAll('a').forEach((clonedLink, index) => {
                            clonedLink.addEventListener('click', (e) => {
                                e.preventDefault();
                                const originalLinks = pagUl.querySelectorAll('a');
                                if (originalLinks[index]) {
                                    originalLinks[index].click();
                                }
                            });
                        });
                    }

                    paginationWrapper.innerHTML = '';
                    paginationWrapper.appendChild(wrap);
                }
            }
        }

        // Initial check
        updateNewsList();

        // Observe for AJAX updates
        if (announcementTarget) {
            const observer = new MutationObserver((mutations) => {
                updateNewsList();
            });
            observer.observe(announcementTarget, { childList: true, subtree: true });
        }
    }

    function initUI() {
        handlePrivacyModal();
        handleHomePage();
        createSidebar();
        createTopbar();

        // Global Name Observer: Catch the name if it appears late (e.g. in a modal)
        const nameObserver = new MutationObserver(() => {
            const allTds = Array.from(document.querySelectorAll('td'));
            const fullNameLabel = allTds.find(td => td.innerText.trim().includes('Full Name'));
            if (fullNameLabel && fullNameLabel.nextElementSibling) {
                const scrapedName = fullNameLabel.nextElementSibling.innerText.trim();
                if (scrapedName && scrapedName.length > 5 && !localStorage.getItem('usc_student_full_name')) {
                    console.log("Found name in new mutation. Updating dashboard...");
                    localStorage.setItem('usc_student_full_name', scrapedName);
                    if (window.location.pathname === '/' || window.location.pathname.toLowerCase().includes('/home')) {
                        handleHomePage(); // Re-run to update greeting
                    }
                }
            }
        });
        nameObserver.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUI);
    } else {
        initUI();
    }
})();
}
// --- MODULE: GRADES (v1.0) ---
if (path.includes('viewgrades')) {
    console.log("[ISMIS Bundle] Initializing Grades Module...");
(function () {
    'use strict';

    const styles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        :root {
            --primary: #10B981;
            --primary-dark: #059669;
            --secondary: #3B82F6;
            --usc-gold: #FCD34D;
            --glass-bg: rgba(255, 255, 255, 0.95);
            --glass-border: rgba(255, 255, 255, 0.6);
            --text-main: #1F2937;
            --text-muted: #6B7280;
            --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
            --shadow-md: 0 10px 15px -3px rgba(0,0,0,0.1);
            --shadow-lg: 0 20px 25px -5px rgba(0,0,0,0.1);
        }

        body {
            font-family: 'Inter', sans-serif !important;
            background: var(--bg-gradient) !important;
            color: var(--text-main);
            margin: 0;
            padding: 0;
            padding-top: 80px !important;
            overflow-x: hidden;
        }

        /* Essential Layout Overrides to match Global UI */
        .header, .page-header, .page-header-top, .page-header-menu, .page-head, .hor-menu, .footer, .page-footer-inner {
            display: none !important;
        }

        .page-content, .wrapper {
            max-width: 1400px !important;
            margin-left: 100px !important;
            width: calc(100% - 130px) !important;
            background: transparent !important;
            padding: 20px !important;
        }

        .page-container {
            background: transparent !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        #modern-grades-root {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- Header Section --- */
        .grades-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .degree-title {
            font-family: 'Outfit', sans-serif;
            font-size: 2.2rem;
            font-weight: 800;
            color: #111827;
            margin: 0;
            letter-spacing: -0.02em;
            line-height: 1.2;
        }

        .degree-sy {
            font-size: 1.1rem;
            color: var(--text-muted);
            margin-top: 10px;
            font-weight: 500;
        }

        /* --- Stats Dashboard --- */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-card {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            padding: 25px;
            border-radius: 20px;
            box-shadow: var(--shadow-md);
            display: flex;
            align-items: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary);
        }

        .stat-icon {
            width: 50px;
            height: 50px;
            background: rgba(16, 185, 129, 0.1);
            color: var(--primary);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-right: 20px;
        }

        .stat-info h4 {
            margin: 0;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
            font-weight: 700;
        }

        .stat-info .stat-value {
            font-size: 1.6rem;
            font-weight: 800;
            color: #111827;
            margin-top: 4px;
        }

        /* --- Semester Section --- */
        .semester-container {
            background: white;
            border-radius: 24px;
            padding: 30px;
            box-shadow: var(--shadow-md);
            margin-bottom: 40px;
            border: 1px solid rgba(0,0,0,0.05);
        }

        .semester-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid #f1f5f9;
        }

        .semester-title {
            font-size: 1.35rem;
            font-weight: 700;
            color: #111827;
            text-transform: uppercase;
            letter-spacing: 0.02em;
        }

        .semester-badge {
            background: #f1f5f9;
            color: #475569;
            padding: 6px 14px;
            border-radius: 99px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        /* --- Table Styling --- */
        .grades-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 10px;
        }

        .grades-table th {
            text-align: left;
            padding: 10px 20px;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
            font-weight: 700;
        }

        .grades-table tr {
            transition: all 0.2s;
        }

        .grades-table td {
            background: #ffffff;
            padding: 18px 20px;
            font-size: 0.95rem;
            border-top: 1px solid #f1f5f9;
            border-bottom: 1px solid #f1f5f9;
        }

        .grades-table td:first-child {
            border-left: 1px solid #f1f5f9;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
            font-weight: 600;
            color: #475569;
        }

        .grades-table td:last-child {
            border-right: 1px solid #f1f5f9;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
        }

        .grades-table tr:hover td {
            background: #f8fafc;
            border-color: #e2e8f0;
        }

        .course-desc {
            color: #111827;
            font-weight: 500;
        }

        .grade-pill {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.9rem;
            min-width: 40px;
            text-align: center;
        }

        .grade-high { background: rgba(16, 185, 129, 0.1); color: var(--primary); }
        .grade-mid { background: rgba(59, 130, 246, 0.1); color: var(--secondary); }
        .grade-warning { background: rgba(245, 158, 11, 0.1); color: #d97706; }
        .grade-none { background: #f1f5f9; color: #64748b; }

        .grades-table tr.row-excluded td {
            background: rgba(176, 224, 230, 0.2) !important;
            border-color: rgba(176, 224, 230, 0.4) !important;
        }

        .grades-table tr.row-excluded td:first-child {
            border-left: 4px solid #B0E0E6 !important;
        }

        /* --- Legend --- */
        .grades-legend {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 15px;
            font-size: 0.8rem;
            color: var(--text-muted);
            font-weight: 600;
        }

        .legend-box {
            width: 14px;
            height: 14px;
            background: #B0E0E6;
            border-radius: 3px;
            margin-right: 8px;
        }

        /* --- Footer Info --- */
        .record-footer {
            margin-top: 50px;
            padding: 30px;
            border: 2px dashed #e2e8f0;
            border-radius: 16px;
            text-align: center;
            font-style: italic;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* --- Hide Original --- */
        #content > .row { display: none !important; }
        #modern-grades-root { display: block !important; }
    `;

    function injectStyles() {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }

    function scrapeData() {
        // Clean Student Name: Remove the "Not Included" metadata from the h4 text
        const h4 = document.querySelector('#PrList h4 b');
        let fullStudentText = h4 ? h4.innerText : '';
        let cleanedStudent = fullStudentText.split('-')[0] + '-' + (fullStudentText.split('-')[1] || '').split('\n')[0].trim();
        // If the above still has "Not Included", aggressively clean it
        cleanedStudent = cleanedStudent.split('Not Included')[0].trim();

        // Save to cache for the dashboard
        if (cleanedStudent && cleanedStudent.length > 5) {
            localStorage.setItem('usc_student_full_name', cleanedStudent);
        }

        const data = {
            degree: document.querySelector('#PrList h3 b')?.innerText || 'Academic Record',
            sy: document.querySelectorAll('#PrList h3 b')[1]?.innerText || '',
            student: cleanedStudent,
            semesters: [],
            gwa: '0.00',
            totalUnits: '0.00'
        };

        // Scrape GWA and Total Units from the footer table
        const footerTables = document.querySelectorAll('#PrList .table-forum');
        footerTables.forEach(table => {
            const rows = Array.from(table.querySelectorAll('tr'));
            rows.forEach(row => {
                const text = row.innerText;
                if (text.includes('General Weighted Average')) {
                    data.gwa = row.querySelectorAll('td')[1]?.innerText || '0.00';
                }
                if (text.includes('Total Units Earned')) {
                    const unitsMatch = text.match(/Total Units Earned:\s*([\d.]+)/);
                    if (unitsMatch) data.totalUnits = unitsMatch[1];
                }
            });
        });

        // Scrape Semesters and Grades
        const prList = document.getElementById('PrList');
        if (prList) {
            // Find semester headers (usually center > h4 > b)
            const semHeaders = Array.from(prList.querySelectorAll('center h4 b'));
            semHeaders.forEach(header => {
                const semName = header.innerText.trim();
                // The table is usually the next sibling table-forum
                let currentItem = header.parentElement.parentElement;
                while (currentItem && !currentItem.classList?.contains('table-forum')) {
                    currentItem = currentItem.nextElementSibling;
                }

                if (currentItem) {
                    const semester = {
                        name: semName,
                        courses: [],
                        summary: ''
                    };

                    const rows = Array.from(currentItem.querySelectorAll('tbody tr'));
                    rows.forEach(row => {
                        const cols = row.querySelectorAll('td');
                        if (cols.length >= 5) {
                            // Check if row is blue (Excluded from GPA)
                            const isExcluded = row.style.backgroundColor === 'rgb(176, 224, 230)' ||
                                row.getAttribute('style')?.includes('#B0E0E6');

                            semester.courses.push({
                                code: cols[0].innerText.trim(),
                                desc: cols[1].innerText.trim(),
                                units: cols[2].innerText.trim(),
                                mg: cols[3].innerText.trim(),
                                fg: cols[4].innerText.trim(),
                                isExcluded: isExcluded
                            });
                        } else if (cols.length > 0 && cols[1]?.innerText.includes('Total Units Passed')) {
                            semester.summary = cols[1].innerText.trim();
                        }
                    });
                    data.semesters.push(semester);
                }
            });
        }

        return data;
    }

    function getGradeClass(grade) {
        if (!grade || grade === 'NG' || grade === 'INC') return 'grade-none';
        const g = parseFloat(grade);
        if (isNaN(g)) return 'grade-none';
        if (g <= 1.5) return 'grade-high';
        if (g <= 2.5) return 'grade-mid';
        return 'grade-warning';
    }

    function renderUI(data) {
        if (document.getElementById('modern-grades-root')) return;

        const root = document.createElement('div');
        root.id = 'modern-grades-root';

        root.innerHTML = `
            <div class="grades-header">
                <h1 class="degree-title">${data.degree}</h1>
                <div class="degree-sy">${data.sy}</div>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa fa-line-chart"></i></div>
                    <div class="stat-info">
                        <h4>General Weighted Average</h4>
                        <div class="stat-value">${data.gwa}</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa fa-check-circle"></i></div>
                    <div class="stat-info">
                        <h4>Total Units Earned</h4>
                        <div class="stat-value">${data.totalUnits}</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa fa-user"></i></div>
                    <div class="stat-info">
                        <h4>Student Record</h4>
                        <div class="stat-value" style="font-size: 1rem;">${data.student}</div>
                    </div>
                </div>
            </div>

            ${data.semesters.map(sem => `
                <div class="semester-container">
                    <div class="semester-header">
                        <div class="semester-title">${sem.name}</div>
                        <div class="semester-badge">${sem.summary || 'Academic Term'}</div>
                    </div>

                    <div class="grades-legend">
                        <div class="legend-box"></div>
                        Not Included in GPA
                    </div>

                    <table class="grades-table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Course Description</th>
                                <th>Units</th>
                                <th>Midterm</th>
                                <th>Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${sem.courses.map(course => `
                                <tr class="${course.isExcluded ? 'row-excluded' : ''}">
                                    <td>${course.code}</td>
                                    <td class="course-desc">${course.desc}</td>
                                    <td>${course.units}</td>
                                    <td><span class="grade-pill ${getGradeClass(course.mg)}">${course.mg}</span></td>
                                    <td><span class="grade-pill ${getGradeClass(course.fg)}">${course.fg}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `).join('')}

            <div class="record-footer">
                NOT VALID FOR TRANSFER. FOR USC USE ONLY. REGISTRAR'S SIGNATURE IS NOT REQUIRED.
            </div>
        `;

        document.getElementById('content').appendChild(root);
    }

    function init() {
        injectStyles();
        const data = scrapeData();
        renderUI(data);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
}
// --- MODULE: SCHEDULE (v1.1) ---
if (path.includes('extras')) {
    console.log("[ISMIS Bundle] Initializing Schedule Module...");
(function () {
    'use strict';

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@500&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const modernCSS = `
        :root {
            --primary: #10B981;
            --primary-light: rgba(16, 185, 129, 0.1);
            --primary-dark: #059669;
            --secondary: #3B82F6;
            --usc-gold: #FCD34D;
            --glass-bg: rgba(255, 255, 255, 0.95);
            --glass-border: rgba(255, 255, 255, 0.6);
            --text-main: #1F2937;
            --text-muted: #6B7280;
            --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            --schedule-hover: rgba(16, 185, 129, 0.08);
            --cell-height: 40px;
        }

        body {
            font-family: 'Inter', sans-serif !important;
            background: var(--bg-gradient) !important;
            color: var(--text-main);
        }

        /* --- Portlet Transformation --- */
        .portlet.light {
            background: var(--glass-bg) !important;
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border) !important;
            border-radius: 20px !important;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.04) !important;
            padding: 30px !important;
            margin-bottom: 30px !important;
        }

        .portlet-title { border: none !important; margin-bottom: 25px !important; }
        .caption-subject { font-size: 1.25rem !important; font-weight: 800 !important; color: var(--text-main) !important; letter-spacing: -0.02em; }
        .caption i { color: var(--primary) !important; font-size: 1.4rem !important; }

        /* --- Modern Timetable UI --- */
        .page-content { padding-top: 20px !important; }

        #ExtrasUpdateOrDeletePanel {
            overflow-x: auto;
            border-radius: 16px;
            background: white;
            padding: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.05);
        }

        .table-forum {
            border-collapse: collapse !important; /* Changed to collapse for seamlessness */
            border-spacing: 0 !important;
            width: 100% !important;
            border: none !important;
            table-layout: fixed;
        }

        /* Headers */
        .table-forum thead th, .table-forum tr:first-child td {
            background: #f8fafc !important;
            color: var(--text-muted) !important;
            font-weight: 700 !important;
            font-size: 0.7rem !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            padding: 15px !important;
            border: none !important;
            text-align: center !important;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 2px solid #f1f5f9 !important;
        }

        .table-forum tr:first-child td:first-child { border-top-left-radius: 10px; }
        .table-forum tr:first-child td:last-child { border-top-right-radius: 10px; }

        /* Time Column */
        .table-forum td:first-child {
            background: #ffffff !important;
            font-weight: 700 !important;
            font-size: 0.7rem !important;
            color: var(--text-main) !important;
            width: 110px !important;
            border-right: 2px solid #f1f5f9 !important;
            position: sticky;
            left: 0;
            z-index: 90;
            text-align: center !important;
        }

        /* Cells */
        .table-forum td {
            border: none !important;
            border-bottom: 1px solid #f8fafc !important;
            height: var(--cell-height) !important;
            padding: 0 !important; /* Zero padding to fill cell */
            vertical-align: middle !important;
            transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        /* Crosshair Highlighting Logic */
        .table-forum td.highlight-row { background: var(--schedule-hover) !important; }
        .table-forum td.highlight-col { background: var(--schedule-hover) !important; }
        .table-forum td.highlight-pivot { background: rgba(16, 185, 129, 0.12) !important; }

        /* Prevent site highlighters from overriding ours */
        .table-forum tr:hover td, .table-forum td:hover { background-color: transparent !important; }
        .table-forum td.highlight-row { background: var(--schedule-hover) !important; z-index: 1 !important;  }
        .table-forum td.highlight-col { background: var(--schedule-hover) !important; z-index: 1 !important; }
        .table-forum td.highlight-pivot { background: rgba(16, 185, 129, 0.12) !important; z-index: 2 !important; }

        /* Subject Blocks (Seamless Design) */
        .subject-block {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0.72rem;
            font-weight: 700;
            color: #1f2937;
            text-align: center;
            backdrop-filter: blur(4px);
            cursor: pointer;
            z-index: 5;
            transition: all 0.2s;
            /* Default Borders (reset via JS for merging) */
            border-radius: 4px;
            margin: 1px;
        }

        .subject-block:hover { filter: brightness(0.95); }
        .subject-block b { display: block; font-family: 'JetBrains Mono', monospace; color: #111827; font-size: 0.75rem; margin-bottom: 2px; }
        .subject-block span { opacity: 0.8; font-weight: 500; font-size: 0.68rem; }

        /* Merging Classes */
        .block-top {
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            margin-bottom: 0 !important;
            padding-top: 8px;
        }
        .block-middle {
            border-radius: 0;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            border-top: none;
            border-bottom: none;
        }
        .block-bottom {
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin-top: 0 !important;
            padding-bottom: 8px;
        }
        .block-single { border-radius: 12px; margin: 2px; }

        /* Full Colored Glass Styles */
        .block-wheat { background: rgba(252, 211, 77, 0.4) !important; border-left: 4px solid #FCD34D; }
        .block-mediumorchid { background: rgba(168, 85, 247, 0.3) !important; border-left: 4px solid #A855F7; }
        .block-beige { background: rgba(210, 180, 140, 0.4) !important; border-left: 4px solid #d2b48c; }
        .block-mistyrose { background: rgba(251, 113, 133, 0.3) !important; border-left: 4px solid #fb7185; }
        .block-tomato { background: rgba(239, 68, 68, 0.3) !important; border-left: 4px solid #ef4444; }
        .block-rosybrown { background: rgba(188, 143, 143, 0.4) !important; border-left: 4px solid #bc8f8f; }
        .block-turquoise { background: rgba(45, 212, 191, 0.3) !important; border-left: 4px solid #2dd4bf; }
        .block-powderblue { background: rgba(59, 130, 246, 0.3) !important; border-left: 4px solid #3b82f6; }
        .block-palegreen { background: rgba(34, 197, 94, 0.3) !important; border-left: 4px solid #22c55e; }
        .block-thistle { background: rgba(186, 85, 211, 0.3) !important; border-left: 4px solid #ba55d3; }
        .block-sandybrown { background: rgba(244, 164, 96, 0.4) !important; border-left: 4px solid #f4a460; }
        .block-fallback { background: rgba(16, 185, 129, 0.2) !important; border-left: 4px solid var(--primary); }

        /* --- Floating Control Hub --- */
        #schedule-controls {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 10001;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .control-panel {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 18px;
            padding: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.12);
            display: flex;
            gap: 6px;
            border: 1px solid rgba(255,255,255,0.8);
        }

        .control-btn {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid transparent;
            background: transparent;
            color: var(--text-muted);
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .control-btn:hover { background: #f1f5f9; color: var(--primary-dark); transform: scale(1.05); }
        .control-btn.active { background: var(--primary); color: white; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); }

        /* --- Print & Utility cleanup --- */
        #PrintSU {
            background: var(--primary-dark) !important;
            color: white !important;
            border: none !important;
            padding: 12px 30px !important;
            border-radius: 12px !important;
            font-weight: 700 !important;
            text-transform: uppercase;
            box-shadow: 0 4px 12px rgba(5, 150, 105, 0.2) !important;
        }

        .animated.fadeIn br { display: none !important; }

        @media print {
            body { padding: 0 !important; }
            #modern-sidebar, #modern-topbar, #schedule-controls, .form-actions, #modern-kpi-grid, .student-info-actions { display: none !important; }
            .portlet.light { border: none !important; box-shadow: none !important; padding: 0 !important; background: white !important; }
            .page-content { margin-left: 0 !important; width: 100% !important; padding: 0 !important; }
            .subject-block { color: black !important; border: 1px solid #ccc !important; box-shadow: none !important; text-shadow: none !important; -webkit-print-color-adjust: exact; }
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = modernCSS;
    document.head.appendChild(style);

    function parseRGB(colorString) {
        if (!colorString || colorString === 'transparent' || colorString === 'rgba(0, 0, 0, 0)' || colorString === 'rgb(255, 255, 255)') return null;

        // Handle named colors if computed style weirdly returned them or user provided them
        const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!match) return null;
        return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
    }

    function getColorName(rgbObj) {
        if (!rgbObj) return 'fallback';

        const palette = {
            'wheat': { r: 245, g: 222, b: 179 },
            'mediumorchid': { r: 186, g: 85, b: 211 },
            'beige': { r: 245, g: 245, b: 220 },
            'mistyrose': { r: 255, g: 228, b: 225 },
            'tomato': { r: 255, g: 99, b: 71 },
            'rosybrown': { r: 188, g: 143, b: 143 },
            'turquoise': { r: 64, g: 224, b: 208 },
            'powderblue': { r: 176, g: 224, b: 230 },
            'palegreen': { r: 152, g: 251, b: 152 },
            'thistle': { r: 216, g: 191, b: 216 },
            'sandybrown': { r: 244, g: 164, b: 96 }
        };

        let closest = 'fallback';
        let minDiff = 1000;

        for (const [name, target] of Object.entries(palette)) {
            const diff = Math.abs(rgbObj.r - target.r) + Math.abs(rgbObj.g - target.g) + Math.abs(rgbObj.b - target.b);
            if (diff < minDiff) {
                minDiff = diff;
                closest = name;
            }
        }

        return minDiff < 60 ? closest : 'fallback';
    }

    function transformSchedule() {
        // Inject Grid Style if missing
        if (!document.getElementById('modern-grid-style')) {
            const gs = document.createElement('style');
            gs.id = 'modern-grid-style';
            gs.innerHTML = `.table-forum.show-grid td { border: 1px solid rgba(0,0,0,0.1) !important; }`;
            document.head.appendChild(gs);
        }

        const table = document.querySelector('.table-forum');
        if (!table) return;

        // Reset: Remove existing blocks to re-scan from clean state
        const rows = Array.from(table.querySelectorAll('tr'));
        const rowCount = rows.length;
        if (rowCount === 0) return;

        const colCount = rows[0].querySelectorAll('td').length;

        for (let c = 1; c < colCount; c++) {
            let colData = [];

            for (let r = 1; r < rowCount; r++) {
                const cell = rows[r].querySelectorAll('td')[c];
                if (!cell) { colData.push(null); continue; }

                // data extraction
                let cellColor = '';
                let cellText = '';

                const existingBlock = cell.querySelector('.subject-block');

                if (existingBlock) {
                    // Extract from our block
                    const classes = existingBlock.className.split(' ');
                    const colorClass = classes.find(cl => cl.startsWith('block-') && cl !== 'block-single' && cl !== 'block-top' && cl !== 'block-middle' && cl !== 'block-bottom');
                    const colorName = colorClass ? colorClass.replace('block-', '') : 'fallback';

                    // Recover text
                    const b = existingBlock.querySelector('b');
                    const s = existingBlock.querySelector('span');
                    if (b || s) {
                        cellText = (b ? b.innerText : '') + ' ' + (s ? s.innerText : '');
                        cellText = cellText.trim();
                    }
                    colData.push({ r, colorName: colorName, text: cellText, cell: cell, isRecovered: true });

                } else {
                    // Original Cell
                    const compStyle = window.getComputedStyle(cell);
                    const bgColor = compStyle.backgroundColor;
                    const rgb = parseRGB(bgColor);

                    if (rgb && (rgb.r < 250 || rgb.g < 250 || rgb.b < 250)) {
                        cellText = cell.innerText.trim(); // Raw text
                        const colorName = getColorName(rgb);
                        colData.push({ r, colorName: colorName, text: cellText, cell: cell, isRecovered: false });
                    } else {
                        colData.push(null);
                    }
                }
            }

            // Merge Logic
            for (let i = 0; i < colData.length; i++) {
                const curr = colData[i];
                if (!curr) continue;

                let end = i;
                let mergedText = curr.text;

                while (end + 1 < colData.length) {
                    const next = colData[end + 1];
                    if (!next) break;
                    if (curr.colorName !== next.colorName) break;

                    if (next.text) mergedText += ' ' + next.text;
                    end++;
                }

                // If processed sequence i..end
                // Find visible labels (often only one has text)
                let labelFound = false;
                let mainLabel = '';
                let subLabel = '';

                // Scan group for text
                for (let k = i; k <= end; k++) {
                    const item = colData[k];
                    if (item && item.text && item.text.length > 1) {
                        const parts = item.text.split(' ');
                        mainLabel = parts[0];
                        subLabel = parts.slice(1).join(' ');
                        labelFound = true;
                        break;
                    }
                }

                // Apply to group
                for (let k = i; k <= end; k++) {
                    const item = colData[k];
                    if (!item) continue;
                    const cell = item.cell;

                    let posClass = 'block-middle';
                    if (i === end) posClass = 'block-single';
                    else if (k === i) posClass = 'block-top';
                    else if (k === end) posClass = 'block-bottom';

                    cell.innerHTML = '';
                    const block = document.createElement('div');
                    block.className = `subject-block block-${curr.colorName} ${posClass}`;

                    // Text only on TOP block of the merged group
                    if (k === i && labelFound) {
                        block.innerHTML = `<b>${mainLabel}</b><span>${subLabel}</span>`;
                    } else {
                        block.innerHTML = ``;
                        block.title = labelFound ? `${mainLabel} ${subLabel}` : '';
                    }

                    cell.appendChild(block);
                    cell.setAttribute('style', 'background-color: transparent !important; border: none !important; padding: 0 !important;');

                    // events
                    cell.addEventListener('mouseenter', (e) => {
                        e.stopPropagation();
                        const row = item.cell.closest('tr');
                        if (row) row.querySelectorAll('td').forEach(t => t.classList.add('highlight-row'));
                        const colIdx = item.cell.cellIndex;
                        table.querySelectorAll(`tr td:nth-child(${colIdx + 1})`).forEach(t => t.classList.add('highlight-col'));
                        cell.classList.add('highlight-pivot');
                    });
                    cell.addEventListener('mouseleave', (e) => {
                        e.stopPropagation();
                        table.querySelectorAll('td').forEach(t => t.classList.remove('highlight-row', 'highlight-col', 'highlight-pivot'));
                    });
                }

                i = end;
            }
        }

        // Floating Control Hub with Real Grid Toggle
        if (!document.getElementById('schedule-controls')) {
            const hub = document.createElement('div');
            hub.id = 'schedule-controls';
            hub.innerHTML = `
                <div class="control-panel">
                    <button id="btn-comf" class="control-btn active" title="Comfortable View"><i class="fa fa-arrows-v"></i></button>
                    <button id="btn-comp" class="control-btn" title="Compact View"><i class="fa fa-compress"></i></button>
                    <button id="btn-grid" class="control-btn" title="Toggle Grid"><i class="fa fa-th"></i></button>
                </div>
            `;
            document.body.appendChild(hub);

            // Add proper event listeners
            document.getElementById('btn-comf').onclick = () => {
                document.documentElement.style.setProperty('--cell-height', '60px');
                document.getElementById('btn-comf').classList.add('active');
                document.getElementById('btn-comp').classList.remove('active');
            };
            document.getElementById('btn-comp').onclick = () => {
                document.documentElement.style.setProperty('--cell-height', '32px');
                document.getElementById('btn-comp').classList.add('active');
                document.getElementById('btn-comf').classList.remove('active');
            };
            document.getElementById('btn-grid').onclick = () => {
                const tbl = document.querySelector('.table-forum');
                if (tbl) {
                    tbl.classList.toggle('show-grid');
                    document.getElementById('btn-grid').classList.toggle('active');
                }
            };
        }
    }

    // Initialize
    const observer = new MutationObserver((mutations) => {
        if (document.querySelector('.table-forum') && !document.querySelector('.subject-block')) {
            transformSchedule();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('load', transformSchedule);

})();
}
// --- MODULE: TUITION (v1.1) ---
if (path.includes('tuitionfeecomputation')) {
    console.log("[ISMIS Bundle] Initializing Tuition Module...");
(function () {
    'use strict';

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@500&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const modernCSS = `
        :root {
            --primary: #10B981;
            --primary-dark: #059669;
            --secondary: #3B82F6;
            --usc-gold: #FCD34D;
            --danger: #EF4444;
            --glass-bg: rgba(255, 255, 255, 0.9);
            --glass-border: rgba(255, 255, 255, 0.6);
            --text-main: #111827;
            --text-muted: #6B7280;
            --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        body {
            font-family: 'Inter', sans-serif !important;
            background: var(--bg-gradient) !important;
            color: var(--text-main);
        }

        /* --- Layout Cleanup --- */
        .page-content { padding-top: 20px !important; }
        .portlet.light {
            background: var(--glass-bg) !important;
            backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border) !important;
            border-radius: 20px !important;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05) !important;
            margin-bottom: 30px !important;
            padding: 25px !important;
        }

        .portlet-title { border-bottom: 1px solid rgba(0,0,0,0.05) !important; margin-bottom: 20px !important; padding-bottom: 15px !important; }
        .caption-subject { font-size: 1.1rem !important; font-weight: 800 !important; color: var(--text-main) !important; text-transform: uppercase; letter-spacing: 0.5px; }

        /* --- Financial Summary Grid --- */
        #modern-kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-bottom: 35px;
        }

        .kpi-card {
            background: white;
            border-radius: 18px;
            padding: 20px;
            border: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
            display: flex;
            flex-direction: column;
            transition: transform 0.2s;
        }
        .kpi-card:hover { transform: translateY(-3px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.08); }

        .kpi-label { font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px; }
        .kpi-value { font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--text-main); }
        .kpi-card.balance .kpi-value { color: var(--danger); }
        .kpi-card.paid .kpi-value { color: var(--primary-dark); }

        /* --- Search Form Modernization --- */
        .form-group label { font-weight: 600; color: var(--text-muted); font-size: 0.85rem; margin-bottom: 8px; }
        .input-group { border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
        .input-group-addon { background: #f8fafc !important; border: none !important; border-right: 1px solid #e2e8f0 !important; color: var(--primary) !important; }
        .form-control { border: none !important; height: 45px !important; font-size: 0.95rem !important; }
        .form-control:focus { box-shadow: none !important; }

        .btn.green {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%) !important;
            border: none !important;
            border-radius: 12px !important;
            font-weight: 700 !important;
            padding: 12px 25px !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2) !important;
        }

        /* --- Assessment Result Styling --- */
        #TuitionFeeComputationCurrentAcadPeriodList > p {
            font-size: 1.8rem !important;
            font-weight: 800;
            text-align: left !important;
            color: var(--primary-dark);
            margin: 20px 0 30px 0;
            padding-left: 10px;
            border-left: 5px solid var(--primary);
        }

        /* Student Banner */
        .student-info-banner {
            background: #111827;
            color: white;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }
        .student-info-main h2 { margin: 0; font-size: 1.2rem; font-weight: 700; letter-spacing: -0.02em; }
        .student-info-main span { opacity: 0.7; font-size: 0.85rem; }

        /* Tables Modernization */
        .table-forum { border: none !important; border-collapse: separate !important; border-spacing: 0 8px !important; width: 100% !important; margin-bottom: 30px !important; }
        .table-forum thead th { background: transparent !important; border: none !important; text-transform: uppercase; font-size: 0.7rem; font-weight: 700; color: var(--text-muted); padding: 10px 20px !important; }
        .table-forum tbody tr { background: white !important; border-radius: 12px !important; box-shadow: 0 1px 2px rgba(0,0,0,0.03) !important; transition: transform 0.2s; }
        .table-forum tbody tr:hover { transform: scale(1.005); box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important; z-index: 10; }
        .table-forum tbody td { border: none !important; padding: 15px 20px !important; font-size: 0.85rem; vertical-align: middle !important; }
        .table-forum tbody td:first-child { border-top-left-radius: 12px; border-bottom-left-radius: 12px; }
        .table-forum tbody td:last-child { border-top-right-radius: 12px; border-bottom-right-radius: 12px; }

        /* Currency Styling */
        .currency { font-family: 'JetBrains Mono', monospace; font-weight: 600; }
        a.green.rs-modal { color: var(--primary-dark) !important; font-weight: 700; text-decoration: underline !important; }

        /* Timeline / Sidebar integration */
        .timeline { display: none !important; } /* We will use our own summary logic */

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            margin-top: 40px;
        }

        .section-total-badge {
            background: #f1f5f9;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--text-main);
        }

        /* Action Buttons */
        .action-hub { display: flex; gap: 12px; margin-bottom: 30px; }
        .btn-action {
            background: white !important;
            border: 1px solid #e2e8f0 !important;
            color: var(--text-main) !important;
            border-radius: 10px !important;
            padding: 10px 20px !important;
            font-size: 0.85rem !important;
            font-weight: 600 !important;
            transition: all 0.2s;
        }
        .btn-action:hover { background: #f8fafc !important; border-color: var(--primary) !important; color: var(--primary-dark) !important; }

        /* Footer Totals Section (Proceed to Payment) */
        .payment-footer {
            background: white;
            border-radius: 20px;
            padding: 30px;
            border: 1px solid rgba(0,0,0,0.05);
            margin-top: 40px;
            display: flex;
            justify-content: flex-end;
            gap: 20px;
            flex-wrap: wrap;
        }

        .total-summary-item { text-align: right; }
        .total-summary-label { font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; display: block; }
        .total-summary-value { font-size: 1.4rem; font-weight: 800; color: var(--text-main); }
        .total-summary-value.highlight { color: var(--danger); }
        .btn-payment { background: var(--primary-dark) !important; color: white !important; padding: 15px 35px !important; border-radius: 12px !important; font-weight: 800 !important; text-transform: uppercase; display: flex; align-items: center; gap: 10px; text-decoration: none !important; }

        /* Hide Old UI Junk */
        .tools, .pull-right:not(.btn), .hidden, br, .top-news { display: none !important; }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = modernCSS;
    document.head.appendChild(style);

    function transformPage() {
        // --- Robust Duplication Prevention ---
        const resultsContainer = document.getElementById('TuitionFeeComputationCurrentAcadPeriodList');
        if (!resultsContainer) return;

        // Check 1: ID-based prevention
        if (document.getElementById('modern-kpi-grid')) return;

        // Check 2: Class-based existence prevention (legacy check)
        if (document.querySelector('.student-info-banner')) return;

        // --- Data Scraping ---
        // These are at the bottom of the original page in '.top-news' anchors
        const netAssessmentText = Array.from(document.querySelectorAll('.top-news a b')).find(el => el.parentElement.innerText.includes('Net Assessment'))?.innerText || '0.00';
        const totalPaymentsText = Array.from(document.querySelectorAll('.top-news a b')).find(el => el.parentElement.innerText.includes('Total Payments'))?.innerText || '0.00';
        const balanceText = Array.from(document.querySelectorAll('.top-news a b')).find(el => el.parentElement.innerText.includes('Remaining Balance'))?.innerText || '0.00';
        const forwardedText = Array.from(document.querySelectorAll('.top-news a b')).find(el => el.parentElement.innerText.includes('Forwarded Balance'))?.innerText || '0.00';

        // --- 1. Inject KPI Grid ---
        const kpiGrid = document.createElement('div');
        kpiGrid.id = 'modern-kpi-grid';
        kpiGrid.innerHTML = `
            <div class="kpi-card">
                <span class="kpi-label">Financial Obligation</span>
                <span class="kpi-value currency">?${netAssessmentText}</span>
            </div>
            <div class="kpi-card paid">
                <span class="kpi-label">Successfully Paid</span>
                <span class="kpi-value currency">?${totalPaymentsText}</span>
            </div>
             <div class="kpi-card balance">
                <span class="kpi-label">Remaining Balance</span>
                <span class="kpi-value currency">?${balanceText}</span>
            </div>
            <div class="kpi-card">
                <span class="kpi-label">Forwarded Balance</span>
                <span class="kpi-value currency">?${forwardedText}</span>
            </div>
        `;
        resultsContainer.prepend(kpiGrid);

        // --- 2. Transform Student Banner ---
        const studentInfoNode = document.querySelector('.caption-subject.bold.uppercase');
        const studentFullInfo = studentInfoNode ? studentInfoNode.innerText.trim() : 'Assessment Details';

        if (studentInfoNode) {
            const banner = document.createElement('div');
            banner.className = 'student-info-banner';
            const parts = studentFullInfo.split(' ');
            const idNumber = parts[0] || '';
            const fullName = studentFullInfo.replace(idNumber, '').trim();

            banner.innerHTML = `
                <div class="student-info-main">
                    <span>Student Profile</span>
                    <h2>${fullName}</h2>
                    <span>ID: ${idNumber}</span>
                </div>
                <div class="student-info-actions">
                    <a href="/TuitionFeeComputation/PaymentHistoryStudent2" class="btn-action rs-modal">Payment History</a>
                    <a href="/TuitionFeeComputation/StudentLedgerStudent?term=1&year=2025" target="_blank" class="btn-action">Student Ledger</a>
                    <a href="https://ismis.usc.edu.ph/Paymaya/FirstIndex" target="_blank" class="btn red btn-action" style="background:#EF4444 !important; color:white !important; border:none !important;">Pay Online</a>
                </div>
            `;
            kpiGrid.after(banner); // Place after KPI grid
        }

        // --- 3. Style Headers & Tables ---
        const captions = document.querySelectorAll('.caption');
        captions.forEach(cap => {
            if (cap.closest('.student-info-banner')) return; // Skip our own banner
            const subject = cap.querySelector('.caption-subject');
            if (subject) {
                const text = subject.innerText.trim();
                if (text && !text.includes('[') && text !== 'SEARCH TUITION FEE ASSESSMENT') {
                    if (cap.querySelector('.section-header')) return; // skip if already styled

                    const header = document.createElement('div');
                    header.className = 'section-header';
                    header.innerHTML = `<h3>${text}</h3>`;

                    const parent = cap.closest('.portlet-light') || cap.parentElement;
                    const timelineTotal = parent.querySelector('.timeline h2 + .timeline-content b')?.innerText || '';
                    if (timelineTotal) {
                        header.innerHTML += `<span class="section-total-badge">Total Course Fee: ${timelineTotal.split(':')[1]?.trim() || ''}</span>`;
                    }
                    cap.replaceWith(header);
                }
            }
        });

        const tables = document.querySelectorAll('.table-forum:not(.modern)');
        tables.forEach(table => {
            table.classList.add('modern');
            const cells = table.querySelectorAll('td');
            cells.forEach(td => {
                if (td.innerText.includes(',') || (td.innerText.match(/\./g) || []).length === 1 && !isNaN(parseFloat(td.innerText))) {
                    td.classList.add('currency');
                }
            });
        });
    }

    // Initialize transformations
    const observer = new MutationObserver((mutations) => {
        // Trigger only if container exists but our modification is missing
        if (document.getElementById('TuitionFeeComputationCurrentAcadPeriodList') && !document.getElementById('modern-kpi-grid')) {
            transformPage();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('load', transformPage);

})();
}
}) ();
