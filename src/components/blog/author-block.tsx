interface AuthorBlockProps {
  name: string;
  role: string;
  bio: string;
}

export function AuthorBlock({ name, role, bio }: AuthorBlockProps) {
  return (
    <div className="mt-12 rounded-lg border border-border bg-surface p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-teal text-lg font-bold text-white">
          S
        </div>
        <div>
          <p className="font-heading text-base font-semibold text-foreground">
            {name}
          </p>
          <p className="text-sm text-teal">{role}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}
