import { elevador,
  bar,
  bell,
  child,
  cine,
  fire,
  fuego,
  game,
  garaje,
  garden,
  gym,
  hamaca,
  jacuzzi,
  maletin,
  meditacion,
  parrilla,
  pool,
  restaurante,
  salon,
  secadora,
  spa,
  telescopio,
  terraza,
  yoga} from "../assets";

export const projects = [
  {
    id: 1,
    name: "Residencial Las Rosas",
    slug: "residencial-las-rosas",
    img: "https://grupoproaco.com/img/4f0f018c-9d03-415f-91f9-71b2ffd3d938/58864_platinum.jpg?q=80&fit=max&crop=600%2C401%2C0%2C0",
    status: "Terminado",
    zone: "Barrio Sur",
    rooms: "3 ambientes",
    presentImages: [
      "https://grupoproaco.com/img/4f0f018c-9d03-415f-91f9-71b2ffd3d938/58864_platinum.jpg?q=80&fit=max&crop=600%2C401%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Residencial Las Rosas es un hermoso complejo ubicado en el corazón del Barrio Sur. Este residencial ofrece todas las comodidades necesarias para tu familia, con amplios departamentos de tres ambientes, jardines comunes y áreas de recreación. Cada unidad está diseñada con un estilo moderno y funcional, brindando un ambiente acogedor y elegante. Perfecto para aquellos que buscan un hogar tranquilo y cómodo en una zona residencial bien conectada.",
    latitude: -26.8328,
    longitude: -65.2032,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Calle Falsa 123, Barrio Sur",
    introDescription: "Un hermoso complejo con todas las comodidades necesarias para tu familia."
  },
  {
    id: 2,
    name: "Torre del Sol",
    slug: "torre-del-sol",
    img: "https://grupoproaco.com/img/2d841ff7-83f1-43b6-8c54-5add55783b9e/43056_torre_patria.jpg?q=80&fit=max&crop=436%2C400%2C0%2C0",
    status: "En Pozo",
    zone: "Barrio Norte",
    rooms: "2 ambientes",
    presentImages: [
      "https://grupoproaco.com/img/2d841ff7-83f1-43b6-8c54-5add55783b9e/43056_torre_patria.jpg?q=80&fit=max&crop=436%2C400%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Torre del Sol es una moderna torre de departamentos en el dinámico Barrio Norte. Este proyecto en desarrollo es ideal para jóvenes profesionales y parejas que buscan un estilo de vida urbano y contemporáneo. Con unidades de dos ambientes, Torre del Sol ofrece un diseño innovador con acabados de alta calidad. Los residentes disfrutarán de vistas panorámicas de la ciudad, áreas comunes bien equipadas y fácil acceso a servicios y transportes públicos.",
    latitude: -26.8228,
    longitude: -65.2051,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Avenida Siempre Viva 456, Barrio Norte",
    introDescription: "Una moderna torre de departamentos en el dinámico Barrio Norte."
  },
  {
    id: 3,
    name: "Parque Central",
    slug: "parque-central",
    img: "https://grupoproaco.com/img/ce2ff992-96d6-43c0-9643-a2cec9df7afb/23566_zipoli_fachada.jpg?q=80&fit=max&crop=360%2C540%2C0%2C0",
    status: "Terminado",
    zone: "Yerba Buena",
    rooms: "4 ambientes",
    presentImages: [
      "https://grupoproaco.com/img/ce2ff992-96d6-43c0-9643-a2cec9df7afb/23566_zipoli_fachada.jpg?q=80&fit=max&crop=360%2C540%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Parque Central es un exclusivo complejo residencial ubicado en Yerba Buena, conocido por sus amplios espacios verdes y áreas recreativas. Este proyecto ofrece departamentos de cuatro ambientes con diseños espaciosos y luminosos. Los residentes pueden disfrutar de parques privados, zonas de juegos para niños y un entorno seguro y tranquilo. Parque Central es perfecto para familias que buscan un equilibrio entre la vida urbana y la naturaleza.",
    latitude: -26.8175,
    longitude: -65.2231,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Calle Real 789, Yerba Buena",
    introDescription: "Un exclusivo complejo residencial con amplios espacios verdes y áreas recreativas."
  },
  {
    id: 4,
    name: "Altos de la Colina",
    slug: "altos-de-la-colina",
    img: "https://grupoproaco.com/img/a08a153d-fec3-4da9-abaf-8896be247411/62764_fachada_nazaret.jpg?q=80&fit=max&crop=600%2C400%2C0%2C0",
    status: "En Pozo",
    zone: "Barrio Norte",
    rooms: "5 ambientes",
    presentImages: [
      "https://grupoproaco.com/img/a08a153d-fec3-4da9-abaf-8896be247411/62764_fachada_nazaret.jpg?q=80&fit=max&crop=600%2C400%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Altos de la Colina es un proyecto residencial en desarrollo en el prestigioso Barrio Norte. Este complejo ofrece departamentos de cinco ambientes con vistas panorámicas y un diseño arquitectónico moderno. Los residentes disfrutarán de áreas comunes exclusivas, como gimnasios, piscinas y salones de eventos. Altos de la Colina es ideal para aquellos que buscan lujo y comodidad en un entorno urbano.",
    latitude: -26.8199,
    longitude: -65.2088,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Calle Alta 123, Barrio Norte",
    introDescription: "Un proyecto residencial en desarrollo en el prestigioso Barrio Norte."
  },
  {
    id: 5,
    name: "Vista Verde",
    slug: "vista-verde",
    img: "https://grupoproaco.com/img/252cceb8-fef2-4dc4-b827-0a2e6b989a53/80596_residencias.jpg?q=80&fit=max&crop=436%2C400%2C0%2C0",
    status: "Terminado",
    zone: "Barrio Sur",
    rooms: "Casa",
    presentImages: [
      "https://grupoproaco.com/img/252cceb8-fef2-4dc4-b827-0a2e6b989a53/80596_residencias.jpg?q=80&fit=max&crop=436%2C400%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal_emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Vista Verde es una hermosa casa familiar situada en Barrio Sur. Rodeada de naturaleza y tranquilidad, esta residencia ofrece amplios espacios interiores y exteriores. La casa está equipada con modernas comodidades, incluyendo una cocina totalmente equipada, amplios dormitorios y áreas de entretenimiento. Vista Verde es el lugar perfecto para familias que buscan un hogar acogedor y espacioso en una ubicación privilegiada.",
    latitude: -26.8351,
    longitude: -65.2074,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Calle Verde 456, Barrio Sur",
    introDescription: "Una hermosa casa familiar situada en Barrio Sur, rodeada de naturaleza y tranquilidad."
  },
  {
    id: 6,
    name: "Lomas del Este",
    slug: "lomas-del-este",
    img: "https://grupoproaco.com/img/0616be28-9df5-46eb-9baa-e57ec3ec61f7/70629_hdelsur.jpg?q=80&fit=max&crop=436%2C400%2C0%2C0",
    status: "En Pozo",
    zone: "Yerba Buena",
    rooms: "1 ambiente",
    presentImages: [
      "https://grupoproaco.com/img/0616be28-9df5-46eb-9baa-e57ec3ec61f7/70629_hdelsur.jpg?q=80&fit=max&crop=436%2C400%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal_emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Lomas del Este es un proyecto en desarrollo en Yerba Buena, ofreciendo un monoambiente ideal para estudiantes y solteros. Con un diseño compacto y funcional, Lomas del Este proporciona un espacio moderno y cómodo. Los residentes disfrutarán de acceso a servicios y comodidades locales, así como de un entorno seguro y bien conectado. Este proyecto es perfecto para aquellos que buscan una vivienda accesible y bien ubicada.",
    latitude: -26.8181,
    longitude: -65.2210,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Avenida Este 789, Yerba Buena",
    introDescription: "Un proyecto en desarrollo en Yerba Buena, ideal para estudiantes y solteros."
  },
  {
    id: 7,
    name: "Jardines del Valle",
    slug: "jardines-del-valle",
    img: "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
    status: "Terminado",
    zone: "Barrio Norte",
    rooms: "2 ambientes",
    presentImages: [
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal_emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Jardines del Valle es un apartamento de dos ambientes ubicado en el prestigioso Barrio Norte. Este complejo terminado ofrece excelentes amenidades, incluyendo áreas verdes, piscina y gimnasio. Diseñado con un estilo moderno y elegante, Jardines del Valle es ideal para parejas y familias pequeñas que buscan un hogar cómodo y bien ubicado. Disfruta de la vida urbana con todas las comodidades a tu alcance.",
    latitude: -26.8200,
    longitude: -65.2060,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Calle Jardín 123, Barrio Norte",
    introDescription: "Un apartamento de dos ambientes en el prestigioso Barrio Norte con excelentes amenidades."
  },
  {
    id: 8,
    name: "Puerta del Sol",
    slug: "puerta-del-sol",
    img: "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
    status: "En Pozo",
    zone: "Barrio Sur",
    rooms: "4 ambientes",
    presentImages: [
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal_emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0"
    ],
    description: "Puerta del Sol es un proyecto en desarrollo en el encantador Barrio Sur. Este complejo ofrece departamentos de cuatro ambientes con amplios y cómodos espacios. Diseñado para brindar un estilo de vida moderno y funcional, Puerta del Sol cuenta con áreas comunes de primera clase y fácil acceso a servicios locales. Este proyecto es ideal para familias que buscan un hogar en una zona tranquila y bien conectada.",
    latitude: -26.8361,
    longitude: -65.2079,
    amenities:  [
      { icon: garaje, label: 'Cocheras' },
      { icon: garden, label: 'Parking' },
      { icon: terraza, label: 'Departamento' },
      { icon: gym, label: 'Gimnasio' },
      { icon: salon, label: 'Lotes' }
    ],
    address: "Calle Sol 456, Barrio Sur",
    introDescription: "Un proyecto en desarrollo en el encantador Barrio Sur con amplios y cómodos espacios."
  }
];
