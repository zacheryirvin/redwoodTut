# Migration `20201203034251-create-post`

This migration has been generated by zacheryirvin at 12/2/2020, 9:42:51 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201201034752-migration..20201203034251-create-post
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
@@ -19,4 +19,11 @@
   title String
   body String
   createdAt DateTime @default(now())
 }
+
+model Contact {
+  id Int @id @default(autoincrement())
+  name String
+  email String
+  message String
+}
```


