    const countries = [
        { name: "Estados Unidos", code: "+1" },
        { name: "Canadá", code: "+1" },
        { name: "México", code: "+52" },
        { name: "Brasil", code: "+55" },
        { name: "Argentina", code: "+54" },
        { name: "Colombia", code: "+57" },
        { name: "Chile", code: "+56" },
        { name: "Venezuela", code: "+58" },
        { name: "Perú", code: "+51" },
        { name: "Ecuador", code: "+593" },
        { name: "Cuba", code: "+53" },
        { name: "Bolivia", code: "+591" },
        { name: "Costa Rica", code: "+506" },
        { name: "Panamá", code: "+507" },
        { name: "Uruguay", code: "+598" },
        { name: "España", code: "+34" },
        { name: "Alemania", code: "+49" },
        { name: "Francia", code: "+33" },
        { name: "Italia", code: "+39" },
        { name: "Reino Unido", code: "+44" },
        { name: "Rusia", code: "+7" },
        { name: "Ucrania", code: "+380" },
        { name: "Polonia", code: "+48" },
        { name: "Rumania", code: "+40" },
        { name: "Países Bajos", code: "+31" },
        { name: "Bélgica", code: "+32" },
        { name: "Grecia", code: "+30" },
        { name: "Portugal", code: "+351" },
        { name: "Suecia", code: "+46" },
        { name: "Noruega", code: "+47" },
        { name: "China", code: "+86" },
        { name: "India", code: "+91" },
        { name: "Japón", code: "+81" },
        { name: "Corea del Sur", code: "+82" },
        { name: "Indonesia", code: "+62" },
        { name: "Turquía", code: "+90" },
        { name: "Filipinas", code: "+63" },
        { name: "Tailandia", code: "+66" },
        { name: "Vietnam", code: "+84" },
        { name: "Israel", code: "+972" },
        { name: "Malasia", code: "+60" },
        { name: "Singapur", code: "+65" },
        { name: "Pakistán", code: "+92" },
        { name: "Bangladés", code: "+880" },
        { name: "Arabia Saudita", code: "+966" },
        { name: "Egipto", code: "+20" },
        { name: "Sudáfrica", code: "+27" },
        { name: "Nigeria", code: "+234" },
        { name: "Kenia", code: "+254" },
        { name: "Marruecos", code: "+212" },
        { name: "Argelia", code: "+213" },
        { name: "Uganda", code: "+256" },
        { name: "Ghana", code: "+233" },
        { name: "Camerún", code: "+237" },
        { name: "Costa de Marfil", code: "+225" },
        { name: "Senegal", code: "+221" },
        { name: "Tanzania", code: "+255" },
        { name: "Sudán", code: "+249" },
        { name: "Libia", code: "+218" },
        { name: "Túnez", code: "+216" },
        { name: "Australia", code: "+61" },
        { name: "Nueva Zelanda", code: "+64" },
        { name: "Fiji", code: "+679" },
        { name: "Papúa Nueva Guinea", code: "+675" },
        { name: "Tonga", code: "+676" },
        { name: "Irán", code: "+98" },
        { name: "Iraq", code: "+964" },
        { name: "Jordania", code: "+962" },
        { name: "Líbano", code: "+961" },
        { name: "Kuwait", code: "+965" },
        { name: "Emiratos Árabes Unidos", code: "+971" },
        { name: "Omán", code: "+968" },
        { name: "Catar", code: "+974" },
        { name: "Bahrein", code: "+973" },
        { name: "Yemen", code: "+967" }
    ];

    function getNameCountrie(code) {
        const country = countries.find(country => country.code === code);
        return country ? country.name : null;
    }

    function getCountrieValue(name) {
        const country = countries.find(country => country.name === name);
        return country ? country.code : null;
    }

    function getAllCountries() {
        return countries;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const select = document.getElementById('codigo_pais');
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = `${country.code} ${country.name}`;
            select.appendChild(option);
        });
    });
