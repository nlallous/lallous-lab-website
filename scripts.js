
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
        const selectedPublications = [     {
            year: "2026",
            title: "Next-generation predictors of protein phase behavior.",
            authors: "Pinette NC, Terrado M, Bui JM, Lallous N, Gsponer J.",
            journal: "Curr Opin Struct Biol.",
            doi: "https://doi.org/10.1016/j.sbi.2025.103197"
        },
        {
            year: "2025",
            title: "AR-V7 condensates drive androgen-independent transcription in castration resistant prostate cancer.",
            authors: "Massah S, Pinette N, Foo J, Datta S, Guo M, Bell R, Haegert A, Tekoglu TE, Terrado M, Volik S, Bihan SL, Bui JM, Lack NA, Gleave ME, Rhie SK, Collins CC, Gsponer J, Lallous N.",
            journal: "bioRxiv.",
            doi: "https://doi.org/10.1101/2025.01.08.631986"
        },
        {
            year: "2023",
            title: "Dynamic phase separation of the androgen receptor and its coactivators key to regulate gene expression.",
            authors: "Zhang F, Biswas M, Massah S, Lee J, Lingadahalli S, Wong S, Wells C, Foo J, Khan N, Morin H, Saxena N, Kung SHY, Sun B, Parra Nuñez AK, Sanchez C, Chan N, Ung L, Altıntaş UB, Bui JM, Wang Y, Fazli L, Oo HZ, Rennie PS, Lack NA, Cherkasov A, Gleave ME, Gsponer J, Lallous N.",
            journal: "Nucleic Acids Res.",
            doi: "https://doi.org/10.1093/nar/gkac1158"
        },
        {
            year: "2024",
            title: "Characterization of novel small molecule inhibitors of estrogen receptor-activation function 2 (ER-AF2).",
            authors: "Foo J, Gentile F, Massah S, Morin H, Singh K, Lee J, Smith J, Ban F, LeBlanc E, Young R, Strynadka N, Lallous N, Cherkasov A.",
            journal: "Breast Cancer Res.",
            doi: "https://doi.org/10.1186/s13058-024-01926-2"
        },
        {
            year: "2022",
            title: "Structure-Based Study to Overcome Cross-Reactivity of Novel Androgen Receptor Inhibitors.",
            authors: "Radaeva M, Li H, LeBlanc E, Dalal K, Ban F, Ciesielski F, Chow B, Morin H, Awrey S, Singh K, Rennie PS, Lallous N, Cherkasov A.",
            journal: "Cells.",
            doi: "https://doi.org/10.3390/cells11182785"
        },
        {
            year: "2021",
            title: "Evaluation of Darolutamide (ODM201) Efficiency on Androgen Receptor Mutants Reported to Date in Prostate Cancer Patients.",
            authors: "Lallous N, Snow O, Sanchez C, Parra Nuñez AK, Sun B, Hussain A, Lee J, Morin H, Leblanc E, Gleave ME, Cherkasov A.",
            journal: "Cancers (Basel).",
            doi: "https://doi.org/10.3390/cancers13122939"
        },
        {
            year: "2016",
            title: "Functional analysis of androgen receptor mutations that confer anti-androgen resistance identified in circulating cell-free DNA from prostate cancer patients.",
            authors: "Lallous N, Volik SV, Awrey S, Leblanc E, Tse R, Murillo J, Singh K, Azad AA, Wyatt AW, LeBihan S, Chi KN, Gleave ME, Rennie PS, Collins CC, Cherkasov A.",
            journal: "Genome Biol.",
            doi: "https://doi.org/10.1186/s13059-015-0864-1"
        },
    ];

    const allPublications = [
            {
                year: "2026",
                title: "Next-generation predictors of protein phase behavior.",
                authors: "Pinette NC, Terrado M, Bui JM, Lallous N, Gsponer J.",
                journal: "Curr Opin Struct Biol.",
                doi: "https://doi.org/10.1016/j.sbi.2025.103197"
            },
            {
                year: "2025",
                title: "A scalable reinforcement learning approach for screening large peptide libraries for bioactive peptide discovery.",
                authors: "Pandey M, Foo J, Massah S, Alford MA, Mslati H, Subbaraj G, Saba M, Gentile F, Lallous N, Haney EF, Hancock REW, Ester M, Cherkasov A.",
                journal: "Nat Commun.",
                doi: "https://doi.org/10.1038/s41467-025-66748-y"
            },
            {
                year: "2025",
                title: "The regulation of miR-155 strand selection by CELF2, FUBP1 and KSRP proteins.",
                authors: "Yoon JSJ, Chamberlain TC, Lallous N, Mui AL.",
                journal: "Sci Rep.",
                doi: "https://doi.org/10.1038/s41598-025-15004-w"
            },
            {
                year: "2025",
                title: "Deep Modeling of Gain-of-Function Mutations on Androgen Receptor.",
                authors: "You J, Foo J, Lallous N, Cherkasov A.",
                journal: "Mol Inform.",
                doi: "https://doi.org/10.1002/minf.202500018"
            },
            {
                year: "2025",
                title: "AR-V7 condensates drive androgen-independent transcription in castration resistant prostate cancer.",
                authors: "Massah S, Pinette N, Foo J, Datta S, Guo M, Bell R, Haegert A, Tekoglu TE, Terrado M, Volik S, Bihan SL, Bui JM, Lack NA, Gleave ME, Rhie SK, Collins CC, Gsponer J, Lallous N.",
                journal: "bioRxiv.",
                doi: "https://doi.org/10.1101/2025.01.08.631986"
            },
            {
                year: "2025",
                title: "Developing novel Lin28 inhibitors by computer aided drug design.",
                authors: "Matias-Barrios VM, Radaeva M, Rosellinny G, Jia Q, Xie N, Villanueva M, Ibrahim H, Smith J, Gleave M, Lallous N, Straus SK, Cherkasov A, Dong X.",
                journal: "Cell Death Discov.",
                doi: "https://doi.org/10.1038/s41420-024-02281-z"
            },
            {
                year: "2024",
                title: "Characterization of novel small molecule inhibitors of estrogen receptor-activation function 2 (ER-AF2).",
                authors: "Foo J, Gentile F, Massah S, Morin H, Singh K, Lee J, Smith J, Ban F, LeBlanc E, Young R, Strynadka N, Lallous N, Cherkasov A.",
                journal: "Breast Cancer Res.",
                doi: "https://doi.org/10.1186/s13058-024-01926-2"
            },
            {
                year: "2023",
                title: "A Bifunctional PARP-HDAC Inhibitor with Activity in Ewing Sarcoma.",
                authors: "Ramos L, Truong S, Zhai B, Joshi J, Ghaidi F, Lizardo MM, Shyp T, Kung SHY, Rezakhanlou AM, Oo HZ, Adomat H, Le Bihan S, Collins C, Bacha J, Brown D, Langlands J, Shen W, Lallous N, Sorensen PH, Daugaard M.",
                journal: "Clin Cancer Res.",
                doi: "https://doi.org/10.1158/1078-0432.CCR-22-3897"
            },
            {
                year: "2023",
                title: "Novel Inhibitors of androgen receptor's DNA binding domain identified using an ultra-large virtual screening.",
                authors: "Radaeva M, Morin H, Pandey M, Ban F, Guo M, LeBlanc E, Lallous N, Cherkasov A.",
                journal: "Mol Inform.",
                doi: "https://doi.org/10.1002/minf.202300026"
            },
            {
                year: "2023",
                title: "PurificationDB: database of purification conditions for proteins.",
                authors: "Garland O, Radaeva M, Pandey M, Cherkasov A, Lallous N.",
                journal: "Database (Oxford).",
                doi: "https://doi.org/10.1093/database/baad016"
            },
            {
                year: "2023",
                title: "Dynamic phase separation of the androgen receptor and its coactivators key to regulate gene expression.",
                authors: "Zhang F, Biswas M, Massah S, Lee J, Lingadahalli S, Wong S, Wells C, Foo J, Khan N, Morin H, Saxena N, Kung SHY, Sun B, Parra Nuñez AK, Sanchez C, Chan N, Ung L, Altıntaş UB, Bui JM, Wang Y, Fazli L, Oo HZ, Rennie PS, Lack NA, Cherkasov A, Gleave ME, Gsponer J, Lallous N.",
                journal: "Nucleic Acids Res.",
                doi: "https://doi.org/10.1093/nar/gkac1158"
            },
            {
                year: "2022",
                title: "Discovery of Novel Lin28 Inhibitors to Suppress Cancer Cell Stemness.",
                authors: "Radaeva M, Ho CH, Xie N, Zhang S, Lee J, Liu L, Lallous N, Cherkasov A, Dong X.",
                journal: "Cancers (Basel).",
                doi: "https://doi.org/10.3390/cancers14225687"
            },
            {
                year: "2022",
                title: "Structure-Based Study to Overcome Cross-Reactivity of Novel Androgen Receptor Inhibitors.",
                authors: "Radaeva M, Li H, LeBlanc E, Dalal K, Ban F, Ciesielski F, Chow B, Morin H, Awrey S, Singh K, Rennie PS, Lallous N, Cherkasov A.",
                journal: "Cells.",
                doi: "https://doi.org/10.3390/cells11182785"
            },
            {
                year: "2022",
                title: "Reformation of the chondroitin sulfate glycocalyx enables progression of AR-independent prostate cancer.",
                authors: "Al-Nakouzi N, Wang CK, Oo HZ, Nelepcu I, Lallous N, Spliid CB, Khazamipour N, Lo J, Truong S, Collins C, Hui D, Esfandnia S, Adomat H, Clausen TM, Gustavsson T, Choudhary S, Dagil R, Corey E, Wang Y, Chauchereau A, Fazli L, Esko JD, Salanti A, Nelson PS, Gleave ME, Daugaard M.",
                journal: "Nat Commun.",
                doi: "https://doi.org/10.1038/s41467-022-32530-7"
            },
            {
                year: "2022",
                title: "Development of VPC-70619, a Small-Molecule N-Myc Inhibitor as a Potential Therapy for Neuroendocrine Prostate Cancer.",
                authors: "Ton AT, Foo J, Singh K, Lee J, Kalyta A, Morin H, Perez C, Ban F, Leblanc E, Lallous N, Cherkasov A.",
                journal: "Int J Mol Sci.",
                doi: "https://doi.org/10.3390/ijms23052588"
            },
            {
                year: "2021",
                title: "Development of 2-(5,6,7-Trifluoro-1H-Indol-3-yl)-quinoline-5-carboxamide as a Potent, Selective, and Orally Available Inhibitor of Human Androgen Receptor Targeting Its Binding Function-3 for the Treatment of Castration-Resistant Prostate Cancer.",
                authors: "Leblanc E, Ban F, Cavga AD, Lawn S, Huang CF, Mohan S, Chang MEK, Flory MR, Ghaidi F, Lingadahalli S, Chen G, Yu IPL, Morin H, Lallous N, Gleave ME, Mohammed H, Young RN, Rennie PS, Lack NA, Cherkasov A.",
                journal: "J Med Chem.",
                doi: "https://doi.org/10.1021/acs.jmedchem.1c00681"
            },
            {
                year: "2021",
                title: "Optimization of New Catalytic Topoisomerase II Inhibitors as an Anti-Cancer Therapy.",
                authors: "Matias-Barrios VM, Radaeva M, Ho CH, Lee J, Adomat H, Lallous N, Cherkasov A, Dong X.",
                journal: "Cancers (Basel).",
                doi: "https://doi.org/10.3390/cancers13153675"
            },
            {
                year: "2021",
                title: "Development of an Androgen Receptor Inhibitor Targeting the N-Terminal Domain of Androgen Receptor for Treatment of Castration Resistant Prostate Cancer.",
                authors: "Ban F, Leblanc E, Cavga AD, Huang CF, Flory MR, Zhang F, Chang MEK, Morin H, Lallous N, Singh K, Gleave ME, Mohammed H, Rennie PS, Lack NA, Cherkasov A.",
                journal: "Cancers (Basel).",
                doi: "https://doi.org/10.3390/cancers13143488"
            },
            {
                year: "2021",
                title: "Evaluation of Darolutamide (ODM201) Efficiency on Androgen Receptor Mutants Reported to Date in Prostate Cancer Patients.",
                authors: "Lallous N, Snow O, Sanchez C, Parra Nuñez AK, Sun B, Hussain A, Lee J, Morin H, Leblanc E, Gleave ME, Cherkasov A.",
                journal: "Cancers (Basel).",
                doi: "https://doi.org/10.3390/cancers13122939"
            },
            {
                year: "2021",
                title: "Development of Novel Inhibitors Targeting the D-Box of the DNA Binding Domain of Androgen Receptor.",
                authors: "Radaeva M, Ban F, Zhang F, LeBlanc E, Lallous N, Rennie PS, Gleave ME, Cherkasov A.",
                journal: "Int J Mol Sci.",
                doi: "https://doi.org/10.3390/ijms22052493"
            },
            {
                year: "2020",
                title: "Discovery of New Catalytic Topoisomerase II Inhibitors for Anticancer Therapeutics.",
                authors: "Matias-Barrios VM, Radaeva M, Song Y, Alperstein Z, Lee AR, Schmitt V, Lee J, Ban F, Xie N, Qi J, Lallous N, Gleave ME, Cherkasov A, Dong X.",
                journal: "Front Oncol.",
                doi: "https://doi.org/10.3389/fonc.2020.633142"
            },
            {
                year: "2020",
                title: "Dual-Inhibitors of N-Myc and AURKA as Potential Therapy for Neuroendocrine Prostate Cancer.",
                authors: "Ton AT, Singh K, Morin H, Ban F, Leblanc E, Lee J, Lallous N, Cherkasov A.",
                journal: "Int J Mol Sci.",
                doi: "https://doi.org/10.3390/ijms21218277"
            },
            {
                year: "2020",
                title: "Deep Learning Modeling of Androgen Receptor Responses to Prostate Cancer Therapies.",
                authors: "Snow O, Lallous N, Ester M, Cherkasov A.",
                journal: "Int J Mol Sci.",
                doi: "https://doi.org/10.3390/ijms21165847"
            },
            {
                year: "2020",
                title: "Androgen receptor-binding sites are highly mutated in prostate cancer.",
                authors: "Morova T, McNeill DR, Lallous N, Gönen M, Dalal K, Wilson DM 3rd, Gürsoy A, Keskin Ö, Lack NA.",
                journal: "Nat Commun.",
                doi: "https://doi.org/10.1038/s41467-020-14644-y"
            },
            {
                year: "2020",
                title: "Ivermectin inhibits HSP27 and potentiates efficacy of oncogene targeting in tumor models.",
                authors: "Nappi L, Aguda AH, Nakouzi NA, Lelj-Garolla B, Beraldi E, Lallous N, Thi M, Moore S, Fazli L, Battsogt D, Stief S, Ban F, Nguyen NT, Saxena N, Dueva E, Zhang F, Yamazaki T, Zoubeidi A, Cherkasov A, Brayer GD, Gleave M.",
                journal: "J Clin Invest.",
                doi: "https://doi.org/10.1172/JCI130819"
            },
        ];
        
        const yearFiltersContainer = document.getElementById('pub-year-filters');
        const pubListContainer = document.getElementById('publications-list');
        
        let activeTab = "selected"; 
        
        function getYears() {
            return [...new Set(allPublications.map(p => p.year))].sort((a, b) => b - a);
        }
        
        function renderPubs() {
            const pubList = activeTab === "selected"
                ? selectedPublications
                : allPublications.filter(p => p.year === activeTab);
        
            // Render tab buttons
            yearFiltersContainer.innerHTML = '';
            const tabs = ["selected", ...getYears()];
        
            tabs.forEach(tab => {
                const btn = document.createElement('button');
                btn.textContent = tab === "selected" ? "Selected" : tab;
                btn.className = `px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                    activeTab === tab
                    ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                    : 'border-teal-600 text-teal-600 hover:bg-teal-50'
                }`;
                btn.onclick = () => {
                    activeTab = tab;
                    renderPubs();
                };
                yearFiltersContainer.appendChild(btn);
            });
        
            // Render publication list
            pubListContainer.innerHTML = '';
            pubList.forEach(pub => {
                const item = document.createElement('div');
                item.className = 'bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300';
                item.innerHTML = `
                    <p class="text-lg font-semibold text-gray-800">${pub.title}</p>
                    <p class="text-sm text-gray-600 mt-2">
                        ${pub.authors} <span class="text-teal-600 italic font-medium">${pub.journal}</span> (${pub.year}).
                        <a href=${pub.doi} class="ml-2 text-blue-500 hover:underline inline-flex items-center">[DOI]</a>
                    </p>
                `;
                pubListContainer.appendChild(item);
            });
        }
        
        renderPubs();

        });