export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "what-to-pick-up-from-a-local-off-licence",
    title: "What to Pick Up From a Local Off-Licence",
    description: "A simple guide to useful drinks, snacks and essentials for quick local shopping.",
    body: [
      "A good local off-licence is useful for more than one item. Customers often visit for chilled drinks, mixers, snacks, confectionery, milk, toiletries and small household essentials.",
      "If you are planning an evening in, it can be easier to pick up drinks, snacks and top-up groceries together instead of making a full supermarket trip."
    ]
  },
  {
    slug: "how-to-plan-a-quick-weekend-shop",
    title: "How to Plan a Quick Weekend Shop",
    description: "A customer-friendly checklist for weekend drinks, snacks and everyday top-ups.",
    body: [
      "For weekend plans, think about chilled drinks, mixers, ice, snacks, soft drinks, sharing treats and any essentials you may need the next morning.",
      "Calling ahead can help if you are looking for something specific, especially when product availability changes through the week."
    ]
  },
  {
    slug: "why-local-convenience-stores-matter",
    title: "Why Local Convenience Stores Matter",
    description: "Local shops help customers save time on everyday errands and last-minute needs.",
    body: [
      "Convenience stores are built around speed, locality and practical stock. They are useful when customers need a few things quickly without travelling further.",
      "A friendly local store can also help customers check stock, find alternatives and make small daily shops easier."
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
