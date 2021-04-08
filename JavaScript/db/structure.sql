CREATE TABLE "users" (
  "id" bigint generated always as identity,
  "login" varchar NOT NULL,
  "password" varchar NOT NULL
);

ALTER TABLE "users" ADD CONSTRAINT pkUsers PRIMARY KEY (id);
CREATE UNIQUE INDEX akUsersLogin ON "users" (login);

CREATE TABLE "country" (
  "id" bigint generated always as identity,
  "name" varchar NOT NULL
);

ALTER TABLE "country" ADD CONSTRAINT "pkCountry" PRIMARY KEY ("id");

CREATE UNIQUE INDEX "akCountry" ON "country" ("name");

CREATE TABLE "city" (
  "id" bigint generated always as identity,
  "name" varchar NOT NULL,
  "country" bigint NOT NULL
);

ALTER TABLE "city" ADD CONSTRAINT "pkCity" PRIMARY KEY ("id");

CREATE UNIQUE INDEX "akCity" ON "city" ("name");

ALTER TABLE "city" ADD CONSTRAINT "fkCityCountry" FOREIGN KEY ("country") REFERENCES "country" ("id") ON DELETE CASCADE;
