document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
    if (!languageSelector) {
        console.error("No se encontró el selector de idioma (#language-selector). Verifica tu HTML.");
        return;
    }

    const translations = {
        es: {
            title: "Ace Tennis Trainer",
            inicio: "Inicio",
            servicios: "Servicios",
            biografia: "Biografía",
            contacto: "Contacto",
            mejora: "Clases de tenis adaptadas a tu nivel y objetivos",
            descripcion: "Este espacio está diseñado para ti, que buscas aprender, mejorar y disfrutar del tenis con un entrenamiento adaptado a tus necesidades. A través de este medio, puedes encontrar un entrenador con experiencia internacional que te guiará en tu progreso, ya sea que estés dando tus primeros golpes o quieras perfeccionar tu técnica y estrategia.\n\nEl tenis es más que un deporte: es una oportunidad para superarte, mantenerte activo y disfrutar cada momento en la cancha. Aquí descubrirás un enfoque personalizado para alcanzar tus objetivos, sin importar tu edad o nivel de juego.\n\nAdemás, cuentas con una tienda online donde podrás encontrar productos exclusivos para mejorar tu experiencia en la cancha. Desde equipamiento hasta accesorios esenciales, todo lo que necesitas para potenciar tu juego está aquí.\n\nSi estás listo para entrenar con pasión, mejorar tu rendimiento y equiparte con lo mejor, este es el medio para comenzar. ¡Bienvenido a tu próximo desafío en la cancha!",
            biografia_texto: "Una trayectoria dedicada al tenis y la enseñanza\n\n\nEl tenis ha sido parte de mi vida desde una edad temprana, primero como jugador y luego como entrenador. Con más de 17 años de experiencia, he enseñado en una amplia variedad de entornos, desde colegios y clubes comunitarios hasta instituciones de prestigio, trabajando con alumnos de todas las edades y niveles.\n\nA lo largo de los años, he aprendido a adaptar mi enfoque a cada jugador, combinando distintas metodologías para ofrecer un entrenamiento dinámico, efectivo y motivador. Mi experiencia me ha demostrado que el tenis no es solo técnica y táctica, sino también un espacio de aprendizaje, superación y disfrute.\n\nCada clase es una oportunidad para transmitir todo lo que he aprendido, ayudando a mis alumnos a mejorar su juego mientras desarrollan confianza y pasión por este deporte. Más allá del nivel o la meta, mi compromiso es brindar un entrenamiento enriquecedor que haga del tenis una experiencia única para cada jugador.",
            servicios: "Servicios",
            intro: "📍 Clases de tenis adaptadas a tu nivel y objetivos",
            clase_individual: "Clases individuales personalizadas",
            clase_individual_desc: "Mejora tu técnica con un entrenamiento adaptado solo para ti.",
            clase_grupal: "Clases grupales (máx. 4 personas)",
            clase_grupal_desc: "Entrena en un ambiente social y aprende con otros jugadores.",
            clase_grande: "Clases grupales grandes",
            clase_grande_desc: "Perfecto para quienes disfrutan entrenar en grupo y mejorar juntos.",
            tecnica: "Técnica, táctica y estrategia",
            tecnica_desc: "Aprende a leer el juego, perfeccionar golpes y desarrollar estrategias ganadoras.",
            preparacion_fisica: "Preparación física especializada para el tenis",
            preparacion_fisica_desc: "Mejora tu resistencia, fuerza y movilidad en la cancha.",
            horarios: "Horarios:",
            horarios_desc: "Clases disponibles en las mañanas.",
            lugar: "Lugar:",
            lugar_desc: "A convenir dentro de Hamburgo.",
            consulta: "Consultas",
            nombre: "Nombre:",
            email: "Email:",
            mensaje: "Mensaje:",
            enviar: "Enviar",
            correo: "Contacto:",
            derechos: "© 2025 Ace Tennis Trainer",
            tienda: "Tienda",
            tienda_desc: "Explorá nuestra colección de productos exclusivos para tenis.",
            ir_tienda: "Ir a la Tienda",
            servicios_desc: "📍 Clases de tenis adaptadas a tu nivel y objetivos\n✅ Clases individuales personalizadas\n🔹 Mejora tu técnica con un entrenamiento adaptado solo para ti.\n\n✅ Clases grupales (máx. 4 personas)\n🔹 Entrena en un ambiente social y aprende con otros jugadores.\n\n✅ Clases grupales grandes\n🔹 Perfecto para quienes disfrutan entrenar en grupo y mejorar juntos.\n\n✅ Técnica, táctica y estrategia\n🔹 Aprende a leer el juego, perfeccionar golpes y desarrollar estrategias ganadoras.\n\n✅ Preparación física especializada para el tenis\n🔹 Mejora tu resistencia, fuerza y movilidad en la cancha.\n\n📅 Horarios: Clases disponibles en las mañanas.\n📍 Lugar: A convenir dentro de Hamburgo.",
            "policy-title": "Política de Privacidad",
            "policy-text": "Esta política de privacidad describe cómo Ace Tennis Trainer recopila, utiliza y protege la información personal de sus usuarios.",
            "info-general": "Información General:",
            "info-general-desc": "Al utilizar nuestro sitio web y servicios, aceptas las prácticas descritas en esta política.",
            "info-collected": "Información Recopilada:",
            "info-name": "Nombre y datos de contacto (email, teléfono, etc.)",
            "info-payment": "No recopilamos información de pago; las compras se procesan externamente a través de Shopify.",
            "info-usage": "Datos sobre el uso de nuestro sitio web y servicios",
            "info-use": "Uso de la Información:",
            "use-provide": "Proveer y gestionar nuestros servicios.",
            "use-improve": "Mejorar la experiencia del usuario.",
            "use-payments": "Redirigir a los usuarios a la tienda online externa (Shopify) para compras y pagos.",
            "use-communication": "Enviar comunicaciones relevantes, promociones y actualizaciones.",
            "copyright-title": "Derechos de Autor",
            "copyright-text": "© 2025 Ace Tennis Trainer. Todos los derechos reservados."
        },
        en: {
            title: "Ace Tennis Trainer",
            inicio: "Home",
            servicios: "Services",
            biografia: "Biography",
            contacto: "Contact",
            mejora: "Tennis Lessons Tailored to Your Level and Goals",
            descripcion: "This space is designed for you, who seek to learn, improve, and enjoy tennis with training adapted to your needs. Through this platform, you can find an internationally experienced coach who will guide your progress, whether you're taking your first shots or aiming to perfect your technique and strategy.\n\nTennis is more than just a sport: it's an opportunity for self-improvement, staying active, and enjoying every moment on the court. Here, you'll discover a personalized approach to reaching your goals, regardless of your age or skill level of play.\n\nAdditionally, you have access to an online store where you can find exclusive products to enhance your on-court experience. From equipment to essential accessories, everything you need to boost your game is here.\n\nIf you're ready to train with passion, enhance your performance, and equip yourself with the best, this is the place to start. Welcome to your next challenge on the court!",
            biografia_texto: "A career dedicated to tennis and teaching\n\nTennis has been a part of my life from an early age, first as a player and then as a coach. With over 17 years of experience, I have taught in a wide variety of settings, from schools and community clubs to prestigious institutions, working with students of all ages and levels.\n\nOver the years, I have learned to adapt my approach to each player, combining different methodologies to offer dynamic, effective, and motivating training. My experience has shown me that tennis is not just about technique and tactics, but also a space for learning, overcoming challenges, and enjoyment.\n\nEach lesson is an opportunity to share everything I have learned, helping my students improve their game while developing confidence and passion for this sport. Beyond skill level or goal, my commitment is to provide enriching training that makes tennis a unique experience for every player.",
            servicios: "Services",
            intro: "📍 Tennis lessons adapted to your level and goals",
            clase_individual: "Personalized individual lessons",
            clase_individual_desc: "Improve your technique with a training adapted just for you.",
            clase_grupal: "Group lessons (max. 4 people)",
            clase_grupal_desc: "Train in a social environment and learn with other players.",
            clase_grande: "Large group lessons",
            clase_grande_desc: "Perfect for those who enjoy training in a group and improving together.",
            tecnica: "Technique, tactics, and strategy",
            tecnica_desc: "Learn to read the game, refine your strokes, and develop winning strategies.",
            preparacion_fisica: "Specialized physical training for tennis",
            preparacion_fisica_desc: "Improve your endurance, strength, and mobility on the court.",
            horarios: "Schedules:",
            horarios_desc: "Lessons available in the mornings.",
            lugar: "Location:",
            lugar_desc: "To be arranged within Hamburg.",
            consulta: "Inquiries",
            nombre: "Name:",
            email: "Email:",
            mensaje: "Message:",
            enviar: "Send",
            correo: "Contact:",
            derechos: "© 2025 Ace Tennis Trainer",
            tienda: "Store",
            tienda_desc: "Explore our collection of exclusive tennis products.",
            ir_tienda: "Go to Store",
            servicios_desc: "📍 Tennis lessons tailored to your level and goals\n✅ Personalized one-on-one lessons\n🔹 Improve your technique with training designed specifically for you.\n\n✅ Small group lessons (up to 4 people)\n🔹 Train in a social environment and learn with other players.\n\n✅ Large group lessons\n🔹 Perfect for those who enjoy group training and improving together.\n\n✅ Technique, tactics, and strategy training\n🔹 Learn to read the game, perfect your shots, and develop winning strategies.\n\n✅ Physical training specialized for tennis\n🔹 Improve your endurance, strength, and mobility on the court.\n\n📅 Schedule: Classes available in the mornings.\n📍 Location: To be arranged within Hamburg.",
            "policy-title": "Privacy Policy",
            "policy-text": "This privacy policy describes how Ace Tennis Trainer collects, uses, and protects user personal information.",
            "info-general": "General Information:",
            "info-general-desc": "By using our website and services, you accept the practices described in this policy.",
            "info-collected": "Collected Information:",
            "info-name": "Name and contact details (email, phone, etc.)",
            "info-payment": "We do not collect payment information; purchases are processed externally through Shopify.",
            "info-usage": "Data about the use of our website and services",
            "info-use": "Use of Information:",
            "use-provide": "Provide and manage our services.",
            "use-improve": "Improve user experience.",
            "use-payments": "Redirect users to the external online store (Shopify) for purchases and payments.",
            "use-communication": "Send relevant communications, promotions, and updates.",
            "copyright-title": "Copyright",
            "copyright-text": "© 2025 Ace Tennis Trainer. All rights reserved."
        },
        de: {
            title: "Ace Tennis Trainer",
            inicio: "Startseite",
            servicios: "Dienstleistungen",
            biografia: "Biografie",
            contacto: "Kontakt",
            mejora: "Tenniskurse, angepasst an dein Niveau, Alter und deine Ziele",
            descripcion: "Dieser Bereich ist für dich gemacht, wenn du lernen, dich verbessern und Tennis mit einem auf deine Bedürfnisse zugeschnittenen Training genießen möchtest. Über diese Plattform kannst du einen international erfahrenen Trainer finden, der dich auf deinem Weg begleitet, egal ob du deine ersten Schläge machst oder deine Technik und Strategie perfektionieren möchtest.\n\nTennis ist mehr als nur ein Sport: Es ist eine Möglichkeit, dich selbst zu übertreffen, aktiv zu bleiben und jeden Moment auf dem Platz zu genießen. Hier findest du einen individuellen Ansatz, um deine Ziele zu erreichen, unabhängig von deinem Alter oder deinem Spielniveau.\n\nZusätzlich hast du Zugang zu einem Online-Shop, in dem du exklusive Produkte findest, um dein Erlebnis auf dem Platz zu verbessern. Von Ausrüstung bis hin zu unverzichtbarem Zubehör – alles, was du brauchst, um dein Spiel zu verbessern, ist hier.\n\nWenn du bereit bist, mit Leidenschaft zu trainieren, deine Leistung zu steigern und dich mit dem Besten auszurüsten, dann bist du hier genau richtig. Willkommen zu deiner nächsten Herausforderung auf dem Platz!",
            biografia_texto: "Eine Karriere, die dem Tennis und dem Lehren gewidmet ist\n\nTennis ist seit meiner Kindheit ein Teil meines Lebens, zuerst als Spieler und dann als Trainer. Mit über 17 Jahren Erfahrung habe ich in verschiedenen Umgebungen unterrichtet, von Schulen und Gemeindeclubs bis hin zu angesehenen Institutionen, und mit Schülern aller Altersstufen und Leistungsniveaus gearbeitet.\n\nIm Laufe der Jahre habe ich gelernt, meinen Ansatz an jeden Spieler anzupassen, verschiedene Methoden zu kombinieren, um ein dynamisches, effektives und motivierendes Training zu bieten. Meine Erfahrung hat mir gezeigt, dass Tennis nicht nur Technik und Taktik ist, sondern auch ein Raum für Lernen, Überwindung und Freude.\n\nJede Unterrichtsstunde ist eine Gelegenheit, all mein Wissen weiterzugeben und meinen Schülern zu helfen, ihr Spiel zu verbessern, während sie Vertrauen und Leidenschaft für diesen Sport entwickeln. Unabhängig vom Niveau oder Ziel ist es mein Anliegen, ein bereicherndes Training zu bieten, das Tennis zu einer einzigartigen Erfahrung für jeden Spieler.",
            servicios: "Dienstleistungen",
            intro: "📍 Tennisstunden angepasst an dein Niveau und deine Ziele",
            clase_individual: "Personalisierte Einzelstunden",
            clase_individual_desc: "Verbessere deine Technik mit einem individuell angepassten Training.",
            clase_grupal: "Gruppenstunden (max. 4 Personen)",
            clase_grupal_desc: "Trainiere in einer sozialen Umgebung und lerne mit anderen Spielern.",
            clase_grande: "Große Gruppenstunden",
            clase_grande_desc: "Perfekt für diejenigen, die gerne in der Gruppe trainieren und gemeinsam besser werden möchten.",
            tecnica: "Technik, Taktik und Strategie",
            tecnica_desc: "Lerne, das Spiel zu lesen, deine Schläge zu perfektionieren und gewinnende Strategien zu entwickeln.",
            preparacion_fisica: "Spezialisierte körperliche Vorbereitung für Tennis",
            preparacion_fisica_desc: "Verbessere deine Ausdauer, Kraft und Beweglichkeit auf dem Platz.",
            horarios: "Zeitpläne:",
            horarios_desc: "Unterricht am Morgen verfügbar.",
            lugar: "Ort:",
            lugar_desc: "Nach Vereinbarung innerhalb Hamburgs.",
            consulta: "Anfragen",
            nombre: "Name:",
            email: "E-Mail:",
            mensaje: "Nachricht:",
            enviar: "Senden",
            correo: "Kontakt:",
            derechos: "© 2025 Ace Tennis Trainer",
            tienda: "Geschäft",
            tienda_desc: "Entdecken Sie unsere exklusive Tennisproduktkollektion.",
            ir_tienda: "Zum Geschäft",
            servicios_desc: "📍 Tenniskurse, angepasst an dein Niveau und deine Ziele\n\n✅ Personalisierte Einzelstunden\n🔹 Verbessere deine Technik mit einem auf dich zugeschnittenen Training.\n\n✅ Kleine Gruppenstunden (bis zu 4 Personen)\n🔹 Trainiere in einer sozialen Umgebung und lerne mit anderen Spielern.\n\n✅ Große Gruppenstunden\n🔹 Perfekt für diejenigen, die gerne in der Gruppe trainieren und gemeinsam besser werden möchten.\n\n✅ Technik-, Taktik- und Strategietraining\n🔹 Lerne, das Spiel zu lesen, Schläge zu perfektionieren und gewinnende Strategien zu entwickeln.\n\n✅ Spezialisiertes Fitnesstraining für Tennis\n🔹 Verbessere deine Ausdauer, Kraft und Mobilität auf dem Platz.\n\n📅 Stundenplan: Kurse sind am Vormittag verfügbar.\n📍 Ort: Nach Vereinbarung in Hamburg.",
            "policy-title": "Datenschutzrichtlinie",
            "policy-text": "Diese Datenschutzerrichtlinie beschreibt, wie Ace Tennis Trainer personenbezogene Daten seiner Nutzer sammelt, verwendet und schützt.",
            "info-general": "Allgemeine Informationen:",
            "info-general-desc": "Durch die Nutzung unserer Website und Dienste akzeptieren Sie die in dieser Richtlinie beschriebenen Praktiken.",
            "info-collected": "Gesammelte Informationen:",
            "info-name": "Name und Kontaktdaten (E-Mail, Telefon usw.)",
            "info-payment": "Wir erfassen keine Zahlungsinformationen; Käufe werden extern über Shopify abgewickelt.",
            "info-usage": "Daten zur Nutzung unserer Website und Dienste",
            "info-use": "Verwendung der Informationen:",
            "use-provide": "Bereitstellung und Verwaltung unserer Dienste.",
            "use-improve": "Verbesserung der Benutzererfahrung.",
            "use-payments": "Benutzer zum externen Online-Shop (Shopify) für Einkäufe und Zahlungen weiterleiten.",
            "use-communication": "Relevante Mitteilungen, Werbeaktionen und Updates senden.",
            "copyright-title": "Urheberrechte",
            "copyright-text": "© 2025 Ace Tennis Trainer. Alle Rechte vorbehalten."
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

        // Cambiar título de la página
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