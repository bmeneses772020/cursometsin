import React, { useState, useEffect } from "react";
import {
  FileText,
  PlayCircle,
  HelpCircle,
  CheckCircle2,
  Circle,
  ListChecks,
  RotateCcw,
  ChevronRight,
  BookOpen,
  Link2,
  Lock,
  PenSquare,
  Download,
} from "lucide-react";
import { isEcMode, completionUrl, HUB_URL } from "./ec.js";

/* ------------------------------------------------------------------ */
/* CONTENIDO DEL CURSO                                                 */
/* ------------------------------------------------------------------ */

const COURSE = {
  title: "Metodología de la Investigación para Docentes y Futuros Tutores de Tesis y Proyectos de Grado",
  subtitle: "Curso de autogestión",
  modules: [
    {
      id: "m1",
      label: "Módulo 1",
      title: "Enfoques de investigación: de las visiones del mundo a las rutas",
      lessons: [
        {
          id: "l1-1",
          type: "texto",
          title: "Acerca del curso",
          duration: "5 min",
          paragraphs: [
            "Este curso de autogestión está dirigido a docentes que se están formando en metodología de la investigación y que son, o serán, tutores de tesis y de proyectos de grado en cualquier carrera universitaria. Su propósito es doble: que domines la lógica con la que se toman las decisiones metodológicas y que puedas, desde ese dominio, orientar y evaluar el trabajo de tus tesistas con criterios fundamentados.",
            "La idea de fondo es sencilla: se orienta bien lo que se entiende bien. Por eso el curso avanza siguiendo la lógica con la que se construye una investigación, de la idea a la ejecución: (1) los enfoques y sus supuestos; (2) el problema, la pregunta y los objetivos; (3) la revisión de la literatura y el marco teórico; (4) el diseño de la investigación: alcance, hipótesis, variables y tipo de diseño; (5) la población, la muestra, los instrumentos y el rigor; (6) el análisis de datos y el reporte de resultados; y (7) la tutoría misma: retroalimentación, ética, integridad y evaluación.",
            "Conviene tener presente que, en la práctica, estas etapas no son un camino recto: la literatura puede obligar a reformular el problema, y un diseño inviable puede obligar a ajustar los objetivos. El orden del curso es el más claro para aprender, y la cadena de coherencia que verás en el módulo 4 es la herramienta para revisar que todas las piezas encajen.",
            "Cada módulo incluye lecturas con sus referencias en APA 7, un video de apoyo, un cuestionario, una lista de chequeo y una actividad práctica con retroalimentación inmediata. La duración estimada es de aproximadamente 5 horas, y puedes avanzar a tu propio ritmo: tu progreso se guarda automáticamente en este sitio.",
            "Una aclaración sobre las fuentes: las lecturas sintetizan trabajos de autores reconocidos (libros de metodología, artículos de revistas arbitradas y guías de reporte), y al final de cada una encontrarás la referencia completa, con DOI cuando existe, para que vayas al texto original. Lo que aquí se atribuye a cada autor se mantiene al nivel que respaldan sus propios textos; cuando algo es un criterio práctico del curso y no una afirmación de un autor, se dice expresamente.",
            "Otra aclaración importante: cada universidad tiene su propio reglamento de trabajos de grado (modalidades, estructura, plazos, funciones del tutor y del tribunal). Este curso ofrece criterios generales; cuando algo de lo que aquí se plantea se contraponga con tu reglamento institucional, prevalece el reglamento.",
          ],
          tip: "Sugerencia: ten a mano un proyecto real (el tuyo o el de un tesista) y úsalo como caso de trabajo en las actividades prácticas de cada módulo.",
        },
        {
          id: "l1-2",
          type: "texto",
          title: "Visiones del mundo: de dónde parten las decisiones metodológicas",
          duration: "10 min",
          paragraphs: [
            "Toda investigación parte de supuestos, casi siempre implícitos, sobre qué es la realidad y cómo puede conocerse. Esos supuestos influyen en qué preguntas se consideran válidas, qué datos cuentan como evidencia y cómo se interpreta lo encontrado. Creswell y Creswell (2018) llaman visiones del mundo (en inglés, worldviews) a esas creencias generales del investigador, y las presentan como uno de los tres elementos que, junto con el diseño de investigación y los métodos específicos, componen un enfoque de investigación.",
            "Estos autores describen cuatro visiones principales. La postpositivista, de tradición cuantitativa, entiende que las causas determinan los resultados, busca reducir las ideas a un conjunto de variables que puedan ponerse a prueba y se apoya en la observación y la medición cuidadosas. La constructivista, de tradición cualitativa, parte de que las personas construyen significados a partir de su experiencia, por lo que el investigador busca comprender esos significados con preguntas amplias y abiertas, y reconoce que su propia interpretación forma parte del resultado.",
            "La visión transformadora (o participativa) vincula la investigación con una agenda de cambio y atiende a poblaciones en situación de desventaja o exclusión. La pragmática se centra en el problema y en las consecuencias de la investigación, y se siente libre de usar los métodos que mejor respondan a la pregunta, sean cuantitativos, cualitativos o ambos. Ninguna de las cuatro es «la correcta»: cada una es coherente con ciertas preguntas y ciertos tipos de evidencia.",
            "Para un tutor, esto tiene una consecuencia práctica. Con frecuencia, el capítulo metodológico de un trabajo de grado nombra un paradigma por costumbre y luego toma decisiones que no se derivan de él: por ejemplo, declara una postura interpretativa y a la vez pretende generalizar estadísticamente los resultados de seis entrevistas. Este curso propone una pregunta de control sencilla (es un criterio práctico, no una cita): ¿las decisiones de muestra, instrumentos y análisis son coherentes con lo que el estudiante dice creer sobre cómo se conoce el fenómeno?",
            "Hernández-Sampieri y Mendoza (2018) organizan la investigación en tres rutas —cuantitativa, cualitativa y mixta— y las presentan como formas de aproximarse a la realidad, cada una con su lógica, sus procesos y sus criterios de calidad. En la siguiente lección vemos cómo se distinguen y cómo se decide cuál usar; por ahora conviene quedarse con la idea de que la ruta no se elige por moda ni por comodidad, sino porque es la que mejor permite responder la pregunta de investigación.",
          ],
          tip: "Sugerencia: la próxima vez que revises un proyecto, pregunta al estudiante: «¿qué supuestos hay detrás de tu pregunta y cómo se reflejan en tu diseño?». La conversación que sigue suele ser más útil que cualquier corrección de forma.",
          references: [
            "Creswell, J. W., & Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches (5th ed.). SAGE Publications.",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l1-3",
          type: "texto",
          title: "Rutas cuantitativa, cualitativa y mixta: cuándo y por qué",
          duration: "10 min",
          paragraphs: [
            "Creswell y Creswell (2018) distinguen la investigación cuantitativa, que examina la relación entre variables medibles con procedimientos estadísticos para poner a prueba teorías, de la cualitativa, que explora y comprende el significado que individuos o grupos atribuyen a un problema social o humano, y cuyos datos suelen ser palabras, imágenes u observaciones. Hernández-Sampieri y Mendoza (2018) llegan a una distinción equivalente al presentar sus rutas: una secuencial y probatoria, y otra más flexible e inductiva, en la que el planteamiento puede afinarse durante el trabajo de campo.",
            "Un enfoque no es mejor que otro: son herramientas para preguntas distintas. Como criterio práctico de este curso, los verbos del objetivo suelen delatar la ruta. Medir, comparar, asociar o explicar a partir de variables apuntan a lo cuantitativo; comprender, interpretar, explorar experiencias o describir procesos en su contexto apuntan a lo cualitativo. Si el verbo y la ruta no coinciden, vale la pena detener la revisión y preguntar cuál de los dos está equivocado.",
            "El enfoque mixto fue planteado por Johnson y Onwuegbuzie (2004) como un tercer paradigma que combina elementos cuantitativos y cualitativos para aprovechar las fortalezas de cada uno y compensar sus debilidades. Creswell y Creswell (2018) describen tres diseños mixtos básicos: el convergente (se recogen ambos tipos de datos y se comparan), el secuencial explicativo (primero lo cuantitativo y luego lo cualitativo para explicarlo) y el secuencial exploratorio (primero lo cualitativo y luego lo cuantitativo para probar o generalizar lo hallado).",
            "Un error frecuente es elegir el enfoque mixto «para que el trabajo quede más completo». Un diseño mixto no consiste en agregar unas entrevistas a una encuesta; exige una razón para combinar, un plan de integración de los dos tipos de datos y, además, más tiempo y más dominio técnico. Antes de aprobarlo, el tutor puede preguntar qué pregunta solo puede responderse combinando ambas rutas y si el estudiante puede sostener el trabajo de campo y el análisis de las dos partes en el plazo disponible.",
            "En resumen, la decisión sobre la ruta debería poder defenderse en una frase: «uso esta ruta porque mi pregunta pide X». Si el estudiante no logra decirla, la dificultad probablemente esté antes, en la formulación del problema, que es el tema del siguiente módulo.",
          ],
          tip: "Sugerencia: pide al estudiante que escriba la frase «uso esta ruta porque mi pregunta pide…» al comienzo de su capítulo metodológico. Si no puede completarla, vuelve a la pregunta.",
          references: [
            "Creswell, J. W., & Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches (5th ed.). SAGE Publications.",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
            "Johnson, R. B., & Onwuegbuzie, A. J. (2004). Mixed methods research: A research paradigm whose time has come. Educational Researcher, 33(7), 14–26. https://doi.org/10.3102/0013189X033007014",
          ],
        },
        {
          id: "l1-4",
          type: "video",
          title: "Video: elegir y justificar el enfoque de una investigación",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video sobre visiones del mundo y rutas de investigación (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l1-5",
          type: "quiz",
          title: "Cuestionario: enfoques de investigación",
          duration: "5 preguntas",
          questions: [
            {
              q: "Según Creswell y Creswell (2018), ¿qué son las visiones del mundo (worldviews)?",
              options: [
                "Las técnicas de recolección de datos que usa el investigador",
                "Las creencias generales del investigador sobre la realidad y el conocimiento, que orientan sus decisiones",
                "Los resultados esperados de una investigación",
                "Los apartados obligatorios de un trabajo de grado",
              ],
              correct: 1,
              explanation:
                "Son los supuestos generales con los que el investigador se acerca a un problema; junto con el diseño y los métodos, forman el enfoque de investigación.",
            },
            {
              q: "¿Cuál de las siguientes NO es una de las cuatro visiones del mundo que describen Creswell y Creswell (2018)?",
              options: [
                "Postpositivista",
                "Constructivista",
                "Normativa-institucional",
                "Pragmática",
              ],
              correct: 2,
              explanation:
                "Las cuatro visiones son la postpositivista, la constructivista, la transformadora y la pragmática. «Normativa-institucional» no corresponde a ninguna de ellas.",
            },
            {
              q: "Un estudiante quiere «comprender cómo viven la transición a la universidad los estudiantes de primera generación». ¿Qué ruta es la más coherente con ese objetivo?",
              options: [
                "Cuantitativa, porque toda investigación debe medirse",
                "Cualitativa, porque busca comprender experiencias y significados en su contexto",
                "Ninguna: el objetivo no es investigable",
                "Solo mixta, porque cualquier tema complejo la exige",
              ],
              correct: 1,
              explanation:
                "El verbo «comprender» y el interés por la experiencia apuntan a una ruta cualitativa. Un diseño mixto solo se justifica si hay una pregunta que requiera combinar ambas rutas.",
            },
            {
              q: "Un estudiante propone un diseño mixto «para que la tesis quede más completa». ¿Qué corresponde como tutor?",
              options: [
                "Aprobarlo: más datos siempre mejoran el trabajo",
                "Rechazarlo: los diseños mixtos no son válidos",
                "Preguntar qué pregunta solo puede responderse combinando ambas rutas, cómo integrará los datos y si es viable en el plazo",
                "Pedirle que haga una encuesta y que después decida",
              ],
              correct: 2,
              explanation:
                "El enfoque mixto se justifica por la pregunta y requiere un plan de integración, además de más tiempo y dominio técnico.",
            },
            {
              q: "Johnson y Onwuegbuzie (2004) plantearon la investigación de métodos mixtos como...",
              options: [
                "Un error metodológico que debe evitarse",
                "Un tercer paradigma que combina elementos cuantitativos y cualitativos",
                "Un sinónimo de investigación cuantitativa con preguntas abiertas",
                "Una técnica de muestreo",
              ],
              correct: 1,
              explanation:
                "Su artículo propone la investigación de métodos mixtos como un paradigma que aprovecha las fortalezas de ambas tradiciones y compensa sus debilidades.",
            },
          ],
        },
        {
          id: "l1-6",
          type: "checklist",
          title: "Lista de chequeo: enfoques de investigación",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Puedo explicar qué es una visión del mundo y por qué influye en las decisiones metodológicas.",
            "Puedo nombrar las cuatro visiones que describen Creswell y Creswell (2018) y decir qué enfatiza cada una.",
            "Distingo la ruta cuantitativa de la cualitativa por su lógica y por el tipo de pregunta que responden.",
            "Conozco los tres diseños mixtos básicos (convergente, secuencial explicativo y secuencial exploratorio).",
            "Sé qué preguntar a un estudiante que quiere usar un diseño mixto sin una razón clara.",
            "Puedo pedir al estudiante una frase que justifique su ruta a partir de su pregunta.",
          ],
        },
        {
          id: "l1-7",
          type: "practica",
          title: "Actividad práctica: elige y justifica un enfoque",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a relacionar preguntas con rutas de investigación, a reconocer visiones del mundo en enunciados concretos y a justificar el enfoque de un proyecto real.",
          pdfHref: "/actividad-practica-modulo1.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Qué ruta sugiere cada objetivo?",
              instruction:
                "Lee cada objetivo y marca la ruta con la que es más coherente. Luego revisa tus respuestas.",
              choiceLabels: ["Cuantitativa", "Cualitativa"],
              items: [
                { id: "a", text: "«Comparar el rendimiento promedio de estudiantes que usan una plataforma virtual y de quienes no la usan, en una asignatura determinada.»", correct: 0, explanation: "Compara una variable medible entre grupos: es un objetivo cuantitativo." },
                { id: "b", text: "«Comprender cómo interpretan los docentes noveles la retroalimentación que reciben de sus coordinadores.»", correct: 1, explanation: "«Comprender» e «interpretar» apuntan a significados construidos por las personas: ruta cualitativa." },
                { id: "c", text: "«Determinar la asociación entre las horas de sueño y el nivel de estrés en estudiantes de primer año.»", correct: 0, explanation: "Busca la relación entre dos variables medibles: ruta cuantitativa." },
                { id: "d", text: "«Explorar las experiencias de estudiantes de primera generación durante su primer semestre universitario.»", correct: 1, explanation: "Explora experiencias en su contexto, con datos que son relatos: ruta cualitativa." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "Reconoce la visión del mundo",
              instruction:
                "Lee cada enunciado y marca con cuál de estas dos visiones es más coherente. Luego revisa tus respuestas.",
              choiceLabels: ["Postpositivista", "Constructivista"],
              items: [
                { id: "a", text: "La investigadora reduce el fenómeno a variables, formula hipótesis y las pone a prueba con un instrumento de medición.", correct: 0, explanation: "Reducir ideas a variables que se ponen a prueba con medición es el rasgo central de la visión postpositivista." },
                { id: "b", text: "El investigador busca comprender los significados que los participantes construyen sobre su experiencia, con preguntas amplias y abiertas.", correct: 1, explanation: "Los significados construidos por las personas y las preguntas abiertas son rasgos de la visión constructivista." },
                { id: "c", text: "Se busca verificar una teoría mediante observaciones y mediciones cuidadosas y repetibles.", correct: 0, explanation: "La verificación de teorías con observación y medición es característica de la visión postpositivista." },
                { id: "d", text: "El investigador reconoce que su propia historia y su interpretación influyen en lo que describe del fenómeno.", correct: 1, explanation: "Reconocer el papel de la interpretación del investigador es propio de la visión constructivista." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Justifica el enfoque de un proyecto",
              instruction:
                "Piensa en un proyecto real (tuyo o de un tesista) o inventa uno de tu carrera. Responde y compara con la respuesta modelo.",
              prompts: [
                {
                  id: "pregunta",
                  label: "Escribe la pregunta de investigación del proyecto:",
                  sample: "Por ejemplo: «¿Cómo se relaciona el uso de la plataforma virtual con el rendimiento en Estadística de los estudiantes de segundo año de Ingeniería?»",
                },
                {
                  id: "ruta",
                  label: "Completa la frase: «Uso la ruta ___ porque mi pregunta pide ___».",
                  sample: "«Uso la ruta cuantitativa porque mi pregunta pide establecer la relación entre dos variables medibles: uso de la plataforma y rendimiento.»",
                },
                {
                  id: "supuestos",
                  label: "Escribe una pregunta que le harías al estudiante para revisar si sus decisiones de muestra y análisis son coherentes con su enfoque:",
                  sample: "«Si tu enfoque busca comprender significados, ¿por qué planteas generalizar estadísticamente con una muestra de seis entrevistas?»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m2",
      label: "Módulo 2",
      title: "Del tema al problema, y del problema a los objetivos",
      lessons: [
        {
          id: "l2-1",
          type: "texto",
          title: "Del tema al problema de investigación",
          duration: "10 min",
          paragraphs: [
            "Quien empieza a investigar suele llegar con un tema, no con un problema. Un tema es un área amplia (por ejemplo, «el uso de redes sociales en universitarios»); un problema es una situación concreta que genera una pregunta que vale la pena responder. Pasar de uno a otro es probablemente la decisión metodológica más importante de todo el trabajo, porque de ella dependen los objetivos, el marco teórico y el diseño.",
            "Booth et al. (2016) describen este paso en tres movimientos que sirven como guía de conversación: primero, nombrar el tema («estoy estudiando…»); segundo, plantear una pregunta indirecta sobre él («porque quiero averiguar quién, cómo o por qué…»); y tercero, explicar su significado («para ayudar a mi lector a entender…»). El tercer paso es el más difícil y el que más suele faltar: responde a la pregunta «¿y a quién le importa?».",
            "Los mismos autores diferencian entre problemas prácticos —situaciones del mundo que se quiere mejorar— y problemas de investigación o conceptuales —preguntas sobre algo que todavía no se entiende—, y señalan que la investigación responde a estos últimos aunque su origen sea práctico. Esta distinción ayuda a decidir qué necesita comprender el investigador antes de proponer o intervenir.",
            "Delimitar significa recortar el tema hasta volverlo investigable con el tiempo y los recursos de un trabajo de grado. Una forma práctica de hacerlo, propuesta como criterio de este curso, es acotar por cuatro dimensiones: población (¿quiénes?), espacio (¿dónde?), tiempo (¿cuándo?) y aspecto (¿qué dimensión específica?). Así, «redes sociales en universitarios» puede acotarse a «uso de redes sociales con fines académicos entre estudiantes de primer año de una carrera, durante el primer semestre de 2026».",
            "Hay además una forma más exigente de encontrar preguntas. Alvesson y Sandberg (2011) critican que gran parte de la investigación genera sus preguntas detectando «vacíos» en la literatura (gap-spotting), es decir, identificando lo que aún no se ha estudiado, y proponen en cambio la problematización: identificar y cuestionar los supuestos que subyacen a la teoría existente para formular preguntas que la desafíen. Para un docente en formación, la enseñanza es doble: «no hay estudios sobre X en mi ciudad» es una justificación débil por sí sola, y una mejor pregunta suele nacer de preguntarse qué se da por supuesto en lo ya publicado.",
          ],
          tip: "Pregunta clave para la tutoría y para tu propia formación: «Si tuvieras que explicar en una frase por qué este trabajo importa y a quién, ¿qué dirías?».",
          references: [
            "Alvesson, M., & Sandberg, J. (2011). Generating research questions through problematization. Academy of Management Review, 36(2), 247–271.",
            "Booth, W. C., Colomb, G. G., Williams, J. M., Bizup, J., & FitzGerald, W. T. (2016). The craft of research (4th ed.). University of Chicago Press.",
          ],
        },
        {
          id: "l2-2",
          type: "texto",
          title: "Pregunta, objetivo general y objetivos específicos",
          duration: "10 min",
          paragraphs: [
            "Un buen planteamiento del problema se reconoce porque sus partes son coherentes entre sí. Hernández-Sampieri y Mendoza (2018) describen el planteamiento como el conjunto de elementos que comunican qué se quiere investigar: los objetivos, las preguntas, la justificación y la viabilidad, además de la evaluación de las deficiencias en el conocimiento del problema. Para la justificación proponen criterios como la conveniencia, la relevancia social, las implicaciones prácticas, el valor teórico y la utilidad metodológica; no todo trabajo cumple todos, pero el investigador debe poder argumentar al menos algunos.",
            "La viabilidad se refiere a si el trabajo puede realizarse con los recursos, el tiempo y el acceso a la información disponibles. Un problema relevante pero imposible de abordar en un semestre, o que depende de datos o personas a los que no se tiene acceso, debe reformularse o recortarse. Como señales de alerta (criterio práctico del curso) conviene buscar: un tema sin delimitar; una pregunta que se responde con sí o no; un «problema» que es una solución disfrazada («falta una aplicación móvil…»); objetivos que no responden a la pregunta; y una justificación que solo afirma que el tema es «importante».",
            "Los objetivos son el compromiso del trabajo: dicen qué hará el investigador para responder a su pregunta. Hernández-Sampieri y Mendoza (2018) indican que deben expresarse con claridad y precisión, ser congruentes entre sí y con el planteamiento del problema, y poder alcanzarse. Un objetivo bien escrito comienza con un verbo en infinitivo que describe una acción observable y especifica qué se hará, en quiénes y en qué contexto. Para elegir el verbo, una ayuda es la taxonomía de Bloom revisada por Anderson y Krathwohl (2001), que ordena los procesos cognitivos en seis categorías: recordar, comprender, aplicar, analizar, evaluar y crear.",
            "El verbo debe corresponder al alcance del estudio. «Describir» o «caracterizar» son adecuados en estudios descriptivos; «comparar» o «relacionar», en estudios que buscan asociaciones; «explicar» o «determinar el efecto» exigen diseños que permitan sostener esa afirmación. Un error frecuente es prometer en el objetivo un alcance que el diseño no puede cumplir (por ejemplo, «demostrar el impacto» con un estudio solo descriptivo). En la ruta cuantitativa, además, la presencia de hipótesis se vincula con el alcance: los estudios exploratorios y muchos descriptivos pueden no llevarlas (Hernández-Sampieri y Mendoza, 2018).",
            "La jerarquía es la clave: el objetivo general responde a la pregunta principal, y los objetivos específicos son pasos que, sumados, permiten alcanzarlo. Cada objetivo específico debe contener una sola acción y ser verificable; si una «y» une dos acciones distintas, conviene separarlo en dos. Una herramienta útil es la matriz de coherencia: colocar en columnas el problema, la pregunta, el objetivo general y los objetivos específicos permite ver si cada parte responde a la anterior. En proyectos aplicados (por ejemplo, tecnológicos), la matriz puede organizarse en torno a problema, objetivos, propuesta, resultados esperados e indicadores; confirma qué solicita el reglamento de tu universidad.",
          ],
          tip: "Prueba rápida: para cada objetivo específico, pregúntate «¿cómo sabré que lo cumplí?». Si no puedes responder, el objetivo es demasiado vago.",
          references: [
            "Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives. Longman.",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l2-3",
          type: "video",
          title: "Video: de la idea al problema y a los objetivos",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video sobre cómo delimitar el problema y derivar los objetivos (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l2-4",
          type: "quiz",
          title: "Cuestionario: del tema al problema y a los objetivos",
          duration: "5 preguntas",
          questions: [
            {
              q: "Según Booth et al. (2016), ¿cuál de los tres movimientos suele ser el más difícil y el que más falta?",
              options: [
                "Nombrar el tema",
                "Plantear una pregunta indirecta sobre el tema",
                "Explicar el significado del trabajo: para qué y a quién le importa",
                "Citar al menos cinco fuentes",
              ],
              correct: 2,
              explanation:
                "El tercer paso responde a «¿y a quién le importa?»; es el que más cuesta formular y el que con más frecuencia se omite.",
            },
            {
              q: "Alvesson y Sandberg (2011) critican que muchas preguntas de investigación se generen únicamente a partir del gap-spotting. ¿Qué proponen en su lugar?",
              options: [
                "Eliminar la revisión de la literatura",
                "La problematización: cuestionar los supuestos subyacentes a la teoría existente",
                "Copiar las preguntas de estudios internacionales",
                "Formular solo preguntas que se respondan con sí o no",
              ],
              correct: 1,
              explanation:
                "Plantean identificar y cuestionar supuestos de la literatura existente para formular preguntas que la desafíen, en lugar de solo señalar lo que falta estudiar.",
            },
            {
              q: "«Falta una aplicación móvil que gestione el inventario de la tienda.» ¿Qué problema tiene este enunciado como problema de investigación?",
              options: [
                "Es demasiado corto",
                "Es una solución disfrazada de problema: presupone lo que se va a construir en vez de describir la situación",
                "Usa un verbo en infinitivo",
                "No cita ninguna fuente",
              ],
              correct: 1,
              explanation:
                "Cierra la pregunta antes de investigarla. Conviene describir la situación (por ejemplo, las dificultades actuales de gestión del inventario) y luego decidir qué solución corresponde.",
            },
            {
              q: "¿Cuál es un objetivo específico bien formulado?",
              options: [
                "«Analizar y proponer una solución integral y demostrar su impacto en toda la universidad.»",
                "«Mejorar la educación.»",
                "«Comparar el rendimiento promedio entre estudiantes que participan en tutorías y quienes no, en una asignatura determinada.»",
                "«Conocer a los estudiantes y sus problemas.»",
              ],
              correct: 2,
              explanation:
                "Tiene una sola acción, un criterio de comparación verificable y un contexto acotado. Los demás mezclan acciones, son vagos o prometen un alcance excesivo.",
            },
            {
              q: "Un trabajo tiene el objetivo «demostrar el impacto de un programa», pero su diseño solo describe la situación una vez. ¿Qué problema hay?",
              options: [
                "El objetivo promete un alcance que el diseño no puede sostener",
                "El verbo «demostrar» no existe en español",
                "Falta una hipótesis cualitativa",
                "No hay ningún problema",
              ],
              correct: 0,
              explanation:
                "Un diseño solo descriptivo permite caracterizar, no demostrar un efecto; el verbo del objetivo debe corresponder al alcance real del estudio.",
            },
          ],
        },
        {
          id: "l2-5",
          type: "checklist",
          title: "Lista de chequeo: del tema al problema y a los objetivos",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Distingo un tema amplio de un problema delimitado y sé acotarlo por población, espacio, tiempo y aspecto.",
            "Puedo explicar los tres movimientos de Booth et al. (2016) y la diferencia entre problema práctico y problema de investigación.",
            "Sé qué significa problematizar (Alvesson y Sandberg, 2011) y por qué no basta con señalar un vacío en la literatura.",
            "Reconozco señales de alerta en un planteamiento: tema amplio, pregunta de sí o no, solución disfrazada, justificación vacía.",
            "Puedo redactar un objetivo con verbo observable, una sola acción y un contexto acotado.",
            "Sé revisar con una matriz de coherencia que el objetivo general responda a la pregunta y los específicos conduzcan a él.",
          ],
        },
        {
          id: "l2-6",
          type: "practica",
          title: "Actividad práctica: del tema a los objetivos",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a distinguir un tema amplio de un problema delimitado, a evaluar la formulación de objetivos y a derivar los objetivos de un proyecto propio.",
          pdfHref: "/actividad-practica-modulo2.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Tema amplio o problema delimitado?",
              instruction:
                "Lee cada enunciado y marca si es un tema amplio o un problema ya delimitado. Luego revisa tus respuestas.",
              choiceLabels: ["Tema amplio", "Problema delimitado"],
              items: [
                { id: "a", text: "«Las redes sociales en los jóvenes.»", correct: 0, explanation: "No especifica población, espacio, tiempo ni aspecto: es un tema amplio." },
                { id: "b", text: "«Frecuencia y finalidad del uso de redes sociales con fines académicos entre estudiantes de primer año de Ingeniería Industrial de una universidad de Santa Cruz de la Sierra durante el primer semestre de 2026.»", correct: 1, explanation: "Delimita población, espacio, tiempo y aspecto específico." },
                { id: "c", text: "«La educación en Bolivia.»", correct: 0, explanation: "Es un área enorme; no se puede investigar sin recortarla." },
                { id: "d", text: "«Percepción de docentes de un colegio sobre la utilidad de la retroalimentación escrita en la asignatura de Lenguaje durante la gestión 2026.»", correct: 1, explanation: "Acota quiénes participan, dónde, cuándo y qué aspecto se estudia." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "¿Objetivo bien formulado o con problemas?",
              instruction:
                "Lee cada objetivo y marca si está bien formulado o si presenta un problema. Luego revisa tus respuestas.",
              choiceLabels: ["Bien formulado", "Con problemas"],
              items: [
                { id: "a", text: "«Describir los hábitos de estudio de los estudiantes de primer año de Contaduría de una universidad privada durante la gestión 2026.»", correct: 0, explanation: "Verbo observable, población, contexto y tiempo definidos; el verbo corresponde a un alcance descriptivo." },
                { id: "b", text: "«Conocer la realidad de los estudiantes.»", correct: 1, explanation: "«Conocer» no es observable y «la realidad de los estudiantes» no delimita nada." },
                { id: "c", text: "«Identificar los factores de abandono y diseñar un programa de retención y evaluar su impacto.»", correct: 1, explanation: "Une tres acciones distintas en un solo objetivo; conviene separarlas." },
                { id: "d", text: "«Comparar el nivel de ansiedad ante la estadística entre estudiantes de dos carreras mediante una escala validada.»", correct: 0, explanation: "Una acción clara, un criterio de comparación verificable y un instrumento definido." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Deriva los objetivos de un proyecto propio",
              instruction:
                "Elige un proyecto real (tuyo o de un tesista) o inventa uno de tu carrera y complétalo paso a paso. Compara con la respuesta modelo.",
              prompts: [
                {
                  id: "pregunta",
                  label: "Escribe la pregunta de investigación:",
                  sample: "Por ejemplo: «¿Qué factores académicos y económicos se asocian al abandono del primer año entre estudiantes de Ingeniería de Sistemas de una universidad privada?»",
                },
                {
                  id: "general",
                  label: "Redacta el objetivo general (verbo observable, población, contexto):",
                  sample: "«Identificar los factores académicos y económicos asociados al abandono del primer año en estudiantes de Ingeniería de Sistemas de una universidad privada, gestiones 2024–2025.»",
                },
                {
                  id: "especificos",
                  label: "Redacta dos objetivos específicos que, sumados, permitan alcanzar el general (una sola acción cada uno):",
                  sample: "1) «Caracterizar el perfil académico y económico de los estudiantes que abandonaron y de los que continuaron.» 2) «Comparar la frecuencia de los factores identificados entre ambos grupos.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m3",
      label: "Módulo 3",
      title: "Revisión de la literatura y marco teórico",
      lessons: [
        {
          id: "l3-1",
          type: "texto",
          title: "La revisión de la literatura: funciones y tipos",
          duration: "10 min",
          paragraphs: [
            "El marco teórico y los antecedentes suelen ser el capítulo donde los trabajos de grado se convierten en una lista de citas sin hilo conductor. Su función es doble: mostrar qué se sabe ya sobre el problema (antecedentes) y presentar los conceptos y teorías que permiten interpretarlo (marco teórico). Hernández-Sampieri y Mendoza (2018) presentan la revisión de la literatura como una etapa que ayuda a conocer lo ya investigado, a afinar el planteamiento y a sustentar el estudio; por eso no es un trámite posterior, sino una actividad que acompaña al trabajo desde el inicio.",
            "No toda revisión de la literatura es igual. Grant y Booth (2009) analizaron 14 tipos de revisión y sus metodologías asociadas, entre ellas la revisión crítica, la revisión de alcance (scoping review), la revisión rápida y la revisión sistemática, y mostraron que cada tipo responde a un propósito distinto y exige un grado diferente de sistematicidad en la búsqueda, la evaluación y la síntesis. Saber que existen esos tipos evita confundir una revisión narrativa de apoyo para un trabajo de grado con una revisión sistemática, que es en sí misma un diseño de investigación.",
            "Snyder (2019) ofrece una visión de conjunto de la revisión de literatura como metodología de investigación y advierte que las revisiones tradicionales suelen carecer de rigor, por lo que propone lineamientos para realizarlas y evaluarlas con más cuidado. De ahí un criterio práctico para el curso: aunque el trabajo de grado no sea una revisión sistemática, conviene que la revisión sea explícita sobre cómo se buscaron y se eligieron las fuentes, para que otra persona pueda entender y, en lo posible, repetir el proceso.",
            "Una buena revisión se reconoce porque no resume las fuentes una por una, sino que las organiza por ideas o por temas (síntesis); compara posturas y señala acuerdos y vacíos; y concluye qué aporta ese conjunto de conocimientos al problema del investigador. Dicho de otro modo, el hilo conductor lo pone quien revisa, no las fuentes.",
            "Las preguntas de control para evaluar un marco teórico son sencillas: ¿qué conceptos de la pregunta necesito definir?, ¿qué teoría o modelo orienta el análisis?, ¿qué estudios previos se parecen al mío y en qué se diferencian?, ¿qué deja sin responder la literatura y cómo lo aborda este trabajo? Si el capítulo no permite responderlas, probablemente sea una acumulación de citas.",
          ],
          tip: "Sugerencia: al revisar un marco teórico, subraya cada oración que sea una idea propia del autor y no una cita. Si casi no hay subrayado, falta síntesis.",
          references: [
            "Grant, M. J., & Booth, A. (2009). A typology of reviews: An analysis of 14 review types and associated methodologies. Health Information and Libraries Journal, 26(2), 91–108. https://doi.org/10.1111/j.1471-1842.2009.00848.x",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
            "Snyder, H. (2019). Literature review as a research methodology: An overview and guidelines. Journal of Business Research, 104, 333–339. https://doi.org/10.1016/j.jbusres.2019.07.039",
          ],
        },
        {
          id: "l3-2",
          type: "texto",
          title: "Buscar, seleccionar y sintetizar: de la lista de citas al argumento",
          duration: "10 min",
          paragraphs: [
            "Una búsqueda de literatura confiable empieza por la pregunta. Como criterio práctico del curso, el procedimiento básico tiene cinco pasos: traducir la pregunta a conceptos clave y sus sinónimos (también en inglés); elegir las bases de datos donde buscar; combinar los términos; aplicar criterios de inclusión y exclusión explícitos (por ejemplo, años, idioma, tipo de documento, población); y registrar lo que se encontró y lo que se descartó. Anotar la fecha de búsqueda y los términos usados permite justificar y repetir el proceso.",
            "La declaración PRISMA 2020 (Page et al., 2021) es una guía para informar con transparencia las revisiones sistemáticas: incluye una lista de verificación de 27 ítems y diagramas de flujo para documentar cuántos registros se identificaron, cuántos se revisaron y cuántos se incluyeron. Aunque está pensada para revisiones sistemáticas, su lógica es útil como modelo para cualquier revisión: decir qué se buscó, dónde, con qué criterios y qué se descartó.",
            "Sobre la calidad de las fuentes, conviene orientar hacia material verificable: artículos en revistas arbitradas, libros de editoriales académicas, tesis en repositorios institucionales e informes de organismos reconocidos, comprobando autor, año y editorial o DOI. Cuando la universidad no ofrece acceso a bases de datos de pago, existen opciones de acceso gratuito o abierto, como SciELO, Redalyc, Dialnet, DOAJ y Google Académico. Booth et al. (2016) dedican buena parte de su obra a cómo encontrar, evaluar y usar fuentes en una investigación; es una lectura recomendable para quien orienta a otros.",
            "La síntesis se construye comparando. En lugar de escribir «Pérez (2020) encontró…, García (2021) encontró…», se agrupan los estudios por tema, se contrastan sus resultados y sus métodos y se señalan coincidencias y diferencias, para concluir qué sabemos, qué no y qué problema atiende el trabajo. Una matriz de síntesis (filas = estudios; columnas = población, método, hallazgos, limitaciones) ayuda a ver patrones antes de redactar.",
            "Por último, la citación es parte del rigor. El formato más habitual en los trabajos de grado es APA 7.ª edición (American Psychological Association, 2020), aunque tu universidad puede exigir otro. Conviene revisar desde las primeras entregas que citas y referencias estén bien construidas y se correspondan: corregirlo al final es mucho más costoso.",
          ],
          references: [
            "American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.). https://doi.org/10.1037/0000165-000",
            "Booth, W. C., Colomb, G. G., Williams, J. M., Bizup, J., & FitzGerald, W. T. (2016). The craft of research (4th ed.). University of Chicago Press.",
            "Page, M. J., McKenzie, J. E., Bossuyt, P. M., Boutron, I., Hoffmann, T. C., Mulrow, C. D., Shamseer, L., Tetzlaff, J. M., Akl, E. A., Brennan, S. E., Chou, R., Glanville, J., Grimshaw, J. M., Hróbjartsson, A., Lalu, M. M., Li, T., Loder, E. W., Mayo-Wilson, E., McDonald, S., . . . Moher, D. (2021). The PRISMA 2020 statement: An updated guideline for reporting systematic reviews. BMJ, 372, Article n71. https://doi.org/10.1136/bmj.n71",
          ],
        },
        {
          id: "l3-3",
          type: "video",
          title: "Video: cómo buscar y organizar la literatura",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video sobre búsqueda, selección y síntesis de la literatura (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l3-4",
          type: "quiz",
          title: "Cuestionario: revisión de la literatura",
          duration: "5 preguntas",
          questions: [
            {
              q: "¿Cuál es la función de los antecedentes y del marco teórico en un trabajo de investigación?",
              options: [
                "Alargar el documento con citas",
                "Mostrar qué se sabe del problema y aportar los conceptos y teorías para interpretarlo",
                "Reemplazar el diseño metodológico",
                "Presentar solo los resultados propios",
              ],
              correct: 1,
              explanation:
                "Los antecedentes muestran lo ya estudiado; el marco teórico presenta los conceptos y teorías que permiten interpretar el problema.",
            },
            {
              q: "Según Grant y Booth (2009), ¿qué muestra su análisis de 14 tipos de revisión?",
              options: [
                "Que todas las revisiones son equivalentes",
                "Que solo existe la revisión sistemática",
                "Que cada tipo de revisión responde a un propósito distinto y exige un grado diferente de sistematicidad",
                "Que las revisiones no necesitan método",
              ],
              correct: 2,
              explanation:
                "Su tipología describe revisiones con metodologías y propósitos distintos, por lo que conviene elegir y declarar el tipo de revisión que se hace.",
            },
            {
              q: "¿Para qué sirve la declaración PRISMA 2020 (Page et al., 2021)?",
              options: [
                "Para citar en APA",
                "Para informar con transparencia las revisiones sistemáticas, con una lista de verificación y diagramas de flujo",
                "Para calcular el tamaño de la muestra",
                "Para evaluar la ética de un estudio",
              ],
              correct: 1,
              explanation:
                "Es una guía de reporte de revisiones sistemáticas; su lógica de transparencia también sirve como modelo para otras revisiones.",
            },
            {
              q: "¿Cuál es el principal rasgo de una buena síntesis de la literatura?",
              options: [
                "Resumir cada fuente en un párrafo, en orden alfabético",
                "Agrupar los estudios por ideas, compararlos y concluir qué aportan al problema",
                "Citar la mayor cantidad posible de fuentes",
                "Evitar mencionar los vacíos",
              ],
              correct: 1,
              explanation:
                "La síntesis organiza por temas, compara posturas y concluye; no es una lista de resúmenes.",
            },
            {
              q: "Para que una búsqueda de literatura sea repetible, conviene registrar...",
              options: [
                "Solo los artículos que se usaron",
                "Los términos de búsqueda, las bases consultadas, la fecha, los criterios de inclusión/exclusión y lo descartado",
                "Únicamente el nombre del buscador",
                "El número de páginas leídas",
              ],
              correct: 1,
              explanation:
                "Documentar qué se buscó, dónde, cuándo y con qué criterios permite justificar y repetir el proceso.",
            },
          ],
        },
        {
          id: "l3-5",
          type: "checklist",
          title: "Lista de chequeo: revisión de la literatura",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Puedo explicar la diferencia entre antecedentes y marco teórico.",
            "Sé que existen distintos tipos de revisión (Grant y Booth, 2009) y puedo decir cuál corresponde a un trabajo de grado.",
            "Puedo describir los pasos de una búsqueda explícita: conceptos, bases, combinación, criterios y registro.",
            "Conozco el propósito de PRISMA 2020 y puedo usar su lógica de transparencia como modelo.",
            "Reconozco una lista de citas frente a una síntesis y sé cómo pedir que se reescriba.",
            "Verifico que las citas y las referencias del documento se correspondan y estén en el formato exigido.",
          ],
        },
        {
          id: "l3-6",
          type: "practica",
          title: "Actividad práctica: búsqueda y síntesis",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a distinguir una lista de resúmenes de una síntesis, a detectar los problemas de un fragmento de antecedentes y a diseñar una estrategia de búsqueda.",
          pdfHref: "/actividad-practica-modulo3.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Lista de resúmenes o síntesis?",
              instruction:
                "Lee cada enunciado y marca si corresponde a una lista de resúmenes o a una síntesis. Luego revisa tus respuestas.",
              choiceLabels: ["Lista de resúmenes", "Síntesis"],
              items: [
                { id: "a", text: "«Pérez (2020) estudió la motivación. García (2021) estudió la deserción. López (2019) estudió el rendimiento.»", correct: 0, explanation: "Presenta las fuentes una por una, sin compararlas ni relacionarlas con un problema." },
                { id: "b", text: "«Los estudios sobre deserción coinciden en señalar factores económicos (Pérez, 2020; López, 2019), pero difieren en el peso de los factores académicos, lo que justifica estudiar su interacción en este contexto.»", correct: 1, explanation: "Agrupa por tema, señala coincidencias y diferencias y enlaza con el problema." },
                { id: "c", text: "«Se revisaron treinta artículos sobre el tema, cada uno con su propia metodología y resultados.»", correct: 0, explanation: "Declara que hay mucha literatura pero no aporta ninguna idea integradora." },
                { id: "d", text: "«Mientras los estudios cuantitativos miden la asociación entre variables, los cualitativos aportan explicaciones sobre cómo viven los estudiantes la decisión de abandonar, vacío que este trabajo atiende.»", correct: 1, explanation: "Contrasta enfoques y concluye cuál es el vacío que el trabajo busca atender." },
              ],
            },
            {
              id: "ex2",
              kind: "source-compare",
              title: "Detecta el problema en los antecedentes",
              instruction:
                "Lee el siguiente fragmento de antecedentes y responde. (Es un ejemplo inventado para esta actividad.)",
              source: {
                label: "Fragmento de antecedentes",
                quote:
                  "Pérez (2020) estudió la motivación en estudiantes de secundaria. García (2021) estudió la motivación en estudiantes universitarios. López (2019) estudió la deserción en el primer año. Ruiz (2022) estudió el rendimiento académico.",
                meta: "Ejemplo inventado, con autores ficticios, solo para practicar.",
              },
              prompts: [
                {
                  id: "problema",
                  label: "¿Qué problema tiene este fragmento como apartado de antecedentes?",
                  sample: "Presenta las fuentes una por una, como una lista, sin organizarlas por ideas, sin compararlas y sin explicar qué aportan al problema del estudiante.",
                },
                {
                  id: "mejora",
                  label: "¿Cómo lo reescribirías o qué pedirías al autor para mejorarlo?",
                  sample: "Agruparía los estudios por temas (motivación y deserción), compararía sus resultados y métodos, señalaría qué vacío queda y explicaría cómo se relaciona con la pregunta propia.",
                },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Diseña una estrategia de búsqueda",
              instruction:
                "Toma un proyecto real (o inventa uno) y completa los pasos. Compara con la respuesta modelo.",
              prompts: [
                {
                  id: "conceptos",
                  label: "Escribe la pregunta de investigación y tres conceptos clave con un sinónimo cada uno (incluye uno en inglés):",
                  sample: "Pregunta: «¿Qué factores se asocian al abandono del primer año universitario?» Conceptos: abandono (deserción, dropout), primer año (estudiantes de nuevo ingreso), factores (variables asociadas).",
                },
                {
                  id: "bases",
                  label: "Indica dos bases de datos o repositorios donde buscarías y una combinación de términos:",
                  sample: "SciELO y Redalyc; combinación: «abandono OR deserción» AND «educación superior» AND «primer año».",
                },
                {
                  id: "criterios",
                  label: "Define dos criterios de inclusión y dos de exclusión:",
                  sample: "Inclusión: artículos arbitrados de los últimos diez años; estudios en educación superior. Exclusión: documentos sin autor identificable; estudios de nivel secundario.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m4",
      label: "Módulo 4",
      title: "Diseño de la investigación: del alcance al diseño",
      lessons: [
        {
          id: "l4-1",
          type: "texto",
          title: "Alcance, hipótesis y variables",
          duration: "10 min",
          paragraphs: [
            "Con el problema formulado, los objetivos definidos y la literatura revisada, el investigador debe decidir cómo va a responder su pregunta. Esa decisión se denomina diseño de la investigación, y se prepara con tres elementos que conviene tener claros antes de elegir procedimientos: el alcance del estudio, las hipótesis (cuando corresponden) y las variables o categorías con las que se trabajará.",
            "En la ruta cuantitativa, Hernández-Sampieri y Mendoza (2018) distinguen cuatro alcances: exploratorio, descriptivo, correlacional y explicativo. Según estos autores, el alcance depende del estado del conocimiento sobre el problema que muestra la revisión de la literatura y del enfoque del estudio: si hay poco conocimiento previo, suele ser exploratorio; si se busca caracterizar un fenómeno, descriptivo; si interesa la asociación entre variables, correlacional; y si se pretende dar cuenta de por qué ocurre algo, explicativo. Por eso la revisión de la literatura del módulo 3 no es un trámite previo, sino una información que se usa aquí.",
            "El alcance determina qué puede afirmarse: un estudio descriptivo caracteriza, uno correlacional muestra asociación y solo un diseño que lo permita puede sostener explicaciones causales. De ahí la importancia de que los verbos de los objetivos (describir, relacionar, explicar) correspondan al alcance elegido, tal como se vio en el módulo 2.",
            "Las hipótesis son proposiciones tentativas sobre las relaciones entre variables que se someten a prueba (Hernández-Sampieri y Mendoza, 2018). No todo estudio las lleva: los exploratorios y muchos descriptivos pueden no formularlas, y en la ruta cualitativa el estudio suele partir de preguntas de investigación y no de hipótesis que deban verificarse (Creswell y Creswell, 2018). Una pregunta de revisión útil: si hay hipótesis, ¿se derivan del marco teórico y es posible ponerlas a prueba con el diseño y los datos previstos?",
            "En el trabajo cuantitativo, una variable es una propiedad que puede variar y cuya variación puede medirse u observarse. Hernández-Sampieri y Mendoza (2018) distinguen la definición conceptual de una variable (qué significa, apoyada en la teoría) de su definición operacional (cómo se medirá en este estudio, con qué instrumento y con qué indicadores). Es habitual que los trabajos de grado enuncien variables sin operacionalizarlas, lo que luego se traduce en instrumentos que no miden lo que dicen medir. Como criterio práctico del curso, pide que cada variable pueda responder tres preguntas: ¿qué significa?, ¿cómo se mide? y ¿con qué instrumento o fuente?",
          ],
          tip: "Sugerencia: pide una tabla de operacionalización con tres columnas (variable, definición conceptual, definición operacional e instrumento). Si el estudiante no puede completarla, aún no está listo para construir instrumentos.",
          references: [
            "Creswell, J. W., & Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches (5th ed.). SAGE Publications.",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l4-2",
          type: "texto",
          title: "Tipos de diseño y coherencia del conjunto",
          duration: "10 min",
          paragraphs: [
            "Creswell y Creswell (2018) entienden el diseño de investigación como los tipos de procedimientos de investigación cuantitativa, cualitativa o mixta que se eligen dentro de cada enfoque y que orientan la manera de proceder en un estudio. El diseño no es una etiqueta que se agrega al capítulo metodológico: es el plan que conecta la pregunta con los datos y con las conclusiones posibles.",
            "En la ruta cuantitativa, Hernández-Sampieri y Mendoza (2018) distinguen los diseños experimentales, en los que el investigador manipula de manera intencional una o más variables para observar su efecto, de los no experimentales, en los que se observan los fenómenos tal como ocurren, sin manipularlos. Dentro de los no experimentales distinguen los transversales (los datos se recogen en un momento) de los longitudinales (se observan cambios a lo largo del tiempo). Esta distinción tiene una consecuencia directa: sin manipulación y sin control no es posible sostener que algo «causó» otra cosa.",
            "En la ruta cualitativa, Creswell y Creswell (2018) presentan varias estrategias de indagación, como la investigación narrativa, la fenomenología, la teoría fundamentada, la etnografía y el estudio de caso. Cada una responde a una pregunta distinta: la fenomenología, por ejemplo, se interesa por la esencia de una experiencia compartida; el estudio de caso, por un caso delimitado analizado en profundidad. Elegir una etiqueta sin conocer su lógica, solo porque «suena metodológica», es un error frecuente que conviene detectar.",
            "En el enfoque mixto, el diseño añade una decisión más: cómo, cuándo y para qué se combinan los datos. Creswell y Creswell (2018) describen los diseños convergente, secuencial explicativo y secuencial exploratorio, que ya se vieron en el módulo 1. Un diseño mixto solo se justifica si hay una pregunta que requiera ambos tipos de evidencia y existe un plan para integrarlos.",
            "Una herramienta práctica, de uso muy extendido en tutoría, es la cadena de coherencia: problema → pregunta → objetivo general → alcance y diseño → población y muestra → instrumentos → análisis → conclusiones. Cada eslabón debe poder derivarse del anterior. Cuando una conclusión afirma más de lo que el diseño permite (por ejemplo, hablar de «causas» en un estudio descriptivo transversal), la ruptura suele estar en el diseño y no en la redacción. Los eslabones desde la población hasta el análisis se desarrollan en los dos módulos siguientes.",
          ],
          tip: "Sugerencia: pide que el estudiante dibuje la cadena de coherencia de su trabajo en una hoja. Los eslabones que no puede conectar con una flecha indican dónde enfocar la tutoría.",
          references: [
            "Creswell, J. W., & Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches (5th ed.). SAGE Publications.",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
          ],
        },
        {
          id: "l4-3",
          type: "video",
          title: "Video: elegir el alcance y el diseño",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video sobre alcance, hipótesis, variables y tipos de diseño (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l4-4",
          type: "quiz",
          title: "Cuestionario: diseño de la investigación",
          duration: "5 preguntas",
          questions: [
            {
              q: "Según Hernández-Sampieri y Mendoza (2018), un estudio solo descriptivo permite...",
              options: [
                "Sostener explicaciones causales",
                "Caracterizar el fenómeno, no explicar causas",
                "Generalizar a toda la población, sin importar la muestra",
                "Prescindir de objetivos",
              ],
              correct: 1,
              explanation:
                "El alcance descriptivo caracteriza; afirmar causas exige un diseño que lo permita.",
            },
            {
              q: "¿Qué relación tiene la revisión de la literatura con el alcance del estudio?",
              options: [
                "Ninguna: el alcance se elige al azar",
                "Informa el estado del conocimiento sobre el problema, que ayuda a decidir el alcance",
                "Solo sirve para la bibliografía final",
                "Sustituye al diseño",
              ],
              correct: 1,
              explanation:
                "Según Hernández-Sampieri y Mendoza, el alcance depende, entre otros factores, del estado del conocimiento sobre el problema que revela la literatura.",
            },
            {
              q: "¿Cuál es la diferencia básica entre un diseño experimental y uno no experimental?",
              options: [
                "El experimental usa estadística y el no experimental no",
                "En el experimental se manipula intencionalmente una variable; en el no experimental se observa sin manipular",
                "El no experimental siempre es cualitativo",
                "El experimental no necesita muestra",
              ],
              correct: 1,
              explanation:
                "La manipulación intencional de al menos una variable distingue al diseño experimental.",
            },
            {
              q: "En la ruta cualitativa, ¿con qué suele partir un estudio según Creswell y Creswell (2018)?",
              options: [
                "Con hipótesis estadísticas que deben verificarse",
                "Con preguntas de investigación que orientan el estudio",
                "Con una muestra probabilística",
                "Con un instrumento estandarizado",
              ],
              correct: 1,
              explanation:
                "La investigación cualitativa suele partir de preguntas de investigación, y no de hipótesis que se sometan a verificación.",
            },
            {
              q: "Un trabajo concluye que «el programa causó la mejora», pero su diseño es no experimental transversal. ¿Dónde está el problema?",
              options: [
                "En la redacción de la conclusión únicamente",
                "En la ruptura entre el diseño y la conclusión: el diseño no permite sostener causalidad",
                "En el uso de la palabra «programa»",
                "No hay ningún problema",
              ],
              correct: 1,
              explanation:
                "Sin manipulación ni control no es posible sostener que algo causó otra cosa; la ruptura está en la coherencia entre diseño y conclusión.",
            },
          ],
        },
        {
          id: "l4-5",
          type: "checklist",
          title: "Lista de chequeo: diseño de la investigación",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Puedo explicar qué permite afirmar cada alcance (exploratorio, descriptivo, correlacional, explicativo).",
            "Sé cuándo un estudio lleva hipótesis y cuándo parte de preguntas.",
            "Puedo definir una variable de forma conceptual y operacional.",
            "Distingo los diseños experimentales de los no experimentales y los transversales de los longitudinales.",
            "Conozco las estrategias cualitativas (narrativa, fenomenología, teoría fundamentada, etnografía, estudio de caso) y los tres diseños mixtos básicos.",
            "Puedo reconstruir la cadena de coherencia de un proyecto y detectar dónde se rompe.",
          ],
        },
        {
          id: "l4-6",
          type: "practica",
          title: "Actividad práctica: alcance, diseño y coherencia",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a relacionar objetivos con alcances, a distinguir diseños experimentales de no experimentales y a construir el primer tramo de la cadena de coherencia de un proyecto propio.",
          pdfHref: "/actividad-practica-modulo4.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Qué alcance sugiere el objetivo?",
              instruction:
                "Lee cada objetivo y marca el alcance con el que es más coherente. Luego revisa tus respuestas.",
              choiceLabels: ["Descriptivo", "Correlacional o explicativo"],
              items: [
                { id: "a", text: "«Caracterizar los hábitos de estudio de los estudiantes de primer año de una carrera.»", correct: 0, explanation: "«Caracterizar» apunta a describir, sin relacionar variables." },
                { id: "b", text: "«Determinar la relación entre las horas de estudio semanales y el rendimiento en Estadística.»", correct: 1, explanation: "Busca la relación entre dos variables: alcance correlacional." },
                { id: "c", text: "«Describir el nivel de ansiedad ante la estadística en estudiantes de dos carreras.»", correct: 0, explanation: "«Describir» corresponde a un alcance descriptivo." },
                { id: "d", text: "«Explicar el efecto de un taller de nivelación sobre la nota final, comparando un grupo que lo recibió y otro que no.»", correct: 1, explanation: "Pretende establecer un efecto con comparación de grupos: alcance explicativo y diseño que lo permita." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "¿Experimental o no experimental?",
              instruction:
                "Lee cada situación y marca el tipo de diseño. Luego revisa tus respuestas.",
              choiceLabels: ["Experimental", "No experimental"],
              items: [
                { id: "a", text: "La investigadora aplica un método de enseñanza a un grupo y no a otro, y compara sus resultados al final del semestre.", correct: 0, explanation: "Manipula intencionalmente una variable (el método) para observar su efecto." },
                { id: "b", text: "Se encuesta una sola vez a estudiantes de cuatro carreras sobre sus hábitos de sueño y su rendimiento.", correct: 1, explanation: "Observa sin manipular y recoge los datos en un momento: no experimental transversal." },
                { id: "c", text: "Se observa durante tres años a una misma cohorte para ver cómo cambia su motivación, sin intervenir.", correct: 1, explanation: "No manipula variables y sigue los cambios en el tiempo: no experimental longitudinal." },
                { id: "d", text: "Se asigna al azar a los participantes a dos versiones de una tarea y se mide su tiempo de resolución.", correct: 0, explanation: "Manipula la versión de la tarea y asigna al azar: es experimental." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "El primer tramo de tu cadena de coherencia",
              instruction:
                "Toma un proyecto real (o inventa uno de tu carrera) y completa los pasos. Compara con la respuesta modelo.",
              prompts: [
                {
                  id: "objetivo",
                  label: "Objetivo general:",
                  sample: "«Determinar la relación entre las horas de estudio semanales y el rendimiento en Estadística en estudiantes de segundo año de Ingeniería de una universidad privada.»",
                },
                {
                  id: "alcance",
                  label: "Alcance, hipótesis (si corresponde) y definición operacional de las dos variables:",
                  sample: "«Alcance correlacional. Hipótesis: a mayor número de horas de estudio, mayor rendimiento. Horas de estudio: horas semanales autorreportadas en un cuestionario; rendimiento: nota final de la asignatura según el registro académico.»",
                },
                {
                  id: "diseno",
                  label: "Diseño y justificación en una frase:",
                  sample: "«Diseño no experimental transversal, porque el objetivo busca relacionar dos variables medidas una sola vez, sin manipularlas.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m5",
      label: "Módulo 5",
      title: "Población, muestra, instrumentos y rigor",
      lessons: [
        {
          id: "l5-1",
          type: "texto",
          title: "Población, muestra y muestreo",
          duration: "10 min",
          paragraphs: [
            "La población es el conjunto de casos sobre el que se quiere concluir, y la muestra, el subconjunto del que realmente se obtienen datos. Hernández-Sampieri y Mendoza (2018) distinguen las muestras probabilísticas —en las que los elementos tienen una probabilidad conocida de ser elegidos y es posible generalizar estadísticamente— de las no probabilísticas, en las que la elección depende de criterios del investigador y no permite esa generalización.",
            "Una inconsistencia frecuente en los trabajos de grado es trabajar con una muestra por conveniencia y, aun así, concluir sobre «todos los estudiantes». Etikan et al. (2016) comparan dos técnicas no probabilísticas muy usadas: el muestreo por conveniencia, en el que se selecciona a quienes resultan más accesibles, y el muestreo intencional o por criterio, en el que el investigador elige deliberadamente a los participantes según el propósito del estudio. Ninguno es erróneo por sí mismo; lo es afirmar con ellos lo que solo permite una muestra probabilística.",
            "En la ruta cualitativa, la pregunta «¿cuántos participantes?» no tiene una respuesta fija. Malterud et al. (2016) proponen el concepto de poder de información (information power): cuanta más información relevante contenga la muestra para el objetivo del estudio, menos participantes se necesitan. Según su propuesta, esto depende de factores como el propósito del estudio, la especificidad de la muestra, el uso de teoría establecida, la calidad del diálogo y la estrategia de análisis. Frente a respuestas dogmáticas del tipo «diez entrevistas son suficientes», la tutoría debería pedir una justificación argumentada.",
            "En la ruta cuantitativa con muestreo probabilístico, el tamaño depende de factores como la variabilidad esperada, el nivel de confianza y el margen de error aceptado, y se calcula con fórmulas o programas específicos; la mejor práctica es que el estudiante explique qué valores usó y por qué, en lugar de citar un número sin justificación.",
            "Como criterio práctico del curso, hay tres preguntas que sirven para revisar cualquier apartado de muestra: ¿a quién quiere decir algo el estudio?, ¿de quién se obtuvieron realmente los datos?, ¿y la conclusión se limita a lo que esa muestra permite decir? Si las tres respuestas no coinciden, hay una brecha que debe reconocerse como limitación o corregirse.",
          ],
          references: [
            "Etikan, I., Musa, S. A., & Alkassim, R. S. (2016). Comparison of convenience sampling and purposive sampling. American Journal of Theoretical and Applied Statistics, 5(1), 1–4. https://doi.org/10.11648/j.ajtas.20160501.11",
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
            "Malterud, K., Siersma, V. D., & Guassora, A. D. (2016). Sample size in qualitative interview studies: Guided by information power. Qualitative Health Research, 26(13), 1753–1760. https://doi.org/10.1177/1049732315617444",
          ],
        },
        {
          id: "l5-2",
          type: "texto",
          title: "Instrumentos: validez y confiabilidad",
          duration: "10 min",
          paragraphs: [
            "Cuando un estudio mide, la calidad de lo que concluye depende de la calidad de sus instrumentos. Hernández-Sampieri y Mendoza (2018) describen la confiabilidad como el grado en que un instrumento produce resultados consistentes y coherentes, y la validez como el grado en que realmente mide la variable que pretende medir; al hablar de validez presentan, entre otras, la validez de contenido, la de criterio y la de constructo. La operacionalización de variables del módulo anterior es el punto de partida: un instrumento válido mide lo que se definió operacionalmente.",
            "Messick (1995) propuso entender la validez como un concepto unificado: no es una propiedad fija del instrumento, sino un juicio evaluativo sobre hasta qué punto la evidencia y la teoría respaldan las interpretaciones que se hacen de las puntuaciones. Esto tiene una consecuencia práctica: no basta con decir «el instrumento es válido»; hay que decir qué evidencia respalda qué interpretación, en qué población y para qué uso.",
            "El coeficiente alfa de Cronbach es el indicador de confiabilidad más citado en los trabajos de grado. Taber (2018) analizó cómo se usa y se informa en la investigación en educación en ciencias y advierte que a menudo se cita un valor sin explicar qué representa ni por qué resulta relevante. Para el tutor, la lección es pedir al estudiante tres cosas: decir qué tipo de confiabilidad evalúa el coeficiente, informarlo con los datos de su propia muestra (no solo copiar el valor de otro estudio) y no tomar un valor alto como prueba automática de que el instrumento «mide bien».",
            "Un criterio útil para la tutoría es pedir que cada decisión de calidad esté declarada y sea comprobable: cómo se construyeron o adaptaron los ítems a partir de la definición operacional, quiénes los revisaron (por ejemplo, un juicio de expertos, con cuántos expertos y con qué criterios), qué prueba piloto se hizo y qué cambios resultaron, y qué confiabilidad se obtuvo en esta muestra. Un apartado que solo afirma «el instrumento es válido y confiable» sin evidencia es una señal de alerta.",
          ],
          tip: "Sugerencia: ante un «el instrumento fue validado por juicio de expertos», pregunta cuántos expertos, con qué criterios los evaluaron y qué cambios se hicieron como resultado.",
          references: [
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
            "Messick, S. (1995). Validity of psychological assessment: Validation of inferences from persons' responses and performances as scientific inquiry into score meaning. American Psychologist, 50(9), 741–749.",
            "Taber, K. S. (2018). The use of Cronbach's alpha when developing and reporting research instruments in science education. Research in Science Education, 48(6), 1273–1296. https://doi.org/10.1007/s11165-016-9602-2",
          ],
        },
        {
          id: "l5-3",
          type: "texto",
          title: "Rigor en la investigación cualitativa",
          duration: "10 min",
          paragraphs: [
            "En la ruta cualitativa no se habla de validez y confiabilidad en los mismos términos que en la cuantitativa. Shenton (2004), a partir de los criterios de Guba, presenta cuatro criterios de rigor, o de confianza en los hallazgos: la credibilidad (si los hallazgos reflejan adecuadamente el fenómeno estudiado), la transferibilidad (si el lector puede juzgar su aplicabilidad a otros contextos), la dependabilidad (si el proceso es consistente y puede seguirse) y la confirmabilidad (si los hallazgos se apoyan en los datos y no en las preferencias del investigador).",
            "Para cada criterio existen estrategias concretas. Shenton (2004) describe, entre otras, la triangulación de fuentes o métodos, la descripción densa del contexto para facilitar la transferibilidad, el registro detallado del proceso de investigación (rastro de auditoría) para la dependabilidad, la comprobación de los hallazgos con los propios participantes, la revisión por pares y la reflexión del investigador sobre su propio papel. No hace falta aplicarlas todas: lo importante es que el estudiante elija las que correspondan a su diseño y las declare.",
            "La reflexividad merece atención especial, porque el investigador cualitativo es su propio instrumento. La lista COREQ (Tong et al., 2007) dedica uno de sus tres dominios al equipo de investigación y la reflexividad, que incluye informar quién condujo las entrevistas y qué relación tenía con los participantes. Si una tesista entrevista a sus compañeros de carrera, ese vínculo debe estar declarado y analizado.",
            "También hay un vínculo con la muestra. Como se vio en la lección sobre muestreo, el número de participantes se justifica con argumentos sobre el poder de información de la muestra (Malterud et al., 2016), no con un número fijo. Rigor y muestra se sostienen mutuamente: una muestra bien justificada y un proceso trazable permiten sostener los hallazgos.",
            "Como criterio práctico del curso, el rigor cualitativo no se afirma, se muestra: si el trabajo dice «se garantizó la credibilidad» pero no indica cómo, hay una señal de alerta. Una pregunta de tutoría útil: «¿dónde puede ver el lector que hiciste lo que dices que hiciste?». En un diseño mixto, el estudiante debe dar cuenta del rigor de ambas partes: evidencia de validez y confiabilidad de lo cuantitativo, y estrategias de rigor de lo cualitativo.",
          ],
          tip: "Sugerencia: pide que el estudiante prepare una tabla de dos columnas: «criterio de rigor» y «cómo se ve en mi trabajo». Las filas vacías muestran dónde falta evidencia.",
          references: [
            "Malterud, K., Siersma, V. D., & Guassora, A. D. (2016). Sample size in qualitative interview studies: Guided by information power. Qualitative Health Research, 26(13), 1753–1760. https://doi.org/10.1177/1049732315617444",
            "Shenton, A. K. (2004). Strategies for ensuring trustworthiness in qualitative research projects. Education for Information, 22(2), 63–75. https://doi.org/10.3233/EFI-2004-22201",
            "Tong, A., Sainsbury, P., & Craig, J. (2007). Consolidated criteria for reporting qualitative research (COREQ): A 32-item checklist for interviews and focus groups. International Journal for Quality in Health Care, 19(6), 349–357. https://doi.org/10.1093/intqhc/mzm042",
          ],
        },
        {
          id: "l5-4",
          type: "video",
          title: "Video: muestra, instrumentos y rigor",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video sobre población, muestra, instrumentos y rigor (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l5-5",
          type: "quiz",
          title: "Cuestionario: muestra, instrumentos y rigor",
          duration: "5 preguntas",
          questions: [
            {
              q: "Una muestra por conveniencia de 40 estudiantes se usa para concluir sobre «todos los universitarios del país». ¿Qué problema tiene?",
              options: [
                "Ninguno, porque 40 es suficiente",
                "Una muestra no probabilística no permite generalizar estadísticamente a esa población",
                "La conveniencia no existe como técnica",
                "El problema es solo de redacción",
              ],
              correct: 1,
              explanation:
                "Con muestras no probabilísticas no es posible generalizar estadísticamente; la conclusión debe limitarse a lo que la muestra permite decir.",
            },
            {
              q: "Según Malterud et al. (2016), en una investigación cualitativa el número de participantes necesario...",
              options: [
                "Es siempre diez",
                "Depende del poder de información de la muestra para el objetivo del estudio",
                "Debe ser igual al de una encuesta",
                "No necesita justificarse",
              ],
              correct: 1,
              explanation:
                "Proponen el concepto de poder de información: cuanta más información relevante tenga la muestra para el objetivo, menos participantes se requieren.",
            },
            {
              q: "Según Messick (1995), ¿cómo se entiende la validez?",
              options: [
                "Como una etiqueta que el instrumento ya trae desde su creación",
                "Como un juicio sobre hasta qué punto la evidencia y la teoría respaldan las interpretaciones de las puntuaciones",
                "Como sinónimo de confiabilidad",
                "Como el número de ítems del instrumento",
              ],
              correct: 1,
              explanation:
                "Messick plantea la validez como un concepto unificado: depende de la evidencia que respalda una interpretación en un uso determinado.",
            },
            {
              q: "Un estudiante informa «alfa de Cronbach = 0,91» copiado de otro estudio, sin más explicación. ¿Qué le pedirías según Taber (2018)?",
              options: [
                "Nada: un valor alto basta",
                "Que explique qué tipo de confiabilidad representa, la calcule con su propia muestra y no lo tome como prueba automática de que el instrumento mide bien",
                "Que elimine el instrumento",
                "Que cambie de enfoque",
              ],
              correct: 1,
              explanation:
                "Taber advierte que el alfa suele citarse sin explicar qué representa; conviene informarlo con los datos propios y con su interpretación.",
            },
            {
              q: "Shenton (2004), a partir de los criterios de Guba, presenta estrategias de rigor cualitativo. ¿Cuál es una de ellas?",
              options: [
                "Calcular el alfa de Cronbach",
                "La triangulación de fuentes o métodos",
                "Usar una muestra probabilística",
                "Eliminar la descripción del contexto",
              ],
              correct: 1,
              explanation:
                "La triangulación es una de las estrategias descritas para fortalecer la credibilidad de un estudio cualitativo.",
            },
          ],
        },
        {
          id: "l5-6",
          type: "checklist",
          title: "Lista de chequeo: muestra, instrumentos y rigor",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Distingo una muestra probabilística de una no probabilística y sé qué permite concluir cada una.",
            "Sé justificar el número de participantes en cada ruta (probabilística y cualitativa).",
            "Reviso que muestra, técnica de muestreo y conclusión sean coherentes entre sí.",
            "Puedo pedir evidencia de validez y confiabilidad, y no aceptar «validado» sin detalles.",
            "Conozco los cuatro criterios de rigor cualitativo y al menos tres estrategias para cumplirlos.",
            "Sé por qué la reflexividad del investigador debe declararse en un estudio cualitativo.",
          ],
        },
        {
          id: "l5-7",
          type: "practica",
          title: "Actividad práctica: muestra, instrumentos y rigor",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a revisar la coherencia entre muestra y conclusión, a juzgar la evidencia de calidad de un instrumento y a planificar la muestra y el rigor de un proyecto propio.",
          pdfHref: "/actividad-practica-modulo5.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Muestra y conclusión coherentes?",
              instruction:
                "Lee cada situación y marca si hay coherencia entre la muestra y lo que se concluye. Luego revisa tus respuestas.",
              choiceLabels: ["Coherente", "Incoherente"],
              items: [
                { id: "a", text: "Se encuesta a 35 estudiantes de un solo curso, elegidos por ser accesibles, y se concluye que «los universitarios bolivianos tienen un alto nivel de estrés».", correct: 1, explanation: "Una muestra por conveniencia de un solo curso no permite generalizar a todos los universitarios del país." },
                { id: "b", text: "Se entrevista a ocho docentes seleccionados por criterio (más de diez años de experiencia) y se concluye sobre cómo interpretan la retroalimentación esas personas, en ese contexto.", correct: 0, explanation: "La conclusión se limita a lo que la muestra y el diseño permiten decir." },
                { id: "c", text: "Se selecciona al azar una muestra calculada de una lista completa de estudiantes y se generaliza a esa población con el margen de error informado.", correct: 0, explanation: "Una muestra probabilística de una población definida sustenta la generalización estadística a esa población." },
                { id: "d", text: "Con seis entrevistas se afirma que «el 80 % de los estudiantes opina que…».", correct: 1, explanation: "Un porcentaje poblacional no puede estimarse con seis entrevistas cualitativas." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "¿Evidencia de calidad suficiente o insuficiente?",
              instruction:
                "Lee cada afirmación sobre un instrumento y marca si la evidencia es suficiente o insuficiente. Luego revisa tus respuestas.",
              choiceLabels: ["Suficiente", "Insuficiente"],
              items: [
                { id: "a", text: "«El instrumento es válido y confiable.» (Sin más información.)", correct: 1, explanation: "Afirma sin mostrar evidencia: falta decir cómo se validó y qué confiabilidad se obtuvo." },
                { id: "b", text: "«Tres expertos revisaron los ítems con una guía de criterios, se ajustaron cuatro ítems y se aplicó una prueba piloto con 20 estudiantes.»", correct: 0, explanation: "Declara quiénes revisaron, con qué criterios, qué cambió y qué prueba piloto se hizo." },
                { id: "c", text: "«El alfa fue 0,91, por lo tanto el instrumento mide bien lo que se propone medir.»", correct: 1, explanation: "Un valor alto de alfa no demuestra por sí mismo que el instrumento mida lo que pretende medir; falta explicar qué representa." },
                { id: "d", text: "«Se calculó el alfa con los datos de esta muestra (n = 120) y se explica que refleja la consistencia interna entre los ítems de la escala.»", correct: 0, explanation: "Informa con datos propios y explica qué representa el coeficiente." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Planifica la muestra y el rigor de un proyecto",
              instruction:
                "Toma un proyecto real (o inventa uno de tu carrera) y completa los pasos. Compara con la respuesta modelo.",
              prompts: [
                {
                  id: "muestra",
                  label: "Población, muestra y técnica de muestreo, y qué límite impone a las conclusiones:",
                  sample: "«Población: 240 estudiantes; muestra: 120 elegidos al azar de la lista oficial. Se podrá generalizar a esa población con el margen de error calculado, no a otras universidades.»",
                },
                {
                  id: "calidad",
                  label: "Qué evidencia de validez y confiabilidad presentarías para el instrumento (o qué estrategias de rigor usarías, si el estudio es cualitativo):",
                  sample: "«Revisión de ítems por tres expertos con una guía de criterios, prueba piloto con 20 estudiantes y cálculo de la confiabilidad con los datos de la muestra, explicando qué tipo de confiabilidad se evalúa.» (Cualitativo: triangulación de fuentes, descripción densa del contexto y rastro de auditoría.)",
                },
                {
                  id: "reflexividad",
                  label: "Si el estudio es cualitativo, ¿qué relación tienes con los participantes y cómo la declararías?",
                  sample: "«Soy docente de dos de los participantes. Lo declararé en el apartado metodológico y analizaré cómo pudo influir en sus respuestas.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m6",
      label: "Módulo 6",
      title: "Análisis de datos y reporte de resultados",
      lessons: [
        {
          id: "l6-1",
          type: "texto",
          title: "Análisis cuantitativo: describir, inferir y no confundir significancia con importancia",
          duration: "10 min",
          paragraphs: [
            "El análisis de datos no es una etapa que se improvisa al final: sus decisiones se derivan de la pregunta, de los objetivos y del tipo de datos. Hernández-Sampieri y Mendoza (2018) presentan el análisis cuantitativo como un proceso que comienza con la estadística descriptiva (distribuciones, medidas de tendencia central y de variabilidad) y continúa, cuando el diseño lo permite, con la estadística inferencial, donde la elección de las pruebas depende de aspectos como el nivel de medición de las variables y los supuestos de cada prueba. Una pregunta de revisión sencilla: ¿la prueba elegida responde al objetivo y es adecuada a los datos?",
            "En la práctica, el resultado que más se malinterpreta es el valor p. La Asociación Estadounidense de Estadística (ASA) publicó una declaración con seis principios para su uso correcto (Wasserstein y Lazar, 2016). Entre ellos: el valor p puede indicar qué tan incompatibles son los datos con un modelo estadístico específico; no mide la probabilidad de que la hipótesis estudiada sea verdadera ni la probabilidad de que los datos se hayan producido solo por azar; las conclusiones científicas no deberían basarse únicamente en si el valor p supera un umbral; una inferencia adecuada requiere informar todo con transparencia; y el valor p no mide el tamaño de un efecto ni la importancia de un resultado.",
            "De esos principios se sigue una recomendación práctica: acompañar la significancia estadística con una medida del tamaño del efecto. Lakens (2013) presenta una guía práctica para calcular e informar tamaños del efecto en pruebas t y ANOVA, con el argumento de que informarlos facilita la ciencia acumulativa, porque permite comparar resultados entre estudios y combinarlos después. Un resultado «estadísticamente significativo» con un efecto muy pequeño puede tener poca relevancia práctica, y un efecto grande en una muestra pequeña puede no alcanzar significancia.",
            "Como criterio del curso, al revisar un apartado de resultados cuantitativos conviene pedir cuatro elementos: la descripción de los datos, la prueba utilizada con su justificación, el estadístico con el valor p exacto y una medida del tamaño del efecto con su interpretación en lenguaje claro. Y una advertencia final: «no se encontró diferencia significativa» no es lo mismo que «se demostró que no hay diferencia», sobre todo con muestras pequeñas.",
            "Por último, el análisis tiene límites que los objetivos y el diseño ya fijaron: un análisis correlacional no permite hablar de causa, y una muestra por conveniencia no permite generalizar. El tutor que domina esta lógica detecta en pocos minutos la distancia entre lo que se hizo y lo que se concluye.",
          ],
          tip: "Sugerencia: ante una conclusión del tipo «los resultados demuestran que…», pregunta: «¿qué parte del diseño y del análisis permite sostener ese verbo?».",
          references: [
            "Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw-Hill Education.",
            "Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science: A practical primer for t-tests and ANOVAs. Frontiers in Psychology, 4, Article 863. https://doi.org/10.3389/fpsyg.2013.00863",
            "Wasserstein, R. L., & Lazar, N. A. (2016). The ASA's statement on p-values: Context, process, and purpose. The American Statistician, 70(2), 129–133. https://doi.org/10.1080/00031305.2016.1154108",
          ],
        },
        {
          id: "l6-2",
          type: "texto",
          title: "Análisis cualitativo y reporte riguroso de resultados",
          duration: "10 min",
          paragraphs: [
            "En la ruta cualitativa, el análisis también sigue un procedimiento que debe poder describirse. Braun y Clarke (2006) presentan el análisis temático como un método para identificar, analizar e informar patrones (temas) en los datos, y lo organizan en seis fases: familiarizarse con los datos, generar códigos iniciales, buscar temas, revisar los temas, definir y nombrar los temas, y elaborar el informe. Estas fases no son un recorrido lineal, sino un proceso al que se vuelve varias veces.",
            "El criterio central para el tutor es la trazabilidad: que el lector pueda ver cómo se pasó de los datos a los temas. Un apartado que afirma que «surgieron tres temas» sin explicar cómo se codificaron las entrevistas, quién codificó, con qué criterios y cómo se revisaron los temas no permite juzgar la calidad del análisis. Las estrategias de rigor que vimos en el módulo anterior (triangulación, descripción densa, rastro de auditoría) se vuelven visibles precisamente aquí.",
            "Existen guías de reporte que ayudan a no omitir información clave. La lista COREQ (Tong et al., 2007) tiene 32 ítems, organizados en tres dominios —equipo de investigación y reflexividad, diseño del estudio, y análisis y hallazgos—, y está pensada para entrevistas y grupos focales. Por su parte, Levitt et al. (2018) presentan los estándares de reporte de artículos de la American Psychological Association para investigación cualitativa, metaanalítica cualitativa y de métodos mixtos en psicología. No hace falta aplicarlas al pie de la letra en un trabajo de grado, pero sirven como lista de control de lo que un lector necesita saber.",
            "Tanto en estudios cuantitativos como cualitativos, el apartado de resultados debería organizarse siguiendo los objetivos específicos, de modo que cada objetivo tenga su respuesta visible. Como criterio práctico del curso: los resultados describen lo encontrado; la discusión lo interpreta y lo compara con la literatura del marco teórico; las limitaciones declaran lo que el diseño y la muestra no permiten afirmar; y las conclusiones responden a la pregunta y a los objetivos sin ir más allá de lo hallado.",
            "El Manual de Publicaciones de la APA (American Psychological Association, 2020) ofrece pautas para presentar tablas y figuras, y para informar los resultados estadísticos. Más allá del formato, una buena tabla o figura se entiende sin el texto y aporta algo que el texto no repite.",
          ],
          tip: "Sugerencia: en la revisión de un capítulo de resultados, marca con colores cada objetivo y busca su respuesta. Un objetivo sin respuesta visible o un resultado sin objetivo son hallazgos de coherencia.",
          references: [
            "American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.). https://doi.org/10.1037/0000165-000",
            "Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. Qualitative Research in Psychology, 3(2), 77–101. https://doi.org/10.1191/1478088706qp063oa",
            "Levitt, H. M., Bamberg, M., Creswell, J. W., Frost, D. M., Josselson, R., & Suárez-Orozco, C. (2018). Journal article reporting standards for qualitative primary, qualitative meta-analytic, and mixed methods research in psychology: The APA Publications and Communications Board task force report. American Psychologist, 73(1), 26–46. https://doi.org/10.1037/amp0000151",
            "Tong, A., Sainsbury, P., & Craig, J. (2007). Consolidated criteria for reporting qualitative research (COREQ): A 32-item checklist for interviews and focus groups. International Journal for Quality in Health Care, 19(6), 349–357. https://doi.org/10.1093/intqhc/mzm042",
          ],
        },
        {
          id: "l6-3",
          type: "video",
          title: "Video: leer y revisar un capítulo de resultados",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video sobre análisis y reporte de resultados (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l6-4",
          type: "quiz",
          title: "Cuestionario: análisis y reporte",
          duration: "5 preguntas",
          questions: [
            {
              q: "Según la declaración de la ASA (Wasserstein y Lazar, 2016), el valor p...",
              options: [
                "Mide la probabilidad de que la hipótesis sea verdadera",
                "Puede indicar qué tan incompatibles son los datos con un modelo estadístico específico",
                "Mide el tamaño y la importancia del efecto",
                "Debe ser siempre menor que 0,05 para que un estudio sea válido",
              ],
              correct: 1,
              explanation:
                "El valor p indica incompatibilidad de los datos con un modelo; no mide la probabilidad de la hipótesis ni el tamaño o la importancia del efecto.",
            },
            {
              q: "¿Por qué conviene informar el tamaño del efecto además del valor p (Lakens, 2013)?",
              options: [
                "Porque lo exige el formato APA para cualquier estudio",
                "Porque permite valorar la magnitud del efecto y comparar resultados entre estudios",
                "Porque reemplaza la descripción de los datos",
                "Porque evita tener que elegir una prueba estadística",
              ],
              correct: 1,
              explanation:
                "Informar tamaños del efecto facilita la comparación y la acumulación de resultados entre estudios.",
            },
            {
              q: "Un estudiante escribe: «No hubo diferencia significativa, por lo tanto se demostró que los grupos son iguales». ¿Cuál es el problema?",
              options: [
                "Ninguno",
                "Que ausencia de significancia no equivale a demostrar igualdad, sobre todo con muestras pequeñas",
                "Que debió escribirlo en tercera persona",
                "Que faltaron los gráficos",
              ],
              correct: 1,
              explanation:
                "No encontrar una diferencia significativa no demuestra que no exista; hay que considerar el tamaño de la muestra y del efecto.",
            },
            {
              q: "Según Braun y Clarke (2006), el análisis temático es un método para...",
              options: [
                "Calcular medias y desviaciones estándar",
                "Identificar, analizar e informar patrones (temas) en los datos",
                "Seleccionar una muestra probabilística",
                "Validar un instrumento con juicio de expertos",
              ],
              correct: 1,
              explanation:
                "Es un método cualitativo para identificar, analizar e informar patrones o temas en un conjunto de datos, con seis fases.",
            },
            {
              q: "¿Cómo conviene organizar el apartado de resultados de un trabajo de grado?",
              options: [
                "Al azar, según el orden en que se analizaron los datos",
                "Siguiendo los objetivos específicos, para que cada uno tenga su respuesta visible",
                "Mezclando resultados, discusión y conclusiones en un solo texto",
                "Solo con tablas y sin texto",
              ],
              correct: 1,
              explanation:
                "Organizar los resultados por objetivos hace visible si el trabajo respondió lo que se propuso.",
            },
          ],
        },
        {
          id: "l6-5",
          type: "checklist",
          title: "Lista de chequeo: análisis y reporte",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Puedo decir si una prueba estadística es adecuada al objetivo y al tipo de datos.",
            "Conozco al menos tres de los principios de la declaración de la ASA sobre el valor p.",
            "Sé pedir un tamaño del efecto y su interpretación, además del valor p.",
            "Puedo describir las seis fases del análisis temático de Braun y Clarke (2006).",
            "Sé qué es la trazabilidad en el análisis cualitativo y cómo pedirla.",
            "Reviso que los resultados se organicen por objetivos y que las conclusiones no superen lo hallado.",
          ],
        },
        {
          id: "l6-6",
          type: "practica",
          title: "Actividad práctica: interpretar y reportar resultados",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a detectar interpretaciones problemáticas de resultados estadísticos, a evaluar un reporte cualitativo y a redactar una retroalimentación sobre un capítulo de resultados.",
          pdfHref: "/actividad-practica-modulo6.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Interpretación adecuada o problemática?",
              instruction:
                "Lee cada afirmación sobre resultados estadísticos y marca si la interpretación es adecuada o problemática. Luego revisa tus respuestas.",
              choiceLabels: ["Adecuada", "Problemática"],
              items: [
                { id: "a", text: "«Como p = 0,03, hay un 97 % de probabilidad de que la hipótesis sea verdadera.»", correct: 1, explanation: "El valor p no mide la probabilidad de que la hipótesis sea verdadera." },
                { id: "b", text: "«La diferencia fue estadísticamente significativa (p = 0,03) y el tamaño del efecto fue pequeño (d = 0,20), por lo que su relevancia práctica es limitada.»", correct: 0, explanation: "Informa el valor p exacto, un tamaño del efecto y una interpretación contextual." },
                { id: "c", text: "«Como el resultado es significativo, el efecto es grande e importante.»", correct: 1, explanation: "La significancia estadística no mide el tamaño ni la importancia del efecto." },
                { id: "d", text: "«No se encontró una diferencia significativa; con una muestra pequeña, no se puede descartar que exista un efecto.»", correct: 0, explanation: "Reconoce el límite: ausencia de significancia no equivale a ausencia de efecto." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "¿Reporte cualitativo adecuado o por mejorar?",
              instruction:
                "Lee cada enunciado y marca si el reporte es adecuado o debe mejorarse. Luego revisa tus respuestas.",
              choiceLabels: ["Adecuado", "Debe mejorarse"],
              items: [
                { id: "a", text: "Se presentan tres temas con extractos textuales de los participantes y se explica cómo se derivaron de los códigos.", correct: 0, explanation: "Hay trazabilidad entre los datos, los códigos y los temas." },
                { id: "b", text: "«Emergieron tres temas de las entrevistas», sin explicar cómo se codificaron ni quién lo hizo.", correct: 1, explanation: "Falta trazabilidad: el lector no puede juzgar el análisis." },
                { id: "c", text: "Con ocho entrevistas, se informa que «el 75 % de los estudiantes del país piensa que…».", correct: 1, explanation: "Un porcentaje poblacional no se sostiene con ocho entrevistas cualitativas." },
                { id: "d", text: "Se describe el rol de la investigadora y su relación previa con los participantes.", correct: 0, explanation: "Declarar la reflexividad del investigador es parte del reporte riguroso (por ejemplo, en COREQ)." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Retroalimenta un capítulo de resultados",
              instruction:
                "Lee la situación y responde. (Es un ejemplo inventado para esta actividad.)",
              prompts: [
                {
                  id: "situacion",
                  label: "Un estudiante escribe: «Los resultados demuestran que el taller mejoró el rendimiento (p = 0,04)». Fue un estudio de un solo grupo, con una medición después del taller. Escribe dos preguntas que le harías para revisar esa conclusión:",
                  sample: "«¿Qué parte del diseño te permite afirmar que fue el taller y no otros factores?» y «¿Con qué comparas el rendimiento, y qué tamaño tiene la diferencia?»",
                },
                {
                  id: "reformula",
                  label: "Reescribe la conclusión de modo que sea coherente con el diseño:",
                  sample: "«Después del taller, el grupo obtuvo un promedio de X; el diseño empleado no permite atribuir esa diferencia exclusivamente al taller.»",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m7",
      label: "Módulo 7",
      title: "Tutoría de tesis y proyectos de grado: retroalimentación, ética y evaluación",
      lessons: [
        {
          id: "l7-1",
          type: "texto",
          title: "El rol del tutor de tesis y de proyectos de grado",
          duration: "8 min",
          paragraphs: [
            "Tutorar un trabajo de grado es acompañar a un estudiante mientras desarrolla, por primera vez y con bastante autonomía, un trabajo de investigación o de aplicación profesional. Es una tarea distinta de dictar una clase: el protagonista del trabajo es el tesista, y el tutor orienta, cuestiona y retroalimenta sin escribir el trabajo por él. Todo lo que viste en los módulos anteriores es la base desde la cual el tutor hace buenas preguntas.",
            "La literatura reconoce que este rol plantea desafíos propios para el profesor universitario. Merino Tejedor (2016) reflexiona sobre el perfil del tutor del trabajo fin de grado y propone mirar la tutoría desde enfoques como el empowerment, el coaching y el mentoring, así como desde el aprendizaje autorregulado. La idea de fondo es que el estudiante aprenda a gestionar su propio trabajo, y no que dependa del tutor para cada decisión.",
            "También hay evidencia de que los estudiantes valoran este acompañamiento. En un estudio descriptivo con egresados de una facultad de educación en España, Rebollo Quintela y Espiñeira Bellón (2017) encontraron que los estudiantes percibían la tutoría como muy útil y con un alto nivel de satisfacción. Sus autoras concluyen que es necesario seguir trabajando, en particular, en definir el perfil ideal del profesorado tutor. Conviene leer este estudio como una referencia de un contexto específico y no como una regla universal.",
            "A partir de estas ideas, este curso propone entender el rol con tres verbos: orientar (ayudar a decidir, no decidir por el estudiante), retroalimentar (señalar con evidencia qué funciona y qué se puede mejorar) y acompañar el proceso (sostener el ritmo, los plazos y la motivación). Por lo general, quedan fuera del rol redactar partes del trabajo, recolectar o procesar los datos en lugar del estudiante, o aprobar sin revisar. Los límites exactos dependen del reglamento de tu universidad.",
            "Un primer paso práctico es acordar por escrito, desde la primera reunión, las reglas del acompañamiento: frecuencia y modalidad de las reuniones, canal de comunicación, plazos de entrega y de respuesta, y qué se espera de cada parte. Un acuerdo breve evita malentendidos y facilita ver el avance.",
          ],
          tip: "Sugerencia: lleva un registro simple de cada tutoría (fecha, temas tratados, acuerdos y próxima entrega). Sirve como evidencia del proceso y ordena el trabajo de ambos.",
          references: [
            "Merino Tejedor, E. (2016). El tutor del trabajo fin de grado: nuevos desafíos para el profesor de universidad. International Journal of Developmental and Educational Psychology. Revista INFAD de Psicología, 4(1). https://doi.org/10.17060/ijodaep.2014.n1.v4.608",
            "Rebollo Quintela, N., & Espiñeira Bellón, E. M. (2017). La tutoría durante el proceso de desarrollo del TFG y TFM: análisis del grado de utilidad y satisfacción del alumnado. Educatio Siglo XXI, 35(2), 161–180. https://doi.org/10.6018/j/298561",
          ],
        },
        {
          id: "l7-2",
          type: "texto",
          title: "Retroalimentación y seguimiento",
          duration: "10 min",
          paragraphs: [
            "La retroalimentación es la herramienta más importante del tutor: es lo que el estudiante se lleva de cada reunión y de cada borrador revisado. Hattie y Timperley (2007), en una revisión clásica sobre el tema, plantean que una retroalimentación eficaz responde tres preguntas: ¿a dónde voy? (cuáles son las metas), ¿cómo voy? (qué avance hay respecto de esas metas) y ¿qué sigue? (qué acciones permitirán mejorar).",
            "Los mismos autores distinguen cuatro niveles a los que puede dirigirse un comentario: la tarea (qué está bien o mal en el producto), el proceso (cómo se hizo y qué estrategias se usaron), la autorregulación (cómo el estudiante monitorea y gestiona su propio trabajo) y la persona (elogios o críticas generales como «muy bien» o «eres descuidado»). Según su revisión, los comentarios centrados en la persona aportan poco al aprendizaje, mientras que los centrados en el proceso y la autorregulación suelen ser más potentes que los centrados solo en la tarea.",
            "Nicol y Macfarlane-Dick (2006) proponen siete principios de buena práctica de retroalimentación que sirven como lista de revisión: (1) aclarar qué es un buen desempeño; (2) facilitar la reflexión y la autoevaluación; (3) entregar información de calidad sobre el aprendizaje; (4) fomentar el diálogo con el docente y entre pares; (5) promover creencias motivacionales positivas y la autoestima; (6) dar oportunidades de cerrar la brecha entre el desempeño actual y el deseado; y (7) usar la información para ajustar la propia enseñanza.",
            "Dar buenos comentarios no basta si el estudiante no los usa. Carless y Boud (2018) hablan de alfabetización en retroalimentación para referirse a las capacidades del estudiante para sacar provecho de ella, y destacan cuatro rasgos: valorar la retroalimentación, hacer juicios sobre la calidad de su propio trabajo y el de otros, gestionar las emociones que provoca y actuar a partir de ella. En la práctica, conviene pedir al estudiante que resuma qué entendió, qué cambios hará y para cuándo.",
            "Aplicado a la tutoría metodológica (criterio práctico del curso): prioriza lo global antes que lo local (la coherencia entre problema, objetivos y diseño antes que la ortografía); describe lo que ves con evidencia del texto, explica por qué importa y sugiere un siguiente paso o formula una pregunta; limita la cantidad de comentarios; y define hitos con fechas (problema aprobado, marco teórico, diseño, instrumentos, resultados, discusión, borrador final) para detectar a tiempo si el trabajo se retrasa.",
          ],
          tip: "Sugerencia: al cierre de cada tutoría, pide al estudiante que escriba en dos o tres líneas qué va a hacer antes de la próxima reunión.",
          references: [
            "Carless, D., & Boud, D. (2018). The development of student feedback literacy: Enabling uptake of feedback. Assessment & Evaluation in Higher Education, 43(8), 1315–1325. https://doi.org/10.1080/02602938.2018.1463354",
            "Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81–112. https://doi.org/10.3102/003465430298487",
            "Nicol, D. J., & Macfarlane-Dick, D. (2006). Formative assessment and self-regulated learning: A model and seven principles of good feedback practice. Studies in Higher Education, 31(2), 199–218. https://doi.org/10.1080/03075070600572090",
          ],
        },
        {
          id: "l7-3",
          type: "texto",
          title: "Integridad académica, ética y evaluación",
          duration: "10 min",
          paragraphs: [
            "La Declaración de Singapur sobre la Integridad en la Investigación (2010), elaborada en la 2.ª Conferencia Mundial sobre Integridad en la Investigación, establece cuatro principios: honestidad en todos los aspectos de la investigación, responsabilidad en su ejecución, cortesía profesional e imparcialidad en las relaciones laborales, y buena gestión de la investigación en nombre de otros. El propio documento aclara que no es un texto regulador ni representa las políticas oficiales de los países u organizaciones participantes: es un marco de referencia para pensar las prácticas.",
            "Entre las responsabilidades que enumera, varias son directamente aplicables a un trabajo de grado: usar métodos adecuados y fundamentar las conclusiones en un análisis crítico de la evidencia; llevar una documentación clara que permita a otros verificar el trabajo; reconocer las contribuciones ajenas y atribuir correctamente la autoría; y revelar posibles conflictos de intereses. También menciona la fabricación, la falsificación y el plagio como conductas indebidas.",
            "En la tutoría esto puede traducirse así: hablar de integridad desde la primera reunión; pedir borradores parciales y fuentes, de modo que el proceso sea visible; revisar que las ideas ajenas estén citadas y referenciadas; comprobar que el estudiante pueda explicar con sus propias palabras lo que escribió; y, cuando hay participantes humanos, verificar que existan consentimiento informado, confidencialidad de los datos y, si tu universidad lo exige, aprobación de un comité de ética. Si tu universidad tiene política sobre el uso de herramientas de inteligencia artificial, acuérdala con el estudiante por escrito: para qué tareas puede usarlas, cómo debe declararlas y quién verifica lo que producen.",
            "La evaluación es más justa y más formativa cuando los criterios se conocen de antemano. Panadero y Jonsson (2013) revisan la evidencia sobre el uso de rúbricas en la evaluación formativa y señalan que pueden aportar transparencia a los criterios y apoyar la autorregulación del estudiante, aunque su efecto depende de cómo se utilicen. Reddy y Andrade (2010) revisaron el uso de rúbricas en la educación superior y concluyen que muestran potencial para enseñar y evaluar, aunque la evidencia es todavía preliminar; piden prestar atención a la claridad del lenguaje de los criterios y a la validez y la confiabilidad de lo que miden.",
            "Una rúbrica analítica para un trabajo de grado puede organizarse en criterios (filas) y niveles de desempeño (columnas), con una descripción observable en cada celda. Algunos criterios habituales: planteamiento del problema y coherencia, calidad del marco teórico, pertinencia del diseño metodológico, análisis y discusión de resultados, redacción y formato, uso íntegro de las fuentes y defensa. Los pesos los define tu reglamento; si existe una rúbrica institucional, úsala y compártela con el estudiante desde el principio. Para la defensa: ensayar con tiempo, anticipar preguntas sobre la justificación, las decisiones metodológicas, las limitaciones y los aportes, y verificar en el reglamento cuál es el rol del tutor.",
          ],
          references: [
            "Declaración de Singapur sobre la integridad en la investigación. (2010). 2.ª Conferencia Mundial sobre Integridad en la Investigación, Singapur, 21–24 de julio de 2010. https://www.conicyt.cl/fondecyt/files/2016/06/Declaracion_Singapur1.pdf",
            "Panadero, E., & Jonsson, A. (2013). The use of scoring rubrics for formative assessment purposes revisited: A review. Educational Research Review, 9, 129–144. https://doi.org/10.1016/j.edurev.2013.01.002",
            "Reddy, Y. M., & Andrade, H. (2010). A review of rubric use in higher education. Assessment & Evaluation in Higher Education, 35(4), 435–448. https://doi.org/10.1080/02602930902862859",
          ],
        },
        {
          id: "l7-4",
          type: "video",
          title: "Video: tutoría, integridad y evaluación",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video de cierre sobre tutoría, integridad y evaluación (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l7-5",
          type: "quiz",
          title: "Cuestionario: tutoría, retroalimentación y evaluación",
          duration: "5 preguntas",
          questions: [
            {
              q: "¿Cuál es el papel central del tutor de un trabajo de grado?",
              options: [
                "Redactar las partes más difíciles para asegurar la calidad",
                "Orientar y retroalimentar mientras el estudiante desarrolla su propio trabajo",
                "Aprobar el trabajo final sin revisiones intermedias",
                "Decidir el tema y los resultados que debe obtener el estudiante",
              ],
              correct: 1,
              explanation:
                "El protagonista es el tesista; el tutor orienta, cuestiona y retroalimenta, pero no escribe el trabajo por él.",
            },
            {
              q: "Según Hattie y Timperley (2007), una retroalimentación eficaz responde a tres preguntas. ¿Cuáles son?",
              options: [
                "¿Quién?, ¿cuándo? y ¿dónde?",
                "¿A dónde voy?, ¿cómo voy? y ¿qué sigue?",
                "¿Qué costó?, ¿cuánto tardó? y ¿quién lo revisó?",
                "¿Aprobó?, ¿reprobó? y ¿repite?",
              ],
              correct: 1,
              explanation:
                "Metas, avance respecto de las metas y acciones siguientes son las tres preguntas del modelo.",
            },
            {
              q: "Un comentario como «eres muy descuidado con tus citas» está centrado en...",
              options: [
                "La tarea",
                "El proceso",
                "La autorregulación",
                "La persona",
              ],
              correct: 3,
              explanation:
                "Es un comentario sobre la persona; según Hattie y Timperley, aporta poco al aprendizaje frente a los centrados en proceso y autorregulación.",
            },
            {
              q: "¿Qué plantean Carless y Boud (2018) con la alfabetización en retroalimentación?",
              options: [
                "Que los tutores deben escribir comentarios más largos",
                "Que el estudiante necesita capacidades para valorar, juzgar, gestionar emociones y actuar a partir de la retroalimentación",
                "Que la retroalimentación debe ser solo oral",
                "Que los estudiantes no deben recibir retroalimentación",
              ],
              correct: 1,
              explanation:
                "Destacan cuatro rasgos del estudiante: valorarla, hacer juicios, gestionar emociones y actuar a partir de ella.",
            },
            {
              q: "Si una recomendación de este curso contradice el reglamento de trabajos de grado de tu universidad, ¿qué prevalece?",
              options: [
                "La recomendación del curso",
                "El reglamento institucional",
                "La preferencia del estudiante",
                "Lo que se hizo en años anteriores",
              ],
              correct: 1,
              explanation:
                "Cada universidad define modalidades, plazos, formatos y funciones; el reglamento es la referencia obligatoria.",
            },
          ],
        },
        {
          id: "l7-6",
          type: "checklist",
          title: "Lista de chequeo: tutoría, retroalimentación y evaluación",
          duration: "6 ítems",
          intro:
            "Marca los puntos que ya puedes responder con seguridad. Al terminar, habrás completado el recorrido del curso.",
          items: [
            "Puedo explicar la diferencia entre orientar, retroalimentar y reemplazar al estudiante.",
            "Sé qué puntos acordar por escrito en la primera tutoría y cómo registrar el avance.",
            "Puedo dar retroalimentación que responda a «¿a dónde voy?, ¿cómo voy? y ¿qué sigue?».",
            "Distingo los niveles de un comentario (tarea, proceso, autorregulación y persona).",
            "Sé qué conductas atentan contra la integridad y cómo actuar si sospecho de una.",
            "Puedo redactar un criterio de rúbrica observable y conozco el reglamento de mi universidad.",
          ],
        },
        {
          id: "l7-7",
          type: "practica",
          title: "Actividad práctica: tutoría, retroalimentación y rúbricas",
          duration: "15–20 min",
          intro:
            "Esta actividad te ayuda a distinguir las acciones del rol de tutor, a identificar el nivel de un comentario y a escribir un criterio de rúbrica observable.",
          pdfHref: "/actividad-practica-modulo7.pdf",
          exercises: [
            {
              id: "ex1",
              kind: "choice-items",
              title: "¿Orientar, retroalimentar o reemplazar?",
              instruction:
                "Lee cada acción y marca si forma parte del rol del tutor o si excede ese rol. Luego revisa tus respuestas.",
              choiceLabels: ["Parte del rol del tutor", "Excede el rol del tutor"],
              items: [
                { id: "a", text: "Señalar al estudiante que su objetivo general no es coherente con su pregunta y explicarle por qué.", correct: 0, explanation: "Es retroalimentación con fundamento: ayuda al estudiante a mejorar su propio trabajo." },
                { id: "b", text: "Redactar el marco teórico completo porque el estudiante tiene poco tiempo.", correct: 1, explanation: "Escribir el trabajo por el estudiante excede el rol: la autoría y el aprendizaje son del tesista." },
                { id: "c", text: "Acordar con el estudiante un cronograma de entregas parciales.", correct: 0, explanation: "Acompañar el proceso y sostener los plazos es parte del rol del tutor." },
                { id: "d", text: "Aplicar el instrumento a la muestra del estudiante para avanzar más rápido.", correct: 1, explanation: "La recolección de datos es responsabilidad del estudiante; el tutor la orienta, pero no la reemplaza." },
              ],
            },
            {
              id: "ex2",
              kind: "choice-items",
              title: "¿A qué nivel apunta el comentario?",
              instruction:
                "Lee cada comentario y marca si se centra en la persona o en la tarea, el proceso o la autorregulación. Luego revisa tus respuestas.",
              choiceLabels: ["Centrado en la persona", "Tarea, proceso o autorregulación"],
              items: [
                { id: "a", text: "«Muy bien, buen trabajo.»", correct: 0, explanation: "Es un elogio general sobre la persona que no dice qué hizo bien ni qué sigue." },
                { id: "b", text: "«Tu objetivo general promete explicar un efecto, pero el diseño es descriptivo; ¿cómo lo ajustarías?»", correct: 1, explanation: "Se centra en la tarea, con evidencia y una pregunta para actuar." },
                { id: "c", text: "«Eres muy descuidado con tus citas.»", correct: 0, explanation: "Juzga a la persona y no ofrece una vía para mejorar." },
                { id: "d", text: "«¿Qué estrategia usarás para comprobar que todas las citas del texto estén en tu lista de referencias?»", correct: 1, explanation: "Apunta al proceso y a la autorregulación del estudiante." },
              ],
            },
            {
              id: "ex3",
              kind: "prompts",
              title: "Mejora este comentario y escribe un criterio de rúbrica",
              instruction:
                "Responde en tus propias palabras y compara con la respuesta modelo.",
              prompts: [
                {
                  id: "comentario",
                  label: "Mejora este comentario: «Tu metodología está mal.» Reescríbelo para que describa, explique por qué importa y sugiera un siguiente paso:",
                  sample: "«En el capítulo de metodología afirmas que usarás un enfoque cualitativo, pero planteas una encuesta con porcentajes (p. 23). Esto importa porque ambos elementos responden a lógicas distintas. ¿Cómo justificarías la relación entre tu pregunta y la técnica que elegiste?»",
                },
                {
                  id: "criterio",
                  label: "Redacta un criterio de rúbrica observable con su descriptor de nivel alto:",
                  sample: "Criterio: «Coherencia del diseño». Nivel alto: «El enfoque, la muestra y los instrumentos se derivan de la pregunta y los objetivos, y el estudiante justifica cada decisión con fuentes.»",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const FLAT_LESSONS = COURSE.modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title }))
);
const TOTAL_LESSONS = FLAT_LESSONS.length;
const STORAGE_KEY = "tutores-tfg-progress-v2";

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */

function youTubeEmbedUrl(raw) {
  if (!raw) return null;
  try {
    const url = new URL(raw.trim());
    let id = null;
    if (url.hostname.includes("youtu.be")) {
      id = url.pathname.replace("/", "");
    } else if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (url.pathname.startsWith("/embed/")) id = url.pathname.split("/embed/")[1];
    }
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

const TYPE_META = {
  texto: { label: "TEXTO", Icon: FileText },
  video: { label: "VIDEO", Icon: PlayCircle },
  quiz: { label: "CUESTIONARIO", Icon: HelpCircle },
  checklist: { label: "LISTA DE CHEQUEO", Icon: ListChecks },
  practica: { label: "ACTIVIDAD PRÁCTICA", Icon: PenSquare },
};

/* ------------------------------------------------------------------ */
/* APP                                                                  */
/* ------------------------------------------------------------------ */

export default function App({ onLock } = {}) {
  const [activeId, setActiveId] = useState(FLAT_LESSONS[0].id);
  const [completed, setCompleted] = useState(new Set());
  const [videoLinks, setVideoLinks] = useState({});
  const [checklistState, setChecklistState] = useState({});
  const [practiceAnswers, setPracticeAnswers] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("idle"); // idle | saving | saved
  const [confirmReset, setConfirmReset] = useState(false);

  // Cargar progreso guardado
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setCompleted(new Set(parsed.completed || []));
        setVideoLinks(parsed.videoLinks || {});
        setChecklistState(parsed.checklistState || {});
        setPracticeAnswers(parsed.practiceAnswers || {});
        if (parsed.activeId && FLAT_LESSONS.some((l) => l.id === parsed.activeId)) {
          setActiveId(parsed.activeId);
        }
      }
    } catch {
      // no hay progreso guardado todavía
    } finally {
      setLoaded(true);
    }
  }, []);

  // Guardar progreso (de inmediato — localStorage es rápido, no hace falta esperar)
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completed: Array.from(completed),
          videoLinks,
          checklistState,
          practiceAnswers,
          activeId,
        })
      );
      setSaveState("saved");
    } catch {
      setSaveState("idle");
    }
  }, [completed, videoLinks, checklistState, practiceAnswers, activeId, loaded]);

  const markComplete = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const resetProgress = () => {
    setCompleted(new Set());
    setVideoLinks({});
    setChecklistState({});
    setPracticeAnswers({});
    setActiveId(FLAT_LESSONS[0].id);
    setConfirmReset(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignorar si no existía
    }
  };

  const activeIndex = FLAT_LESSONS.findIndex((l) => l.id === activeId);
  const active = FLAT_LESSONS[activeIndex];
  const nextLesson = FLAT_LESSONS[activeIndex + 1];
  const progressPct = Math.round((completed.size / TOTAL_LESSONS) * 100);

  const goTo = (id) => setActiveId(id);
  const goNext = () => {
    if (nextLesson) setActiveId(nextLesson.id);
  };

  if (!loaded) {
    return (
      <div className="fa-root fa-loading">
        <div className="fa-spinner" />
        <p>Cargando tu progreso…</p>
        <Fonts />
      </div>
    );
  }

  return (
    <div className="fa-root">
      <Fonts />

      {/* -------- Encabezado -------- */}
      <header className="fa-header">
        <div className="fa-header-left">
          <BookOpen size={20} strokeWidth={2} />
          <div>
            <div className="fa-title">{COURSE.title}</div>
            <div className="fa-subtitle">{COURSE.subtitle}</div>
          </div>
        </div>
        <div className="fa-header-right">
          <div className="fa-progress-wrap">
            <div className="fa-progress-track">
              <div className="fa-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="fa-progress-label">
              {completed.size}/{TOTAL_LESSONS} lecciones · {progressPct}%
            </span>
          </div>
        </div>
      </header>

      {isEcMode() && (
        <div style={{ background: progressPct === 100 ? "#E6F0E4" : "#F3ECDD", borderBottom: "1px solid #DDD3BE", padding: "10px 24px", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", fontSize: 14 }}>
          <span>
            {progressPct === 100
              ? "¡Completaste este curso! Vuelve a Educación Continua para desbloquear el siguiente."
              : "Estás en el programa de Educación Continua."}
          </span>
          <a
            href={progressPct === 100 ? completionUrl() : HUB_URL}
            style={{ background: progressPct === 100 ? "#0B3D42" : "transparent", color: progressPct === 100 ? "#fff" : "#0B3D42", border: "1px solid #0B3D42", borderRadius: 8, padding: "7px 14px", textDecoration: "none", fontWeight: 600 }}
          >
            {progressPct === 100 ? "Volver y desbloquear el siguiente" : "← Educación Continua"}
          </a>
        </div>
      )}

      <div className="fa-body">
        {/* -------- Sidebar -------- */}
        <nav className="fa-sidebar" aria-label="Contenido del curso">
          {COURSE.modules.map((mod) => (
            <div key={mod.id} className="fa-module">
              <div className="fa-module-heading">
                <span className="fa-module-label">{mod.label}</span>
                <span className="fa-module-title">{mod.title}</span>
              </div>
              <ol className="fa-lesson-list">
                {mod.lessons.map((lesson) => {
                  const meta = TYPE_META[lesson.type];
                  const isActive = lesson.id === activeId;
                  const isDone = completed.has(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <button
                        className={`fa-lesson-item${isActive ? " is-active" : ""}${
                          isDone ? " is-done" : ""
                        }`}
                        onClick={() => goTo(lesson.id)}
                      >
                        <span className="fa-lesson-check">
                          {isDone ? (
                            <CheckCircle2 size={17} strokeWidth={2} />
                          ) : (
                            <Circle size={17} strokeWidth={1.6} />
                          )}
                        </span>
                        <span className="fa-lesson-text">
                          <span className="fa-lesson-title">{lesson.title}</span>
                          <span className="fa-lesson-meta">
                            <meta.Icon size={12} strokeWidth={2} />
                            {meta.label} · {lesson.duration}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}

          <div className="fa-sidebar-footer">
            <span className="fa-save-indicator">
              {saveState === "saving" ? "Guardando…" : "Progreso guardado en este sitio"}
            </span>
            {confirmReset ? (
              <div className="fa-reset-confirm">
                <span>¿Reiniciar todo el progreso?</span>
                <div>
                  <button className="fa-btn-ghost-sm" onClick={() => setConfirmReset(false)}>
                    Cancelar
                  </button>
                  <button className="fa-btn-danger-sm" onClick={resetProgress}>
                    Sí, reiniciar
                  </button>
                </div>
              </div>
            ) : (
              <button className="fa-reset-btn" onClick={() => setConfirmReset(true)}>
                <RotateCcw size={13} strokeWidth={2} />
                Reiniciar progreso
              </button>
            )}
            {onLock && (
              <button className="fa-reset-btn" onClick={onLock} style={{ marginTop: "2px" }}>
                <Lock size={13} strokeWidth={2} />
                Bloquear acceso de nuevo
              </button>
            )}
          </div>
        </nav>

        {/* -------- Contenido principal -------- */}
        <main className="fa-main">
          {active && (
            <LessonCard
              key={active.id}
              lesson={active}
              index={activeIndex}
              moduleTitle={active.moduleTitle}
              isDone={completed.has(active.id)}
              videoLink={videoLinks[active.id] || ""}
              onSetVideoLink={(url) =>
                setVideoLinks((prev) => ({ ...prev, [active.id]: url }))
              }
              checkedItems={checklistState[active.id] || []}
              onToggleItem={(itemIndex) =>
                setChecklistState((prev) => {
                  const current = prev[active.id] || [];
                  const next = [...current];
                  next[itemIndex] = !next[itemIndex];
                  return { ...prev, [active.id]: next };
                })
              }
              practiceValues={practiceAnswers[active.id] || {}}
              onPracticeChange={(fieldKey, value) =>
                setPracticeAnswers((prev) => ({
                  ...prev,
                  [active.id]: { ...(prev[active.id] || {}), [fieldKey]: value },
                }))
              }
              onComplete={() => markComplete(active.id)}
              onNext={goNext}
              hasNext={Boolean(nextLesson)}
            />
          )}
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TARJETA DE LECCIÓN                                                   */
/* ------------------------------------------------------------------ */

function LessonCard({
  lesson,
  index,
  moduleTitle,
  isDone,
  videoLink,
  onSetVideoLink,
  checkedItems,
  onToggleItem,
  practiceValues,
  onPracticeChange,
  onComplete,
  onNext,
  hasNext,
}) {
  const meta = TYPE_META[lesson.type];

  return (
    <article className="fa-card">
      <div className="fa-card-folio">
        <span>{moduleTitle}</span>
        <span className="fa-folio-page">p. {String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="fa-card-punch" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="fa-card-head">
        <span className="fa-card-type">
          <meta.Icon size={13} strokeWidth={2} />
          {meta.label}
        </span>
        <h1 className="fa-card-title">{lesson.title}</h1>
      </div>

      <div className="fa-card-body">
        {lesson.type === "texto" && <TextLesson lesson={lesson} />}
        {lesson.type === "video" && (
          <VideoLesson lesson={lesson} link={videoLink} onSetLink={onSetVideoLink} />
        )}
        {lesson.type === "quiz" && (
          <QuizLesson lesson={lesson} onPassed={onComplete} onNext={onNext} hasNext={hasNext} isDone={isDone} />
        )}
        {lesson.type === "checklist" && (
          <ChecklistLesson lesson={lesson} checkedItems={checkedItems} onToggleItem={onToggleItem} />
        )}
        {lesson.type === "practica" && (
          <PracticaLesson lesson={lesson} values={practiceValues} onChange={onPracticeChange} />
        )}
      </div>

      {lesson.type !== "quiz" && (
        <div className="fa-card-footer">
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button
            className="fa-btn-primary"
            onClick={() => {
              onComplete();
              if (hasNext) onNext();
            }}
          >
            {hasNext ? "Completar y continuar" : "Completar curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </article>
  );
}

function TextLesson({ lesson }) {
  return (
    <div className="fa-text-lesson">
      {lesson.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {lesson.tip && <div className="fa-tip">{lesson.tip}</div>}
      {lesson.references && lesson.references.length > 0 && (
        <div className="fa-references">
          <span className="fa-references-title">Referencias (APA 7)</span>
          <ul>
            {lesson.references.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function VideoLesson({ lesson, link, onSetLink }) {
  const [draft, setDraft] = useState(link);
  const embed = youTubeEmbedUrl(link);

  useEffect(() => setDraft(link), [link]);

  return (
    <div className="fa-video-lesson">
      <p className="fa-video-desc">{lesson.description}</p>

      {embed ? (
        <div className="fa-video-frame">
          <iframe src={embed} title={lesson.title} allowFullScreen frameBorder="0" />
        </div>
      ) : (
        <div className="fa-video-placeholder">
          <PlayCircle size={28} strokeWidth={1.5} />
          <span>Aún no se ha agregado un video para esta lección.</span>
        </div>
      )}

      <div className="fa-video-input-row">
        <Link2 size={15} strokeWidth={2} />
        <input
          type="text"
          placeholder="Pega aquí el enlace de YouTube…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button className="fa-btn-secondary" onClick={() => onSetLink(draft.trim())}>
          Guardar enlace
        </button>
      </div>
    </div>
  );
}

function ChecklistLesson({ lesson, checkedItems, onToggleItem }) {
  const checkedCount = lesson.items.filter((_, i) => checkedItems[i]).length;
  const allChecked = checkedCount === lesson.items.length;

  return (
    <div className="fa-checklist">
      <p className="fa-checklist-intro">{lesson.intro}</p>

      <div className="fa-checklist-progress">
        <div className="fa-checklist-track">
          <div
            className="fa-checklist-fill"
            style={{ width: `${(checkedCount / lesson.items.length) * 100}%` }}
          />
        </div>
        <span>
          {checkedCount}/{lesson.items.length} marcados
        </span>
      </div>

      <ul className="fa-checklist-items">
        {lesson.items.map((item, i) => {
          const checked = Boolean(checkedItems[i]);
          return (
            <li key={i}>
              <button
                className={`fa-checklist-item${checked ? " is-checked" : ""}`}
                onClick={() => onToggleItem(i)}
              >
                <span className="fa-checklist-box">
                  {checked ? (
                    <CheckCircle2 size={18} strokeWidth={2} />
                  ) : (
                    <Circle size={18} strokeWidth={1.6} />
                  )}
                </span>
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {allChecked && (
        <div className="fa-checklist-done">
          <CheckCircle2 size={15} strokeWidth={2} />
          Has revisado todos los puntos de esta lista.
        </div>
      )}
    </div>
  );
}

function PracticaLesson({ lesson, values, onChange }) {
  return (
    <div className="fa-practica">
      <p className="fa-practica-intro">{lesson.intro}</p>

      {lesson.pdfHref && (
        <a className="fa-practica-download" href={lesson.pdfHref} download target="_blank" rel="noreferrer">
          <Download size={15} strokeWidth={2} />
          Descargar esta actividad en PDF
        </a>
      )}

      {lesson.exercises.map((ex, i) => (
        <div className="fa-practica-exercise" key={ex.id}>
          <div className="fa-practica-exercise-head">
            <span className="fa-practica-num">{i + 1}</span>
            <span className="fa-practica-title">{ex.title}</span>
          </div>
          <p className="fa-practica-instruction">{ex.instruction}</p>

          {ex.kind === "choice-items" && <ChoiceItemsBlock ex={ex} values={values} onChange={onChange} />}

          {ex.kind === "source-compare" && (
            <>
              <div className="fa-practica-source">
                <span className="fa-practica-source-label">{ex.source.label}</span>
                <p className="fa-practica-source-quote">{ex.source.quote}</p>
                {ex.source.meta && <p className="fa-practica-source-meta">{ex.source.meta}</p>}
              </div>
              {ex.studentVersion && (
                <div className="fa-practica-source">
                  <span className="fa-practica-source-label">{ex.studentVersion.label}</span>
                  <p className="fa-practica-source-quote">{ex.studentVersion.quote}</p>
                </div>
              )}
              {ex.prompts.map((p) => (
                <PromptField key={p.id} exId={ex.id} p={p} values={values} onChange={onChange} />
              ))}
            </>
          )}

          {ex.kind === "prompts" &&
            ex.prompts.map((p) => (
              <PromptField key={p.id} exId={ex.id} p={p} values={values} onChange={onChange} />
            ))}
        </div>
      ))}
    </div>
  );
}

function ChoiceItemsBlock({ ex, values, onChange }) {
  const [revealed, setRevealed] = useState(false);
  const labels = ex.choiceLabels || ["Sí", "No"];
  const allAnswered = ex.items.every((item) => values[`${ex.id}-${item.id}-choice`] !== undefined && values[`${ex.id}-${item.id}-choice`] !== "");

  const retry = () => {
    setRevealed(false);
    ex.items.forEach((item) => {
      onChange(`${ex.id}-${item.id}-choice`, "");
    });
  };

  return (
    <>
      {ex.items.map((item) => {
        const choiceKey = `${ex.id}-${item.id}-choice`;
        const justifKey = `${ex.id}-${item.id}-justif`;
        const choice = values[choiceKey];
        const hasCorrect = typeof item.correct === "number";
        return (
          <div className="fa-practica-item" key={item.id}>
            <p className="fa-practica-item-text">{item.text}</p>
            <div className="fa-practica-choices">
              {labels.map((label, li) => {
                const val = String(li);
                let stateClass = "";
                if (revealed && hasCorrect) {
                  if (li === item.correct) stateClass = " is-correct";
                  else if (choice === val) stateClass = " is-wrong";
                } else if (choice === val) {
                  stateClass = " is-selected";
                }
                return (
                  <button
                    key={val}
                    type="button"
                    disabled={revealed}
                    className={`fa-practica-choice${stateClass}`}
                    onClick={() => onChange(choiceKey, choice === val ? "" : val)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <textarea
              className="fa-practica-textarea"
              placeholder="Justifica tu respuesta en una frase corta…"
              rows={2}
              value={values[justifKey] || ""}
              onChange={(e) => onChange(justifKey, e.target.value)}
            />
            {revealed && item.explanation && (
              <p className="fa-practica-feedback">
                {choice !== "" && Number(choice) === item.correct ? "Correcto. " : "No es correcto. "}
                {item.explanation}
              </p>
            )}
          </div>
        );
      })}

      {!revealed ? (
        <button
          type="button"
          className="fa-btn-secondary fa-practica-check-btn"
          disabled={!allAnswered}
          onClick={() => setRevealed(true)}
        >
          <CheckCircle2 size={14} strokeWidth={2} />
          Revisar mis respuestas
        </button>
      ) : (
        <button type="button" className="fa-btn-secondary fa-practica-check-btn" onClick={retry}>
          <RotateCcw size={14} strokeWidth={2} />
          Intentar de nuevo
        </button>
      )}
    </>
  );
}

function PromptField({ exId, p, values, onChange }) {
  const [showSample, setShowSample] = useState(false);
  const key = `${exId}-${p.id}`;

  return (
    <div className="fa-practica-prompt">
      <label className="fa-practica-prompt-label">{p.label}</label>
      <textarea
        className="fa-practica-textarea"
        rows={3}
        value={values[key] || ""}
        onChange={(e) => onChange(key, e.target.value)}
      />
      {p.sample && (
        <>
          <button
            type="button"
            className="fa-practica-sample-btn"
            onClick={() => setShowSample((v) => !v)}
          >
            {showSample ? "Ocultar respuesta modelo" : "Ver respuesta modelo"}
          </button>
          {showSample && (
            <div className="fa-practica-sample">
              <span className="fa-practica-sample-label">Respuesta modelo</span>
              <p>{p.sample}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function QuizLesson({ lesson, onPassed, onNext, hasNext, isDone }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = lesson.questions.every((_, i) => answers[i] !== undefined);
  const score = lesson.questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0),
    0
  );
  const pct = Math.round((score / lesson.questions.length) * 100);

  const submit = () => {
    setSubmitted(true);
    onPassed();
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="fa-quiz">
      {lesson.questions.map((q, qi) => (
        <div className="fa-quiz-q" key={qi}>
          <p className="fa-quiz-question">
            {qi + 1}. {q.q}
          </p>
          <div className="fa-quiz-options">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              let stateClass = "";
              if (submitted) {
                if (oi === q.correct) stateClass = "is-correct";
                else if (selected && oi !== q.correct) stateClass = "is-wrong";
              } else if (selected) {
                stateClass = "is-selected";
              }
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  className={`fa-quiz-option ${stateClass}`}
                  onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                >
                  <span className="fa-option-bullet">{String.fromCharCode(97 + oi)}</span>
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="fa-quiz-explanation">
              {answers[qi] === q.correct ? "Correcto. " : "No es correcto. "}
              {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button className="fa-btn-primary" disabled={!allAnswered} onClick={submit}>
          Enviar respuestas
          <ChevronRight size={16} strokeWidth={2.2} />
        </button>
      ) : (
        <div className="fa-quiz-result">
          <div className="fa-quiz-score">
            Resultado: {score}/{lesson.questions.length} ({pct}%)
          </div>
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button className="fa-btn-secondary" onClick={retry}>
            <RotateCcw size={14} strokeWidth={2} />
            Intentar de nuevo
          </button>
          <button className="fa-btn-primary" onClick={onNext} disabled={!hasNext}>
            {hasNext ? "Continuar" : "Fin del curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ESTILOS Y TIPOGRAFÍA                                                 */
/* ------------------------------------------------------------------ */

function Fonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

      :root {
        --ink: #0B3D42;
        --ink-soft: #1B4C52;
        --paper: #F6F1E7;
        --paper-card: #FCFAF4;
        --gold: #C98A2E;
        --wine: #7A2E3B;
        --sage: #4F7A5D;
        --line: #DDD3BE;
        --text: #29291F;
        --text-soft: #6b6b5f;
      }

      * { box-sizing: border-box; }

      .fa-root {
        font-family: 'Inter', sans-serif;
        color: var(--text);
        background: var(--paper);
        background-image:
          radial-gradient(circle at 1px 1px, rgba(11,61,66,0.05) 1px, transparent 0);
        background-size: 22px 22px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .fa-loading {
        align-items: center;
        justify-content: center;
        gap: 12px;
        color: var(--ink);
        font-family: 'Source Serif 4', serif;
        padding: 60px 20px;
      }
      .fa-spinner {
        width: 26px; height: 26px;
        border: 3px solid var(--line);
        border-top-color: var(--gold);
        border-radius: 50%;
        animation: fa-spin 0.8s linear infinite;
      }
      @keyframes fa-spin { to { transform: rotate(360deg); } }

      .fa-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 22px;
        background: var(--ink);
        color: var(--paper);
        flex-wrap: wrap;
      }
      .fa-header-left { display: flex; align-items: center; gap: 10px; }
      .fa-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 19px;
        letter-spacing: 0.2px;
        line-height: 1.1;
      }
      .fa-subtitle {
        font-size: 11.5px;
        color: #CFE0DD;
        margin-top: 2px;
      }
      .fa-header-right { display: flex; align-items: center; }
      .fa-progress-wrap { display: flex; flex-direction: column; gap: 4px; min-width: 170px; }
      .fa-progress-track {
        width: 100%; height: 6px; border-radius: 3px;
        background: rgba(255,255,255,0.18);
        overflow: hidden;
      }
      .fa-progress-fill {
        height: 100%;
        background: var(--gold);
        transition: width 0.4s ease;
      }
      .fa-progress-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: #CFE0DD;
        text-align: right;
      }

      .fa-body {
        display: flex;
        flex: 1;
        min-height: 0;
        align-items: flex-start;
      }

      /* ---- Sidebar ---- */
      .fa-sidebar {
        width: 300px;
        flex-shrink: 0;
        background: var(--paper-card);
        border-right: 1px solid var(--line);
        padding: 18px 0 0 0;
        max-height: 82vh;
        overflow-y: auto;
      }
      .fa-module { padding: 0 18px 14px 18px; border-bottom: 1px dashed var(--line); margin-bottom: 6px; }
      .fa-module:last-of-type { border-bottom: none; }
      .fa-module-heading { margin-bottom: 8px; }
      .fa-module-label {
        display: block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        letter-spacing: 1px;
        color: var(--gold);
        text-transform: uppercase;
      }
      .fa-module-title {
        display: block;
        font-family: 'Source Serif 4', serif;
        font-weight: 600;
        font-size: 15px;
        color: var(--ink);
      }
      .fa-lesson-list { list-style: none; margin: 0; padding: 0; }
      .fa-lesson-item {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 9px;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        padding: 7px 8px;
        border-radius: 6px;
      }
      .fa-lesson-item:hover { background: rgba(11,61,66,0.06); }
      .fa-lesson-item.is-active { background: rgba(201,138,46,0.14); }
      .fa-lesson-check { margin-top: 2px; color: var(--text-soft); flex-shrink: 0; }
      .fa-lesson-item.is-done .fa-lesson-check { color: var(--sage); }
      .fa-lesson-item.is-active .fa-lesson-title { color: var(--ink); font-weight: 600; }
      .fa-lesson-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-left: 14px;
        border-left: 1px solid transparent;
      }
      .fa-lesson-item.is-active .fa-lesson-text { border-left-color: var(--gold); }
      .fa-lesson-title { font-size: 13.2px; line-height: 1.35; color: var(--text); }
      .fa-lesson-meta {
        display: flex; align-items: center; gap: 4px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .fa-sidebar-footer {
        padding: 14px 18px 20px 18px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-top: 1px solid var(--line);
      }
      .fa-save-indicator { font-size: 10.5px; color: var(--text-soft); font-family: 'IBM Plex Mono', monospace; }
      .fa-reset-btn {
        display: flex; align-items: center; gap: 6px;
        background: none; border: 1px solid var(--line); border-radius: 6px;
        padding: 7px 10px; font-size: 12px; color: var(--wine);
        cursor: pointer; width: fit-content;
      }
      .fa-reset-btn:hover { background: rgba(122,46,59,0.06); }
      .fa-reset-confirm { display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: var(--wine); }
      .fa-btn-ghost-sm, .fa-btn-danger-sm {
        border: 1px solid var(--line); background: none; border-radius: 5px;
        padding: 5px 9px; font-size: 11.5px; cursor: pointer; margin-right: 6px;
      }
      .fa-btn-danger-sm { background: var(--wine); color: #fff; border-color: var(--wine); }

      /* ---- Contenido principal ---- */
      .fa-main {
        flex: 1;
        min-width: 0;
        padding: 26px 30px 40px 30px;
        max-height: 82vh;
        overflow-y: auto;
      }

      .fa-card {
        background: var(--paper-card);
        border: 1px solid var(--line);
        border-radius: 10px;
        max-width: 760px;
        margin: 0 auto;
        padding: 26px 32px 30px 32px;
        position: relative;
        box-shadow: 0 1px 0 var(--line), 0 8px 22px -18px rgba(11,61,66,0.5);
      }

      .fa-card-punch {
        position: absolute;
        left: 14px; top: 22px;
        display: flex; flex-direction: column; gap: 46px;
      }
      .fa-card-punch span {
        width: 9px; height: 9px; border-radius: 50%;
        background: var(--paper);
        border: 1px solid var(--line);
      }

      .fa-card-folio {
        display: flex; justify-content: space-between; align-items: baseline;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.6px;
        border-bottom: 1px solid var(--line);
        padding-bottom: 10px;
        margin-bottom: 18px;
        margin-left: 26px;
      }
      .fa-folio-page { color: var(--gold); }

      .fa-card-head { margin-left: 26px; margin-bottom: 18px; }
      .fa-card-type {
        display: inline-flex; align-items: center; gap: 6px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px; letter-spacing: 1px;
        color: var(--wine);
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      .fa-card-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 26px;
        color: var(--ink);
        line-height: 1.2;
        margin: 0;
      }

      .fa-card-body { margin-left: 26px; }

      .fa-text-lesson p {
        font-size: 15px; line-height: 1.75; margin: 0 0 14px 0; color: var(--text);
      }
      .fa-references {
        margin-top: 18px;
        padding-top: 12px;
        border-top: 1px solid var(--line);
      }
      .fa-references-title {
        display: block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-soft);
        margin-bottom: 6px;
      }
      .fa-references ul { list-style: none; margin: 0; padding: 0; }
      .fa-references li {
        font-size: 12.5px;
        line-height: 1.55;
        color: var(--text-soft);
        padding-left: 1.6em;
        text-indent: -1.6em;
        margin-bottom: 6px;
        word-break: break-word;
      }
      .fa-tip {
        margin-top: 6px;
        padding: 12px 14px;
        background: rgba(201,138,46,0.1);
        border-left: 3px solid var(--gold);
        border-radius: 4px;
        font-size: 13.5px;
        color: var(--ink-soft);
      }

      .fa-video-desc { font-size: 14px; color: var(--text-soft); margin-bottom: 14px; line-height: 1.6; }
      .fa-video-frame {
        position: relative; width: 100%; padding-top: 56.25%;
        border-radius: 8px; overflow: hidden; background: #000; margin-bottom: 16px;
      }
      .fa-video-frame iframe {
        position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
      }
      .fa-video-placeholder {
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
        height: 200px; border: 1px dashed var(--line); border-radius: 8px;
        color: var(--text-soft); font-size: 13px; margin-bottom: 16px; background: rgba(11,61,66,0.03);
      }
      .fa-video-input-row {
        display: flex; align-items: center; gap: 8px;
        border: 1px solid var(--line); border-radius: 7px; padding: 6px 10px;
        background: var(--paper);
      }
      .fa-video-input-row input {
        flex: 1; border: none; background: none; outline: none; font-size: 13px; color: var(--text);
        font-family: 'Inter', sans-serif;
      }

      .fa-btn-primary {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--ink); color: var(--paper);
        border: none; border-radius: 7px;
        padding: 10px 18px; font-size: 13.5px; font-weight: 600;
        cursor: pointer;
      }
      .fa-btn-primary:hover { background: var(--ink-soft); }
      .fa-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }

      .fa-btn-secondary {
        display: inline-flex; align-items: center; gap: 6px;
        background: none; color: var(--ink);
        border: 1px solid var(--ink); border-radius: 7px;
        padding: 7px 13px; font-size: 12.5px; font-weight: 500;
        cursor: pointer; white-space: nowrap;
      }
      .fa-btn-secondary:hover { background: rgba(11,61,66,0.06); }

      .fa-card-footer {
        margin-left: 26px; margin-top: 22px; padding-top: 18px;
        border-top: 1px solid var(--line);
        display: flex; align-items: center; gap: 14px;
      }
      .fa-done-badge {
        display: inline-flex; align-items: center; gap: 5px;
        color: var(--sage); font-size: 12.5px; font-weight: 600;
      }

      /* ---- Checklist ---- */
      .fa-checklist-intro { font-size: 14px; color: var(--text-soft); line-height: 1.65; margin: 0 0 16px 0; }
      .fa-checklist-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
      .fa-checklist-track { flex: 1; height: 6px; border-radius: 3px; background: var(--line); overflow: hidden; }
      .fa-checklist-fill { height: 100%; background: var(--sage); transition: width 0.3s ease; }
      .fa-checklist-progress span {
        font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-soft); white-space: nowrap;
      }
      .fa-checklist-items { list-style: none; margin: 0 0 6px 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      .fa-checklist-item {
        width: 100%;
        display: flex; align-items: flex-start; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 8px;
        padding: 11px 14px; font-size: 14px; line-height: 1.5;
        background: var(--paper); cursor: pointer; color: var(--text);
      }
      .fa-checklist-item:hover { border-color: var(--gold); }
      .fa-checklist-item.is-checked {
        border-color: var(--sage); background: rgba(79,122,93,0.09); color: var(--ink);
      }
      .fa-checklist-box { color: var(--text-soft); flex-shrink: 0; margin-top: 1px; }
      .fa-checklist-item.is-checked .fa-checklist-box { color: var(--sage); }
      .fa-checklist-done {
        display: flex; align-items: center; gap: 7px;
        margin-top: 14px; font-size: 13px; color: var(--sage); font-weight: 600;
      }

      /* ---- Actividad práctica ---- */
      .fa-practica-intro { font-size: 14px; color: var(--text-soft); line-height: 1.65; margin: 0 0 14px 0; }
      .fa-practica-download {
        display: inline-flex; align-items: center; gap: 7px;
        background: var(--ink); color: var(--paper); text-decoration: none;
        border-radius: 7px; padding: 9px 15px; font-size: 12.5px; font-weight: 600;
        margin-bottom: 22px;
      }
      .fa-practica-download:hover { background: var(--ink-soft); }

      .fa-practica-exercise {
        border-top: 1px dashed var(--line);
        padding-top: 18px;
        margin-top: 18px;
      }
      .fa-practica-exercise:first-of-type { border-top: none; margin-top: 0; padding-top: 0; }
      .fa-practica-exercise-head { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
      .fa-practica-num {
        width: 24px; height: 24px; border-radius: 50%; background: var(--gold); color: var(--paper);
        display: flex; align-items: center; justify-content: center;
        font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 12.5px; flex-shrink: 0;
      }
      .fa-practica-title { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 16px; color: var(--ink); }
      .fa-practica-instruction { font-size: 13px; color: var(--text-soft); margin: 0 0 12px 34px; line-height: 1.5; white-space: pre-line; }

      .fa-practica-item {
        margin: 0 0 12px 34px;
        background: var(--paper-card); border: 1px solid var(--line); border-radius: 8px;
        padding: 12px 14px;
      }
      .fa-practica-item-text { font-size: 13.5px; color: var(--text); margin: 0 0 9px 0; line-height: 1.5; }
      .fa-practica-choices { display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
      .fa-practica-choice {
        border: 1px solid var(--line); background: var(--paper); border-radius: 6px;
        padding: 6px 12px; font-size: 12px; font-weight: 600; color: var(--text-soft); cursor: pointer;
      }
      .fa-practica-choice:hover { border-color: var(--gold); }
      .fa-practica-choice.is-selected { background: var(--ink); border-color: var(--ink); color: var(--paper); }

      .fa-practica-textarea {
        width: 100%; border: 1px solid var(--line); border-radius: 6px;
        padding: 8px 10px; font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text);
        background: var(--paper); resize: vertical;
      }
      .fa-practica-textarea:focus { outline: none; border-color: var(--gold); }

      .fa-practica-source {
        margin: 0 0 10px 34px;
        background: rgba(201,138,46,0.08); border: 1px solid var(--line); border-radius: 8px;
        padding: 12px 14px;
      }
      .fa-practica-source-label {
        display: block; font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; font-weight: 700;
        letter-spacing: 0.8px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px;
      }
      .fa-practica-source-quote { font-style: italic; font-size: 13.5px; color: var(--text); margin: 0; line-height: 1.5; }
      .fa-practica-source-meta { font-size: 11.5px; color: var(--text-soft); margin: 6px 0 0 0; }

      .fa-practica-prompt { margin: 0 0 12px 34px; }
      .fa-practica-prompt-label {
        display: block; font-size: 12.5px; font-weight: 600; color: var(--ink); margin-bottom: 6px;
        white-space: pre-line; line-height: 1.5;
      }

      .fa-practica-choice.is-correct { border-color: var(--sage); background: rgba(79,122,93,0.14); color: var(--ink); }
      .fa-practica-choice.is-wrong { border-color: var(--wine); background: rgba(122,46,59,0.12); color: var(--wine); }
      .fa-practica-choice:disabled { cursor: default; }
      .fa-practica-feedback {
        margin: 8px 0 0 0; font-size: 12px; color: var(--text-soft); line-height: 1.5;
      }
      .fa-practica-check-btn { margin: 4px 0 22px 34px; }

      .fa-practica-sample-btn {
        margin-top: 8px; background: none; border: none; color: var(--wine);
        font-size: 12px; font-weight: 600; cursor: pointer; padding: 0; text-decoration: underline;
      }
      .fa-practica-sample {
        margin-top: 8px; background: rgba(79,122,93,0.08); border: 1px solid var(--line);
        border-radius: 6px; padding: 10px 12px;
      }
      .fa-practica-sample-label {
        display: block; font-family: 'IBM Plex Mono', monospace; font-size: 9px; font-weight: 700;
        letter-spacing: 0.8px; text-transform: uppercase; color: var(--sage); margin-bottom: 5px;
      }
      .fa-practica-sample p { margin: 0; font-size: 13px; color: var(--text); line-height: 1.5; font-style: italic; }

      /* ---- Quiz ---- */
      .fa-quiz-q { margin-bottom: 22px; }
      .fa-quiz-question { font-size: 14.5px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
      .fa-quiz-options { display: flex; flex-direction: column; gap: 7px; }
      .fa-quiz-option {
        display: flex; align-items: center; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 7px;
        padding: 9px 12px; font-size: 13.5px;
        background: var(--paper); cursor: pointer;
      }
      .fa-quiz-option:hover:not(:disabled) { border-color: var(--gold); }
      .fa-quiz-option.is-selected { border-color: var(--gold); background: rgba(201,138,46,0.1); }
      .fa-quiz-option.is-correct { border-color: var(--sage); background: rgba(79,122,93,0.12); }
      .fa-quiz-option.is-wrong { border-color: var(--wine); background: rgba(122,46,59,0.1); }
      .fa-option-bullet {
        width: 20px; height: 20px; border-radius: 50%;
        border: 1px solid var(--line); background: var(--paper-card);
        display: flex; align-items: center; justify-content: center;
        font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; flex-shrink: 0;
        text-transform: uppercase;
      }
      .fa-quiz-explanation {
        margin-top: 8px; font-size: 12.5px; color: var(--text-soft);
        padding-left: 2px; line-height: 1.5;
      }
      .fa-quiz-result {
        display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        border-top: 1px solid var(--line); padding-top: 16px; margin-top: 6px;
      }
      .fa-quiz-score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px; color: var(--ink); font-weight: 600;
      }

      @media (max-width: 780px) {
        .fa-body { flex-direction: column; }
        .fa-sidebar { width: 100%; max-height: none; border-right: none; border-bottom: 1px solid var(--line); }
        .fa-main { max-height: none; padding: 20px 16px 32px 16px; }
        .fa-card { padding: 22px 18px 26px 18px; }
        .fa-card-punch { display: none; }
        .fa-card-folio, .fa-card-head, .fa-card-body, .fa-card-footer { margin-left: 0; }
        .fa-card-title { font-size: 21px; }
      }
    `}</style>
  );
}
