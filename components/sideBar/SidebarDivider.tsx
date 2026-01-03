type SectionDividerProps = {
  text: string;
};

export function SectionDivider({ text }: SectionDividerProps) {
  return (
    <div className="flex items-center py-3">
      <div className="h-px w-6 bg-[#DDDDE4]" />
      <span className="mx-2 text-xs tracking-wide text-[#ADACB4] whitespace-nowrap">
        {text}
      </span>
      <div className="h-px flex-1 bg-[#DDDDE4]" />
    </div>
  );
}
