import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const SectionButtonComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <Button
      className={cn("font-semibold",pathname === "/night" ? "bg-[#f6f6e8] text-[#291e14]" : "")}
    >
      {children}
    </Button>
  );
};
