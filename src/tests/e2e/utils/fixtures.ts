import { mergeTests } from "@playwright/test";
import pageTestUtils from "./page-test-utils";

const test = mergeTests(pageTestUtils);

export default test;
