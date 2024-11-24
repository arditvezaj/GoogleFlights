const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a href={href} className="text-blue-500 hover:text-blue-400">
      {children}
    </a>
  );
};

export default Link;
