# Migration `20201201034752-migration`

This migration has been generated by zacheryirvin at 11/30/2020, 9:47:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=off;
DROP TABLE "Contact";
PRAGMA foreign_keys=on
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201201032143-create-contact..20201201034752-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -19,12 +19,4 @@
   title String
   body String
   createdAt DateTime @default(now())
 }
-
-model Contact {
-  id Int @id @default(autoincrement())
-  name String
-  email String
-  message String
-  createdAt DateTime @default(now())
-}
```

