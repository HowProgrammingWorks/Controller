CREATE TABLE "users" (
  "id" bigint generated always as identity,
  "login" varchar NOT NULL,
  "password" varchar NOT NULL
);

ALTER TABLE "users" ADD CONSTRAINT pkUsers PRIMARY KEY (id);
CREATE UNIQUE INDEX akUsersLogin ON "users" (login);
