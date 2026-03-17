// Creamos una interfaz ODM genérica
// que recibe el nombre de la colección
// como el conjunto de datos que se va a leer y escribir
// del conjunto total de datos
export interface TypeODM<T extends WithId> {
    read: () => Promise<T[]>;
    readById: (id: T['id']) => Promise<T>; // Errores => throw Error
    create: (data: Omit<T, 'id'>) => Promise<T>;
    updateById: (
        id: T['id'],
        data: Omit<Partial<T>, 'id'>,
    ) => Promise<T>;
    deleteById: (id: T['id']) => Promise<T>;
}

export interface WithId { id: string }


export interface Repository<T> {
    read: () => Promise<T[]>;
    readById: (id: string) => Promise<T>;
    create: (data: Omit<T, 'id'>) => Promise<T>;
    update: (id: string, data: Partial<Omit<T, 'id'>>) => Promise<T>;
    delete: (id: string) => Promise<T>;
}
