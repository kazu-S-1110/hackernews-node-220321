export const feed = (parent, args, context) => {
  return context.prisma.link.findMany();
};
