import { signOut } from "@/auth";
import { ActionToolTip } from "@/components/ActionTooltip";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";

export default function DashboardPanel() {
  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <ActionToolTip label={"Sign Out"}>
          <Button type="submit" variant={"outline"}>Sign out</Button>
        </ActionToolTip>
      </form>
    </div>
  );
}
