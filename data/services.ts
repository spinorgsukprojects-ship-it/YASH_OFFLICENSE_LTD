import {
  Beer,
  Candy,
  Cigarette,
  Coffee,
  CupSoda,
  Milk,
  PackageCheck,
  ShoppingBasket,
  type LucideIcon
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  suitableFor: string[];
  includes: string[];
  customerInfo: string[];
  process: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "wines-beers-spirits",
    title: "Wines, Beers & Spirits",
    shortDescription: "Chilled beers, wines, spirits and mixers for evenings, weekends and last-minute plans.",
    overview: "Browse a wide in-store selection of red, white, rose and sparkling wines, chilled beers, ciders, spirits and mixers, with convenient options for everyday occasions and celebrations.",
    suitableFor: ["Weekend drinks", "Dinner plans", "Gifts", "Celebrations"],
    includes: ["Chilled beer and cider", "Wine selection", "Spirits and mixers", "In-store recommendations"],
    customerInfo: ["Valid ID may be required", "Availability varies by store stock", "Ask in store for current offers"],
    process: ["Visit the store", "Browse chilled and shelf displays", "Ask for help choosing", "Pay safely in store"],
    icon: Beer
  },
  {
    slug: "soft-drinks-energy",
    title: "Soft Drinks & Energy",
    shortDescription: "Cold soft drinks, juices, water and energy drinks ready to grab from the fridge.",
    overview: "Keep refreshed with chilled soft drinks, juices, bottled water, mixers and energy drinks for work, travel, lunch breaks and family top-ups.",
    suitableFor: ["Lunch breaks", "School runs", "Travel", "Everyday refreshment"],
    includes: ["Chilled cans and bottles", "Juices and water", "Mixers", "Multipacks"],
    customerInfo: ["Ask about multipack availability", "New flavours arrive regularly"],
    process: ["Pick from the fridge", "Add snacks or groceries", "Pay quickly", "Enjoy on the go"],
    icon: CupSoda
  },
  {
    slug: "snacks-confectionery",
    title: "Snacks & Confectionery",
    shortDescription: "Crisps, sweets, chocolate, biscuits and sharing snacks for every craving.",
    overview: "From quick treats to sharing bags, our snack shelves are stocked for movie nights, lunch boxes, late-night cravings and everyday convenience.",
    suitableFor: ["Movie nights", "Lunch boxes", "Family treats", "Late-night snacks"],
    includes: ["Crisps and savoury snacks", "Chocolate", "Sweets", "Biscuits and sharing packs"],
    customerInfo: ["Selection changes often", "Ask in store for popular new arrivals"],
    process: ["Browse the snack displays", "Choose individual or sharing packs", "Pair with chilled drinks", "Check out in minutes"],
    icon: Candy
  },
  {
    slug: "groceries-essentials",
    title: "Groceries & Essentials",
    shortDescription: "Milk, bread, eggs, cupboard staples, toiletries and household basics close to home.",
    overview: "Avoid the supermarket trip when you only need a few things. Pick up daily groceries, household items, toiletries and simple essentials from your local store.",
    suitableFor: ["Quick top-ups", "Busy households", "Students", "Local residents"],
    includes: ["Milk, bread and eggs", "Cupboard basics", "Toiletries", "Household essentials"],
    customerInfo: ["Stock varies by day", "Call ahead for urgent items"],
    process: ["Pop in locally", "Pick up essentials", "Ask staff if you cannot find something", "Pay and go"],
    icon: ShoppingBasket
  },
  {
    slug: "fresh-grab-and-go",
    title: "Fresh & Grab-and-Go",
    shortDescription: "Easy lunch, chilled food, sandwiches and quick bites for busy days.",
    overview: "Find simple grab-and-go food and chilled options for lunch breaks, travel, workdays and quick local shopping.",
    suitableFor: ["Lunch breaks", "Commuters", "Busy workers", "Quick meals"],
    includes: ["Sandwiches and chilled food", "Fruit and light bites", "Cold drinks", "Quick snacks"],
    customerInfo: ["Fresh availability can vary", "Visit earlier for the best choice"],
    process: ["Choose food and drink", "Add any essentials", "Pay quickly", "Get on with your day"],
    icon: Coffee
  },
  {
    slug: "tobacco-vape",
    title: "Tobacco & Vape",
    shortDescription: "Age-restricted tobacco, vape and related accessories available in store.",
    overview: "Selected tobacco, vape products and accessories are available in store for customers aged 18 or over, subject to stock and age verification.",
    suitableFor: ["Adult customers", "Regular essentials", "In-store purchases"],
    includes: ["Tobacco products", "Vape items", "Papers and accessories", "Age checks"],
    customerInfo: ["Valid ID may be required", "18+ only", "Products are available in store only"],
    process: ["Ask at the counter", "Show ID if requested", "Confirm product availability", "Purchase in store"],
    icon: Cigarette
  },
  {
    slug: "dairy-chilled",
    title: "Dairy & Chilled",
    shortDescription: "Cold everyday essentials including milk, chilled drinks and fridge staples.",
    overview: "Keep the fridge topped up with milk, chilled drinks and selected everyday dairy and chilled items from a convenient local shop.",
    suitableFor: ["Morning top-ups", "Family essentials", "Quick local shops"],
    includes: ["Milk", "Chilled drinks", "Selected dairy", "Fridge staples"],
    customerInfo: ["Call ahead for specific essentials", "Fresh stock varies"],
    process: ["Visit the chilled section", "Pick up what you need", "Add groceries or snacks", "Check out quickly"],
    icon: Milk
  },
  {
    slug: "local-services",
    title: "Local Convenience Services",
    shortDescription: "Helpful in-store support for quick everyday errands and local customer needs.",
    overview: "We aim to make daily errands easier with a friendly counter, quick shopping, useful essentials and helpful local service.",
    suitableFor: ["Local residents", "Passing customers", "Quick errands", "Everyday needs"],
    includes: ["Friendly customer help", "Quick counter service", "Local essentials", "Enquiry support"],
    customerInfo: ["Call or visit for current services", "Availability can vary"],
    process: ["Tell us what you need", "We check availability", "Pick up in store", "Ask about new stock"],
    icon: PackageCheck
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const supportAudiences = [
  "Local Residents",
  "Commuters",
  "Students",
  "Families",
  "Late-Night Shoppers",
  "Weekend Hosts",
  "Workers on Break",
  "Visitors Nearby"
];

export const choiceFeatures = [
  "Open Late",
  "Chilled Drinks",
  "Everyday Essentials",
  "Friendly Service",
  "Quick Local Shop",
  "Fresh New Stock"
];
