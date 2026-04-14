import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { connectDB } from "../config/db.ts";
import { GenresRepo } from "./genres.ts";
import type { SqlError } from "../errors/sql-error.ts";

describe("GenresRepo", async () => {

    const pool = await connectDB();
    const genresRepo = new GenresRepo(pool);

    beforeEach(() => {
        // Setup code before each test, e.g., initialize the database connection and the GenresRepo instance
    });

    it("should read all genres", async () => {
        // Test code for readAllGenres method
        // Example:
        const genres = await genresRepo.readAllGenres();
        assert(Array.isArray(genres));
        assert.strictEqual(genres.length, 12);
    });

    it("should read a genre by id", async () => {
        // Test code for readGenreById method
        // Example:
        const genre = await genresRepo.readGenreById(1);
        assert(genre);
        assert.strictEqual(genre.id, 1);
    });

    it("should throw an error if genre not found", async () => {
        // Test code for readGenreById method when genre is not found
        // Example:
        try {
            await genresRepo.readGenreById(15);
            assert.fail("Expected an error to be thrown");
        } catch (error) {
            assert.strictEqual((error as SqlError).code, "NOT_FOUND");
        }
    });
});
