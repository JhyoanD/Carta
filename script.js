onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // --- Estrellas fugaces ---
    function createShootingStar() {
      const star = document.createElement("div");
      star.className = "shooting-star";
      star.style.top = Math.random() * 60 + "%";
      star.style.animationDelay = "0s";
      star.style.animationDuration = (Math.random() * 1.5 + 2) + "s";

      document.querySelector(".shooting-stars").appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 4000);
    }

    setInterval(() => {
      if (Math.random() > 0.3) {
        createShootingStar();
      }
    }, Math.random() * 5000 + 3000);
    clearTimeout(c);
  }, 1000);

  // --- Música y letras ---
  const audio = document.getElementById("bg-music");
  const lyricsElement = document.getElementById("lyrics");

  const lyrics = [
    { time: 0, text: "Tú y yo, los dos juntitos frente al mar" },
    { time: 4.5, text: "Sé por dónde quieres ir a parar" },
    { time: 8.5, text: "Aunque mires así, no servirá" },
    { time: 13, text: "Si es que nos entendemos sin hablar" },
    { time: 17.5, text: "Muero cuando te vas" },
    { time: 22, text: "Toco el cielo si estás" },
    { time: 26, text: "Sentada en mi portal" },
    { time: 30.5, text: "Siempre haciéndote esperar" },
    { time: 34.5, text: "Y ahora quiero que vuelvas, como un niño los findes" },
    { time: 39.5, text: "Desde que te has ido, no hacen gracia los chistes" },
    { time: 44, text: "Me he cortado el pelo, me he comprado otro tinte" },
    { time: 48, text: "Buscando a ver si encuentro alguna como tú en Tinder" },
    { time: 52.5, text: "Mi niña, eres la prota' de mis canciones tristes" },
    { time: 56.5, text: "No puedo cerrar los ojos, mientras te me desvistes" },
    { time: 61, text: "Tú dile a las demás que no me quedan más chicles" },
    { time: 65.5, text: "Solo te doy a ti, el amor es así de simple" },
    { time: 69.5, text: "Uoh, oh-oh, oh-oh-oh-oh" },
    { time: 74, text: "Se me congela el mundo siempre que nos vemos" },
    { time: 78.5, text: "Discutir contigo es como un tiroteo" },
    { time: 83, text: "Y pienso en morirme el primero, ah-ah-ah-ah-ah" },
    { time: 89.5, text: "Tú y yo, los dos juntitos, sin pensar" },
    { time: 94, text: "Contigo, como un niño en Toys R Us" },
    { time: 98, text: "Que se apague la luz en Navidad" },
    { time: 102, text: "Si desprendemos electricidad" },
    { time: 107, text: "Mira, que yo lo intento, pero te desvaneces" },
    { time: 111, text: "Siempre me hago el contento, pero hoy no me apetece" },
    { time: 115.5, text: "Y no entienden que siempre has sido diferente" },
    { time: 120, text: "Como Venecia sin agua, como Madrid sin gente" },
    { time: 124.5, text: "Y ahora quiero que vuelvas, como un niño los findes" },
    { time: 128.5, text: "Desde que te has ido, no hacen gracia los chistes" },
    { time: 132.5, text: "Me he cortado el pelo, me he comprado otro tinte" },
    { time: 136, text: "Buscando a ver si encuentro alguna como tú en Tinder" }
  ];

  let currentIndex = 0;

  // 🔑 Necesitamos interacción del usuario para iniciar el audio
  document.body.addEventListener(
    "click",
    () => {
      setTimeout(() => {
        audio.play();
      }, 1000); // empieza 1 segundo después del clic
    },
    { once: true }
  );

  audio.addEventListener("timeupdate", () => {
    if (currentIndex < lyrics.length && audio.currentTime >= lyrics[currentIndex].time) {
      lyricsElement.textContent = lyrics[currentIndex].text;
      currentIndex++;
    }
  });

  // --- Modal y botón ---
  const btn = document.getElementById("btn-mensaje");
  const modal = document.getElementById("modal");
  const cerrar = document.getElementById("cerrar");

  // Asegurarnos que modal esté oculto al inicio
  modal.style.display = "none";

  btn.addEventListener("click", () => {
    btn.style.display = "none"; // ocultar botón
    modal.style.display = "flex"; // mostrar modal
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none"; // cerrar modal
    btn.style.display = "block"; // opcional: volver a mostrar botón
  });
};