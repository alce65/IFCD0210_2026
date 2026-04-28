-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_profile_id_fkey";

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
