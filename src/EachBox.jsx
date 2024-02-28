/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { snakePositions, ladderPositions } from "./SnakeAndLadderPositions";
import { useState } from "react";
import Swal from "sweetalert2";

const data = [
  {
    pregunta: "¿Qué es la teoría de los sistemas autopoieticos de Luhmann?",
    respuesta:
      "La **teoría de los sistemas autopoieticos** de Luhmann se refiere a cómo los sistemas sociales se **crean y mantienen a sí mismos** a través de la auto-referencia y la auto-organización. Los sistemas autopoieticos son independientes de su entorno y solo se interconectan con otros sistemas a través de la comunicación.",
  },
  {
    pregunta: "¿Cómo ve Luhmann el papel del derecho en la sociedad?",
    respuesta:
      "Para Luhmann, el **derecho** proporciona el marco del estado, y los **abogados** son el principal recurso humano para el estado. El derecho es un subsistema que opera con sus propios códigos y lógica interna, y juega un papel fundamental en la regulación del comportamiento social.",
  },
  {
    pregunta:
      "¿Cómo se aplica la teoría de los sistemas de Luhmann a la economía?",
    respuesta:
      "Luhmann ve la **economía** como un subsistema de la sociedad que opera según sus propios **códigos**. La economía se basa en la producción, distribución y consumo de bienes y servicios, y se rige por sus propias leyes y lógica interna.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Dónde y en qué disciplina recibió Émile Durkheim su formación académica?",
    answer:
      "Émile Durkheim recibió su formación académica en la École Normale Supérieure en París, donde estudió filosofía.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cómo contribuyó Durkheim a la fundación de la sociología como disciplina académica?",
    answer:
      "Durkheim es considerado uno de los fundadores de la sociología por las siguientes razones: Pionero en el establecimiento de la sociología como disciplina académica. Contribución a la teoría sociológica. Metodología científica",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿En qué instituciones académicas trabajó Émile Durkheim durante su carrera?",
    answer:
      "Durkheim trabajó en varias instituciones académicas, incluyendo la Universidad de Burdeos, donde ocupó la primera cátedra de sociología en 1887.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "Menciona al menos dos de las obras más importantes escritas por Émile Durkheim.",
    answer:
      "Dos de las obras más importantes de Durkheim son: La división del trabajo social (1893) y El suicidio (1897).",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cómo influyó la formación de Durkheim en filosofía en el desarrollo de su teoría funcionalista?",
    answer:
      "La formación filosófica de Durkheim influyó en su enfoque científico y positivista, lo que lo llevó a desarrollar una teoría funcionalista que buscaba explicar la función y la cohesión social.",
  },
  {
    picture: "/bordieu.png",
    question: "¿En qué tipos está dividido el capital según Bourdieu?",
    answer: "Económico, Social y Cultural.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es el capital político?",
    answer: "La posición de influencia dentro de la política.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Por qué todas las formas de capital están interrelacionadas?",
    answer:
      "Los individuos convierten su capital económico en capital cultural y social, para mejorar su vida y la de sus hijos.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es el habitus?",
    answer:
      "Se define como las formas de pensar, actuar, sentir y percibir que son incorporadas al individuo mediante un proceso de socialización.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cuándo y dónde fue la primera cátedra de sociología establecida, ocupada por Émile Durkheim?",
    answer:
      "La primera cátedra de sociología fue establecida en la Universidad de Burdeos en 1887, y Durkheim fue el primer profesor en ocuparla.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cómo relaciona Durkheim la estabilidad social con la teoría funcionalista?",
    answer:
      "Durkheim sostiene que la estabilidad social se logra a través de la preservación y mantenimiento de las funciones sociales. La integración de normas y valores compartidos asegura la cohesión social, contribuyendo así a la estabilidad de la sociedad.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "Define la solidaridad orgánica según la teoría funcionalista de Durkheim.",
    answer:
      "La solidaridad orgánica, en la teoría funcionalista, se refiere a la interdependencia y complementariedad de funciones en una sociedad especializada. Surge de la diversidad de roles y funciones, contribuyendo a la cohesión social en sociedades más complejas.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cómo aborda Durkheim el concepto de cambio social en la teoría funcionalista?",
    answer:
      "Durkheim sugiere que el cambio social puede afectar la cohesión social, especialmente si es rápido y desorganizado. La falta de ajuste de las normas tradicionales a nuevas realidades puede conducir a la anomia y desafiar la estabilidad social.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "Explica cómo las instituciones sociales contribuyen al funcionamiento general de la sociedad según la teoría funcionalista.",
    answer:
      "Las instituciones sociales, como la familia, la educación y la religión, contribuyen al funcionamiento general al proporcionar normas, valores y roles que guían el comportamiento de los individuos. Estas instituciones fomentan la cohesión social y la integración.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cuáles son las características del hecho social según Durkheim?",
    answer: "Colectividad, exterioridad y coerción.",
  },
  {
    picture: "/dunkheim.png",
    question: "Según Durkheim, ¿qué regula el comportamiento individual?",
    answer: "Los elementos coercitivos, ejercidos por el Estado o la sociedad.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Qué implica la colectividad para Durkheim?",
    answer:
      "Un fenómeno solo puede ser colectivo si es común para todos los miembros de la sociedad o si es un fenómeno general.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Qué implica la exterioridad para Durkheim?",
    answer:
      "El hecho social es exterior al individuo porque existe antes que él.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es la violencia simbólica?",
    answer:
      "Aquella que arranca sumisiones que no se perciben como tales apoyándose en unas expectativas colectivas, en creencias inculcadas.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es un espacio social?",
    answer:
      "Sistema de posiciones sociales que se definen las unas en relación con las otras.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es el constructivismo desde las ideas de Bourdieu?",
    answer:
      "Consideración de la existencia de unas estructuras sociales inasibles e independientes de la conciencia y voluntad de las personas que ejercen sobre las mismas.",
  },
  {
    picture: "/bordieu.png",
    question:
      "¿Qué conceptos ayudaron a Bourdieu a estudiar el poder y la desigualdad?",
    answer: "Campo y habitus.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es el campo?",
    answer:
      "Es el ámbito social específico en el que se desarrolla la sociedad moderna como consecuencia de la constante división del trabajo social.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Cómo se integra un campo?",
    answer:
      "Por una red de posiciones jerárquicas, en las que cada agente ocupa una posición determinada por la posesión de capital y sus relaciones.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es la sociedad moderna para Bourdieu?",
    answer:
      "Es el conjunto de todos los campos, en donde conviven distintos enfoques analíticos.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué tipo de capital añadió Bourdieu?",
    answer: "El capital simbólico.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es el capital simbólico?",
    answer:
      "Es la autoridad, fama o reputación de cada individuo o colectivo social.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Cuáles capitales integran el capital simbólico?",
    answer: "El capital lingüístico y el capital político.",
  },
  {
    picture: "/bordieu.png",
    question: "¿Qué es el capital lingüístico?",
    answer:
      "Es el dominio del lenguaje, o terminología, propio de un campo específico.",
  },
  {
    picture: "/luhmann.png",
    question:
      "¿Cuál es su perspectiva en cuanto a los problemas de los sistemas sociales?",
    answer:
      "No se resuelven de una vez por todas mediante el aprovechamiento de las estructuras existentes, solo se abordan de manera provisional.",
  },
  {
    picture: "/luhmann.png",
    question: "¿Qué nos dice la teoría del funcionalismo de equivalencia?",
    answer:
      "Si es necesario, siempre se pueden encontrar o identificar soluciones equivalentes que resuelvan provisionalmente los problemas de los sistemas.",
  },
  {
    picture: "/luhmann.png",
    question: "¿Cuál es la función de los sistemas o estructuras como tales?",
    answer: "La reducción de la complejidad.",
  },
  {
    picture: "/luhmann.png",
    question: "¿Cuál es la función de la producción de la estructura en sí?",
    answer:
      "Prescriben ciertas formas de interacción, limitan las opciones de acción abiertas a las partes de la interacción, reducen su número etc.",
  },
  {
    picture: "/luhmann.png",
    question: "¿De qué depende la capacidad humana de acción?",
    answer:
      "Depende de la capacidad de facilitar las rutinas, los hábitos, y el funcionamiento de las instituciones.",
  },
  {
    picture: "/luhmann.png",
    question: "¿Qué simplifican los sistemas sociales?",
    answer:
      "La interacción del entorno al establecer opciones de acción relativamente limitadas.",
  },
  {
    picture: "/luhmann.png",
    question: "¿Con que se construyen los sistemas sociales?",
    answer: "Con comunicación.",
  },
  {
    picture: "/luhmann.png",
    question:
      "¿Según Luhmann ¿es posible determinar la existencia de un sistema con referencia a individuos específicos?",
    answer:
      "Es imposible porque una misma acción puede aparecer en la más diversa gama de contextos.",
  },
  {
    picture: "/luhmann.png",
    question: "¿En qué consisten las sociedades modernas?",
    answer:
      "En diferentes subsistemas: la política, la economía, la ley, la ciencia, la religión y la educación.",
  },
  {
    picture: "/luhmann.png",
    question:
      "¿Qué códigos usa Luhmann para la economía, la ciencia y la política?",
    answer:
      "Economía: tiene / no tiene; Ciencia: verdadero / falso; Política: gobierno / oposición.",
  },
  {
    picture: "/luhmann.png",
    question: "¿Cómo funcionan los subsistemas sociales?",
    answer:
      "Funcionan exclusivamente atendiendo su propia lógica sistémica y pueden alterarse, pero no controlarse dese afuera.",
  },
  {
    picture: "/luhmann.png",
    question:
      "¿A que lleva el intento de construir una macroidentidad según Luhmann?",
    answer: "Al fracaso.",
  },
  {
    picture: "/luhmann.png",
    question:
      "Según Luhmann ¿Por qué las sociedades modernas no pueden adaptarse a las amenazas ecológicas y a peligros de la energía nuclear?",
    answer:
      "No hay un punto de vista en el cual los individuos o grupos puedan obtener una visión general de todo lo que les permite advertir los peligros sobre la sociedad.",
  },
  {
    picture: "/luhmann.png",
    question: "¿Qué son los sistemas sociales y psicológicos para él?",
    answer: "Son autopoiéticos y de particular interés para los sociólogos.",
  },
  {
    picture: "/luhmann.png",
    question:
      "¿Qué herramientas teóricas desarrolla para abandonar cualquier noción de un todo social?",
    answer: "Ciencia, economía, religión, arte, ley, educación, y política.",
  },
  {
    pregunta: "¿Qué es la diferenciación funcional en la teoría de Luhmann?",
    respuesta:
      "La **diferenciación funcional** se refiere a cómo la sociedad se divide en subsistemas cerrados a través de **códigos especializados**. Cada subsistema se especializa en una función específica y opera con su propio código de comunicación y lógica interna.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Qué implica la coerción para Durkheim?",
    answer:
      "Todo individuo es educado conforme a una reglamentación y normativa que rige la sociedad.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Cuál era la función de los datos estadísticos para Durkheim?",
    answer:
      "Funcionar como la expresión de los hechos sociales, los cuales deben provenir de observaciones y experimentos.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Cuál es el motor principal de la evolución colectiva?",
    answer: "El medio social interno.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Cómo debe empezar el estudio de la conducta de un grupo?",
    answer: "Debe empezar con el análisis de los fenómenos de la colectividad.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Qué estudió Durkheim de la sociedad moderna?",
    answer:
      "Los factores que la modelaron, y relacionó su desarrollo con la industrialización y la división del trabajo.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Qué explica Durkheim en su tesis “La división del trabajo social?",
    answer: "A mayor modernidad, mayor división social del trabajo.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "Según Durkheim, ¿cuál es la diferencia entre las sociedades tradicionales y las sociedades modernas?",
    answer: "La diferencia entre ambas radica en su grado de cohesión social.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cómo se ejercía la acción coercitiva social en las sociedades arcaicas?",
    answer:
      "Se ejercía mediante el establecimiento de leyes penales, severas y represivas.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Qué se utiliza para mantener el orden social en las sociedades modernas?",
    answer: "El derecho civil y el administrativo.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Qué implica la solidaridad orgánica?",
    answer:
      "Implica mucha mayor especialización de la división social del trabajo y conlleva al debilitamiento de la conciencia colectiva.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Qué favorece la división del trabajo según Durkheim?",
    answer:
      "El crecimiento de la población y el cambio de la solidaridad mecánica a la orgánica.",
  },
  {
    picture: "/weber.png",
    question:
      "¿Según Max Weber, cuál es el tipo de dominación que se impone en las sociedades modernas?",
    answer: "La dominación del sistema legal y la burocracia",
  },
  {
    picture: "/weber.png",
    question:
      "¿Cuáles fueron los aspectos decisivos del aporte de Weber a las teorías de la estratificación social?",
    answer:
      "Contempló otros aspectos – no solamente económicos en el análisis de los estratos sociales",
  },
  {
    picture: "/weber.png",
    question:
      "¿Según Max Weber, cuál es el principal problema de las sociedades modernas?",
    answer: "La burocratización de las relaciones sociales",
  },
  {
    picture: "/weber.png",
    question: "¿Qué es un tipo ideal?",
    answer:
      "Un constructo analítico que expresa el curso probable de la acción social",
  },
  {
    picture: "/weber.png",
    question: "¿Qué es acción social?",
    answer:
      "Es toda aquella acción que busca incidir en el comportamiento de otros actores sociales",
  },
  {
    picture: "/weber.png",
    question:
      "¿Según Max Weber: ¿Qué fenómeno explica el surgimiento de la modernidad?",
    answer:
      "La racionalidad como consecuencia del cambio en la mentalidad social",
  },
  {
    picture: "/weber.png",
    question: "Para Weber las formas típico - ideales de la acción social son:",
    answer:
      "Tradicional, afectiva, racional con arreglo a valores y racional con arreglo a fines",
  },
  {
    picture: "/weber.png",
    question: "¿Qué es la acción racional con arreglo a fines?",
    answer:
      "Un tipo ideal de acción social orientada por el cálculo y la eficiencia.",
  },
  {
    picture: "/weber.png",
    question: "¿Qué pretende la perspectiva sociológica de Weber?",
    answer:
      "Comprender el sentido que los sujetos le imprimen a sus actos, mediante la interpretación de sus desarrollos y sus efectos.",
  },
  {
    picture: "/weber.png",
    question:
      "Según Weber, ¿Por qué en las sociedades actuales prevalece la dominación racional / legal?",
    answer: "Porque representa la forma más eficiente de dominación.",
  },
  {
    picture: "/weber.png",
    question: "¿Qué crítica realiza Weber a la sociología positivista?",
    answer:
      "La no diferenciación entre ciencias de la naturaleza y ciencias sociales.",
  },
  {
    picture: "/weber.png",
    question:
      "Para Weber, ¿Qué otros puntos también son considerados recursos económicos?",
    answer:
      "Los conocimientos técnicos, las cualificaciones laborales y las credenciales académicas.",
  },
  {
    picture: "/weber.png",
    question:
      "¿Cuál es el punto de partida de la perspectiva comprensiva en sociología?",
    answer: "El actor y la acción social",
  },
  {
    picture: "/weber.png",
    question:
      "¿Cuál es la unidad mínima de análisis de la sociología comprensiva?",
    answer: "La acción social.",
  },
  {
    picture: "/weber.png",
    question: "¿Qué contribuyó Weber en la sociología?",
    answer:
      "Destacó la racionalización como clave para el desarrollo de la civilización occidental",
  },
  {
    picture: "/comte.png",
    question: "¿Qué es la ley de los tres estados?",
    answe:
      "Son los grados de desarrollo intelectual por los que pasa el individuo y la sociedad.",
  },
  {
    picture: "/comte.png",
    question: "¿Para que propuso Comte la ley de los tres estados?",
    answer:
      "Para entender la evolución del pensamiento humano y el progreso de la sociedad.",
  },
  {
    picture: "/comte.png",
    question: "¿Cuáles son los tres estados según Comte?",
    answer: [
      "El estado teológico",
      "El estado metafísico",
      "El estado científico",
    ],
  },
  {
    picture: "/comte.png",
    question: "¿Cuál fue la etapa inicial del desarrollo humano?",
    answer: "El estado teológico.",
  },
  {
    picture: "/dunkheim.png",
    question:
      'Explique brevemente el concepto de "anomia" desarrollado por Émile Durkheim.',
    answer:
      'La "anomia" según Durkheim se refiere a la falta de normas sociales o a la debilidad de las mismas, lo que puede conducir a la desorganización social y a la amenaza de la estabilidad.',
  },
  {
    picture: "/dunkheim.png",
    question: "¿Cómo influyó Durkheim en la educación y la pedagogía?",
    answer:
      "Durkheim influyó en la educación al abogar por una educación moral basada en la transmisión de valores sociales para fortalecer la cohesión social.",
  },
  {
    picture: "/dunkheim.png",
    question: "¿Cuándo y cómo falleció Émile Durkheim?",
    answer:
      "Émile Durkheim falleció el 15 de noviembre de 1917, a la edad de 59 años, por causas relacionadas con la Primera Guerra Mundial.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cuál es el legado de Émile Durkheim en la sociología y en las ciencias sociales en general?",
    answer:
      "El legado de Durkheim radica en su contribución fundamental a la sociología como disciplina científica, su enfoque en el método científico y su teoría funcionalista, que ha influido significativamente en la comprensión de las dinámicas sociales.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Qué es el funcionalismo según la perspectiva de Émile Durkheim?",
    answer:
      "El funcionalismo, según Durkheim, es una perspectiva sociológica que se centra en analizar cómo las diversas partes de una sociedad cumplen funciones específicas que contribuyen al mantenimiento del orden social y la cohesión.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cómo Durkheim aborda el concepto de integración social en el marco de la teoría funcionalista?",
    answer:
      "Durkheim aborda la integración social destacando la importancia de las instituciones sociales en proporcionar normas y valores compartidos que mantienen unida a la sociedad. Argumenta que estas normas contribuyen a la cohesión social y a la solidaridad orgánica.",
  },
  {
    picture: "/dunkheim.png",
    question:
      "¿Cuál es la relación entre la división del trabajo social y la teoría funcionalista de Durkheim?",
    answer:
      "La división del trabajo social, según Durkheim, contribuye a la integración social. A medida que la sociedad se especializa y las funciones se vuelven más interdependientes, se fortalece la cohesión social. La diversificación de roles y funciones genera una solidaridad orgánica que mantiene la estabilidad social.",
  },
  {
    picture: "/dunkheim.png",
    question:
      'Explica el concepto de "conciencia colectiva" según Durkheim y su función en la teoría funcionalista.',
    answer:
      "La conciencia colectiva se refiere a las creencias y valores compartidos en una sociedad. En la teoría funcionalista, actúa como un factor unificador al proporcionar una base común para la cohesión social. Durkheim argumenta que la conciencia colectiva es esencial para mantener la estabilidad y la solidaridad social.",
  },
  {
    picture: "/dunkheim.png",
    question:
      'Define el concepto de "anomia" en el contexto de la teoría funcionalista de Durkheim y cómo puede afectar a una sociedad.',
    answer:
      'La "anomia" según Durkheim se refiere a la falta de normas sociales o a la debilidad de las mismas. En el marco funcionalista, la anomia puede amenazar la estabilidad social al provocar desorganización y falta de cohesión. Es una condición anómala que puede surgir en situaciones de cambio rápido o desorden social.',
  },
  {
    picture: "/dunkheim.png",
    question:
      "Proporciona ejemplos específicos de funciones sociales según la teoría funcionalista de Durkheim.",
    answer:
      "Ejemplos de funciones sociales según Durkheim incluyen la educación (transmisión de normas y valores), la religión (reforzamiento de la moral y la solidaridad), y la familia (socialización y reproducción de normas).",
  },
  {
    picture: "/dunkheim.png",
    question:
      "Menciona una crítica común al enfoque funcionalista de Durkheim.",
    answer:
      "Una crítica común al funcionalismo de Durkheim es que tiende a asumir que las instituciones sociales siempre contribuyen positivamente al funcionamiento de la sociedad, ignorando posibles aspectos conflictivos o disfuncionales.",
  },
  {
    picture: "/comte.png",
    question: "¿De qué se trata la etapa del estado teológico?",
    answer:
      "En esta etapa se creía que todos los fenómenos de la naturaleza eran causados por agentes sobrenaturales o divinos, ya que no se conocían sus verdaderas causas.",
  },
  {
    picture: "/comte.png",
    question: "¿De qué se trata la etapa del estado metafísico?",
    answer:
      "En esta etapa se explica la realidad a partir de un ente abstracto e impersonal, con poderes y fuerzas que controlaban todo lo que acontecía.",
  },
  {
    picture: "/comte.png",
    question: "¿De qué se trata la etapa del estado científico?",
    answer:
      "En esta etapa la explicación de la realidad se basa en la observación y en la experiencia.",
  },
  {
    picture: "/comte.png",
    question: "¿Cuáles son los pilares del estado científico?",
    answer: ["La ciencia", "La razón"],
  },
  {
    picture: "/comte.png",
    question:
      "¿Con que otro nombre se les conoce a los estados teológico, metafísico y científico?",
    answer: ["Estado ficticio", "Estado abstracto", "Estado científico"],
  },
  {
    picture: "/comte.png",
    question:
      "Además de las ciencias sociales, ¿en qué campos ha afectado la ley de los tres estados?",
    answer: "En campos como la filosofía, psicología y antropología.",
  },
  {
    picture: "/comte.png",
    question: "¿Qué implica para Comte la modernidad?",
    answer:
      "Implica la desaparición de las estructuras feudales, como las teológicas y metafísicas.",
  },
  {
    picture: "/comte.png",
    question:
      "¿Qué se necesita para alcanzar un pensamiento racional y transformar a la sociedad en positiva?",
    answer: "Se necesita de la ideología como instrumento racional.",
  },
  {
    picture: "/comte.png",
    question: "¿Cómo percibe Comte el positivismo?",
    answer:
      "Como una religión, por ello le da los mismos valores; esta generaba consenso sobre cuestiones básicas de convivencia y la existencia social.",
  },
  {
    picture: "/comte.png",
    question:
      "¿Qué necesita el ser humano en su transformación al positivismo?",
    answer: "Necesita aceptar ciertas jerarquías e instituciones.",
  },
  {
    picture: "/comte.png",
    question: "¿Cómo se puede devolver el orden social según Comte?",
    answer: "A través de la razón y la ciencia.",
  },
];

export const EachBox = (props) => {
  const { boxIndex, updatedState } = props;
  // eslint-disable-next-line no-unused-vars
  const [mistake, setMistake] = useState(0);
  const { numOfPlayers } = updatedState;
  const getPlayerNamesArr = () => {
    let arr = [];
    for (let i = 1; i <= numOfPlayers; i++) {
      arr.push(`P${i}`);
    }
    return arr;
  };
  const checkIfSnakeOrLadderPresent = () => {
    let a = "";
    snakePositions.forEach((snake) => {
      if (snake.currentPosition === boxIndex) {
        a = (
          <svg
            fill="#000000"
            className="snakes"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 569.074 569.074"
            // xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M510.475,332.822c-10.927-6.634-22.244-12.623-33.387-18.906c-0.796-0.449-1.579-0.914-3.146-1.815 c5.3-0.706,9.828-1.571,14.402-1.873c11.326-0.751,22.558-2.016,33.541-4.966c4.668-1.252,8.739-3.431,11.127-7.936 c1.325-2.505,1.362-3.745-0.123-4.247c1.408-3.578,2.718-9.547-1.514-14.219c0,0-0.995,8.454-5.516,12.351 c-2.032-1.032-4.064-2.064-6.108-3.113c-1.321,1.759-6.801,1.729-10.195-0.33c-0.09,0.362-0.192,0.66-0.237,0.971 c-0.036,0.261-0.008,0.534-0.008,0.665c-1.465,0-2.889,0.049-4.309-0.017c-1.293-0.057-2.587-0.236-4.149-0.388 c-1.477,1.987-3.533,0.979-5.463,0.099c-2.261,2.117-4.937,1.999-7.589,1.607c-6.304-0.931-12.578-2.028-18.887-2.934 c-1.216-0.176-2.517,0.229-3.777,0.363c-0.065-0.27-0.131-0.535-0.2-0.805c0.991-0.171,1.982-0.448,2.979-0.501 c8.633-0.453,17.282-0.706,25.903-1.363c3.718-0.281,7.377-1.347,11.049-2.109c2.64-0.547,5.279-1.171,8.05-1.799 c-0.273,2.525-1.269,5.124-1.269,5.124c4.488,0.376,6.707-3.162,7.801-6.418c0.217-0.199,0.42-0.416,0.641-0.611 c-1.109,3.419-3.342,7.029-3.342,7.029c6.602,0,9.776-5.287,11.281-9.649c0.645-0.383,1.343-0.705,2.15-0.958 c5.243-1.64,6.634-3.843,6.345-9.372c-0.241-4.623-3.231-8.662-7.544-9.384c-4.068-0.681-8.226-0.836-12.354-1.126 c-2.66-0.188-5.337-0.245-8.005-0.293c-3.391-0.062-6.365-0.959-9.262-2.942c-1.819-1.245-4.479-1.836-6.732-1.767 c-6.422,0.192-12.814,1.028-19.176-0.824c-1.399-0.408-3.219-0.196-4.606,0.343c-5.442,2.105-11.012,1.465-16.63,1.416 c-5.287-0.041-10.791-0.028-15.83,1.33c-8.218,2.216-14.635,7.511-19.458,14.615c-0.502,0.738-1.028,1.562-1.746,2.028 c-7.613,4.933-12.493,11.982-16.197,20.106c-3.358,7.352-1.914,14.112,2.868,19.873c5.561,6.699,11.358,13.432,18.078,18.887 c10.478,8.503,21.673,16.152,32.836,23.77c12.538,8.561,25.537,16.455,38.03,25.076c8.249,5.695,15.638,12.505,22.387,21.18 c-3.733,1.456-7.075,3.104-10.604,4.055c-4.785,1.29-9.697,2.146-14.59,2.987c-3.162,0.542-6.377,0.901-9.584,1.016 c-6.81,0.245-13.651,0.693-20.433,0.285c-7.874-0.477-15.675-2.072-23.546-2.668c-13.549-1.024-25.867-6.353-38.396-10.783 c-4.651-1.645-8.812-4.949-12.823-7.989c-1.371-1.036-1.975-3.521-2.293-5.446c-3.505-21.408-11.959-40.665-24.794-58.091 c-5.929-8.05-13.534-14.309-21.522-20.065c-15.5-11.18-32.774-18.834-50.768-25.088c-19.963-6.94-40.453-11.44-61.261-14.917 c-16.854-2.815-33.958-4.112-50.519-8.829c-10.441-2.97-20.666-6.344-31.012-11.122c1.771-1.159,3.219-2.224,4.777-3.101 c9.547-5.361,19.287-10.404,28.625-16.104c6.198-3.782,11.62-8.666,15.818-14.798c5.65-8.258,5.447-16.842,1.399-25.435 c-4.104-8.723-11.024-14.834-19.674-18.976c-15.292-7.324-31.845-9.115-48.369-9.89c-22.15-1.037-44.354-0.959-66.532-1.318 c-15.023-0.241-28.572-4.835-40.608-13.766c-8.127-6.03-11.542-16.671-8.54-26.704c1.338-4.476,3.211-8.792,4.855-13.174 c0.306-0.812,0.681-1.599,0.754-2.509c-8.208,9.266-15.218,19.025-13.194,32.44c1.036,6.858,4.031,12.848,8.784,17.793 c10.114,10.522,22.248,18.107,36.447,21.302c11.444,2.574,23.219,3.933,34.917,5.096c17.23,1.713,34.48,3.203,51.331,7.352 c6.675,1.645,13.149,4.109,19.694,6.255c1.204,0.396,2.317,1.044,4.125,1.881c-1.391,0.645-2.224,1.065-3.084,1.42 c-10.547,4.349-21.437,8.025-31.563,13.194c-13.839,7.067-26.275,16.394-30.506,32.387c-4.921,18.601-3.223,30.739,13.084,44.484 c14.088,11.873,30.902,18.621,48.323,24.117c17.185,5.422,34.741,9.032,52.555,11.31c16.687,2.134,32.946,6.111,48.899,11.126 c12.154,3.818,24.117,8.421,34.965,15.467c6.667,4.333,13.395,8.527,17.234,15.798c4.186,7.928,7.34,16.264,8.82,25.162 c1.086,6.527,1.869,13.125,3.305,19.575c3.293,14.807,12.294,25.916,23.787,35.231c13.427,10.881,28.964,17.634,45.153,23.247 c21.281,7.381,43.288,10.841,65.61,11.27c26.014,0.502,51.657-2.57,75.773-13.501c14.468-6.557,26.961-15.545,35.435-29.249 c2.032-3.289,3.484-7.124,4.37-10.902c3.709-15.834-1.143-29.775-9.421-43.211C546.619,356.49,529.047,344.096,510.475,332.822z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        );
      }
    });
    ladderPositions.forEach((ladder) => {
      if (ladder.currentPosition === boxIndex) {
        a = <img className="" src="/ladder.svg" />;
      }
    });
    return a;
  };

  const handleSweetAlert = (position) => {
    console.log("position", position);
    data.map((q, i) => {
      if (i === position) {
        Swal.fire({
          title: "Sweet!",
          text: `${q.question}`,
          imageUrl: `${q.picture}`,
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: "Custom image",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Mostrar respuesta",
          showDenyButton: true,
          denyButtonText: `¿Respuesta incorrecta?`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Respuesta:",
              text: `${q.answer}`,
              icon: "info",
            });
          } else if (result.isDenied) {
            setMistake(mistake + 1);
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      }
    });
  };

  //   getPlayerNamesArr().map((playerName) => {
  //     const position = updatedState[playerName].currentPosition;
  //     console.log("position", position);
  //     if(position < 100){
  //       handleSweetAlert();
  //     }
  //   });

  return (
    <div className="each-box">
      <div className="icons-in-box">
        {getPlayerNamesArr().map((playerName) => {
          return (
            updatedState[playerName].currentPosition === boxIndex && (
              <>
                <div className={`${playerName}_shape`} />
                <button
                  className="clickAvatar"
                  onClick={() =>
                    handleSweetAlert(updatedState[playerName].currentPosition)
                  }
                >
                  {mistake === 1 && <span>X</span>}
                  {mistake === 2 && <span>XX</span>}
                  {mistake === 3 && <span>XXX</span>}
                  Click me
                </button>
              </>
            )
          );
        })}
      </div>
      {checkIfSnakeOrLadderPresent()}

      <div style={{ fontSize: "10px" }}>{boxIndex}</div>
    </div>
  );
};
