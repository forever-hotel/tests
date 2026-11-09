# Integration and End-to-End Test Plan

## Course requirements
SENG 34213 section 6: unit tests on new code (80% coverage), integration test for each API endpoint, and E2E testing of primary happy paths and top three critical flows. Section 7: CI test execution. Section 8: OWASP evidence. Appendix A: staging smoke verification. Section 10: register, coverage, performance and security reports.

## Ownership
Subsystem-specific unit/integration tests stay in their service repositories. Central tests focus on real interactions across independently deployed components.

## Planned cross-subsystem cases (NOT YET EXECUTED)
1. HW booking -> FDS arrivals, check-in -> MAD visibility.
2. FDS guest activation -> FOSS food order -> KMS preparation -> WKMS delivery.
3. FOSS service request -> WKMS assignment/completion -> MAD visibility.
4. FDS checkout -> FOSS session revocation -> worker task reconciliation.
5. Staff login, permissions and forbidden requests for ROOT, MANAGER, RECEPTIONIST, WORKER, KITCHEN STAFF and KITCHEN MANAGER.
6. Realtime change propagation and reconnect through shared Gateway, WebSocket and RabbitMQ.

## Test environment safety
- Obtain approval from deployment coordinator before executing tests that write to hosted services.
- Use dedicated staging accounts, synthetic guests, disposable test bookings and an isolated staging database.
- Keep passwords in GitHub Environment Secrets, never in committed files.
- Do not create load during regular working hours without coordination.
- Maintain cleanup and rollback procedures for test bookings, orders, tasks and room changes.

## Evidence
Record test ID, SRS requirement, GitHub run URL, target version/commit, setup, input, expected and observed output, result, screenshots/traces (if useful) and defects. Reconcile with existing test register in `forever-hotel/documents`.
