import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="flex w-full max-w-5xl px-3 py-2 mx-auto">
      <p>Built by rakaal. The source code is available on GitHub.</p>
      <p className="flex items-center ml-auto">
        <GitHubLogoIcon className="w-6 h-6 ml-2" />
      </p>
    </footer>
  );
};
