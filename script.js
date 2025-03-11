// Funciones para mostrar/ocultar secciones
function togglePrivacyPolicy() {
    const privacyPolicy = document.getElementById('privacy-policy');
    privacyPolicy.classList.toggle('hidden');
}

function toggleCopyright() {
    const copyright = document.getElementById('copyright');
    copyright.classList.toggle('hidden');
}

// Cargar idioma al inicio
document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
    if (!languageSelector) {
        console.error("No se encontró el selector de idioma (#language-selector). Verifica tu HTML.");
        return;
    }

    const translations = {
        es: {
            title: "Ace Tennis Trainer - Hamburgo",
            inicio: "Inicio",
            entrenador: "Entrenador",
            servicio: "Servicio",
            testimonio: "Testimonio",
            tienda: "Tienda",
            contacto: "Contacto",
            testimonios: "Testimonios",
            welcome: "¡Descubre el tenis en Hamburgo con Ace Tennis Trainer!",
            discount_offer: "¡Oferta limitada! 50% de descuento en la primera clase",
            coach_title: "Entrenador",
            coach_description: `
                Un Entrenador con Experiencia y Pasión por el Tenis en Hamburgo
                Llevo 17 años dedicándome a la enseñanza del tenis, trabajando en diversos países y contextos con jugadores de todas las edades y habilidades. Desde clubes prestigiosos hasta proyectos comunitarios y colegios internacionales, mi trayectoria me ha permitido desarrollar un método adaptable y efectivo, siempre centrado en las necesidades individuales.
                He aprendido que cada jugador tiene un camino único: unos buscan perfeccionar su técnica, otros priorizan la actividad física, y otros simplemente desean disfrutar del momento. Por eso, mis sesiones integran técnica, táctica y condición física de manera accesible y motivadora, garantizando que cada entrenamiento sea una experiencia enriquecedora.
                Para mí, el tenis es más que un deporte: es una forma de superarse y conectarse con el presente. Mi objetivo es ayudarte a ganar seguridad en la cancha, descubrir tu estilo personal y experimentar lo gratificante que es el tenis cuando se aprende sin presiones.
                Si deseas iniciar o retomar esta aventura en Hamburgo, estaré encantado de acompañarte. Nos vemos en la cancha.
            `,
            classes_info: `
                No importa si has jugado antes o si esta es tu primera vez en una cancha: el tenis es un deporte para disfrutar a cualquier edad y nivel. Mis entrenamientos en Hamburgo están diseñados para adaptarse a ti, ayudándote a mejorar tu técnica, moverte con confianza y, sobre todo, disfrutar desde el primer día.
                Mi enfoque es flexible y personalizado, pensado para que avances a tu propio ritmo, sin importar tu experiencia previa. Ya sea que busques aprender algo nuevo, mantenerte activo o elevar tu nivel, aquí encontrarás sesiones que te permitirán progresar de manera natural y divertida.
                Además, en mi tienda online descubrirás equipamiento y accesorios seleccionados para potenciar tu experiencia en la cancha.
                🎾 Tu juego, tu ritmo, tu evolución. Empieza hoy en Hamburgo y explora todo lo que el tenis tiene para ti.
            `,
            services: "Servicios en Hamburgo",
            service_video_title: "Técnica Avanzada",
            clase_individual_desc: "Entrenamiento uno a uno diseñado específicamente para tus necesidades, nivel y objetivos. Estas sesiones te permiten progresar a tu propio ritmo, con correcciones técnicas inmediatas y un enfoque personalizado en los aspectos que necesitas mejorar. Ideal para principiantes que desean fundamentar correctamente su técnica y para jugadores avanzados que buscan perfeccionar detalles específicos de su juego.",
            clase_grupal_desc: "Sesiones en grupo que combinan entrenamiento técnico con la diversión de jugar con otros. Estas clases fomentan la motivación mutua, la competición amistosa y el aspecto social del tenis. Se organizan por niveles para asegurar que todos los participantes estén en un entorno adecuado a su capacidad actual. Perfecto para aquellos que quieren mejorar mientras disfrutan de la compañía de otros tenistas.",
            tecnica_desc: "Enfoque integral que combina la perfección técnica de los golpes con la comprensión táctica del juego. Aprenderás a leer el juego de tu oponente, a desarrollar estrategias adaptadas a diferentes situaciones y a utilizar la posición en la cancha como ventaja. Este servicio es esencial para jugadores que no solo quieren mejorar físicamente, sino que buscan entender el tenis como un deporte mental y estratégico.",
            preparacion_fisica_desc: "Programa de condicionamiento físico diseñado específicamente para las demandas del tenis. Incluye ejercicios para mejorar la resistencia cardiovascular, la fuerza explosiva, la flexibilidad y la coordinación. Estas sesiones te ayudarán a prevenir lesiones, a mantener un alto nivel de rendimiento durante todo el partido y a recuperarte más rápidamente entre partidos.",
            horarios: "Horarios:",
            horarios_desc: "Clases disponibles en las mañanas en Hamburgo.",
            lugar: "Lugar:",
            lugar_desc: "En varias ubicaciones de Hamburgo. Consulta disponibilidad.",
            tienda: "Tienda",
            tienda_desc: "Descubre nuestra selección de ropa y accesorios de tenis. Ofrecemos una variedad de opciones que incluyen prendas para hombres, mujeres y niños, así como también bolsas de tenis y otros elementos esenciales para el juego en Hamburgo. Todo lo que necesitas para mejorar tu desempeño en la cancha está aquí.",
            ir_tienda: "Ir a la Tienda",
            consulta: "Consultas",
            nombre: "Nombre:",
            email: "Email:",
            mensaje: "Mensaje:",
            enviar: "Enviar",
            policy_title: "Política de Privacidad",
            policy_text: "Esta política de privacidad describe cómo Ace Tennis Trainer recopila, utiliza y protege la información personal de sus usuarios en Hamburgo.",
            copyright_title: "Derechos de Autor",
            copyright_text: "© 2025 Ace Tennis Trainer. Todos los derechos reservados.",
            discount_offer: "¡Oferta limitada! 50% de descuento en la primera clase",
            correo: "Contacto:",
            mapa: "Ubicación en Hamburgo",
            testimonios: "Testimonios",
        testimonial1: `"Como principiante en el tenis, las clases de Ace Tennis Trainer en Hamburgo me han ayudado a progresar rápidamente. El entrenador es muy paciente y sabe adaptar las sesiones a mis necesidades."`,
        testimonial1_author: "- Maria S., Hamburgo",
        testimonial2: `"He mejorado mucho mi técnica después de unas pocas semanas de entrenamiento con él. El entrenador realmente sabe lo que hace."`,
        testimonial2_author: "- Thomas K., Hamburgo"
        },
        en: {
            title: "Ace Tennis Trainer - Hamburg",
            inicio: "Home",
            entrenador: "Coach",
            servicio: "Service",
            testimonio: "Testimonial",
            tienda: "Store",
            contacto: "Contact",
            testimonios: "Testimonials",
            welcome: "Discover Tennis in Hamburg with Ace Tennis Trainer!",
            discount_offer: "Limited time offer! 50% off your first class",
            coach_title: "Coach",
            coach_description: `
                A Coach with Experience and Passion for Tennis in Hamburg
                I have been dedicated to teaching tennis for 17 years, working in various countries and contexts with players of all ages and abilities. From prestigious clubs to community projects and international schools, my experience has allowed me to develop an adaptable and effective method, always focused on individual needs.
                I have learned that each player has a unique path: some seek to perfect their technique, others prioritize physical activity, and others simply want to enjoy the moment. That's why my sessions integrate technique, tactics, and physical conditioning in an accessible and motivating way, ensuring that each training session is an enriching experience.
                For me, tennis is more than just a sport: it's a way to overcome challenges and connect with the present. My goal is to help you gain confidence on the court, discover your personal style, and experience the satisfaction of learning tennis without pressure.
                If you want to start or resume this adventure in Hamburg, I would be delighted to accompany you. See you on the court.
            `,
            classes_info: `
                No matter if you have played before or if this is your first time on a court: tennis is a sport to enjoy at any age and level. My training sessions in Hamburg are designed to adapt to you, helping you improve your technique, move with confidence, and, above all, enjoy from day one.
                My approach is flexible and personalized, designed for you to progress at your own pace, regardless of your previous experience. Whether you are looking to learn something new, stay active, or elevate your level, you will find sessions here that will allow you to progress naturally and enjoyably.
                Additionally, in my online store, you will discover selected equipment and accessories to enhance your experience on the court.
                🎾 Your game, your pace, your evolution. Start today in Hamburg and explore everything tennis has to offer you.
            `,
            services: "Services in Hamburg",
            service_video_title: "Advanced Technique",
            clase_individual_desc: "One-on-one training specifically designed for your needs, level, and goals. These sessions allow you to progress at your own pace with immediate technical corrections and a personalized focus on aspects you need to improve. Ideal for beginners who want to properly build their technique and advanced players looking to refine specific details of their game.",
            clase_grupal_desc: "Group sessions combining technical training with the fun of playing with others. These classes foster mutual motivation, friendly competition, and the social aspect of tennis. They're organized by level to ensure all participants are in an environment suited to their current ability. Perfect for those who want to improve while enjoying the company of other tennis players.",
            tecnica_desc: "A comprehensive approach combining stroke perfection with game understanding. You'll learn to read your opponent's game, develop strategies for different situations, and use court position to your advantage. This service is essential for players who not only want to improve physically but also seek to understand tennis as a mental and strategic sport.",
            preparacion_fisica_desc: "Physical conditioning program specifically designed for tennis demands. Includes exercises to improve cardiovascular endurance, explosive strength, flexibility, and coordination. These sessions will help prevent injuries, maintain high performance throughout matches, and recover more quickly between games.",
            horarios: "Schedules:",
            horarios_desc: "Classes available in the mornings in Hamburg.",
            lugar: "Location:",
            lugar_desc: "At various locations in Hamburg. Check availability.",
            tienda: "Store",
            tienda_desc: "Discover our selection of tennis clothing and accessories. We offer a variety of options including apparel for men, women, and children, as well as tennis bags and other essential items for the game in Hamburg. Everything you need to enhance your performance on the court is here.",
            ir_tienda: "Go to Store",
            consulta: "Inquiries",
            nombre: "Name:",
            email: "Email:",
            mensaje: "Message:",
            enviar: "Send",
            policy_title: "Privacy Policy",
            policy_text: "This privacy policy describes how Ace Tennis Trainer collects, uses, and protects user personal information in Hamburg.",
            copyright_title: "Copyright",
            copyright_text: "© 2025 Ace Tennis Trainer. All rights reserved.",
            discount_offer: "Limited time offer! 50% off your first class",
            correo: "Contact:",
            mapa: "Location in Hamburg",
            testimonios: "Testimonials",
            testimonial1: `"As a tennis beginner, Ace Tennis Trainer's classes in Hamburg have helped me progress quickly. The coach is very patient and knows how to adapt sessions to my needs."`,
            testimonial1_author: "- Maria S., Hamburg",
            testimonial2: `"I've improved my technique a lot after just a few weeks of training with him. The coach really knows what he's doing."`,
            testimonial2_author: "- Thomas K., Hamburg"
        },
        de: {
            title: "Ace Tennis Trainer - Hamburg",
            inicio: "Startseite",
            entrenador: "Trainer",
            servicio: "Service",
            testimonio: "Testimonial",
            tienda: "Geschäft",
            contacto: "Kontakt",
            testimonios: "Testimonials",
            welcome: "Entdecken Sie Tennis in Hamburg mit Ace Tennis Trainer!",
            discount_offer: "Begrenztes Angebot! 50% Rabatt auf die erste Klasse",
            coach_title: "Trainer",
            coach_description: `
                Ein Trainer mit Erfahrung und Leidenschaft für Tennis in Hamburg
                Ich widme mich seit 17 Jahren dem Tennisunterricht und arbeite in verschiedenen Ländern und Kontexten mit Spielern aller Altersgruppen und Fähigkeiten. Von prestigeträchtigen Clubs über kommunale Projekte bis hin zu internationalen Schulen hat meine Karriere mir ermöglicht, eine anpassungsfähige und effektive Methode zu entwickeln, die immer auf individuelle Bedürfnisse zugeschnitten ist.
                Ich habe gelernt, dass jeder Spieler einen einzigartigen Weg hat: Einige suchen die Perfektionierung ihrer Technik, andere priorisieren die körperliche Aktivität und andere möchten einfach den Moment genießen. Deshalb integriere ich in meinen Sitzungen Technik, Taktik und körperliche Konditionierung auf eine zugängliche und motivierende Weise, um sicherzustellen, dass jede Trainingssitzung eine bereichernde Erfahrung ist.
                Für mich ist Tennis mehr als nur ein Sport: Es ist eine Möglichkeit, sich zu überwinden und mit dem Jetzt zu verbinden. Mein Ziel ist es, Ihnen zu helfen, Sicherheit auf dem Platz zu gewinnen, Ihren persönlichen Stil zu entdecken und die Erfüllung zu erleben, wenn man Tennis ohne Druck lernt.
                Wenn Sie beginnen oder diese Abenteuer wieder aufnehmen möchten in Hamburg, freue ich mich, Sie zu begleiten. Bis bald auf dem Platz.
            `,
            classes_info: `
                Es spielt keine Rolle, ob Sie schon gespielt haben oder ob dies Ihr erstes Mal auf einem Platz ist: Tennis ist eine Sportart, die man in jedem Alter und auf jedem Niveau genießen kann. Meine Trainings in Hamburg sind darauf ausgelegt, sich an Sie anzupassen, Ihnen zu helfen, Ihre Technik zu verbessern, mit Selbstvertrauen zu spielen und vor allem von Tag eins an Spaß zu haben.
                Mein Ansatz ist flexibel und personalisiert, damit Sie in Ihrem eigenen Tempo voranschreiten können, unabhängig von Ihrer vorherigen Erfahrung. Ob Sie etwas Neues lernen, aktiv bleiben oder Ihr Niveau anheben möchten, finden Sie hier Sitzungen, die Ihnen ermöglichen, auf natürliche und unterhaltsame Weise voranzukommen.
                Darüber hinaus entdecken Sie in meinem Online-Shop ausgewählte Ausrüstung und Zubehör, um Ihre Erfahrung auf dem Platz zu verbessern.
                🎾 Ihr Spiel, Ihr Tempo, Ihre Entwicklung. Fangen Sie heute in Hamburg an und erkunden Sie alles, was Tennis Ihnen bieten kann.
            `,
            services: "Dienstleistungen in Hamburg",
            service_video_title: "Fortgeschrittene Technik",
            clase_individual_desc: "Eins-zu-eins-Training, speziell auf deine Bedürfnisse, dein Niveau und deine Ziele zugeschnitten. Diese Sitzungen ermöglichen es dir, in deinem eigenen Tempo voranzukommen, mit sofortigen technischen Korrekturen und einem personalisierten Fokus auf die Aspekte, die du verbessern möchtest. Ideal für Anfänger, die ihre Technik grundlegend erlernen möchten, und für fortgeschrittene Spieler, die spezifische Details ihres Spiels verfeinern möchten.",
            clase_grupal_desc: "Gruppensitzungen, die technisches Training mit dem Spaß des Spielens mit anderen kombinieren. Diese Klassen fördern die gegenseitige Motivation, den freundlichen Wettbewerb und den sozialen Aspekt des Tennisspiels. Sie werden nach Niveaus organisiert, um sicherzustellen, dass alle Teilnehmer in einer für ihre aktuelle Fähigkeit geeigneten Umgebung sind. Perfekt für diejenigen, die verbessern möchten, während sie die Gesellschaft anderer Tennisspieler genießen.",
            tecnica_desc: "Ein umfassender Ansatz, der die Vollkommenheit der Schläge mit dem Verständnis des Spiels verbindet. Du wirst lernen, das Spiel deines Gegners zu durchschauen, Strategien für verschiedene Situationen zu entwickeln und die Position auf dem Platz zu deinem Vorteil zu nutzen. Dieser Dienstleistung ist essenziell für Spieler, die nicht nur körperlich verbessern möchten, sondern auch Tennis als mentale und strategische Sportart verstehen möchten.",
            preparacion_fisica_desc: "Ein konditionelles Trainingsprogramm, speziell auf die Anforderungen des Tennis zugeschnitten. Enthält Übungen zur Steigerung der kardiovascularen Ausdauer, explosiver Kraft, Flexibilität und Koordination. Diese Sitzungen helfen dabei, Verletzungen zu vermeiden, eine hohe Leistungsfähigkeit während des gesamten Spiels zu halten und sich zwischen den Spielen schneller zu erholen.",
            horarios: "Zeitpläne:",
            horarios_desc: "Kurse sind am Vormittag in Hamburg verfügbar.",
            lugar: "Ort:",
            lugar_desc: "An verschiedenen Orten in Hamburg. Verfügbarkeit prüfen.",
            tienda: "Geschäft",
            tienda_desc: "Entdecke unsere Auswahl an Tenniskleidung und -Zubehören. Wir bieten eine Vielzahl von Optionen, einschließlich Kleidung für Männer, Frauen und Kinder, sowie auch Tennistaschen und andere notwendige Gegenstände für das Spiel in Hamburg. Alles, was Sie brauchen, um Ihre Leistung auf dem Platz zu verbessern, ist hier.",
            ir_tienda: "Zum Geschäft",
            consulta: "Anfragen",
            nombre: "Name:",
            email: "E-Mail:",
            mensaje: "Nachricht:",
            enviar: "Senden",
            policy_title: "Datenschutzrichtlinie",
            policy_text: "Diese Datenschutzrichtlinie beschreibt, wie Ace Tennis Trainer personenbezogene Daten seiner Nutzer in Hamburg sammelt, verwendet und schützt.",
            copyright_title: "Urheberrechte",
            copyright_text: "© 2025 Ace Tennis Trainer. Alle Rechte vorbehalten.",
            discount_offer: "Begrenztes Angebot! 50% Rabatt auf die erste Klasse",
            correo: "Kontakt:",
            mapa: "Standort in Hamburg",
            testimonios: "Testimonials",
        testimonial1: `"Als Tennisanfänger haben mich die Kurse von Ace Tennis Trainer in Hamburg schnell vorangebracht. Der Trainer ist sehr geduldig und passt die Sitzungen an meine Bedürfnisse an."`,
        testimonial1_author: "- Maria S., Hamburg",
        testimonial2: `"Nach nur wenigen Wochen des Trainings mit ihm habe ich meine Technik stark verbessert. Der Trainer weiß wirklich, was er tut."`,
        testimonial2_author: "- Thomas K., Hamburg"
        }
    };

    function loadLanguage(lang) {
        if (!translations[lang]) lang = "es";
        console.log("Cargando idioma:", lang);

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`No translation found for key: ${key}`);
                element.textContent = key; // Muestra la clave si no hay traducción
            }
        });

        const titleElement = document.querySelector("title");
        if (titleElement && translations[lang].title) {
            titleElement.textContent = translations[lang].title;
        }
    }

    function saveLanguagePreference(lang) {
        localStorage.setItem("preferredLanguage", lang);
    }

    function getSavedLanguage() {
        const savedLang = localStorage.getItem("preferredLanguage");
        return translations[savedLang] ? savedLang : "es";
    }

    const savedLanguage = getSavedLanguage();
    languageSelector.value = savedLanguage;
    loadLanguage(savedLanguage);

    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;
        console.log("Idioma seleccionado:", selectedLang);
        loadLanguage(selectedLang);
        saveLanguagePreference(selectedLang);
    });
});
