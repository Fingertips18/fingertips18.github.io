import { LocalImageLoader } from "@/components/common/local-image-loader";
import { Badge } from "@/components/shadcn/badge";
import { PROJECTTYPE } from "@/constants/enums";

interface ProjectPreviewProps {
  preview: string;
  blurHash?: string;
  name: string;
  subtitle?: string;
  desc: string;
  stack: string[];
  type: string;
  live?: string;
}

const ProjectPreview = ({
  preview,
  blurHash,
  name,
  subtitle,
  desc,
  stack,
  type,
}: ProjectPreviewProps) => {
  return (
    <>
      <div className="aspect-video relative w-full">
        {type === PROJECTTYPE.web ? (
          <iframe
            className="w-full h-full"
            src={preview}
            title={`${name} Preview`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <LocalImageLoader
            hash={blurHash!}
            src={preview}
            alt={name}
            className="aspect-video object-cover object-center"
          />
        )}
      </div>

      <div className="space-y-2 p-4 mt-2 flex-1 text-start">
        <h3 className="text-lg font-bold leading-none flex items-center flex-wrap gap-x-2 gap-y-1">
          {name}
          {subtitle && (
            <span className="font-semibold text-sm text-accent">
              {subtitle}
            </span>
          )}
        </h3>

        <p className="text-xs text-primary-foreground/50 line-clamp-4">
          {desc}
        </p>

        <h6 className="font-semibold text-xs text-primary-foreground/80">
          Tech Stack
        </h6>

        <div className="flex item-start flex-wrap gap-1.5 no-scrollbar">
          {stack.map((s) => (
            <Badge
              key={`${name}-${s}`}
              className="bg-primary/30 whitespace-nowrap"
            >
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export { ProjectPreview };
