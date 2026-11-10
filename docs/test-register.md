# Forever Hotel - Central Test Case Register

## Verification Summary

Date: 2026-11-10
Repository: forever-hotel/tests
Branch: develop
Related issue: DDP-277 (#3)

Latest reported local Playwright execution:
- 14 passed
- 6 skipped
- 0 failed

These are local execution results, not independently verified
GitHub Actions results. Skipped tests are not treated as passed.

## Executed Playwright Tests

| ID | Test Case | Status | Evidence |
|---|---|---|---|
| CTS-015 | HW browser navigation | Passed locally | staging.spec.mjs |
| CTS-016 | MAD browser navigation | Passed locally | staging.spec.mjs |
| CTS-017 | FDS browser navigation | Passed locally | staging.spec.mjs |
| CTS-018 | FOSS browser navigation | Passed locally | staging.spec.mjs |
| CTS-019 | KMS browser navigation | Passed locally | staging.spec.mjs |
| CTS-020 | WKMS browser navigation | Passed locally | staging.spec.mjs |
| CTS-021 | KMS unauthenticated order queue protection | Passed locally | auth-guards.spec.mjs |
| CTS-022 | WKMS unauthenticated worker task protection | Passed locally | auth-guards.spec.mjs |
| CTS-023 | HW invalid availability room ID | Passed locally | public-api.spec.mjs |
| CTS-024 | HW invalid contact content type | Passed locally | public-api.spec.mjs |
| CTS-025 | HW untrusted contact origin | Passed locally | public-api.spec.mjs |
| CTS-026 | HW room catalogue and search interface | Passed locally | hw-guest-flow.spec.mjs |
| CTS-027 | HW guest profile authentication guard | Passed locally | hw-guest-flow.spec.mjs |
| CTS-028 | HW booking confirmation authentication guard | Passed locally | hw-guest-flow.spec.mjs |

## Blocked or Skipped Tests

| ID | Test Case | Status | Reason |
|---|---|---|---|
| CTS-029 | KMS authenticated staff login | Blocked | Valid staging authentication not verified |
| CTS-030 | WKMS authenticated worker login | Blocked | Valid staging authentication not verified |
| CTS-031 | Gateway liveness | Blocked | GATEWAY_URL unavailable |
| CTS-032 | Gateway unauthenticated session rejection | Blocked | GATEWAY_URL unavailable |
| CTS-033 | Gateway unknown route rejection | Blocked | GATEWAY_URL unavailable |
| CTS-034 | Gateway HW room catalogue routing | Blocked | GATEWAY_URL unavailable |

## Other Central Tests

| ID | Test Case | Status |
|---|---|---|
| CTS-001 | Six HTTPS targets configuration validation | Previously passed locally |
| CTS-002 | HW HTTP smoke | Previously passed locally |
| CTS-003 | MAD HTTP smoke | Previously passed locally |
| CTS-004 | FDS HTTP smoke | Previously passed locally |
| CTS-005 | FOSS HTTP smoke | Previously passed locally |
| CTS-006 | KMS HTTP smoke | Previously passed locally |
| CTS-007 | WKMS HTTP smoke | Previously passed locally |

The HTTP smoke tests and configuration checks are separate
from the 14 Playwright tests reported above.

## Remaining Cross-Subsystem Verification

| ID | Test Case | Status |
|---|---|---|
| CTS-008 | HW booking to FDS check-in and MAD visibility | Not executed |
| CTS-009 | FOSS order to KMS preparation and WKMS delivery | Not executed |
| CTS-010 | Service request to worker completion | Not executed |
| CTS-011 | FDS checkout and guest access revocation | Not executed |
| CTS-012 | Full staff RBAC matrix | Partially verified; full matrix blocked |
| CTS-013 | Realtime event propagation and reconnection | Not executed |
| CTS-014 | Integrated staging performance test | Not executed |

## Evidence and Limitations

Test sources are maintained in tests/browser/.
Playwright HTML reports and failure traces are generated locally
and may be retained as GitHub Actions artifacts.

The local test outcome must not be presented as proof of:
- Authenticated cross-system workflows
- Completed booking or payment processing
- Actual inventory synchronization
- Full staff authorization coverage
- Integrated staging load performance

For final submission, each test case must be associated with
its requirement, preconditions, input, expected result,
actual result, execution date, result and reproducible evidence.

## Follow-Up

1. Resolve staging staff authentication.
2. Obtain approved Gateway access.
3. Execute cross-subsystem journeys with disposable test data.
4. Capture actual CI runs, traces and results.
5. Reconcile the register with the final documents repository.

## GitHub Actions Verification - 2026-11-10

### Central tests CI
- Workflow: Central tests CI #16
- Branch: develop
- Commit: c74fc96
- Result: Passed
- Evidence: https://github.com/forever-hotel/tests/actions/workflows/ci.yml

### Staging Smoke Verification
- Workflow: Staging smoke verification #1
- Branch: develop
- Commit: c74fc96
- Result: Passed
- Scope: All six deployed frontend entry points
- Evidence: https://github.com/forever-hotel/tests/actions/runs/42756040021

### Outstanding Limitations
- Two authenticated staff-login tests remain blocked.
- Four public Gateway tests remain blocked.
- Full cross-subsystem business journeys remain unverified.
- Skipped or unexecuted tests are not counted as successful.

