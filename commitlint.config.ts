import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

const config: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "subject-case": [
            RuleConfigSeverity.Error,
            "never",
            ["start-case", "pascal-case", "upper-case"],
        ],
    },
};

export default config;
