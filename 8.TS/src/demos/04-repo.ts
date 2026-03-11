{
    type Item = {};
    type PartialItem = {};

    interface Repository {
        read: () => Item[];
        readById: (id: string) => Item;
        create: (data: PartialItem) => Item;
        update: (id: string, data: PartialItem) => Item;
        delete: (id: string) => Item;
    }

    class RepoNotesSQL implements Repository {
        read() {
            return [];
        }

        readById(id: string) {
            return {};
        }

        create(data: PartialItem) {
            return {};
        }

        update(id: string, data: PartialItem) {
            return {};
        }

        delete(id: string) {
            return {};
        }

        generateSQL() {
            return '';
        }
    }

    class RepoNotesMongo implements Repository {
        read() {
            return [];
        }

        readById(id: string) {
            return {};
        }

        create(data: PartialItem) {
            return {};
        }

        update(id: string, data: PartialItem) {
            return {};
        }

        delete(id: string) {
            return {};
        }
    }

    const repo: Repository = new RepoNotesMongo();

    repo.read();
    (repo as RepoNotesSQL).generateSQL();
}
