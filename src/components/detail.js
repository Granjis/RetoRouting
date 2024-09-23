import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Detail() {
  const params = useParams();
  const [mascota, setMascota] = useState(null);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const mascotaEncontrada = data.find((mascotaTemp) => mascotaTemp.id === Number(params.mascotaId));
        setMascota(mascotaEncontrada);
      });
  }, [params.mascotaId]);
  if (!mascota) {
    return <div>Cargando o no se encontró la mascota.</div>;
  }
  return (
    <div>
       <h1>{mascota.nombre}</h1>
       <img src={mascota.foto} width={600} height={600} alt={mascota.nombre} />
       <p>{mascota.descripcion}</p>

    </div>
  );
}