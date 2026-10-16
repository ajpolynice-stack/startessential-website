"use client";
import SignupDialog from "./SignupDialog";
import type { BillingCycle, PlanId } from "@/lib/site";

export default function IntakeClient({ plan, cycle }: { plan: PlanId; cycle: BillingCycle }) {
  return <SignupDialog inline open onClose={() => {}} plan={plan} cycle={cycle} />;
}
