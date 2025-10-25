<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sidharth Jain - Project & Program Management Analyst</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #e0e0e0;
            background-color: #0f1419;
        }
        
        header {
            background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 15px rgba(138, 43, 226, 0.2);
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid rgba(138, 43, 226, 0.3);
            flex-wrap: nowrap;
        }
        
        nav {
            display: flex;
            gap: 30px;
            white-space: nowrap;
        }
        
        .logo {
            font-weight: 800;
            font-size: 24px;
            color: #fff;
            letter-spacing: 1px;
        }
        
        nav a {
            text-decoration: none;
            color: #b0b0b0;
            font-weight: 500;
            transition: color 0.3s;
            white-space: nowrap;
        }
        
        nav a:hover {
            color: #8a2be2;
        }
        
        .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            padding: 80px 50px;
            background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
            border-bottom: 1px solid rgba(138, 43, 226, 0.2);
        }
        
        .hero-content h2 {
            font-size: 16px;
            color: #8a2be2;
            margin-bottom: 20px;
            font-weight: 500;
        }
        
        .hero-content h1 {
            font-size: 48px;
            margin-bottom: 20px;
            color: #fff;
        }
        
        .hero-title {
            font-size: 24px;
            color: #8a2be2;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .hero-content p {
            font-size: 16px;
            color: #b0b0b0;
            margin-bottom: 30px;
            line-height: 1.8;
        }
        
        .location-info {
            font-size: 14px;
            color: #8a2be2;
            margin-bottom: 20px;
        }
        
        .cta-button {
            display: inline-block;
            background: #8a2be2;
            color: white;
            padding: 12px 30px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            border: 2px solid #8a2be2;
            cursor: pointer;
        }
        
        .cta-button:hover {
            background: transparent;
            color: #8a2be2;
        }
        
        .hero-image {
            width: 100%;
            height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .hero-image img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
            border: 4px solid #8a2be2;
            box-shadow: 0 0 30px rgba(138, 43, 226, 0.5);
        }
        
        section {
            padding: 80px 50px;
            border-bottom: 1px solid rgba(138, 43, 226, 0.2);
        }
        
        .section-title {
            text-align: center;
            font-size: 36px;
            margin-bottom: 60px;
            color: #fff;
        }
        
        .about-content {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .about-content p {
            font-size: 16px;
            color: #b0b0b0;
            margin-bottom: 20px;
            line-height: 1.9;
        }
        
        .experience-container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .exp-item {
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-left: 3px solid #8a2be2;
            padding-left: 30px;
            position: relative;
        }
        
        .exp-item::before {
            content: '';
            position: absolute;
            left: -9px;
            top: 0;
            width: 12px;
            height: 12px;
            background: #8a2be2;
            border-radius: 50%;
            border: 3px solid #0f1419;
        }
        
        .company-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .company-logo {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #8a2be2 0%, #5a1fa3 100%);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 12px;
        }
        
        .company-info h3 {
            color: #fff;
            font-size: 18px;
            margin-bottom: 5px;
        }
        
        .company-info p {
            color: #8a2be2;
            font-size: 14px;
            margin: 0;
        }
        
        .job-title {
            font-size: 18px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 8px;
        }
        
        .job-type {
            display: inline-block;
            background: rgba(138, 43, 226, 0.2);
            color: #8a2be2;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            margin-bottom: 10px;
            margin-right: 10px;
        }
        
        .job-duration {
            font-size: 14px;
            color: #888;
            margin-bottom: 8px;
        }
        
        .job-location {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
        }
        
        .job-description {
            font-size: 15px;
            color: #b0b0b0;
            margin-bottom: 12px;
            line-height: 1.8;
        }
        
        .skills-tag {
            display: inline-block;
            background: rgba(138, 43, 226, 0.2);
            color: #8a2be2;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            margin-right: 8px;
            margin-bottom: 8px;
        }
        
        .certificates-container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .carousel-wrapper {
            position: relative;
            background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(138, 43, 226, 0.3);
        }
        
        .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
        
        .carousel-slide {
            min-width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
        }
        
        .carousel-slide img {
            max-width: 100%;
            max-height: 500px;
            border-radius: 8px;
            box-shadow: 0 8px 25px rgba(138, 43, 226, 0.2);
        }
        
        .carousel-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 30px;
            background: rgba(30, 35, 46, 0.8);
            border-top: 1px solid rgba(138, 43, 226, 0.3);
        }
        
        .carousel-button {
            background: #8a2be2;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
            font-size: 14px;
        }
        
        .carousel-button:hover {
            background: transparent;
            border: 2px solid #8a2be2;
            color: #8a2be2;
        }
        
        .carousel-button:active {
            transform: scale(0.95);
        }
        
        .carousel-counter {
            color: #8a2be2;
            font-weight: 600;
            font-size: 14px;
        }
        
        .carousel-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding: 15px;
        }
        
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(138, 43, 226, 0.4);
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .dot.active {
            background: #8a2be2;
            transform: scale(1.2);
        }
        
        .dot:hover {
            background: #8a2be2;
        }
        
        .contact-section {
            background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
            text-align: center;
        }
        
        .contact-section .section-title {
            margin-bottom: 40px;
        }
        
        .contact-description {
            max-width: 600px;
            margin: 0 auto 40px;
            color: #b0b0b0;
            font-size: 16px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            max-width: 400px;
            padding: 12px 16px;
            border: 1px solid rgba(138, 43, 226, 0.3);
            border-radius: 6px;
            font-size: 14px;
            font-family: inherit;
            background: rgba(30, 35, 46, 0.8);
            color: #e0e0e0;
            transition: all 0.3s;
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: #666;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #8a2be2;
            background: rgba(30, 35, 46, 1);
            box-shadow: 0 0 15px rgba(138, 43, 226, 0.2);
        }
        
        .form-group textarea {
            resize: vertical;
            min-height: 120px;
            max-width: 400px;
        }
        
        .social-links {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 30px;
        }
        
        .social-link {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(138, 43, 226, 0.2);
            border: 1px solid rgba(138, 43, 226, 0.4);
            border-radius: 50%;
            text-decoration: none;
            color: #8a2be2;
            transition: all 0.3s;
        }
        
        .social-link:hover {
            background: #8a2be2;
            color: #fff;
        }
        
        footer {
            background: #000;
            color: #888;
            text-align: center;
            padding: 40px;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            .hero, .testimonial-grid {
                grid-template-columns: 1fr;
            }
            
            header {
                flex-direction: column;
                gap: 20px;
                padding: 20px;
            }
            
            nav {
                display: flex;
                gap: 20px;
            }
            
            nav a {
                margin-left: 0;
            }
            
            section {
                padding: 40px 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo"></div>
        <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h2>Project & Program Management Analyst</h2>
            <h1>Sidharth Jain</h1>
            <div class="hero-title">Accenture | Resource & Capacity Planning | PCS Certified</div>
            <p>Detail-oriented and impact-driven Project & Program Management Analyst with 3+ years of experience at Accenture. Expert in resource and bench management, project staffing, capacity planning, and operational coordination. PCS Certified with proficiency in Power BI, Excel, and MS Project.</p>
            <div class="location-info">📍 Jaipur, Rajasthan, India</div>
            <button class="cta-button" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">Get In Touch</button>
        </div>
        <div class="hero-image">
            <img src="C:\Users\sidharth\Desktop\portfolio\assets\images\sidharthjain.png" alt="Sidharth Jain">
        </div>
    </section>
    
    <!-- About Section -->
    <section id="about">
        <h3 class="section-title">About Me</h3>
        <div class="about-content">
            <p>I'm Sidharth Jain, a detail-oriented and impact-driven Project & Program Management Analyst with over 3 years of experience at Accenture. My core expertise lies in resource and bench management, project staffing, capacity planning, and end-to-end operational coordination across multiple markets.</p>
            
            <p>I have successfully managed the staffing and allocation of over 140+ professionals, aligning skill sets with the right projects to ensure delivery efficiency and business success. I've also handled WBSE charge code management for salary submissions, onboarding/offboarding workflows for 60+ employees, and MD-level stakeholder meeting coordination across Indian locations – ensuring smooth transitions and consistent operational excellence.</p>
            
            <p>I'm PCS Certified (Program Control Services – Expert Level 3.5) and proficient in Power BI, Excel, MS Project, and PowerPoint, using these tools to reduce errors, optimize reports, and deliver data-driven decisions that add real value.</p>
            
            <p>Known for my strong communication, cross-functional collaboration, and high-pressure adaptability, I'm passionate about improving program control, resource governance, and stakeholder reporting for large-scale initiatives.</p>
            
            <p>🚀 I'm now looking for dynamic opportunities in project/program management, PMO operations, or business reporting, where I can bring my analytical mindset, process excellence, and leadership skills to make a strategic impact.</p>
            
            <p>Let's connect and explore how we can grow together!</p>
        </div>
    </section>
    
    <!-- Experience Section -->
    <section id="experience">
        <h3 class="section-title">Experience</h3>
        <div class="experience-container">
            
            <!-- Experience 1 -->
            <div class="exp-item">
                <div class="company-header">
                    <div class="company-logo">A</div>
                    <div class="company-info">
                        <h3>Accenture</h3>
                        <p>3 years 9 months</p>
                    </div>
                </div>
                
                <div class="job-title">Packaged App Development Analyst | PMO</div>
                <div><span class="job-type">Full-time</span></div>
                <div class="job-duration">Jun 2024 - Present • 1 yr 5 mos</div>
                <div class="job-location">📍 Jaipur, Rajasthan, India • Hybrid</div>
                <div class="job-description">• Managed end-to-end staffing and resource allocation for 140+ team members across global projects, improving productivity and billing efficiency</div>
                <div class="job-description">• Coordinated program-level planning and capacity forecasting to align resources with project demands</div>
                <div class="job-description">• Optimized WBSE charge code management and streamlined onboarding/offboarding processes for organizational efficiency</div>
                <div>
                    <span class="skills-tag">Microsoft PowerPoint</span>
                    <span class="skills-tag">Microsoft Excel</span>
                    <span class="skills-tag">Project Planning</span>
                    <span class="skills-tag">Resource Management</span>
                    <span class="skills-tag">Capacity Planning</span>
                </div>
            </div>
            
            <!-- Experience 2 -->
            <div class="exp-item">
                <div class="job-title">Packaged App Development Associate | PMO</div>
                <div><span class="job-type">Full-time</span></div>
                <div class="job-duration">Jun 2022 - Present • 3 yrs 5 mos</div>
                <div class="job-location">📍 Jaipur, Rajasthan, India • Remote</div>
                <div class="job-description">• Supported project management operations and resource coordination initiatives</div>
                <div class="job-description">• Assisted in capacity planning and staffing allocation processes</div>
                <div class="job-description">• Contributed to process improvements and operational excellence</div>
                <div>
                    <span class="skills-tag">Microsoft PowerPoint</span>
                    <span class="skills-tag">Microsoft Excel</span>
                    <span class="skills-tag">Project Planning</span>
                </div>
            </div>
            
            <!-- Experience 3 -->
            <div class="exp-item">
                <div class="job-title">Low Code Development Associate</div>
                <div><span class="job-type">Internship</span></div>
                <div class="job-duration">Feb 2022 - May 2022 • 4 months</div>
                <div class="job-location">📍 Bengaluru, Karnataka, India • Remote</div>
                <div class="job-description">• Developed proficiency in low-code development platforms and tools</div>
                <div class="job-description">• Collaborated with development teams on application projects</div>
                <div class="job-description">• Gained hands-on experience in modern development practices</div>
                <div>
                    <span class="skills-tag">Microsoft PowerPoint</span>
                    <span class="skills-tag">Microsoft Excel</span>
                    <span class="skills-tag">Low-Code Development</span>
                </div>
            </div>
            
        </div>
    </section>
    

    
    <!-- Certificates Section -->
    <section id="certificates">
        <h3 class="section-title">Certificates</h3>
        <div class="certificates-container">
            <div class="carousel-wrapper">
                <div class="carousel" id="carousel">
                    <div class="carousel-slide">
                        <img src="assets/images/certi1.png" alt="Certificate 1">
                    </div>
                    <div class="carousel-slide">
                        <img src="assets/images/certi2.jpg" alt="Certificate 2">
                    </div>
                    <div class="carousel-slide">
                        <img src="assets/images/certi3.png" alt="Certificate 3">
                    </div>
                    <div class="carousel-slide">
                        <img src="assets/images/certi4.jpg" alt="Certificate 4">
                    </div>
                    <div class="carousel-slide">
                        <img src="assets/images/certi5.jpg" alt="Certificate 5">
                    </div>
                    <div class="carousel-slide">
                        <img src="assets/images/certi6.jpg" alt="Certificate 6">
                    </div>
                    <div class="carousel-slide">
                        <img src="assets/images/certi7.jpg" alt="Certificate 7">
                    </div>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-button" onclick="prevSlide()">← Previous</button>
                    <span class="carousel-counter"><span id="current">1</span> / <span id="total">7</span></span>
                    <button class="carousel-button" onclick="nextSlide()">Next →</button>
                </div>
            </div>
            
            <div class="carousel-dots" id="dots"></div>
        </div>
    </section>
    
    <section id="contact" class="contact-section">
        <h3 class="section-title">Let's Work Together</h3>
        <p class="contact-description">Have a project opportunity or want to discuss collaboration? I'd love to hear from you. Get in touch and let's create something impactful together.</p>
        
        <form action="https://formspree.io/f/mblprnnr" method="POST">
            <div class="form-group">
                <input type="text" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <input type="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <textarea name="message" placeholder="Tell me about your project or opportunity..." required></textarea>
            </div>
            <button type="submit" class="cta-button">Send Message</button>
        </form>
        
        <div class="social-links">
            <a href="https://www.linkedin.com/in/sidharth-jain-management" target="_blank" class="social-link" title="LinkedIn">in</a>
            <a href="mailto:sidharth.10n@gmail.com" class="social-link" title="Email">✉</a>
            <a href="https://explorewithme.live/index.html" target="_blank" class="social-link" title="Website">🌐</a>
        </div>
    </section>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Sidharth Jain. All rights reserved. | Project & Program Management Analyst | Accenture</p>
    </footer>
    
    <script>
        let currentSlide = 0;
        const totalSlides = 7;
        let autoScrollInterval;

        function showSlide(n) {
            const carousel = document.getElementById('carousel');
            const dots = document.querySelectorAll('.dot');
            
            if (n >= totalSlides) currentSlide = 0;
            if (n < 0) currentSlide = totalSlides - 1;
            
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            document.getElementById('current').textContent = currentSlide + 1;
            
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === currentSlide) dot.classList.add('active');
            });
        }

        function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
            resetAutoScroll();
        }

        function prevSlide() {
            currentSlide--;
            showSlide(currentSlide);
            resetAutoScroll();
        }

        function autoScroll() {
            currentSlide++;
            showSlide(currentSlide);
        }

        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(autoScroll, 3000);
        }

        function initializeDots() {
            const dotsContainer = document.getElementById('dots');
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.onclick = () => {
                    currentSlide = i;
                    showSlide(currentSlide);
                    resetAutoScroll();
                };
                dotsContainer.appendChild(dot);
            }
        }

        // Initialize carousel
        initializeDots();
        autoScrollInterval = setInterval(autoScroll, 3000);
    </script>
</body>
</html>
