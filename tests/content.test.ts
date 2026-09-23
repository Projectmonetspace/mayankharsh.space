import assert from "node:assert/strict";
import { test } from "node:test";
import { publishedRoutes, site, work } from "../lib/site";
test("published routes and work links are unique and internal", () => {
  assert.equal(new Set(publishedRoutes).size, publishedRoutes.length);
  for (const item of work) {
    assert.ok(
      publishedRoutes.includes(item.href as (typeof publishedRoutes)[number]),
    );
    assert.match(item.external, /^https:\/\//);
  }
});
test("portfolio attribution uses the personal entity and separate agency", () => {
  assert.equal(site.name, "Mayank Harsh");
  assert.notEqual(new URL(site.agency).host, new URL(site.url).host);
  assert.equal(work.length, 1);
});
