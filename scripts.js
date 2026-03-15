
        document.addEventListener('DOMContentLoaded', () => {
            // --- Mobile Menu Logic ---
            const button = document.getElementById('mobile-menu-button');
            const menu = document.getElementById('mobile-menu');

            button.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Close menu when a link is clicked
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });

            // Simple smooth scrolling for internal links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });


            // --- Carousel Logic ---
            const newsItems = [
                {
                    title: "Grant-in-Aid Award",
                    description: "Rafailia earns an award for her work on RNA and protein analysis techniques to understand how different forms of the Androgen Receptor activate specific cancer programs.",
                    imageUrl: "images/events/rafailia_award.png"
                },
                {
                    title: "Poster Presentations",
                    description: "Shabnam gave a gave a great presentation on her work investigating androgen receptor splice variant AR-V7 condensates and their role in activating specific oncogenic programs and she won the Best Basic Science Prize!!! Nicholas presented a poster on his characterization of AR sequences involved in condensate formation, while Louise's  poster showcased her work establishing bioprinted bone models to study PARP and HDAC inhibitors in prostatecancer and sarcoma. ",
                    imageUrl: "images/events/poster_presentations.png"
                },
                {
                    title: "Best Basic Science Prize",
                    description: "Shabnam recieves the Best Basic Science Prize at the 19th Annual Lorne D. Sullivan Urology Research Day for my presentation: “Comparing the Phase Behaviour of the Androgen Receptor (AR) and Its Splice Variant (AR-V7) in Prostate Cancer.” ",
                    imageUrl: "images/events/shabnam_award.png"
                },
                {
                    title: "Graduation!",
                    description: "Nicholas completes his Master's Degree from The University of British Columbia! Congratulations Nicholas!",
                    imageUrl: "images/events/nic_graduation.png"
                },
                {
                    title: "Idea Development Award",
                    description: "Dr. Nada Lallous has received an Idea Development Award from the U.S. DoD Prostate Cancer Research Program. This $1.48M grant supports her collaborative study on androgen receptor condensates in treatment-resistant prostate cancer.",
                    imageUrl: "images/events/nada_award.png"
                },
                {
                    title: "Graduation!",
                    description: "Dr. Jane Foo graduates! Congratulations Jane!",
                    imageUrl: "images/events/jane_graduation.png"
                },
            ];

            let currentSlideIndex = 0;
            const slidesContainer = document.getElementById('carousel-slides');
            const indicatorsContainer = document.getElementById('carousel-indicators');
            const prevButton = document.getElementById('prev-button');
            const nextButton = document.getElementById('next-button');

            function renderCarousel() {
                slidesContainer.innerHTML = '';
                indicatorsContainer.innerHTML = '';

                newsItems.forEach((item, index) => {
                    // Create Slide Element
                    const slide = document.createElement('div');
                    slide.className = `slide flex flex-col md:flex-row transition-opacity duration-500 ease-in-out ${index === currentSlideIndex ? 'opacity-100 block' : 'opacity-0 hidden'}`;
                    
                    slide.innerHTML = `
                        <div class="md:w-1/2">
                            <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-auto object-cover md:rounded-l-xl md:rounded-r-none rounded-t-xl" onerror="this.onerror=null; this.src='https://placehold.co/800x400/1f2937/f3f4f6?text=Image+Unavailable';">
                        </div>
                        <div class="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                            <h3 class="text-xl md:text-2xl font-bold text-teal-600 mb-3">${item.title}</h3>
                            <p class="text-gray-700">${item.description}</p>
                        </div>
                    `;
                    slidesContainer.appendChild(slide);

                    // Create Indicator Dots
                    const indicator = document.createElement('button');
                    indicator.className = `w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${index === currentSlideIndex ? 'bg-teal-600' : 'bg-gray-300 hover:bg-gray-400'}`;
                    indicator.setAttribute('data-index', index);
                    indicator.addEventListener('click', () => {
                        currentSlideIndex = index;
                        renderCarousel();
                    });
                    indicatorsContainer.appendChild(indicator);
                });
            }

            function nextSlide() {
                currentSlideIndex = (currentSlideIndex + 1) % newsItems.length;
                renderCarousel();
            }

            function prevSlide() {
                currentSlideIndex = (currentSlideIndex - 1 + newsItems.length) % newsItems.length;
                renderCarousel();
            }

            // Initial render
            renderCarousel();

            // Event listeners for navigation buttons
            nextButton.addEventListener('click', nextSlide);
            prevButton.addEventListener('click', prevSlide);

            // Optional: Auto-advance slides every 5 seconds
            //setInterval(nextSlide, 5000);


            // --- Publications Filter Logic ---
            const publications = [
                {
                    year: "2025",
                    title: "Single-cell profiling reveals immune landscape plasticity in drug-resistant lung cancer.",
                    authors: "Sharma, A., Jin, K., Popova, E. et al.",
                    journal: "Nature Genetics",
                    doi: "https://www.youtube.com/"
                },
                {
                    year: "2024",
                    title: "A Bayesian framework for robust inference of cellular trajectories from noisy scRNA-seq data.",
                    authors: "Popova, E., Sharma, A., et al.",
                    journal: "Cell Systems",
                    doi: ""
                },

            ];

            const yearFiltersContainer = document.getElementById('pub-year-filters');
            const pubListContainer = document.getElementById('publications-list');
            
            // Get unique years and sort descending
            const years = ["All", ...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
            let activeYear = "All";

            function renderPubs() {
                // Render filter buttons
                yearFiltersContainer.innerHTML = '';
                years.forEach(year => {
                    const btn = document.createElement('button');
                    btn.textContent = year;
                    btn.className = `px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                        activeYear === year 
                        ? 'bg-teal-600 border-teal-600 text-white shadow-md' 
                        : 'border-teal-600 text-teal-600 hover:bg-teal-50'
                    }`;
                    btn.onclick = () => {
                        activeYear = year;
                        renderPubs();
                    };
                    yearFiltersContainer.appendChild(btn);
                });

                // Render list
                pubListContainer.innerHTML = '';
                const filtered = activeYear === "All" 
                    ? publications 
                    : publications.filter(p => p.year === activeYear);

                filtered.forEach(pub => {
                    const item = document.createElement('div');
                    item.className = 'bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300';
                    item.innerHTML = `
                        <p class="text-lg font-semibold text-gray-800">${pub.title}</p>
                        <p class="text-sm text-gray-600 mt-2">
                            ${pub.authors} <span class="text-teal-600 italic font-medium">${pub.journal}</span> (${pub.year}). 
                            <a href= ${pub.doi} class="ml-2 text-blue-500 hover:underline inline-flex items-center">
                                [DOI]
                            </a>
                        </p>
                    `;
                    pubListContainer.appendChild(item);
                });
            }

            renderPubs();
        });