const TASK = {
    id: crypto.randomUUID(),
    title: "",
    owner: "",
    isCompleted: false,
    description: ''
};

const T = [
    {
        id: crypto.randomUUID(),
        title: "Diseñar wireframes",
        owner: "María Gómez",
        isCompleted: true,
        description: "Crear wireframes para la web principal.",
    },
    {
        id: crypto.randomUUID(),
        title: "Configurar repositorio",
        owner: "Carlos Ruiz",
        isCompleted: true,
        description: "Inicializar proyecto y subirlo a GitHub.",
    },
    {
        id: crypto.randomUUID(),
        title: "Maquetar landing",
        owner: "Laura Fernández",
        isCompleted: false,
        description: "HTML y CSS para la página de inicio.",
    },
    {
        id: crypto.randomUUID(),
        title: "Implementar login",
        owner: "David López",
        isCompleted: false,
        description: "Crear formulario y lógica de autenticación.",
    },
    {
        id: crypto.randomUUID(),
        title: "Crear API REST",
        owner: "Equipo B",
        isCompleted: false,
        description: "Backend para gestión de usuarios y tareas.",
    },
    {
        id: crypto.randomUUID(),
        title: "Añadir tests unitarios",
        owner: "Ángel Rivera",
        isCompleted: false,
        description: "Pruebas para funciones principales.",
    },
    {
        id: crypto.randomUUID(),
        title: "Optimizar imágenes",
        owner: "Irene Martín",
        isCompleted: true,
        description: "Reducir peso y mejorar carga de recursos.",
    },
    {
        id: crypto.randomUUID(),
        title: "Configurar hosting",
        owner: "Pedro Sáez",
        isCompleted: false,
        description: "Subir la web a un servicio de hosting.",
    },
    {
        id: crypto.randomUUID(),
        title: "Revisar accesibilidad",
        owner: "Natalia Peña",
        isCompleted: true,
        description: "Comprobar contraste, navegación y etiquetas.",
    },
    {
        id: crypto.randomUUID(),
        title: "Documentar proyecto",
        owner: "Equipo A",
        isCompleted: false,
        description: "Crear README y documentación técnica.",
    },
];

export default T
