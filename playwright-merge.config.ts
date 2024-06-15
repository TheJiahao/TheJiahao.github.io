export default {
    testDir: "e2e",
    reporter: [
        ["html", { open: "never" }],
        [
            "@estruyf/github-actions-reporter",
            {
                title: "End-to-end test results",
                useDetails: true,
                showError: true,
            },
        ],
    ],
};
