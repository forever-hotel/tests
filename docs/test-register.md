# Central Cross-Subsystem Test Register (Initial)

The statuses below describe the central tests repository only, not the existing subsystem suites. Do not mark an unexecuted test as passing.

| ID | Type | Test | Status | Evidence |
|---|---|---|---|---|
| CTS-001 | Configuration | All six staging targets configured with HTTPS | Pending first CI run | `.github/workflows/ci.yml` |
| CTS-002 | Staging smoke | HW deployed entry point | Not run | `.github/workflows/staging-smoke.yml` |
| CTS-003 | Staging smoke | MAD deployed entry point | Not run | Same workflow |
| CTS-004 | Staging smoke | FDS deployed entry point | Not run | Same workflow |
| CTS-005 | Staging smoke | FOSS deployed entry point | Not run | Same workflow |
| CTS-006 | Staging smoke | KMS deployed login entry point | Not run | Same workflow |
| CTS-007 | Staging smoke | WKMS deployed entry point | Not run | Same workflow |
| CTS-008 | E2E | Guest booking to receptionist check-in and dashboard update | Not implemented | — |
| CTS-009 | E2E | Guest ordering to kitchen and delivery | Not implemented | — |
| CTS-010 | E2E | Service request to worker completion | Not implemented | — |
| CTS-011 | E2E | Checkout revokes guest session | Not implemented | — |
| CTS-012 | Security | Staff roles and denied access | Not implemented | — |
| CTS-013 | Realtime | Event propagation and reconnect | Not implemented | — |
| CTS-014 | Performance | Authorized multi-service staging load | Not implemented | — |

For report-ready results, use the full Section 6.3.3 format: related requirement, type, priority, preconditions, inputs, expected result, actual result and Pass/Fail/Blocked status.
