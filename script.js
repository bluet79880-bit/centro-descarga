async function cargarApps(categoria) {

    const contenedor = document.getElementById("apps");

    try {

        const respuesta = await fetch("apps.json");
        const datos = await respuesta.json();

        const aplicaciones = datos[categoria];

        contenedor.innerHTML = "";

        aplicaciones.forEach(app => {

            const tarjeta = document.createElement("div");

            tarjeta.innerHTML = `
                <h2>${app.nombre}</h2>

                <a href="${app.archivo}" download>
                    Descargar APK
                </a>
            `;

            contenedor.appendChild(tarjeta);

        });

    } catch (error) {

        contenedor.innerHTML =
        "<h2>Error cargando aplicaciones</h2>";

        console.log(error);

    }
}
