# Forever Hotel — Central System Tests

Cross-subsystem testing repository for the Forever Hotel Management System, aligned with SENG 34213 System Development Project testing requirements.

## Responsibility

Subsystem repositories own their unit tests, database integration tests, and local E2E suites. This repository owns cross-system staged verification: deployment smoke checks, shared authentication/RBAC flows, guest booking-to-check-in, QR food orders, kitchen preparation, worker delivery/service requests, checkout and realtime propagation.

## First milestone: staging smoke checks

The initial milestone includes a zero-dependency Node.js test harness, the six supplied HTTPS staging URLs, basic configuration checks, GitHub Actions CI and an optional read-only staging smoke workflow. It **does not** claim that full business E2E tests, OWASP checks or 100/300-user performance tests are complete.

Prerequisites: Node.js 22+ and npm.

```powershell
npm ci
npm test
npm run test:smoke
```

`npm test` validates the six configured targets without network access. `npm run test:smoke` sends one safe GET request to each deployed web entry point and fails if the URL cannot be reached successfully. It does not authenticate or mutate hotel data. The supplied staging endpoints may require firewall/network access.

## CI

- `.github/workflows/ci.yml`: validates framework and configuration on pushes and PRs.
- `.github/workflows/staging-smoke.yml`: manually trigger **Actions > Staging smoke verification > Run workflow** once deployments are ready.

If a deployed smoke test fails, record actual HTTP/network result; do not mark the application as functionally broken solely because the test runner cannot access its hostname.

## Documentation and test evidence

See `docs/test-plan.md` and `docs/test-register.md`. After real end-to-end execution, record actual/expected outcomes, run IDs, environment and evidence in the shared `documents` repository. Never fabricate successful results.

## Security

Do not commit passwords, tokens, private environment files or real guest data. Use dedicated staging test accounts and GitHub Actions Secrets when authenticated E2E tests are implemented. Never run destructive suites or load testing against the shared production/database environment without explicit approval.

## Related repositories

- https://github.com/forever-hotel/documents
- https://github.com/forever-hotel/api-gateway
- https://github.com/forever-hotel/hotel-website
- https://github.com/forever-hotel/manager-dashboard
- https://github.com/forever-hotel/front-desk
- https://github.com/forever-hotel/food-ordering
- https://github.com/forever-hotel/kitchen-management
- https://github.com/forever-hotel/worker-management
