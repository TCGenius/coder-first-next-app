const products = [
  {
    id: 1,
    name: 'Aire acondicionado Likon mini split frío/calor 3000 frigorías blanco 220V LKS35WCCR',
    img: '/img/Aire acondicionado Likon mini split frío-calor 3000 frigorías blanco 220V LKS35WCCR.webp',
    category: 'aires',
    description: <p>Climatizar tus espacios a lo largo del año es sin duda algo importante para tu comodidad y la de tus seres queridos. Contar con un aire acondicionado con función frío/calor es la mejor decisión. Con este aire Likon conseguí una mejor relación costo-beneficio.</p>,
    price: 409999
  }, {
    id: 2,
    name: 'Heladera Drean HDR400F11 negra con freezer 396L 220V',
    img: '/img/Heladera Drean HDR400F11 negra con freezer 396L 220V.webp' ,
    category: 'heladeras',
    description: <p>La operación de deshielo con el sistema Cycle defrost necesita ser hecha como máximo dos veces al año, convirtiéndose en una opción práctica para quienes desean comodidad. Las paredes internas tendrán formación de hielo pero en menor cantidad. Te asegurarás un bajo consumo de energía a un costo más accesible que los modelos frost-free.</p>,
    price: 493332
  }, {
    id: 3,
    name: 'Licuadora De Vaso Atma Pro Li8450ap 500w Jarra Vidrio Inox',
    img: '/img/Licuadora De Vaso Atma Pro Li8450ap 500w Jarra Vidrio Inox.webp',
    category: 'cocina',
    description: <p>Un electrodoméstico infaltable en tu casa. La licuadora Atma LI8450AP te va a ayudar a obtener resultados increíbles en todo lo que prepares, ya sea que quieras disfrutar de una bebida bien fría, de salsas y sopas, o de postres deliciosos. ¡Tenela siempre a mano!</p>,
    price: 26999
  }, {
    id: 4,
    name: 'Aire acondicionado BGH Silent Air split frío/calor 3000 frigorías blanco 220V BS35WCCR',
    img: '/img/Aire acondicionado BGH Silent Air split frío-calor 3000 frigorías blanco 220V BS35WCCR.webp',
    category: 'aires',
    description: <p>Fundada en 1913, BGH es hoy una de las marcas líderes a nivel mundial en la fabricación y distribución de electrodomésticos. Ofrece excelentes opciones de refrigeración y calefacción para el hogar con tecnología de avanzada y diseños de vanguardia.Climatizar tus espacios a lo largo del año es algo importante para tu comodidad. Un aire acondicionado frío/calor BGH Silent Air es la mejor decisión, ya que conseguís una mejor relación costo-beneficio.</p>,
    price: 570536
  }, {
    id: 5,
    name: 'Ventilador de techo Peabody PE-VTR42 blanco con 3 palas color transparente de acrílico, 42" de diámetro 220 V',
    img: '/img/Ventilador de techo Peabody PE-VTR42 blanco con 3 palas color transparente de acrílico, 42 de diámetro 220 V.webp',
    category: 'aires',
    description: <p>Con un novedoso diseño, este ventilador de bajo consumo Peabody PE-VTR42 iluminará y refrescará los distintos ambientes de tu hogar u oficina. Posee 3 tipos de luz: fría, blanca cálida y amarilla cálida. Además, tiene 3 palas retráctiles invisibles que lo vuelven un aparato adaptable y armonioso en cualquier ambiente.</p>,
    price: 109999
  }, {
    id: 6,
    name: 'Microondas Bgh B120m20 Mecánico Quick Chef Blanco 20 Litros',
    img: '/img/Microondas Bgh B120m20 Mecánico Quick Chef Blanco 20 Litros.webp',
    category: 'microondas',
    description: <p>Este microondas cuenta con un control mecánico que te permite seleccionar entre 6 niveles de potencia y el tiempo que necesites para preparar tus platos favoritos.<br /><br />Su rapidez e higiene superan los métodos tradicionales de cocción, permitiendo conservar las propiedades y sabores naturales de los alimentos.</p>,
    price: 82999
  }, {
    id: 7,
    name: 'Microondas Grill Atma Easy Cook MD1723GN blanco 23L 220V',
    img: '/img/Microondas Grill Atma Easy Cook MD1723GN blanco 23L 220V.webp',
    category: 'microondas',
    description: <p>¿Necesitás soluciones rápidas? Disfrutá de tus comidas favoritas en tan solo minutos con la línea Atma. Esta marca es sinónimo de tradición y confianza, reconocida por sus usuarios por sus productos funcionales y de diseño sumamente accesibles y masivos.<br /><br />El microondas se ha convertido en un artefacto imprescindible en nuestros hogares. Si todavía no elegiste alguno no dudes más. Con la línea Easy Cook tendrás todo lo que soñaste en un solo lugar. Simpleza, diseño, calidad y tecnología que te acompañará en tus almuerzos y cenas.</p>,
    price: 94129
  }, {
    id: 8,
    name: 'Microondas Atma Easy Cook MR1720NPI blanco 20L 220V',
    img: '/img/Microondas Atma Easy Cook MR1720NPI blanco 20L 220V.webp',
    category: 'microondas',
    description: <p>¿Necesitás soluciones rápidas? Disfrutá de tus comidas favoritas en tan solo minutos con la línea Atma. Esta marca es sinónimo de tradición y confianza, reconocida por sus usuarios por sus productos funcionales y de diseño sumamente accesibles y masivos.<br /><br />El microondas se ha convertido en un artefacto imprescindible en nuestros hogares. Si todavía no elegiste alguno no dudes más. Con la línea Easy Cook tendrás todo lo que soñaste en un solo lugar. Simpleza, diseño, calidad y tecnología que te acompañará en tus almuerzos y cenas.</p>,
    price: 68299
  }, {
    id: 9,
    name: 'Tostadora Electrica T-design 900w Plateada 6 Niveles Con Corte Automatico Bandeja Recolectora De Migas',
    img: '/img/Tostadora Electrica T-design 900w Plateada 6 Niveles Con Corte Automatico Bandeja Recolectora De Migas.webp',
    category: 'cocina',
    description: <p>¿Te acordás del clásico aroma a tostadas recién hechas en la casa de la abuela? ¿Qué tal un gran desayuno de pan tostado con manteca y mermelada? Con la tostadora T-Design te asegurarás un resultado parejo y crujiente, con 6 niveles de coccion para preparar colaciones será una tarea sencilla y práctica.<br />¡Hacelas con tus ingredientes favoritos! Además, su diseño elegante y funcional destacará en tu cocina.</p>,
    price: 19599
  }, {
    id: 10,
    name: 'Atma Lm8527ap Licuadora De Mano Mixer Batidora Varilla Metal',
    img: '/img/Atma Lm8527ap Licuadora De Mano Mixer Batidora Varilla Metal.webp',
    category: 'cocina',
    description: <p>Este electrodoméstico llegó para quedarse. Simple, práctico y cómodo de utilizar para que tus recetas se luzcan. Es sencillo de utilizar, se conecta, se colocan todos los ingredientes y a mixear, en pocos minutos todo listo.<br />Calidad asegurada<br />Cuenta con cuchillas de acero que son resistentes, seguras y sencillas de limpiar, además de ser un producto perdurable en el tiempo.</p>,
    price: 21899
  }
]


module.exports = products
